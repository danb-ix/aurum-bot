const { Client, Intents, Collection, MessageEmbed, Guild} = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS] });
const { token, token2 } = require('./config.json');


client.on("ready", () => { //when bot starts
console.log("I'm online!") //console info
const botver = "1.1"; //bot version string
const botstarted=Date(); //records time at which bot booted up
client.on('debug', console.log) //log debug messages
      .on('warn', console.log) //log warning messages
console.log('AurumBot (Version ' + botver + ')');	//console info
console.log('Bot started at ' + botstarted) //logs time bot starts to console
console.log('Logged in as ' + client.user.tag)//console info
client.aliases = new Collection() //command handler
client.commands = new Collection() //command handler
require('./commandhandler')(client) //command handler
});

client.on('ready', () => { //when bot starts
    client.user.setStatus('available') //change bot online/dnd/idle/offlien to online
    client.user.setPresence({ activities: [{ name: 'on AurumLeaf.xyz | Use ;help to summon me!' }] }); //sets status
});

client.on("messageCreate", Message => {  //when a message is sent
    const SuggestionsEmbed = new MessageEmbed() //create SuggestionsEmbed
    .setTitle("Suggestions")
    .setDescription("We have a super simple way to make suggestions for the server! Type `;suggest <your suggestion>` in <#873012205552017498> to create a suggestion, vote on it in <#872716151367540737>")
    .setColor(0xf6bf54)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

const UtilityEmbed = new MessageEmbed() //create UtilityEmbed
    .setTitle("Utility")
    .setDescription("`avatar` Gives the avatar of a mentioned user, if none are mentioned, gives your avatar. \n **Permissions:** @everyone \n  \n  `ping` Shows the bot's latency in ms \n **Permissions:** @everyone \n \n  `test` A simple send and receive command to check if the bot is running \n **Permissions:** \n @everyone \n \n `help` Shows this list \n **Permissions:** @everyone")
    .setColor(0xf6bf54)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

    let Prefix = ";"
    let Args = Message.content.slice(Prefix.length).trim().split(/ +/g); //set args
    let Command = Args.shift().toLowerCase(); //turns Args into Command
    
    if (Message.content.startsWith(Prefix)) { //if a command is sent
        let CommandFile = client.commands.get(Command) || client.commands.get(client.aliases.get(Command)); //get the commandfile of the command

        if (CommandFile) { //if the commandfile exists
            CommandFile.run(client, Message, Args); //run the commandfile
        }   
        
    } else {} //otherwise, do nothing

    if (Message.mentions.has(client.user)) { //sends help info when mentioned
        console.log(Message.author.tag + "used command `help`") //log user
		if (Message.mentions.everyone) return; //ignore @everyone and @here
        else {Message.author.send({ embeds: [UtilityEmbed, SuggestionsEmbed] }).catch(error => {Message.reply("I couldn't send you a DM! Maybe you have your DMs closed.")})}//send embed
        Message.react('✅')//react with ✅
    }

});



const releaseVer = 0 //Stable-0 Beta-1

if (releaseVer == 1) {
	client.login(token2); //beta
	console.log('Logging in under Beta token...') //log beta token login
}
else if (releaseVer == 0) {
	client.login(token); //stable
	console.log('Logging in under Stable token...') //log stable token login
}