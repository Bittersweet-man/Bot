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
    }
    async run(message, args) {
       var channel = '504128003954180107'
        message.channel.send("test")
    }

}

module.exports = SubmitCommand;