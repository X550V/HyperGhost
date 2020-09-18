const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "Buy an item from the store",
    run: async(client, message, args) => {
        let purchase = args.join(" ");
        if (!purchase) return message.channel.send('Please provide an item to buy')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if (purchase === 'house') {
            if (amount < 25000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "House");
            message.channel.send('Successfully bought one House')
        }

        if (purchase === 'car') {
            if (amount < 20000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "Car");
            message.channel.send('Successfully Bought One Car')
        }
        if (purchase === 'motorcycle') {
            if (amount < 15000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Motorcycle");
            message.channel.send('Successfully Bought One Motorcycle')
        }
        if (purchase === 'handphone') {
            if (amount < 10000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "Handphone");
            message.channel.send('Successfully Bought One Handphone')
        }
        if (purchase === 'watch') {
            if (amount < 1500) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Watch");
            message.channel.send('Successfully Bought One Watch')
        }
    }
}