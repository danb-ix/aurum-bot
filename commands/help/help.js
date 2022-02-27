const { Client, MessageEmbed } = require("discord.js")

exports.run = async (Client, Message, Args) => {
console.log(Message.author.tag + "used command `help`")


const SuggestionsEmbed = new MessageEmbed() 
    .setTitle("Suggestions")
    .setDescription("We have a super simple way to make suggestions for the server! Type `;suggest <your suggestion>` in <#873012205552017498> to create a suggestion, vote on it in <#872716151367540737>")
    .setColor(0xf6bf54)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

const UtilityEmbed = new MessageEmbed()
    .setTitle("Utility")
    .setDescription("`avatar` Gives the avatar of a mentioned user, if none are mentioned, gives your avatar. \n **Permissions:** @everyone \n  \n  `ping` Shows the bot's latency in ms \n **Permissions:** @everyone \n \n  `test` A simple send and receive command to check if the bot is running \n **Permissions:** \n @everyone \n \n `help` Shows this list \n **Permissions:** @everyone")
    .setColor(0xf6bf54)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

Message.author.send({ embeds: [UtilityEmbed, SuggestionsEmbed] }, ("Sent to dms, get reading! :nerd: :book:")).catch(error => {Message.reply("I couldn't send you a DM! Maybe you have your DMs closed.")})
Message.react('✅')
}

exports.config = {
    name: "help",
    aliases: ["h"]
  };