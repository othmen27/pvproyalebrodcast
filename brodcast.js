const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login('NTIxMjg0NTUzODM1NDEzNTM0.Du6OGw.hwsPYNqpfE6rImXE-Gb5vSbzxKQ');






client.on('message', message => {
    var prefix = "$";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**f!bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
	
	
	
client.login('NTIxMjg0NTUzODM1NDEzNTM0.Du6OGw.hwsPYNqpfE6rImXE-Gb5vSbzxKQ');






client.on('ready', () => {
   console.log(`----------------`);
      console.log(`skran`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`اصبر فالصبر من الايمان`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});

client.login('NTIxMjg0NTUzODM1NDEzNTM0.Du6OGw.hwsPYNqpfE6rImXE-Gb5vSbzxKQ');


client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('$bc-bot')){ // البريفكس والامر
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });

client.login('NTIxMjg0NTUzODM1NDEzNTM0.Du6OGw.hwsPYNqpfE6rImXE-Gb5vSbzxKQ');
