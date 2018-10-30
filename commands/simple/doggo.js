const Commando = require('discord.js-commando');

class DoggoCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'doggo',
            group: 'simple',
            memberName: 'doggo',
            description: 'doggo'
        });
    }


    async run(message, args) {
        message.channel.send(`https://random.dog/woof.json`)
        let test = 'https://random.dog/woof.json'
        message.reply(test)

    }
}

module.exports = DoggoCommand;