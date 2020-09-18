const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "register",
    alias: ['biodata'],
    run: async(bot, msg, args, data, member) => {
        if (msg.deletable) msg.delete();

        let nama = args[0];
        let umur = args[1];
        let asal = args[2];
        let gender = args[3];
        let alasan = args[4];
        if (!nama | !umur | !Number(umur) | !asal | !gender | !alasan) {
            return msg.channel.send(`
        prefix.intro <Nama> <Umur> <Asal> <Gender> <Alasan> 
      **CONTOH:** 
      h!intro TheBlueRose 17 Bali Male Jaga-Server
    `).then(m => m.delete({ timeout: 5000 }))
        }
        let Embed = new MessageEmbed()
            .setTitle("Registration Of Member's")
            .setColor(msg.member.displayHexColor === "#000000" ? "BLACK" : msg.member.displayHexColor)
            .setThumbnail(msg.author.displayAvatarURL)
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/704992808452227134/708291260531605504/Z5X7Sy5.gif')
            .setFooter(`**Thank For You Introduce**`)
            .setDescription(`📂︙Nickname       : **${msg.member}**
            📋︙Nama     : **${nama}**
            📉︙Umur     : **${umur}**
    🌏︙Asal     : **${asal}**
    👥︙Gender   : **${gender}**
    📖︙Alasan    : **${alasan}**
    `)
        return msg.channel.send(Embed)

    }

}