const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let role = message.guild.roles.find('name', 'OG People')
  message.member.addRole(role);
  message.channel.send("Your role has been set");
}

module.exports.help = {
  name: "verify"
}
