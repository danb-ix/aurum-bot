const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
    const fs = require("fs");
    const prefix = ";"
    const commandname = "status"
	const args = Message.content.slice(prefix.length).slice(commandname.length).trim().split(' ');
    const embedType = args[0]
    const eta = args[1]
    const reason = args.slice(2).join(" ")

    fs.readFile("setstatus.json", (err, jsonString) => {
        if(err) {
           console.log("There was an error reading file setstatus.json")
           Message.reply("Sorry, an error has occured, please contact <@364902391717298181>.")
           return 
        }
        try {
            const status = JSON.parse(jsonString);
            const OfflineEmbed = new MessageEmbed() 
            .setTitle("Server Status")
            .setDescription("Current Server Status: **Offline** :no_entry_sign: \n ETA: **" + status.eta + "** \n Reason: **" + status.reason + "**")
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
            .setDescription("Current Server Status: **In Development** \n ETA: **" + status.eta + "** \n Reason: **" + status.reason + "**")
            .setColor(0xf6bf54)
            .setTimestamp()
            .setFooter("Sent by AurumBot#6501");
        
            console.log("embedType is:", status.embedType);
            console.log("eta is:", status.eta);
            console.log("reason is:", status.reason);

            if ( status.embedType === "Offline") {
                Message.channel.send({embeds: [OfflineEmbed] });
            } else if ( status.embedType === "Online") {
                Message.channel.send({embeds: [BackOnlineEmbed] });
            } else if ( status.embedType === "InDev") {
                Message.channel.send({embeds: [InDevEmbed] });
            }

            } catch (err) {
            console.log("Error parsing JSON string:", err);
            Message.reply("There was an error parsing the JSON String, please contact <@364902391717298181>.")
          }
    })

}

exports.config = {
name: "status",
aliases: [""],
}
