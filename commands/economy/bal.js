const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "bal",
    description: "bleh",
    run: async(client, message, args) => {

        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if (bal === null) bal = 0;

        const embed = new MessageEmbed()
            .setTitle('Balance')
            .setColor('RANDOM')
            .setTimestamp()
            .addField(`${message.author.username}`, `You've Balance Collected.\n **${bal} Coins.**`, true)
        message.channel.send(embed)
    }
}