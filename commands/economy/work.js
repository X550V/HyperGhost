const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "work",
    description: "Work your a** off",
    run: async(client, message, args) => {


        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            const after = new MessageEmbed()
                .setTitle('Working')
                .setColor('RANDOM')
                .setTimestamp()
                .addField(`${message.author.username}`, `You Can't Do Work Again \nWait Until **${time.minutes}m - ${time.seconds}s**`, true)

            return message.channel.send(after)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            const before = new MessageEmbed()
                .setTitle('Working')
                .setColor('RANDOM')
                .setTimestamp()
                .addField(`${message.author.username}`, `You Have worked & Earned \n**${amount} Coins**`, true)

            message.channel.send(before)
        }
    }
}