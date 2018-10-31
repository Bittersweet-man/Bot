const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: '?'
});
class WelcomeChannelCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'welcomechannel',
            group: 'admin',
            memberName: 'welcomechannel',
            description: 'Set the channel the bot welcomes new members in!'
        });
    }


    async run(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        const welcomeChannel = args
        message.channel.send('You set the welcome channel to ' + welcomeChannel)
        });
        
    }
}



module.exports = WelcomeChannelCommand;