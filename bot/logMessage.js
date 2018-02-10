const discordjs = require("discord.js");
const webhook = new discordjs.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);

exports.log = function(message, type) {
    const member = message.member;

    if (member && !message.author.bot) {
        const embed = new discordjs.RichEmbed();

        webhook.send(`\nAuthor: **${member.displayName}**\nMessage: **${message.content}**\nChannel: **${message.channel.name}**\nType: **${type}**\nTimestamp: **${new Date()}**\n`);
    };
};
