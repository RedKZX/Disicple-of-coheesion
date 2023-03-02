const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');
  
const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, 'Somebody say minesweeper?');
});

client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(message == '!hello') {
        client.say(channel, `@${user.username}, Cohen uses a cronus!`);
    }
});

//Discord

client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(message == '!discord') {
        client.say(channel, `@${user.username}, Join Coheesions discord for notifications! https://discord.gg/H4ue4ZPJg2`);
    }
});

