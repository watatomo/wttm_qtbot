# @wttm_qtbot

<a href="https://twitter.com/ensemble_stars/status/681716281414815744"><img align="right" src="https://user-images.githubusercontent.com/23179278/87398281-85c97880-c56a-11ea-9510-044666dafcf2.png" alt="真白友也と日々樹渉" title="そのとき触れたものが愛おしくて、あの泣き顔を笑顔にしてやりたくなったんだ"></a>

[![License](https://img.shields.io/github/license/watatomo/wttm_qtbot)](https://github.com/watatomo/wttm_qtbot/blob/master/LICENSE)
[![Quote Count](https://img.shields.io/badge/quote%20count-165-blue.svg)](https://gist.github.com/watatomo/7503775b00c3df1a0580e102829e8a3c)
[![Status](https://img.shields.io/badge/status-not%20running-red.svg)](https://twitter.com/wttm_qtbot)

[@wttm_qtbot](https://twitter.com/wttm_qtbot) is a Twitter bot that publishes (translated) quotes pertaining to Tomoya Mashiro and Wataru Hibiki's relationship ~~in hopes of making others consider the pair~~. More quotes will be added over time.

The bot and its README is still in the works.

## Features

Tweets every hour, but can be changed. Planning to switch over to one tweet every 30 minutes when there are enough quotes added.

Reply to a quote tweet with "source" or "story", and the bot will answer back with the speaker, recipient, chapter, and writer of that story.

#### To-do
- Random quote when mentioned "random"
- Random quotes based on who said it (Tomoya or Wataru)
  - If mentioned "Tomoya quote", reply with a quote from Tomoya
- In-game screenshots if mentioned "image"
- Docs page

## About Quotes

For the sake of consistency, the bot follows a style guide.

- Quotes shall be in American English
- Honorifics that have English equivalents are to be changed
  - `部長` would be `President` (or `Captain`, depending on the club), `先生` will be changed according to the character's occupation, etc.
  - `先輩`, `さん`, `くん`, and the likes are kept
- Titles that have English equivalents are also to be changed
- Names are in western order
- Official romanization is used if there is any (and if it's not incorrect)
- If needed, lines are edited to be grammatically correct or sound better out of context
- No "smart punctuation"

Please note that the bot posts quotes *randomly* and can be from any part of the school year, meaning some quotes might be a bit strange. However, do remember that they reconcile later on. After all, this bot is meant to showcase the various developments Tomoya and Wataru's relationship had—all the ups and downs that occurred. The bond they share is vital for both of their character arcs, and it will continue to grow in the !! era.

## Prerequisites

- Node.js
- A developer Twitter account
- Ruby (For OAuth)
  - Use [Twurl](https://github.com/twitter/twurl)
- A little bit of sanity

## Attributions

This bot is basically a fork of [QuoteableSatoshi](https://github.com/dergigi/QuotableSatoshi).

Translations are mainly from the [Ensemble Stars Wiki](https://ensemble-stars.fandom.com), but not all. Some lines are also translated by myself. A list of stories (and their sources) that are included in the bot can be found [here](https://gist.github.com/watatomo/7503775b00c3df1a0580e102829e8a3c).

---

Questions? Comments? Concerns? Contact me via [Twitter](https://twitter.com/riamuyumemi) or [report an issue](https://github.com/watatomo/wttm_qtbot/issues).
