const Twit = require('twit');
const config = require('./config');
const quotes = require('./quotes.json');

const T = new Twit(config);

function postQuote(quote) {
    try {
        T.post('statuses/update', { status: quote }, function getData(err, data, response) {
            console.log(data);
        });
    } catch (error) {
        console.error(error);
    }
}

function getRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const tweetableQuote = quote.text;
    postQuote(tweetableQuote);
}

module.exports.quotes = quotes;
module.exports.getRandomQuote = getRandomQuote;
