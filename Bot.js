const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
  let args = message.content.split(' ').slice(1)
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(channel => channel.name === "hangar");
  if (!channel) return;
  channel.send(`Bzzzzzzz Bi-en-venido, forma de vida no identificada de nombre ${member}, por favor, facilitanos tus datos principales para que podamos tramitar tu petición de acceso a un @Ingeniero. \n\n Les recordamos que en el interior de la base deben seguirse las normas de comportamiento de la comunidad (Hablar roleando), cualquier tipo de infracción de estas normas podría conllevar la expulsión permanente de la nave. Tengan una agradable estancia. Bzzzzzz *Sonidos de estática*`);
});

client.login(process.env.BOT_TOKEN);
