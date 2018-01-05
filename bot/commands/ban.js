exports.run = function(client, message, args) {
    const user = message.mentions.users.array()[0];
    const reason = args[1]

    const member = message.guild.members.find("id", user.id);

    if (member) { // To be on the safe side.
        if (typeof(reason) == "string") {
            let banRole = message.guild.roles.find("name", "Banned");
            if (banRole) {
                for (role in member.roles.array()) {
                    member.removeRole(role, "This user is banned.");
                };
                member.addRole(banRole, reason);

                message.channel.send(`**${member.username}** has been banned for 2 hours.`);
                return member.send(`You have been banned in **The Gaming Squad**.\n\nFor reason: **${reason}**`);
            } else {
                return message.reply(":x: Unable to find the **Banned** role. The user has not been banned.");
            };
        }
    };
};

exports.help = {
    "permission_level": 1,
    "name": "Ban",
    "usage": `<@User> <Reason>`
};
