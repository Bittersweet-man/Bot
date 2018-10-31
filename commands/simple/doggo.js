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
        let promise = 'resolve'
        let doggo = await superAwait
            .get(`https://random.dog/woof.json`)
        message.channel.send(doggo)

    }
}

module.exports = DoggoCommand;