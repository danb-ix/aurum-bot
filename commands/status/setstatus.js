const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
    const fs = require("fs");
    const prefix = ";"
    const commandname = "setstatus"
	const args = Message.content.slice(prefix.length).slice(commandname.length).trim().split(' ');
    const embedType = args[0]
    const eta = args[1]
    const reason = args.slice(2).join(" ")


	const OfflineEmbed = new MessageEmbed() 
    .setTitle("Server Status")
    .setDescription("Current Server Status: **Offline** :no_entry_sign: \n ETA: **" + eta + "** \n Reason: **" + reason + "**")
    .setColor(0xf6bf54)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

	const BackOnlineEmbed = new MessageEmbed() 
    .setTitle("Status for aurumleaf.xyz")
    .setDescription(":green_circle: Server is **Online** \n \n **Type:** Java + Bedrock \n **MOTD:** ❂ AURUMLEAF ❂ BOSSES ¤ TOWNY ¤ CUSTOM ITEMS ¤ EVENTS \n **Version:** 1.10-1.18 \n **Native Version:** 1.17.1")
    .setColor(0xf6bf54)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

	const InDevEmbed = new MessageEmbed() 
    .setTitle("Server Status")
    .setDescription("Current Server Status: **In Development** \n ETA: **" + eta + "** \n Reason: **" + reason + "**")
    .setColor(0xf6bf54)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

setTimeout(() => { Message.delete() }, 5000)

if(!Message.member.permissions.has("ADMINISTRATOR")) {
    return Message.reply("You do not have permission to run this command")
}

const status = {
    embedType: embedType,
    eta: eta,
    reason: reason
}


const jsonString = JSON.stringify(status)
console.log(jsonString)

fs.writeFile('setstatus.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
        Message.react("👍")
    }
})
}

exports.config = {
name: "setstatus",
aliases: [""],
}
 
