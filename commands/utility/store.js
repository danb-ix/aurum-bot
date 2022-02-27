const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
    console.log(Message.author.tag + " used command `ping`")
    
const storeembed = new MessageEmbed() 
    .setTitle("Store Link")
    .setDescription("You can find the link to our store [here](https://store.aurumleaf.xyz)")
    .setColor(0xf6bf54)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

Message.channel.send({ embeds: [storeembed] })
}

exports.config = {
name: "store",
aliases: [""],
}