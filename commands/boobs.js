const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

    let {body} = await superagent
    .get(`http://api.oboobs.ru/boobs/0/1/random`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");

    let boobsEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Boobs are life bruh!")
    .setImage(body.preview)
    .setColor("RANDOM")
    .setFooter("Bot Version: 0.0.3");

    message.channel.send(boobsEmbed);

}

module.exports.help = {
  name: "boobs"
}
