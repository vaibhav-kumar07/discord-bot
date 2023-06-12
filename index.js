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


client.login(process.env.BOT_TOKEN);

