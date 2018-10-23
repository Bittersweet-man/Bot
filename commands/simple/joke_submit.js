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
        var channel = message.guild.channels.find("name", "bot-jokes");
        message.channel.send("A new joke was submitted! " + args)
        message.reply("Thank you for your submission!")
    }

}

module.exports = SubmitCommand;