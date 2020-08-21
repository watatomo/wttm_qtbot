const Twit = require('twit')
const config = require('./config')
const quotes = require('./quotes.json')
const bot = new Twit(config)

console.log("Bot has started!")

function postRandomQuote() {
  // Pick a random quote
  var quote = quotes[Math.floor(Math.random()*quotes.length)]

  // Reduce quote length
  var tweetableQuote = shortenQuote(quote.text)

  // Post quote to twitter
  postQuote(tweetableQuote)
}

/**
 * Reduce quote length
 * @param {string} quote
 */
function shortenQuote(quote) {
  var shortenedQuote = quote
  if (quote.length < 280) {
    return quote
  }

  // Shorten quote
  if (quote.length > 280 || quote === "") {
    return quote.substring(0, 280 - 3) + "..."
  }

  return shortenedQuote
}

/**
 * Posts quote to twitter
 * @param {string} quote
*/
function postQuote(quote) {
  if (!config.post_to_twitter) {
      console.log(quote);
      console.log("Posting quote failed. ENV variable POST_TO_TWITTER has to be set to true.");
      return;
  }

  console.log("Posting quote to timeline...")

  try {
      bot.post('statuses/update', { status: quote }, function(err, data, response) {
        console.log(data)
      });
  } catch (error) {
      postRandomQuote(); // Repeat until no error
      console.log(error)
  }
}

// Try to fix stuff below

function getRepliesAskingForSource(callback) {
  bot.get('search/tweets', { q: 'to:@wttm_qtbot source', count: 100 }, callback)
}

function getRepliesByBot(tweet, callback) {
  var since_id = tweet.id_str
  bot.get('search/tweets', { q: 'from:@wttm_qtbot to:' + tweet.user.screen_name, since_id: since_id, count: 10 }, callback)
}

function replyAllWithSource() {
  getRepliesAskingForSource(function(err, data, response) {
    if (err) {
      console.log(err)
    } else {
      data.statuses.forEach(s => {
        getRepliesByBot(s, function(err, data, response) {
          if (data.statuses.length == 0) {
            replyWithSource(s);
          }
        });
      })
    }
  })
}

function replyWithSource(tweet) {
  getParentTweet(tweet, function(err, data, response) {
    console.log("--")
    console.log(tweet.text)
    var reply = '@'
    reply += tweet.user.screen_name
    reply += ' This quote is from '
    reply += quotes.character
    reply += ' in '
    reply += quotes.story
    reply += '.'

    console.log(reply)

    if (config.post_to_twitter) {
      bot.post('statuses/update', { status: reply, in_reply_to_status_id: tweet.id_str }, function(err, data, response) {
        if (err) {
          console.log(err)
        } else {
          console.log(data)
        }
      })
    } else {
      console.log("Replying to user failed. ENV variable POST_TO_TWITTER has to be set to true.")
    }
  })
}

function getParentTweet(tweet, callback) {
  bot.get('statuses/show/:id', { id: tweet.in_reply_to_status_id_str }, callback)
}

module.exports.shortenQuote = shortenQuote;
module.exports.quotes = quotes;
module.exports.getRepliesAskingForSource = getRepliesAskingForSource;
module.exports.replyWithSource = replyWithSource;
module.exports.replyAllWithSource = replyAllWithSource;
module.exports.getParentTweet = getParentTweet;
module.exports.getRepliesByBot = getRepliesByBot;
module.exports.postRandomQuote = postRandomQuote;
