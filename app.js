const Telegraf = require('telegraf');
const env = require('dotenv');
env.config();

const bot = new Telegraf(process.env.BOT_TOKEN);


bot.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log('Response time %sms', ms);
});

// bot.startPolling();
