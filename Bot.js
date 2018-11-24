const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
  let args = message.content.split(' ').slice(1)
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("supermegaultrapruebasecreta")) {
    message.channel.send(`Bienvenido tripulante memeber, a las puertas del Aurius, soy “BOT-365” el robot de abordo de la base estelar. Voy a intentar ayudarte en tus primeros pasos en esta nave mientras un <@&511984031517114388> tramita tu petición de acceso.  \n          •Primero y antes que nada, para entrar y obtener el rango de cadete, deberás vestir el uniforme de la Red Squad, tanto en RR como en el Discord. Si aún no tienes un uniforme puedes ponerte en contacto con cualquiera de los Mandos para que te diseñen un a tu medida. \n          •Una vez tengas tu uniforme colocado solo deberás presentarte debidamente y cualquiera de los mandos te dará la bienvenida a nuestra familia, junto con el rango de cadete y acceso a la nave. \n Recuerda, que este proyecto está basado en el rol, piensa cómo quieres actuar con tu personaje, y llevarlo como más te guste, dentro solo existen salas de rol, donde deberás interpretar a tu personaje. Aconsejamos leer el #panel-de-informacion para que puedas ver como funciona el sistema de niveles y experiencia. Y tambien decirte que tienes a tu disposición un canal de #sala-de-soporte para preguntar dudas y una #cantina-off-rol donde puedes hablar sin tener que rolear.`);
  }
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(channel => channel.name === "hall-del-aurius");
  if (!channel) return;
  channel.send(`Bienvenido tripulante ${member}, a las puertas del Aurius, soy “BOT-365” el robot de abordo de la base estelar. Voy a intentar ayudarte en tus primeros pasos en esta nave mientras un <@&511984031517114388> tramita tu petición de acceso.  \n          •Primero y antes que nada, para entrar y obtener el rango de cadete, deberás vestir el uniforme de la Red Squad, tanto en RR como en el Discord. Si aún no tienes un uniforme puedes ponerte en contacto con cualquiera de los Mandos para que te diseñen un a tu medida. \n          •Una vez tengas tu uniforme colocado solo deberás presentarte debidamente y cualquiera de los mandos te dará la bienvenida a nuestra familia, junto con el rango de cadete y acceso a la nave. \n Recuerda, que este proyecto está basado en el rol, piensa cómo quieres actuar con tu personaje, y llevarlo como más te guste, dentro solo existen salas de rol, donde deberás interpretar a tu personaje. Aconsejamos leer el #panel-de-informacion para que puedas ver como funciona el sistema de niveles y experiencia. Y tambien decirte que tienes a tu disposición un canal de #sala-de-soporte para preguntar dudas y una #cantina-off-rol donde puedes hablar sin tener que rolear.`);
});

client.login(process.env.BOT_TOKEN);
