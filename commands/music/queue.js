const Commando = require('discord.js-commando');

class QueueCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'queue',
            group: 'admin',
            memberName: 'queue',
            description: 'Show the current queue'
        });
    }


    async run(message, args) {
       message.channel.send(playQueue)
    }
}



module.exports = BanCommand;