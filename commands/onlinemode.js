const Discord = require("discord.js");

module.exports = class onmode {
    constructor(){
        this.name = 'onmode',
        this.alias = ['online'],
        this.usage = 'onmode'
    }

    run(bot, message, args){
        if (message.author.id === '371943174777864192')
        bot.user.setStatus("online")
        message.channel.send('Set status to Do Not Online')
    message.delete();
    }
}