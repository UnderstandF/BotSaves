const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*')

bot.on('ready', function() {
    bot.user.setGame("Programmer");
    console.log("Connectedç");
});

bot.login("MzY5MTcwNDU4NzMxNjEwMTEz.DTGRVw.PU1aH8ncvLMTRdjc2WaaiU1aVoY");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Tg"){
        message.reply("Malpoli !");
        console.log("Quelqu'un à dis tg");
    }
    
    
    if (message.content === "Océane"){
        message.reply("Est une princesse !");
        console.log("Océane/princesse !");
    }    
      

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectué"); 
    }
});
