const Twit = require('twit')
const config = require('./config')
const quotes = require('./quotes.json')
const T = new Twit(config)

function tweetRandom() {
  var quote = quotes[Math.floor(Math.random()*quotes.length)];

  T.post('statuses/update', { status: quote }, function(err, data, response) {
    console.log(data)
  });
}

module.exports.quotes = quotes;
module.exports.tweetRandom = tweetRandom;
