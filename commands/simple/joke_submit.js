const Commando = require('discord.js-commando');

class TimerCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'timer',
            group: 'simple',
            memberName: 'timer',
            description: 'Set a timer for a certain amout of minutes!'
        });
    }


    async run(message, args) {
        messaeg.channel.send("Hey " + message.author + " You can submit jokes here! https://docs.google.com/document/d/1sQyRty3VcOR4zKKkFH0tCkI4eqJ0IfgwtJvzKcGMfa8/edit?usp=sharing")
    }

}

module.exports = TimerCommand;