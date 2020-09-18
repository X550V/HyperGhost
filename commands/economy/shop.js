const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "shop",
    description: "View the store",
    run: async(client, message, args) => {

        const embed = new MessageEmbed()
            .setTitle('Shop')
            .setDescription(`House - 25000 coins \n Car - 20000 coins \n MotorCycle - 15000 coins \n handphone - 1000 coins \n Watch - 1500 coins`)
            .setTimestamp();

        message.channel.send(embed);
    }
}