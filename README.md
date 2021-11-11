# @wttm_qtbot

<a href="https://twitter.com/ensemble_stars/status/681716281414815744"><img align="right" src="https://user-images.githubusercontent.com/23179278/87398281-85c97880-c56a-11ea-9510-044666dafcf2.png" alt="真白友也と日々樹渉" title="そのとき触れたものが愛おしくて、あの泣き顔を笑顔にしてやりたくなったんだ"></a>

[![License](https://img.shields.io/github/license/watatomo/wttm_qtbot)](https://github.com/watatomo/wttm_qtbot/blob/master/LICENSE)
[![Status](https://img.shields.io/badge/status-running-brightgreen.svg)](https://twitter.com/wttm_qtbot)

[@wttm_qtbot](https://twitter.com/wttm_qtbot) is a Twitter bot that publishes (translated) quotes pertaining to Tomoya Mashiro and Wataru Hibiki's relationship ~~in hopes of making others consider the pair~~. More quotes will be added over time.

[Interested in the pair? Here's a guide about them in the works!](https://rebrand.ly/wttm_guide)

## Features

TBD

## Quick Start

Apply for a [Developer account](https://developer.twitter.com/) using the bot's Twitter. Create an app and generate consumer keys.

```sh
$ cd /DIRECTORY_WHERE_THE_BOT_IS_STORED
$ git clone --single-branch -b master https://github.com/watatomo/wttm_qtbot.git
$ npm install
```

Edit `package.json` to have the bot's information. Fill out `example.env` and rename it to `.env` (or make a new file and name it that).

```env
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN=
ACCESS_TOKEN_SECRET=
POST_TO_TWITTER=true
```

## Updating

Use `git fetch && git pull` to update. If on a server, run the bot using `pm2 start index.js` (don't forget to `cd` into the bot's directory).
