const Discord = require('discord.js');
const client = new Discord.Client();
client.on('guildMemberAdd', member => {
      if(member.guild.id !== '477149000987049984') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '495636666619396105').send('**Welcome To Star Central .**');
},3000);
});


client.login(process.env.BOT_TOKEN);
