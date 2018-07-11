const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  //>ban @user reason

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find that user.");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Permission denied.");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Can't kick that user.");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#ff9400")
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let incidentChannel = message.guild.channels.find(`name`, "test");
  if(!incidentChannel) return message.channel.send("Can't find report channel.");

  message.guild.member(bUser).ban(bReason);
  incidentChannel.send(banEmbed);


  return message.channel.send(`${bUser} has been banned by <@${message.author.id}>`);
}



  module.exports.help = {
    name: "report"
};
