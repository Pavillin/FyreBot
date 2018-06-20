const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();

bot.on("ready", function(){
    console.log("FyreBot is ready!");
});

bot.on("guildCreate", guild => {
    console.log(`I've joined the Discord Server ${guild.name} (${guild.id}), owned by ${guild.owner.user.username} (${guild.owner.user.id}).`);
});

bot.login(config.token);