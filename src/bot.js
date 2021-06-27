const Twit = require('twit')
const config = require('./config')
const quotes = require('./quotes.json')
const T = new Twit(config)

console.log("Bot has started!")

function getRandomQuote() {
  var quote = quotes[Math.floor(Math.random()*quotes.length)]
  var tweetableQuote = quote.text
  postQuote(tweetableQuote)
}

function postQuote(quote) {
  console.log("Posting quote to timeline...")
  try {
      T.post('statuses/update', { status: quote }, function(err, data, response) {
        console.log(data)
      });
  } catch (error) {
      console.log(error)
  }
}

module.exports.shortenQuote = shortenQuote;
module.exports.quotes = quotes;
module.exports.getRandomQuote = getRandomQuote;
