const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.TGTOKEN);


bot.command('image', ({ replyWithPhoto }) => {
    console.log('IMAGE');
    return replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' })
})

bot.command('test', ({ replyWithHTML }) => {
    console.log('TEST');
    return replyWithHTML('<b>TEST!</b>')
})
bot.on('text', ({ replyWithHTML }) => {
    console.log('Incoming');
    return replyWithHTML('<b>Ciao!</b>')
})
const PORT = process.env.PORT 
const URL = process.env.BASE_URL + "webhook"
console.log ("Registering webhook:" + URL )
bot.telegram.setWebhook(URL)

bot.startWebhook('/webhook', null, PORT)

