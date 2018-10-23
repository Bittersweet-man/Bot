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
        message.reply("Thank you for your submission!")
        var channel = '499781641154068491'
        message.channel.send("A new joke was submitted! " + args)
    }

}

module.exports = SubmitCommand;