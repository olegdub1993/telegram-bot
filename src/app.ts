const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf("6556697420:AAECqo5B9VdGZ7Bbc4uqg5PPDqKSWrkmaUU")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears(['hi','hey'], (ctx) => ctx.reply('Hey there'))
bot.hears('шо там', (ctx) => ctx.reply('де там?)))'))
bot.hears('дуже мудрий?', (ctx) => ctx.reply('ясно шо так'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))