require('dotenv').config()

const Telegraf = require('telegraf');
const bot = new Telegraf("498078166:AAEnVj8LKnbmhFJM9brKVUb5E7KXfNMhjBU");

bot.command('image', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }))
bot.command('test', (ctx) => ctx.replyWithHTML("TEST!"))



bot.on('text', ({ replyWithHTML }) => {
    console.log('Incoming');
    return replyWithHTML('<b>Ciao!</b>')
})
const PORT = process.env.PORT || 3000;
//const URL = "https://agile-shelf-44940.herokuapp.com/webhook"
const URL = process.env.BASE_URL + "/webhook"
console.log ("Registering webhook:" + URL )
bot.telegram.setWebhook(URL)

bot.startWebhook('/webhook', null, PORT)

