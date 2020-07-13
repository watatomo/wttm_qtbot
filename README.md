# @wttm_qtbot

![https://twitter.com/wttm_qtbot](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fwttm_qtbot) ![https://github.com/watatomo/wttm_qtbot/blob/master/LICENSE](https://img.shields.io/github/license/watatomo/wttm_qtbot)  ![](https://img.shields.io/badge/quote%20count-164-blue) ![](https://img.shields.io/badge/status-not%20running-red)

[@wttm_qtbot](https://twitter.com/wttm_qtbot) is a Twitter bot that publishes (translated) quotes pertaining to Tomoya Mashiro and Wataru Hibiki's relationship ~~in hopes of making others consider the pair~~. More quotes will be added over time.

Currently trying to deal with Twitter's troublesome OAuth system. This README is also in the works.

## Features

Tweets every hour, but can be changed. Planning to switch over to one tweet every 30 minutes when there are enough quotes added.

When a user replies to a tweet asking for a quote's source, the bot will reply with the character who said the quote, who it's spoken to, the chapter it's from, and the writer of that story. It will respond this to tweets containing "source", "story", "who", *or* "said".

### To-do
- Random quote when mentioned "random" (≤265 characters?)
- Random quotes based on who said it (Tomoya or Wataru)
  - If mentioned "Tomoya quote", reply with a quote from Tomoya (also ≤265 characters?)
- In-game screenshots if mentioned "image"

## Prerequisites

- node.js
- A developer Twitter account

## Attributions

This bot is basically a fork of [QuoteableSatoshi](https://github.com/dergigi/QuotableSatoshi).

Translations are mainly from the [Ensemble Stars Wiki](https://ensemble-stars.fandom.com/), with edits to be grammatically correct or sound better out of context. Some lines are translated by myself. Other sources are listed below:
- Phantom Thieves VS Detectives (partial): [Rina/minashirosoushi](https://minashirosoushi.tumblr.com/tagged/enstars-tl)

---

Questions? Comments? Concerns? Contact me via [Twitter](https://twitter.com/riamuyumemi) or [report an issue](https://github.com/watatomo/wttm_qtbot/issues).
