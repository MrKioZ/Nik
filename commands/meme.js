  
const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch')

module.exports = class memes {
    constructor(){
        this.name = 'meme',
        this.alias = ['me-me'],
        this.usage = 'meme'
    }
    run(bot, message, args){

        let reddit = [
            "memes",
            "wholesomememes",
            "dankmemes",
            "whoooosh"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

        message.channel.send('Here is the meme you requested <:owo:591827808049823744>')
        message.channel.startTyping()

        randomPuppy(subreddit).then(url=> {
            snekfetch.get(url).then(async res => {
                await message.channel.send({
                    files: [{
                        attachment: res.body,
                        name: 'meme.png'
                    }]
                }).then(() => message.channel.stopTyping());
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));

    }
}