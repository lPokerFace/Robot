const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'bienvenida');
  const copiar = member.guild.channels.find('name', args[1]);
  if (!channel) return;
  channel.send(`Bzzzzzzz Bi-en-venido, forma de vida no identificada de nombre ${member}, por favor, facilitanos tus datos principales para que podamos tramitar tu petición de acceso a un @Ingeniero. \n\n Les recordamos que en el interior de la base deben seguirse las normas de comportamiento de la comunidad (Hablar roleando), cualquier tipo de infracción de estas normas podría conllevar la expulsión permanente de la nave. Tengan una agradable estancia. Bzzzzzz *Sonidos de estática*`);
});

client.login("BOT_TOKEN");
