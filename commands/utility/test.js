const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
    console.log(Message.author.tag + " used command `test`")

Message.reply("Bot is fully functional! The bot's ping is " + `**${Date.now() - Message.createdTimestamp} ms**`)
}

exports.config = {
name: "test",
aliases: [""],
}