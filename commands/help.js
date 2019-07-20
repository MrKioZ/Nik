const Discord = require('discord.js');
const botVersion = '1.0';

module.exports = class rio {
    constructor(){
        this.name = 'nik',
        this.alias = ['nhelp', 'help']
        this.usage = 'nik'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        
        embed.setTitle('-=[Nik Bot]=-')
        embed.setAuthor('Nik Info', `${bot.user.avatarURL}`)
        embed.setDescription('**Type** `+cmds` **for the command list**')
        embed.addField('Nik Version',
        botVersion)
        embed.addField(`Author`,
        '[Nik#2394](https://discord.gg/u49TnVn/)')
        embed.addField(`Library`, 
        '[discord.js](https://discord.js.org/#/)')
        embed.addField('Servers:',
        `${bot.guilds.size}`)
        embed.addField('Users using Nik',
        `${bot.users.size}`)
        embed.setColor(0xF08080)
        embed.setThumbnail(`${message.author.avatarURL}`)
        embed.setFooter(`Requested by: ${message.author.tag}`)
        embed.setTimestamp()


        message.channel.send(embed);
        message.delete();

    }
}