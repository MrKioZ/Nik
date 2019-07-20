const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { CommandHandler } = require ('djs-commands');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['+']
});

bot.on('ready', () => {
    console.log(`===sw=======================`)
    console.log(`Bot Loaded: ${bot.user.tag}`)
    console.log(`Bot Author: Nik#2394`)
    console.log(`Servers: ${bot.guilds.size}`)
    console.log(`Users Using Bot: ${bot.users.size}`)
    console.log(`Library: Discord.js`)
    console.log(`==========================`);
});

bot.on('message', (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
//    let args = message.content.split(" ");
    let args = message.content.split(/ +/g);
    let suffix = args.slice(1).join(' ');
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(bot, message, args);
    }catch(e){
        console.log(e)
    }
});
const presence_list = [
    "on ArconicMC 💕", 
    "on Nik 💕"
    ];

    bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (presence_list.length - 1) + 1);
        bot.user.setActivity(presence_list[index]);
    }, 20000);
});
bot.on('guildMemberAdd', member => {
    let embed = new Discord.RichEmbed();
    let channel = member.guild.channels.find(ch => ch.name === 'welcome-staff');
    embed.setAuthor("ArconicMC Official Discord!")
    embed.setColor(0xF08080)
    embed.setDescription(`Welcome to the ArconicMC Discord! Be sure to read all of our discord server rules in <#546873908687667200>!\n \nCheck our <#546873898059300867> channel for all of the new updates! Enjoy & Have fun!\nDon't forget to link your account!\n \nEnjoy our server <@${member.id}>`)
    embed.setImage("https://cdn.discordapp.com/attachments/574904056905203747/600526614899720202/banner-222497.gif")
    embed.setThumbnail(`$member.user.avatarURL`)
    embed.setFooter("Type /discord link on play.arconicmc.com & follow the instructions to link your account!")
    embed.addBlankField(true)
    embed.addField("Join our Minecraft server!",
    "play.arconicmc.com")
    embed.addField("Follow our twitter!",
    "https://twitter.com/ArconicMC")
    embed.addField("ArconicMC Website",
    "xarconicmc.com")

    if (!channel) return;
    channel.send(embed);
    member.addRoles('555414882636267540', '564056444253634560')
    console.log(`${member.user.tag} just joined!`)
});
bot.on('guildMemberRemove', member => {

    let embed = new Discord.RichEmbed();
    let channel = member.guild.channels.find(ch => ch.name === 'leaves');

    embed.setAuthor("Member Left")
    embed.setDescription(`${member.user.tag} just left` + ` the server!`)
    embed.setThumbnail(member.user.avatarURL)

    if (!channel) return;
    channel.send(embed)
    console.log(`${member.user.tag} Just left`)
});

bot.login(config.token)