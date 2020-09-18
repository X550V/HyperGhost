const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "absen",
    alias: ['biodata'],
    run: async(bot, msg, args, data, member) => {
        if (msg.deletable) msg.delete();

        let nama = args[0];
        let absen = args[1];
        if (!nama | !absen) {
            return msg.channel.send(`
        prefix.intro <Nama> <Absen>
      **CONTOH:** 
      h!absen TheBlueRose Hadir
    `).then(m => m.delete({ timeout: 5000 }))
        }
        let Embed = new MessageEmbed()
            .setTitle("Absence Of Member's")
            .setColor("RANDOM")
            .setThumbnail(msg.author.displayAvatarURL)
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/704992808452227134/708291260531605504/Z5X7Sy5.gif')
            .setFooter(`**Thank You For Absen**`)
            .setDescription(`📂︙Nickname       : **${msg.member}**
            📋︙Nama     : **${nama}**
    📉︙Absen     : **${absen}**
    `)
        return msg.channel.send(Embed)

    }

}