const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
    console.log(Message.author.tag + " used command `ranks`")
    const args = Message.content.split(" ").slice(1).join(" ")


const donorembed = new MessageEmbed() 
    .setTitle("Donor Ranks")
    .setColor(0xf6bf54)
    .addFields(
		{ name: 'Donor', value: 'Price: $8USD \n \n **Commands**: \n - /nick: Change your nickname \n /craft: Have a crafting table on you at all times \n \n **Perks** \n - 30% More Profession XP \n - +2 More Auction House Slots \n \n **Cosmetics** \n - Easter Egg Effect \n \n **Chat Tag** \n - DONOR', inline: true },
		{ name: 'Gold', value: 'Price: $16USD \n \n **Commands**: \n - /train: Travel to any server-town without having to use the train station! \n /echest: Have access to a portable ender chest \n /feed: Fill your hunger without eating any food \n \n **Perks** \n - 50% More Profession XP \n - +2 More Auction House Slots \n \n **Cosmetics** \n - In Love Effect \n - Musical Effect \n - Green Aura Effect \n \n **Chat Tag** \n - GOLD \n \n \n ** **', inline: true },
        { name: 'Diamond', value: 'Price: $32USD \n \n **Commands**: \n - /bosses: Travel to any boss arena without having to walk to them \n /nick: Change your name __with color__ \n \n **Perks** \n - 70% More Profession XP \n - +2 More Auction House Slots \n \n **Cosmetics** \n - Frost God Effect \n - Ender Aura Effect \n - Rainy Days Effect \n - Snowy Days Effect \n \n **Chat Tag** \n - DIAMOND ', inline: true },
        { name: 'Eternal', value: 'Price: $50USD \n \n **Commands**: \n - /fly: Fly Around \n \n **Perks** \n - 85% More Profession XP \n - +2 More Auction House Slots \n Chance for items to be signed by you in the next Souviner release. \n \n **Cosmetics** \n - Angel Wings Effect \n - Rings of Fire Effect \n - Fire Cage Effect \n - Flame Fairy Effect \n \n **Chat Tag** \n - ETERNAL', inline: true },
        { name: 'Aurum', value: 'Price: $60USD \n \n **Commands**: \n - /nick: Use the /nick command __with color and formatting__, like **bold** and *italic* \n \n **Perks** \n - 95% More Profession XP \n - +2 More Auction House Slots \n \n **Cosmetics** \n - Blood God Effect \n - Black Hole Effect \n \n **Chat Tag** \n - **__AURUM__**', inline: true },
        { name: 'Aurum+', value: 'Price: $100USD \n \n **Perks** \n - 110% More Profession XP \n - +2 More Auction House Slots \n Support AurumLeaf to the fullest! \n \n **Cosmetics** \n - Sacrificial Rods Effect \n - Super Person Effect \n \n **Chat Tag** \n - **__AURUM__+**', inline: true },

	)
    .setTimestamp()
    .setFooter("Sent by AurumBot#6501");

if(!args) {
Message.channel.send({ embeds: [donorembed] })
} else {
    if(args == "donor"){
Message.reply("Price: $8USD \n \n **Commands**: \n - /nick: Change your nickname \n /craft: Have a crafting table on you at all times \n \n **Perks** \n - 30% More Profession XP \n - +2 More Auction House Slots \n \n **Cosmetics** \n - Easter Egg Effect \n \n **Chat Tag** \n - DONOR") 
}
    if(args == "gold"){
Message.reply("Price: $16USD \n \n **Commands**: \n - /train: Travel to any server-town without having to use the train station! \n /echest: Have access to a portable ender chest \n /feed: Fill your hunger without eating any food \n \n **Perks** \n - 50% More Profession XP \n - +2 More Auction House Slots \n \n **Cosmetics** \n - In Love Effect \n - Musical Effect \n - Green Aura Effect \n \n **Chat Tag** \n - GOLD \n \n \n")
}
    if(args == "diamond"){
Message.reply("Price: $32USD \n \n **Commands**: \n - /bosses: Travel to any boss arena without having to walk to them \n /nick: Change your name __with color__ \n \n **Perks** \n - 70% More Profession XP \n - +2 More Auction House Slots \n \n **Cosmetics** \n - Frost God Effect \n - Ender Aura Effect \n - Rainy Days Effect \n - Snowy Days Effect \n \n **Chat Tag** \n - DIAMOND")
}
    if(args == "eternal"){
Message.reply("Price: $50USD \n \n **Commands**: \n - /fly: Fly Around \n \n **Perks** \n - 85% More Profession XP \n - +2 More Auction House Slots \n Chance for items to be signed by you in the next Souviner release. \n \n **Cosmetics** \n - Angel Wings Effect \n - Rings of Fire Effect \n - Fire Cage Effect \n - Flame Fairy Effect \n \n **Chat Tag** \n - ETERNAL")
}
    if(args == "aurum"){
Message.reply("Price: $60USD \n \n **Commands**: \n - /nick: Use the /nick command __with color and formatting__, like **bold** and *italic* \n \n **Perks** \n - 95% More Profession XP \n - +2 More Auction House Slots \n \n **Cosmetics** \n - Blood God Effect \n - Black Hole Effect \n \n **Chat Tag** \n - **__AURUM__**")
}
    if(args == "aurum+"){
Message.reply("Price: $100USD \n \n **Perks** \n - 110% More Profession XP \n - +2 More Auction House Slots \n Support AurumLeaf to the fullest! \n \n **Cosmetics** \n - Sacrificial Rods Effect \n - Super Person Effect \n \n **Chat Tag** \n - **__AURUM__+**")
}
} 


}

exports.config = {
name: "ranks",
aliases: ["donor"],
}