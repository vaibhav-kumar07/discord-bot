const Discord = require("discord.js");
const { GatewayIntentBits } = require('discord.js')
require("dotenv").config();
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,

    ]
});



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
    if (msg.content === "hi") {
        msg.reply("hello");
    }
})




client.login(process.env.BOT_TOKEN);

