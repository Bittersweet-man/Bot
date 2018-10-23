const Commando = require('discord.js-commando');

class RandomNumberCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'number',
            group: 'math',
            memberName: 'number',
            description: 'Generates a random number!'
        });
    }
        
        
    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 100) + 1
        message.channel.send(chance)
        
    }
}

module.exports = RandomNumberCommand