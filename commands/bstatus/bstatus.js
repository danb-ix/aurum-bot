const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
  console.log(Message.author.tag + " used command `status`")
const status = Message.content.split(" ").slice(1).join(" ")
if (Message.author.id !== "364902391717298181") {
  return Message.reply('You can not use this command');
  } else {
    if (!status) {
      return Message.reply("Missing Argument! You forgot to state what you want the status to be");
    } else if (status === "default") {
      Client.user.setActivity("on AurumLeaf.xyz | Use ;help to summon me!", { type: 'PLAYING' })
      Message.reply("Done! Changed the status to `playing on AurumLeaf.xyz | Use ;help to summon me!`")

    } else {
      Client.user.setActivity(status, { type: 'PLAYING' })
      Message.reply("Done! Changed the status to `playing " + status + "`")
      }
    }
  }
   
exports.config = {
name: "bstatus",
aliases: [""],
}