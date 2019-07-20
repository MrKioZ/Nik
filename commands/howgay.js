const Discord = require("discord.js");

module.exports = class howgay {
    constructor(){
        this.name = 'howgay',
        this.alias = ['gay'],
        this.usage = 'howgay'
    }

    run(bot, message, args){
        var min=1;
        var max=100;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
    let embed = new Discord.RichEmbed();

    var command = args[0];
    var mentioned = args.slice(1).join(" ")

    if (!message.guild) return;
    if (!message.mentions.users.first()) return;

    if (message.content === `${command}`) return message.channel.send('You need to mention someone. (You can mention yourself)')
    embed.setDescription(`${mentioned} is ${random}% gay :gay_pride_flag: `)
    embed.setColor(0xF08080)

    message.channel.send(embed);
    }
}