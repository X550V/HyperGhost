const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    cateogry: "utilites",
    run: async(client, message, args) => {
        if (message.deletable) message.delete();
        let help = args.join(" ");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        if (!help) {
            let embed = new MessageEmbed()
                .setTitle('__**♨ Command\'s ♨**__')
                .setThumbnail('https://media.giphy.com/media/KzcgeeDd0wPDGlbXUp/giphy.gif')
                .setDescription(`__**Developer By :**__, __**TheBlueRose#9697**__`)
                .setAuthor(`${message.guild.name}`, avatar)
                .addField('__**📝 My Bot Prefix**__!', '__**💠 h!**__!')
                .addFields({
                    name: "🔐Admin! : ",
                    value: 'Command \n\_\_\*\*\*h!help admin\*\*\*\_\_\_',
                    inline: true
                }, {
                    name: "🔨Utilities!: ",
                    value: 'Command \n\_\_\*\*\*h!help utilities\*\*\*\_\_\_',
                    inline: true
                }, {
                    name: "🔫Fun!: ",
                    value: 'Command \n\_\_\*\*\*h!help fun\*\*\*\_\_\_',
                    inline: true
                }, {
                    name: "💶Economy! : ",
                    value: 'Command \n\_\_\*\*\*h!help economy\*\*\*\_\_\_',
                    inline: true
                }, {
                    name: "🧾Inform: ",
                    value: 'Command \n\_\_\*\*\*h!help info\*\*\*\_\_\_',
                    inline: true
                }, {
                    name: "🎧Music: ",
                    value: 'Command \n\_\_\*\*\*h!help music\*\*\*\_\_\_',
                    inline: true
                }, {
                    name: "🧾Note: ",
                    value: '\_\_\*\*\*- This Bot Now Support Online 24 Hours \*\*\*\_\_\_',
                    inline: false
                })
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .setColor('BLACK')
                .setImage("https://images-ext-2.discordapp.net/external/COl0mZHjPwdVXFoxenrUPy1jbX8atqOai7dIO42wMns/https/media.discordapp.net/attachments/709369821439197237/709374347340677231/lineee.gif")
                .setTimestamp()
            return message.channel.send(embed)
        }

        if (help === 'admin') {
            const admin = new MessageEmbed()
                .setTitle('__**♨🔑 Administrator\'s ♨**__')
                .setAuthor(`${message.guild.name}`, avatar)
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .addFields({
                    name: "🔇 Mute: ",
                    value: 'Command h!mute (nickname)',
                    inline: true
                }, {
                    name: "🔈 Unmute!: ",
                    value: 'Command h!unmute (nickname)',
                    inline: true
                }, {
                    name: "❌ Ban!: ",
                    value: 'Command h!ban (nickname) (reason)',
                    inline: true
                }, {
                    name: "✅ Unban! : ",
                    value: 'Command h!unban (nickname) (reason)',
                    inline: true
                }, {
                    name: "⛔️ Kick: ",
                    value: 'Command h!kick (nickname) (reason)',
                    inline: true
                }, {
                    name: "💶 List! : ",
                    value: 'Command h!list ',
                    inline: true
                }, {
                    name: "🎁 Giveaway: ",
                    value: 'Command h!giveaway (namechannels) (duration) (totalwinners) (item)',
                    inline: true
                }, {
                    name: "📈 Report: ",
                    value: 'Command h!report (namechannels) (nickname)',
                    inline: true
                }, {
                    name: "🌄 Welcome: ",
                    value: 'Command h!welcome (namechannels)',
                    inline: true
                }, {
                    name: "❗️ Warning: ",
                    value: 'Command h!warning (nickname)',
                    inline: true
                }, {
                    name: "🔰 Invite: ",
                    value: 'Command h!invite ',
                    inline: true
                })
                .setColor('BLACK')
                .setTimestamp()
            return user.send(admin)
        }

        if (help === 'utilities') {
            const utilities = new MessageEmbed()
                .setTitle('__**♨ Utilites \'s ♨**__')
                .setAuthor(`${message.guild.name}`, avatar)
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .addFields({
                    name: "📷 Avatar: ",
                    value: 'Command h!avatar',
                    inline: true
                }, {
                    name: "✏️ Absence!: ",
                    value: 'Command h!absen (name) (reason) )',
                    inline: true
                }, {
                    name: "⌛️ Ping!: ",
                    value: 'Command h!ping',
                    inline: true
                }, {
                    name: "💶 Help! : ",
                    value: 'Command h!help ',
                    inline: true
                }, {
                    name: "📊 Intro!: ",
                    value: 'Command h!intro (names) (age) (from) (gender) (hobby)',
                    inline: true
                }, {
                    name: "📊 Register Staff!: ",
                    value: 'Command h!register (names) (age) (from) (gender) (reason)',
                    inline: true
                }, {
                    name: "🌎 Instagram! : ",
                    value: 'Command h!instagram (nicknames), Note : This Command Is Invalid )',
                    inline: true
                }, {
                    name: "⛅️ Weather: ",
                    value: 'Command h!weather (from)',
                    inline: true
                }, {
                    name: "♻️ Welcome: ",
                    value: 'Command h!welcome, Note : This Command For Server HyperGhost',
                    inline: true
                })
                .setColor('BLACK')
                .setTimestamp()
            return user.send(utilities)
        }

        if (help === 'fun') {
            const fun = new MessageEmbed()
                .setTitle('__**♨ Fun \'s ♨**__')
                .setAuthor(`${message.guild.name}`, avatar)
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .addFields({
                    name: "💩 Meme: ",
                    value: 'Command h!meme',
                    inline: true
                }, {
                    name: "👫 Hug!: ",
                    value: 'Command h!hug (tag ur friend))',
                    inline: true
                }, {
                    name: "📣 Say!: ",
                    value: 'Command h!say (anyword))',
                    inline: true
                })
                .setColor('BLACK')
                .setTimestamp()
            return user.send(fun)
        }
        if (help === 'economy') {
            const economy = new MessageEmbed()
                .setTitle('__**♨ 💶Economy\'s ♨**__')
                .setAuthor(`${message.guild.name}`, avatar)
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .addFields({
                    name: "💎 Buy: ",
                    value: 'Command h!buy (car, house, etc)',
                    inline: true
                }, {
                    name: "💳 Bal!: ",
                    value: 'Command h!bal ',
                    inline: true
                }, {
                    name: "✉️ Daily!: ",
                    value: 'Command h!daily',
                    inline: true
                }, {
                    name: "🔨  Work*!: ",
                    value: 'Command h!work',
                    inline: true
                }, {
                    name: "📦 Inventory!: ",
                    value: 'Command h!inventory',
                    inline: true
                }, {
                    name: "🛒 Shop!: ",
                    value: 'Command h!shop',
                    inline: true
                })
                .setColor('BLACK')
                .setTimestamp()
            return user.send(economy)
        }
        if (help === 'music') {
            const music = new MessageEmbed()
                .setTitle('__**♨ Music \'s ♨**__')
                .setAuthor(`${message.guild.name}`, avatar)
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .addFields('Sorry This Command On Progress')
                .setColor('BLACK')
                .setTimestamp()
            return user.send(music)
        }
        if (help === 'info') {
            const info = new MessageEmbed()
                .setTitle('__**♨ Fun \'s ♨**__')
                .setAuthor(`${message.guild.name}`, avatar)
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .addFields({
                    name: "🔐 Botinfo: ",
                    value: 'Command h!botinfo',
                    inline: true
                }, {
                    name: "🔨 Serverinfo!: ",
                    value: 'Command h!serverinfo',
                    inline: true
                }, {
                    name: "🔫 Userinfo!: ",
                    value: 'Command h!userinfo (names)',
                    inline: true
                })
                .setColor('BLACK')
                .setTimestamp()
            return user.send(info)
        }
    }

}