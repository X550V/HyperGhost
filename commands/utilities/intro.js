const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "intro",
    alias: ['biodata'],
    run: async(bot, msg, args, data, member) => {
        if (msg.deletable) msg.delete();

        let nama = args[0];
        let umur = args[1];
        let asal = args[2];
        let gender = args[3];
        let hobby = args[4];
        let game = args.slice(4).join(" ");
        if (!nama | !umur | !Number(umur) | !asal | !gender | !hobby) {
            return msg.channel.send(`
        prefix.intro <Nama> <Umur> <Asal> <Gender> <Hobby> 
      **CONTOH:** 
      h!intro TheBlueRose 17 Bali Male Gaming-Coding
    `).then(m => m.delete({ timeout: 5000 }))
        }
        let Embed = new MessageEmbed()
            .setTitle("Introduction Of Member's")
            .setColor(msg.member.displayHexColor === "#000000" ? "BLACK" : msg.member.displayHexColor)
            .setThumbnail(msg.author.displayAvatarURL)
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/704992808452227134/708291260531605504/Z5X7Sy5.gif')
            .setFooter(`**Thank For You Introduce**`)
            .setDescription(`📂︙Nickname       : **${msg.member}**
            📋︙Nama     : **${nama}**
    📉︙Umur     : **${umur}**
    🗺︙Asal     : **${asal}**
    👥︙Gender   : **${gender}**
    🎮︙Hobby    : **${hobby}**
    `)
        return msg.channel.send(Embed)

    }

}