const Discord = require("discord.js")

exports.run = async (Client, Message, Args) => {
    console.log(Message.author.tag + " used command `ping`")
Message.channel.send("<@"+Message.author.id+">, :ping_pong: The bot's ping is " + `**${Date.now() - Message.createdTimestamp} ms**`)
}

exports.config = {
name: "ping",
aliases: [""],
}