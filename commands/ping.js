const Discord = require("discord.js");

module.exports = class ping {
    constructor(){
        this.name = 'ping',
        this.alias = ['ping'],
        this.usage = 'ping'
    }

    run(bot, message, args){
        message.channel.send("Pinging....").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            let embed = new Discord.RichEmbed();

            embed.setFooter(`Requested by ${message.author.tag}`)
            embed.setTimestamp()
            embed.addField('Bot Latency',
            `${ping}ms`)
            embed.addField('API Latency',
            `${Math.round(bot.ping)}ms`)
            embed.setThumbnail(`${message.author.avatarURL}`)
            embed.setColor("F08080")

            message.channel.send(embed)
            message.delete();
        })
    }
}