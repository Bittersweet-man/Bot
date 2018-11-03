const Commando = require('discord.js-commando');

class TestCommand extends Commando.Command
{
    constructor(client)
        {
        super(client,{
            name: 'test',
            group: 'music',
            memberName: 'test',
            description: 'Just a test, will be removed soon'
        });
    }
        
        
    async run(message, args)
    {
        message.reply("joined")
        message.member.voiceChannel.join()
    }
}

module.exports = TestCommand;