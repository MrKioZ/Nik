const Discord = require("discord.js");

module.exports = class idlemode {
    constructor(){
        this.name = 'idlemode',
        this.alias = ['idle'],
        this.usage = 'idlemode'
    }

    run(bot, message, args){
        if (message.author.id === '371943174777864192')
        bot.user.setStatus("idle")
        message.channel.send('Set status to Idle')
    message.delete();
    }
}