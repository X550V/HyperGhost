module.exports = {
    name: "restart",
    category: "moderations",
    run: async(client, message, args) => {
        if (message.author.id !== '313957047202873344') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
    }
}