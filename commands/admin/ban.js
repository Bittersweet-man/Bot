const Commando = require('discord.js-commando');

class BanCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Bans a user'
        });
    }
        
        
    async run(message, args)
    {
        let bannedUser = message.guild.member(message.mentions.users.first());    
        if(!bannedUser)
        {
            message.channel.send("Sorry, I cound't find that person");
            return;
        }   
        if(!message.member.hasPermission("ADMIN_PERMS"))
        {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(bannedUser).ban(reason)
           .then(console.log)
           .catch(console.error);
           message.reply("Yee Haw")
        var channel = message.guild.channels.find("name", "modlogs");
        channel.send("A user was just banned! Banned User " + bannedUser + " Banned By " + message.author)
    }
}

module.exports = BanCommand;