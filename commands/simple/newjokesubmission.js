const Commando = require('discord.js-commando');

class SendJokeCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'jokesubmissionnew',
            group: 'simple',
            memberName: 'jokesubmissionnew',
            description: 'Submit jokes to Sylveon bot!'
        });
    }


    async run(message, args) {
       var channel = '499781641154068491'
       messaeg.channel.send('test')
    }

}

module.exports = SendJokeCommand;