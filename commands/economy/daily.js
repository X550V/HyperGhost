const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "daily",
    description: "Receive a daily award of money",
    run: async(client, message, args) => {

        let user = message.author;
        let timeout = 86400000;
        let amount = 10000;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            const already = new MessageEmbed()
                .setTitle('Daily')
                .setColor('RANDOM')
                .setTimestamp()
                .addField(`${message.author.username}`, `You've Already Collected.\n**${time.days}d - ${time.hours}h - ${time.minutes}m - ${time.seconds}s**`, true)
            return message.channel.send(already)


        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            const success = new MessageEmbed()
                .setTitle('Daily')
                .setColor('RANDOM')
                .setTimestamp()
                .addField(`**> ${message.author.username} **`, `Successfully Added ${amount} Coins`, true)
            message.channel.send(success)
        }
    }
}