# @wttm_qtbot

<a href="https://twitter.com/ensemble_stars/status/681716281414815744"><img align="right" src="https://user-images.githubusercontent.com/23179278/87398281-85c97880-c56a-11ea-9510-044666dafcf2.png" alt="真白友也と日々樹渉" title="そのとき触れたものが愛おしくて、あの泣き顔を笑顔にしてやりたくなったんだ"></a>

[![License](https://img.shields.io/github/license/watatomo/wttm_qtbot)](https://github.com/watatomo/wttm_qtbot/blob/master/LICENSE)
[![Quote Count](https://img.shields.io/badge/quote%20count-379-blue.svg)](https://watatomo.github.io/wttm_qtbot/#/stories)
[![Status](https://img.shields.io/badge/status-running-brightgreen.svg)](https://twitter.com/wttm_qtbot)

[@wttm_qtbot](https://twitter.com/wttm_qtbot) is a Twitter bot that publishes (translated) quotes pertaining to Tomoya Mashiro and Wataru Hibiki's relationship ~~in hopes of making others consider the pair~~. More quotes will be added over time.

[Interested in the pair? Here's a guide about them in the works!](https://docs.google.com/spreadsheets/d/18ylSdsvVpY8lNWUp9sW9XWG7DFcxFyQO8QfMf5267tc/edit?usp=sharing)

## Features

Tweets every *45 minutes*, can be changed later on. The bot runs *locally from its owner's PC*.

### To-do

- [ ] Reply with quote source if asked for it
- [x] Translator page
- [ ] Page of quotes owner translated
- [ ] Fix duplicate tweets problem

## Quick Start

Apply for a [Developer account](https://developer.twitter.com/) using the bot's Twitter. Create an app and generate consumer keys.

```sh
$ cd /DIRECTORY_WHERE_THE_BOT_IS_STORED
$ git clone --single-branch -b master https://github.com/watatomo/wttm_qtbot.git
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

## Attributions

This bot is basically a fork of [QuoteableSatoshi](https://github.com/dergigi/QuotableSatoshi).

Translations are mainly from the [Ensemble Stars Wiki](https://ensemble-stars.fandom.com), but not all. Some lines are also translated by myself. A list of stories (and their sources) that are included in the bot can be found [here](https://watatomo.github.io/wttm_qtbot/#/stories). A complete list of translators can be found [here](https://watatomo.github.io/wttm_qtbot/#/translators).

---

Questions? Comments? Concerns? Contact me via [Twitter](https://twitter.com/riamuyumemi) or [open an issue](https://github.com/watatomo/wttm_qtbot/issues).
