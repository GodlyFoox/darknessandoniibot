const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that!:sob:");
    let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let uicon = message.author.displayAvatarURL;


    let userembed = new Discord.RichEmbed()
    .setDescription("User Information")
    .setThumbnail(uicon)
    .setColor("RANDOM")
    .addField("Username: ", message.author.username)
    .addField("It was created on: ", message.author.createdAt);



    message.channel.send(userembed);
}


module.exports.help = {
    name: "userinfo"
  }
