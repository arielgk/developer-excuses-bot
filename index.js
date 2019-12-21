require('dotenv').config();
const request = require("request");
const HTMLParser = require('node-html-parser')
const Telegram = require('node-telegram-bot-api')
const bot = new Telegram(process.env.TELEGRAM_TOKEN)
const developerExcusesUrl = 'http://developerexcuses.com'


request(developerExcusesUrl, function (error, response, body) {
    parseHtml(body)
});

function sendMsgBot(msg) {
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, msg)

}

function parseHtml(html) {
    const root = HTMLParser.parse(html)
    sendMsgBot(root.querySelector('a').childNodes[0].rawText)
}

