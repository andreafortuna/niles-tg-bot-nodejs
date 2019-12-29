const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.TGTOKEN);

// Some sample commands...
bot.start((ctx) => {
    ctx.reply(`Hello ${ctx.message.from.username}`)
})
bot.help((ctx) => {
    ctx.reply("HELP MESSAGE...")
})


bot.command('test', (ctx) => {
    ctx.reply(`Hello ${ctx.message.from.username}, this is a TEST!`)
})

bot.command('image', ({ replyWithPhoto }) => {
    console.log('IMAGE');
    return replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' })
})


// Default reply
bot.on('text', (ctx) => {
    ctx.reply(`Hello!`)
})


const PORT = process.env.PORT 
const URL = process.env.BASE_URL + "webhook"
console.log ("Registering webhook:" + URL )
bot.telegram.setWebhook(URL)
bot.startWebhook('/webhook', null, PORT)

