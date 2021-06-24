'use strict';

// Import the discord.js module
const Discord = require('discord.js');

// environment variables, unseen to naked eye
require('dotenv').config();

// Create an instance of a Discord bot
const bot = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
bot.on('ready', () => {
  console.log('I am ready!');
});
 
// Create an event listener for messages
bot.on('message', message => {

  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(bot.user.id)) {
    message.channel.send('Welcome');
    message.react("👍");
  }

  // If the message is "ping"
  if (message.content === 'frazee') {
    message.reply('This is a Frazee!', {files:['./media/frazee.png']});}

    if (message.content === 'hello') {
      message.reply('hi');

    }
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }

  if (message.content === 'stan') {
    // Send "pong" to the same channel
    message.channel.send('loona');
  }

  if(message.author.id === process.env.KIMMY || message.author.id === process.env.ANDRE) {
  
      message.channel.send('SO TRUE BESTIE');
  }
});
 
// Log our bot in using the token from https://discord.com/developers/applications
bot.login(process.env.DISCORD_TOKEN);