const Commando = require('discord.js-commando');
const TOKEN = process.env.TOKEN;
const commandPrefix = '?'
const bot = new Commando.Client({
    commandPrefix: '?'
});
var prefix = commandPrefix
const discord = require('discord.js');


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('math', 'Math');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(TOKEN);

global.servers = {};

bot.on('ready', () => {
    console.log("Ready");
    const channel = bot.channels.get('500380461391020042')
    channel.send("I am online!")
    bot.user.setActivity("Type ?help", {
        type: 'WATCHING'
    })
});




bot.on("guildMemberAdd", function (member) {
    member.send("Hello! Welcome to sylveon land, here we meme the crap out of our existence! Read #welcome-rules before typing away!");
    let memberRole = member.guild.roles.find("name", "Newcomer");
    member.addRole(memberRole);
    var channel = bot.channels.get('500450322347589632')
    channel.send(member + ", Hello! Welcome to Sylveon land, here we meme the crap out of our existence! Read " + bot.channels.get('473670157948944384') + " before typing away!")

});




bot.on('message', function (message) {
    if (message.content == commandPrefix + 'hello') {
        message.channel.send('Hello ' + message.author + ', how are you?');
    }
    if (message.content == "Join") {
        message.member.send("Welcome to the server!");
        let memberRole = message.member.guild.roles.find("name", "Newcomer");
        message.member.addRole(memberRole);
        var channel = bot.channels.get('500450322347589632')
        channel.send(message.author + ", Hello! Welcome to Sylveon Land, here we meme the crap out of our existence! Read #welcome-rules before typing away!")
    }
});

bot.on('message', function (message) {
    if (message.content.includes('die')) {
        message.channel.send('please dont')
    }
});

bot.on('message', function (message) {
    if (message.content.includes('sylveon')) {
        message.channel.send('**omg **' + message.author + '** what do you want now?**')
    }
});

bot.on('message', function (message) {
    if (message.content.includes('twenty one pilots')) {
        message.channel.send('they\'re emo dont @ me')
    }
});

bot.on('message', function (message) {
    if (message.content.includes('Jack')) {
        message.channel.send('HE IS BOT DADDY')
    }
});
bot.on('message', function (message) {
    if (message.content.includes('jack')) {
        message.channel.send('HE IS BOT DADDY')
    }
});
bot.on('message', function (message) {
    if (message.content.includes('bittersweet')) {
        message.channel.send('HE IS BOT DADDY')
    }
});
bot.on('message', function (message) {
    if (message.content.includes('Bittersweet')) {
        message.channel.send('HE IS BOT DADDY')
    }
});
bot.on('message', function (message) {
    if (message.content.includes('test')) {
       message.react('\:eye:')
    }
});