const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('message', (ctx) => {
  // resend existing file by file_id
  ctx.replyWithSticker('123123jkbhj6b');

  // send file
  ctx.replyWithVideo({source: '/path/to/video.mp4'});

  // send stream
  ctx.replyWithVideo({
    source: fs.createReadStream('/path/to/video.mp4')
  });

  // send buffer
  ctx.replyWithVoice({
    source: Buffer.alloc()
  });

  // send url via Telegram server
  ctx.replyWithPhoto('https://picsum.photos/200/300/');

  // pipe url content
  ctx.replyWithPhoto({
    url: 'https://picsum.photos/200/300/?random',
    filename: 'kitten.jpg'
  });
});

bot.startPolling();