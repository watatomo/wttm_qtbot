# About

[![License](https://img.shields.io/github/license/watatomo/wttm_qtbot)](https://github.com/watatomo/wttm_qtbot/blob/master/LICENSE)
[![Quote Count](https://img.shields.io/badge/quote%20count-200-blue.svg)](https://gist.github.com/watatomo/7503775b00c3df1a0580e102829e8a3c)
[![Status](https://img.shields.io/badge/status-running-brightgreen.svg)](https://twitter.com/wttm_qtbot)

[@wttm_qtbot](https://twitter.com/wttm_qtbot) is a Twitter bot that publishes (translated) quotes pertaining to Tomoya Mashiro and Wataru Hibiki's relationship.

This bot is still under construction. More quotes will be added over time. Suggestions are always appreciated.

For more information, visit the bot's [README](https://github.com/watatomo/wttm_qtbot/blob/master/README.md). A proper documentation is in the works.

# Features

Tweets every 45 minutes for now. Can be changed later on.

~~Reply to a quote tweet with "source" and the bot will answer back who said it with the story its from.~~ Fixing this.

## To-do

- Random quote when mentioned "random"
- Random quotes based on who said it (Tomoya or Wataru)
  - If mentioned "Tomoya quote", reply with a quote from Tomoya
- Reply with in-game screenshots if mentioned "image"
  - Get those screenshots
- Documentation page
- Make dedicated story page

# Quick Start

Apply for a [Developer account](https://developer.twitter.com/) using the bot's Twitter. Create an app and generate consumer keys.

```sh
$ cd /DIRECTORY_WHERE_THE_BOT_IS_STORED
$ git clone https://github.com/watatomo/wttm_qtbot.git
$ npm install
```

Edit `package.json` to have the bot's information. Fill out `example.env` and rename it to `.env`

```env
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN=
ACCESS_TOKEN_SECRET=
POST_TO_TWITTER=true
```

# Attributions

This bot is basically a fork of [QuoteableSatoshi](https://github.com/dergigi/QuotableSatoshi).

Translations are mainly from the [Ensemble Stars Wiki](https://ensemble-stars.fandom.com), but not all. Some lines are also translated by myself. A list of stories (and their sources) that are included in the bot can be found [here](https://gist.github.com/watatomo/7503775b00c3df1a0580e102829e8a3c).
