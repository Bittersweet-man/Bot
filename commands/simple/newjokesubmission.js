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
       var channel = '499781641154068491'
       messaeg.channel.send('test')
    }

}

module.exports = SubmitCommand;