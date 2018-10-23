const Commando = require('discord.js-commando');

class SubmitCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'joke-submit',
            group: 'simple',
            memberName: 'joke-submit',
            description: 'Submit jokes to Sylveon bot!'
        });
    }


    async run(message, args) {
        messaeg.channel.send("Hey " + message.author + " You can submit jokes here! https://docs.google.com/document/d/1sQyRty3VcOR4zKKkFH0tCkI4eqJ0IfgwtJvzKcGMfa8/edit?usp=sharing")
    }

}

module.exports = SubmitCommand;