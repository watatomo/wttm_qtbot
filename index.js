'use strict';

var bot = require('./src/bot');

setInterval(bot.postRandomQuote, 1000*60*60)
