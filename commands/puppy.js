const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch')

module.exports = class puppy {
    constructor(){
        this.name = 'puppies',
        this.alias = ['pup', 'puppie', 'dog', 'doggo', 'puppy'],
        this.usage = 'puppies'
    }
    run(bot, message, args){

        let reddit = [
            "Corgi",
            "wigglebutts",
            "dogswithjobs",
            "bostonterrier",
            "blop",
            "puppysmiles"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

        message.channel.send('Here\'s your good doggo. ❤')
        message.channel.startTyping()

        randomPuppy(subreddit).then(url=> {
            snekfetch.get(url).then(async res => {
                await message.channel.send({
                    files: [{
                        attachment: res.body,
                        name: 'doggo.png'
                    }]
                }).then(() => message.channel.stopTyping());
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));

    }
}