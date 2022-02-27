const { Client, MessageEmbed, message } = require('discord.js');


exports.run = async (Client, message, Args) => {
  
    const suggestchannel = Client.channels.cache.get("872716151367540737");
    if (message.guild.id !== "872238379406860308") return
    if (message.channel.id !== "873012205552017498"){message.channel.send("You are not using the correct channel, perhaps try <#873012205552017498>?")} else {
    console.log(message.author.tag + " used command `suggest`")
    message.delete(1000);
    const args = message.content.split(" ").slice(1).join(" ")
    const User = await Client.users.fetch(message.author.id)
    const SuggestEmbed = new MessageEmbed()
      .setTitle("**A New Suggestion!**")
      .setDescription("*Vote on the suggestion below!* \n" + args)
      .setColor(0xf6bf54)
      .setTimestamp()
      .setFooter(`Sent by ${User.tag}`)



  if (!args) {  
    return message.reply("You forgot to suggest something!");
        } else {
            suggestchannel.send({ embeds: [SuggestEmbed] }).then(m => {
                m.react("👍")
                m.react("👎")
                });
        }
    }

    }
   
exports.config = {
name: "suggest",
aliases: [""],
} 