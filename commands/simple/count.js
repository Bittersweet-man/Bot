const Commando = require('discord.js-commando');

class CountCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'count',
            group: 'simple',
            memberName: 'count',
            description: 'ADMIN ONLY'
        });
    }
        
        
    async run(message, args)
    {
        if(!message.member.hasPermission("ADMIN_PERMS"))
        messaeg.send("You do not have permission!")
        var count = count + 1
        message.channel.send(count)
    }
}

module.exports = CountCommand;