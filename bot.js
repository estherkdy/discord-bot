'use strict'; // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
              // With strict mode, you can not, for example, use undeclared variables.

// Import the discord.js module
const Discord = require('discord.js');

// for configurations variables that are public
const {prefix} = require('./config.json');

// environment variables, unseen to the naked eye
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
    message.channel.send('die');
    message.react("👍");
  }

  
  if ((message.content.toLowerCase()).includes('frazee')) {
    message.reply('This is a Frazee!', {files:['./media/frazee.png']});
  }

  if ((message.content.toLowerCase()).includes('joe')) {
    message.reply('JOE MAMA!!', {files:['./media/vna.png']});
  }

  if (message.content === `${prefix}hello`) {
    message.channel.send('hi');
  }

  // If the message is "ping"
  if (message.content === `${prefix}ping`) {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }

  if (message.content === `${prefix}stan`) {
    // Send "pong" to the same channel
    message.channel.send('loona');
  }

  if (message.channel.id === 'polls') {
    message.react('👍');
  }

  if((message.content.toLowerCase()).includes('so true')) {
    message.channel.send('SO TRUE BESTIE');
  }
});
 
// Log our bot in using the token from https://discord.com/developers/applications
bot.login(process.env.DISCORD_TOKEN);