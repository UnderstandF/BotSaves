const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*')

bot.on('ready', function() {
    bot.user.setGame("Programmer");
    console.log("Connectedç");
});

bot.login("MzY5MTcwNDU4NzMxNjEwMTEz.DTGRVw.PU1aH8ncvLMTRdjc2WaaiU1aVoY");


if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }




bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }
    
    
    if (message.content === "Je t'aime bot"){
        message.reply("Moi aussi !");
        console.log("Quelqu'un aime mon bot !");
    }
    
   
    if (message.content === "inutile"){
        message.reply("Je ne suis pas inutile!");
        console.log("Inutile");
    }
    
    if (message.content === "Suce"){
        message.channel.sendMessage("Ma \n bite!");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectué"); 
    }
});
