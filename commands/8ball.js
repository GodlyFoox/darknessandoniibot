const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!8ball <question> fasfas
  if(!args[2]) return message.reply("Please ask a full question! :weary:");
  let replies = ["Yes", "No", "Maybe", "I don' know", "Ask again later"]

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#00ff87")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballEmbed)





}

module.exports.help = {
  name: "8ball"
};
