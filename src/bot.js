const twit = require('twit')
const config = require('./config')
const quotes = require('./quotes.json')
const bot = new twit(config)

function postRandomQuote() {
  var quote = quotes[Math.floor(Math.random()*quotes.length)]

  var tweetableQuote = shortenQuote(sanitizedQuote)

  postQuote(tweetableQuote)
}

/**
 * Shortens quote if too long
 * @param {string} quote
 */
function shortenQuote(quote) {
  if (quote.length < config.character_limit) {
    return quote
  }

  if (quote.length > config.character_limit) {
    return quote.substring(0, config.character_limit - 3) + "..."
  }

  return shortenedQuote
}

/**
 * Posts quote to twitter
 * @param {string} quote
*/
function postQuote(quote) {
  if (config.post_to_twitter) {
    console.log("Posting quote to timeline...")
    bot.post('statuses/update', { status: quote }, function(err, data, response) {
      console.log(data)
    })
  } else {
    console.log(quote)
    console.log("Posting quote failed. ENV variable POST_TO_TWITTER has to be set to true.")
  }
}

function getRepliesAskingForSource(callback) {
  bot.get('search/tweets', { q: 'to:@wttm_qtbot "source" OR "story"', count: 100 }, callback)
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
    var metadata = getQuoteMetadata(data.text.substring(0, 70))
    var reply = '@'
    reply += tweet.user.screen_name
    reply += ' This line is from '
    reply += metadata.character
    reply += ' to '
    reply += metadata.to
    reply += ' in '
    reply += metadata.story
    reply += ' written by '
    reply += metadata.writer
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

function getQuoteMetadata(quote, callback) {
  var PATTERN = new RegExp(quote);
  var matched_quotes = quotes.filter(function (q) { return PATTERN.test(q.text); });
  if (!matched_quotes || matched_quotes.length > 1) {
    return null;
  }
}

function getParentTweet(tweet, callback) {
  bot.get('statuses/show/:id', { id: tweet.in_reply_to_status_id_str }, callback)
}

setInterval(postRandomQuote, 1000*60*60)

module.exports.shortenQuote = shortenQuote;
module.exports.quotes = quotes;
module.exports.getRepliesAskingForSource = getRepliesAskingForSource;
module.exports.replyWithSource = replyWithSource;
module.exports.replyAllWithSource = replyAllWithSource;
module.exports.getParentTweet = getParentTweet;
module.exports.getRepliesByBot = getRepliesByBot;
module.exports.getQuoteMetadata = getQuoteMetadata;
module.exports.postRandomQuote = postRandomQuote;
