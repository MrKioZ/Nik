const Discord = require("discord.js");

module.exports = class purge {
    constructor(){
        this.name = 'purge',
        this.alias = ['delete'],
        this.usage = 'purge'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
        //suggestion variables
        var command = args[0];
        var purged = args[1];
        //Embed
         embed.setTitle(`MESSAGES PURGED`)
         embed.setColor(0xF08080)
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addField('Amount Purged',
         `${purged}`)

         //after command is sent
         if (message.guild.id === '505872328538718233')
         channel.bulkDelete(atgs[0] + 1)
         message.channel.send(embed)

         console.log(`${purged} Message deleted by ${message.author.tag}`)
         }
    }
// Yes: 597942179838558210
// No: 597942166517710868