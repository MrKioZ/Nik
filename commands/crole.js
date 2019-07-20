const Discord = require('discord.js')

module.exports = class crole {
    constructor(){
    this.name = 'crole',
    this.alias = [''],
    this.usage = 'crole'
    }

    run(bot, message, args){
        const embed = new Discord.RichEmbed();

        if (!message.guild)

        var command = args[0];
        var name = args[1];
        var color = args[2];

        if (message.author.id === '371943174777864192')
        message.guild.createRole({
            name: `${name}`,
            color: `${color}`
        })
        embed.setColor(color)
        embed.setTitle('New Role Created!')
        embed.addField('Role Created:',
        `${name}`)
        embed.addField('Color:',
        `#${color}`)

        message.channel.send(embed)
    }
}