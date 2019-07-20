const Discord = require("discord.js");

module.exports = class dndmode {
    constructor(){
        this.name = 'dndmode',
        this.alias = ['dnd'],
        this.usage = 'dndmode'
    }

    run(bot, message, args){
        if (message.author.id === '371943174777864192')
        bot.user.setStatus("dnd")
        message.channel.send('Set status to Do Not Disturb')
    message.delete();
    }
}