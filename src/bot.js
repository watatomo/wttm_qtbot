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

  console.log("Posting quote to timeline...")

  try {
      bot.post('statuses/update', { status: quote }, function(err, data, response) {
        console.log(data)
      });
  } catch (error) {
      console.log(error)

      if (error == "Status is a duplicate")
      postRandomQuote();
  }
}

module.exports.shortenQuote = shortenQuote;
module.exports.quotes = quotes;
module.exports.postRandomQuote = postRandomQuote;
