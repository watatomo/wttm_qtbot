# @wttm_qtbot

<a href="https://twitter.com/ensemble_stars/status/681716281414815744"><img align="right" src="https://user-images.githubusercontent.com/23179278/87398281-85c97880-c56a-11ea-9510-044666dafcf2.png" alt="真白友也と日々樹渉" title="そのとき触れたものが愛おしくて、あの泣き顔を笑顔にしてやりたくなったんだ"></a>

[![License](https://img.shields.io/github/license/watatomo/wttm_qtbot)](https://github.com/watatomo/wttm_qtbot/blob/master/LICENSE)
[![Quote Count](https://img.shields.io/badge/quote%20count-175-blue.svg)](https://gist.github.com/watatomo/7503775b00c3df1a0580e102829e8a3c)
[![Status](https://img.shields.io/badge/status-running-brightgreen.svg)](https://twitter.com/wttm_qtbot)

[@wttm_qtbot](https://twitter.com/wttm_qtbot) is a Twitter bot that publishes (translated) quotes pertaining to Tomoya Mashiro and Wataru Hibiki's relationship ~~in hopes of making others consider the pair~~. More quotes will be added over time.

The bot and its README is still in the works. Suggestions are always appreciated.

## Features

Tweets every hour, but can be changed. Planning to switch over to one tweet every 30 minutes when there are enough quotes added.

Reply to a quote tweet with "source" or "story", and the bot will answer back with the speaker, recipient, chapter, and writer of that story.

### To-do

- Random quote when mentioned "random"
- Random quotes based on who said it (Tomoya or Wataru)
  - If mentioned "Tomoya quote", reply with a quote from Tomoya
- Reply with in-game screenshots if mentioned "image"
  - Get those screenshots
- Documentation page

## About Quotes

For the sake of consistency, the bot follows a style guide. More details on my standards can be found on my [translation archive](https://watatomo.github.io/tl/about/#Personal-Style-Guide).

- American English, western name order
- Honorifics that have English equivalents are to be changed
- Appellations, location names, and the likes are localized or changed to its English equivalent if possible
- Official romanization is used if there is any
- No "smart" quotes or ellipses

Quotes are posted randomly and can be from any part of the school year, meaning some might sound a bit strange. However, both characters reconcile later on in *Phantom Thieves VS Detectives*. [@wttm_qtbot](https://twitter.com/wttm_qtbot) is made to showcase the various developments Tomoya and Wataru's relationship had throughout the timeline. That includes all the up and downs that occurred, as no relationship is "perfect." The bond they share is vital for both of their character arcs, and it will continue to grow in the *!!* era.

## Quick Start

Apply for a [Developer account](https://developer.twitter.com/) using the bot's Twitter. Then, create an app and generate consumer keys.

```sh
$ cd /DIRECTORY_WHERE_THE_BOT_IS_STORED
$ git clone https://github.com/watatomo/wttm_qtbot.git
$ npm install
```

Edit `package.json` to have the bot's information. Then, make a file named `.env` and fill it out.

```txt
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN=
ACCESS_TOKEN_SECRET=
POST_TO_TWITTER=true
```

## Attributions

This bot is basically a fork of [QuoteableSatoshi](https://github.com/dergigi/QuotableSatoshi).

Translations are mainly from the [Ensemble Stars Wiki](https://ensemble-stars.fandom.com), but not all. Some lines are also translated by myself. A list of stories (and their sources) that are included in the bot can be found [here](https://gist.github.com/watatomo/7503775b00c3df1a0580e102829e8a3c).

---

Questions? Comments? Concerns? Contact me via [Twitter](https://twitter.com/riamuyumemi) or [open an issue](https://github.com/watatomo/wttm_qtbot/issues).
