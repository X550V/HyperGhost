const db = require("quick.db")

module.exports = {
    name: "welcome",
    category: "moderation",
    usage: "setwelcome <#channel>",
    description: "Set the welcome channel",
    run: (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send("**You don't have permission to use that command**");

        let channel = message.mentions.channels.first()

        if (!channel) {
            return message.channel.send("Please Mention the channel first")
        }

        //Now we gonna use quick.db

        db.set(`welchannel_${message.guild.id}`, channel.id)

        message.channel.send(`Welcome Channel is seted as ${channel}`)
    }
}