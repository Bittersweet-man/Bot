const Commando = require('discord.js-commando');
import * as superAgent from 'superagent'

class DoggoCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'doggo',
            group: 'simple',
            memberName: 'doggo',
            description: 'doggo'
        });
    }
        
        
    async run(message, args)
    {
        let{body} = await superAgent
        .get(`https://random.dog/woof.json`)
       message.channel.send(body.url)
    }
}

module.exports = DoggoCommand;