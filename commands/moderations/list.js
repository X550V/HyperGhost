const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "list",
    category: "info",
    run: async(client, message, args) => {
        let bicon = client.user.displayAvatarURL;
        let embed = new MessageEmbed()
            .setDescription("**Hello my name ༺HyperGhost༻, I has been build by TheBlueRose#9697 .\nWant To Make Bot Official ?. \nSee The List**\n")
            .setAuthor('༺HyperGhost༻ BOT', client.user.avatarURL)
            .addFields({ name: '`▬▬▬▬▬[ 🌟 List Joki Bot Official 🌟]▬▬▬▬', value: '\u200B' }, { name: '==================================', value: '\u200B' }, { name: 'List Full Authorize ', value: 'Admin + Utilites + Inform + Economy + Fun \n400k - 500k', inline: true }, { name: ' List Cuztomise 1', value: 'Admin + Utilities + Inform \n300K', inline: true }, { name: 'List Cuztomise 2', value: 'Admin + Utilities + Economy \n200K', inline: true }, { name: 'List Cuztomise 3 ', value: 'Admin + Fun + Economy \n100K', inline: true }, { name: 'List Admin Only', value: 'Admin Full \n50k', inline: true })
            .addField('Payment : Gopay & Ovo', 'TheBlueRose#9697')
            .setColor('Random')
            .setFooter('© Created by: TheBlueRose#9697')
        message.channel.send(embed);
    }
}