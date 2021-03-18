module.exports = {
    name: 'CALLOUT', // the string to look for. if the message starts with a period and is this string, run the js from execute.
    description: 'DESCRIPTION', // entirely internal right now. there's no use for this except for reference.
    execute(msg, args) { // anything in this is run when the bot hears the callout.
        msg.channel.send('MESSAGE SENT');
        eventOut('SENT TO EVENT BOX') // sends output to the event box (yellow box) in the client.
    },
};