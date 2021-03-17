module.exports = {
    name: 'status',
    description: 'Status callout, returns alive if online.',
    execute(msg, args) {
        msg.channel.send('Alive!');
    },
};