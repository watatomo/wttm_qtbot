## Quick Start

Make sure [Node.js](https://nodejs.org/) and [Yarn](https://classic.yarnpkg.com/) are installed before proceeding.

Apply for a [Developer account](https://developer.twitter.com/) using the bot's Twitter. Create an app and generate consumer keys.

```bash
cd /DIRECTORY_WHERE_THE_BOT_IS_STORED
git clone https://github.com/watatomo/wttm_qtbot.git
npm install
```

Edit `package.json` to have the bot's information. Fill out `example.env` and rename it to `.env`

```env
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN=
ACCESS_TOKEN_SECRET=
POST_TO_TWITTER=true
```

---

## Customization

### Adding Quotes

Quotes are stored in `quotes.json`.

```json
{
  "character": "Speaker",
  "story": "Chapter",
  "text": "Quote"
}
```

Feel free to edit it to suit your needs, but `"text"` should stay the same as that's the key the bot deploys quotes from (unless you change the name in `bot.js`).

### Changing Time Interval

The time interval can be changed in `index.js`. The current default is 45 min.

```js
setInterval(bot.postRandomQuote, 1000*60*45)
```

`1000` represents one second. Multiply it by `60` and you one minute. Edit the number at the end to any number you'd like (e.g., `45` for 45 min.)

---

## Running the Bot

Run the bot using `yarn start`. To post a test tweet, use `yarn test`.
