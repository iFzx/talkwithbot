const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


var minecrafta = [
    "لو ودك نقيم علاقة أنا و أنتي",
    "تحبني ولا اوك آسف",
    "ياخي أسحني وصخ",
    "تكفى قلي سالفة",
    "أتمنى أشوفك يلبه",
    "هلا والله ",
    "تعال عطني بوسة  أطلق من يمنشن",
    "شف أنا تيكن أوك لا عاد تمنشن لو سمحت يعني",
    "أصبر ياخي قاعد أشبك بنت ",
    "تكفى قول آه",
    ":)",
    "سمعت ان عابر القارات يبي يموت",
    "أدعمني و فكني من الدنيااااااااا",
    "سلام عليكم ي صديق",
    "مين هنا يحب أريانا قراند",
    "أقولك تكفى تكفى الله يخليك لا عاد تمنشن",
    "ختفوه ياخي م توقف منشنات أنت ؟",
    "كل زق خلني أكمل اكلي إذا خلصت منشني"
  ];
  
  client.on('message', message => {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
        message.reply(`${minecrafta[Math.floor(Math.random() * minecrafta.length)]}`);
        }
  });

client.login(process.env.BOT_TOKEN);