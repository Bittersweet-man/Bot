const Commando = require('discord.js-commando');

class ExplodeCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'explode',
            group: 'simple',
            memberName: 'explode',
            description: 'Make the bot go boom'
        });
    }


    async run(message, args) {
      message.channel.send('Are you sure you want to make me explode?')
      const msgs = await message.channel.awaitMessages(msg => { 
        console.log(msg.content) ;
        return msg.content;
        if(message.content.includes('yes'))
        message.channel.send('I have gone kaplewy')
      }, {time: 5000});
    }
}



module.exports = ExplodeCommand;