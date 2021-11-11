const bot = require('./src/bot');

setInterval(bot.getRandomQuote, 1000 * 60 * 30);
