const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    cateogry: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: async(client, message, args) => {
        if (message.deletable) message.delete();

        let msg;

        msg = args.join(" "); {
            const embed = new MessageEmbed()
                .setTitle(msg)
                .setFooter(`Published By ${message.author.tag}`)
                .setColor("BLACK");
            message.channel.send(embed);
        }
    }
}