// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// Configure environment variables
require('dotenv').config();
const { DISCORD_TOKEN } = process.env;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Discord bot ready!');
});

// Respond to slash command interactions
client.on('interactionCreate', async interaction => {
  // Exit function if interaction is not a command
  if (!interaction.isCommand()) return;

  // Destructure commandName property
  const { commandName } = interaction;

  // Respond to each registered command
  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  else if (commandName === 'server') {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
  }
  else if (commandName === 'user') {
    await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
  }
});


// Login to Discord with your client's token
client.login(DISCORD_TOKEN);