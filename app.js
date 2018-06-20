const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();

bot.on("ready", function(){
    console.log("FyreBot is ready!");
});

bot.on("guildCreate", guild => {
    console.log(`I've joined the Discord Server ${guild.name} (${guild.id}), owned by ${guild.owner.user.username} (${guild.owner.user.id}).`);
});

bot.on("message", function(message){
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(config.prefix)) return;

    var args = message.content.substring(config.prefix.length).split(" ");

    switch(args[0].toLowerCase()){
        case "ping":
            message.channel.send("Pong!");
            break;
        default:
            message.channel.send(":x: Invalid command!");
    }
});

bot.login(config.token);