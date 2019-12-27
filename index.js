const Telegraf = require('telegraf');
const bot = new Telegraf("498078166:AAEnVj8LKnbmhFJM9brKVUb5E7KXfNMhjBU");

bot.command('image', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }))

bot.on('text', ({ replyWithHTML }) => {
    console.log('Incoming');
    return replyWithHTML('<b>Hello</b>')
})
const PORT = process.env.PORT || 3000;
const URL = process.env.URL

bot.telegram.setWebhook(URL+'/webhook')

bot.startWebhook('/webhook', null, PORT)

