const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  let modEmbed = new Discord.RichEmbed()
  .setTitle("Moderation Commands :3")
  .setColor("RANDOM")
  .addField("!ban @user <reason>")
  .addField("!kick @user <reason>")
  .addField("!warn @user <reason>")
  .addField("!warnlevel @user")
  .addField("!addrole @user <rolename no mention>")
  .addField("!removerole @user <rolename no mention>")
  .addField("!report @user <reason>")
  .addField("!prefix <newprefix>");

  let nsfwEmbed = new Discord.RichEmbed()
  .setTitle("NSFW Commands :wink:")
  .setColor("RANDOM")
  .addField("!lewd")
  .addField("!anal")
  .addField("!pussy")
  .addField("!thigh")
  .addField("!hentai")
  .addField("!hentaigif")
  .addField("!gif")
  .addField("!4k")
  .addField("!holo");


  let miscEmbed = new Discord.RichEmbed()
  .setTitle("Misc Commands")
  .setColor("RANDOM")
  .addField("!weather <name city/place>")
  .addField("!react")
  .addField("!urban <word you want to search>");

  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Information Commands")
  .setColor("RANDOM")
  .addField("!botinfo")
  .addField("!userinfo (views your info for now)")
  .addField("!serverinfo")
  .addField("!say <put what you want to say> (Only people with MANAGE_MESSAGES can use this)");

  let funEmbed = new Discord.RichEmbed()
  .setTitle("Fun Commands")
  .setColor("RANDOM")
  .addField("!8ball <question>")
  .addField("!poll <question>")
  .addField("!math <equeation(not to complicated)>");

  let speicalEmbed = new Discord.RichEmbed()
  .setTitle("Commands for someone special to me!")
  .addField("!love")
  .addField("!love2");

  message.channel.send(modEmbed)
  message.channel.send(nsfwEmbed)
  message.channel.send(miscEmbed)
  message.channel.send(infoEmbed)
  message.channel.send(funEmbed)
  message.channel.send(speicalEmbed);
}

module.exports.help = {
  name: "help"
}
