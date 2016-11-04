// Require Nodejs v4+

// index.js
const Weixinbot = require('weixinbot')

// will send qrcode to your email address
const bot = new Weixinbot({ receiver: 'your@email.com' })

// will emit when bot fetch a new qrcodeUrl
bot.on('qrcode', (qrcodeUrl) => {
  console.log(qrcodeUrl)
})

bot.on('friend', (msg) => {
  console.log(msg.Member.NickName + ': ' + msg.Content)
  bot.sendText(msg.FromUserName, 'Got it')
})

bot.run()