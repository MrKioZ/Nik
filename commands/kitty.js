const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch')

module.exports = class kitty {
    constructor(){
        this.name = 'ktties',
        this.alias = ['cat', 'catto', 'kitten', 'kitty'],
        this.usage = 'kitties'
    }
    run(bot, message, args){

        let reddit = [
            "murdermittens",
            "kitty",
            "kitties",
            "Kitten",
            "onlyhappycats",
            "CatHighFive",
            "kittyhugs",
            "catseatingpizza",
            "Catsgivinghighfives",
            "CatLogic",
            "StartledCats",
            "purrkour"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

        message.channel.send('Here\'s your cats! ❤')
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