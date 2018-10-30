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
        let doggo = await promise
            .get(`https://random.dog/woof.json`)
        let promise = resolve
        message.channel.send(doggo)

    }
}

module.exports = DoggoCommand;