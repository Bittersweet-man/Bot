const Commando = require('discord.js-commando');

class AddCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'add(wip)',
            group: 'math',
            memberName: 'add(wip)',
            description: 'Add two numbers together!'
        });
    }
        
        
    async run(message, args)
    {
       
    }
}

module.exports = AddCommand;