const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let infoEmbed = new Discord.RichEmbed()
  .setDescription("DarknessAndOniiBot bot is a Moderation and NSFW and Fun bot, it has many commands more to come to it. DarknessAndOniiBot is made from discord.js version 11.3.2")
  .setColor("RANDOM")
  .addField('Prefix', '!', true)
  .addField('Getting started', '!help', true)
  .addField('Invite the bot!', '[By clicking here!](https://discordapp.com/api/oauth2/authorize?client_id=465023340860407809&permissions=8&scope=bot)', true)
  .addField('Join the support server!', '[By clicking here!](https://discord.gg/PnhvNn8)', true)


  message.channel.send(infoEmbed)
}

module.exports.help = {
  name: "info"
}
