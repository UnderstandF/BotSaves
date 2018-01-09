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
        message.reply("Minier !");
        console.log("Quelqu'un à dis tg");
    }
    
    
    if (message.content === "Je t'aime bot"){
        message.reply("Moi aussi !");
        console.log("Quelqu'un aime mon bot !");
    }
    
   
    if (message.content === "inutile"){
        message.reply("Je ne suis pas inutile!");
        console.log("Inutile");
    }
    
    If (message.content === "Suce"){
        message.reply("Ma /n bite!");
        console.log("bite");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectué"); 
    }
});
