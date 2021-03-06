const discanvas = require('discanvas');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!')
});
client.on('guildMemberAdd', member => {
    const welcome = await new discanvas.Welcome()
    .setAvatar(member.user.displayAvatarURL({ format: 'png' }))
    .setUsername(member.user.tag)
    .setBackground("https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg")
    .setMainText("Welcome")
    .setSecondText(`We are now ${member.guild.memberCount} in the guild !`)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome()

    const attachment = new Discord.MessageAttachment(welcome.toBuffer(), "welcome.jpg");
    const welcomeChannel = client.channels.cache.get("id channel")
    welcomeChannel.send(`Welcome ${member.user.username}`, attachment);
});
client.on('guildMemberRemove', member => {
    const leave = await new discanvas.Leave()
    .setAvatar(member.user.displayAvatarURL({ format: 'png' }))
    .setUsername(member.user.tag)
    .setBackground("https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg")
    .setMainText("Good bye")
    .setSecondText("Your departure makes us sad")
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toLeave()

    const attachment = new Discord.MessageAttachment(leave.toBuffer(), "leave.jpg");
    const leaveChannel = client.channels.cache.get("id channel")
    leaveChannel.send(`Good bye ${member.user.username}`, attachment);
});

client.on('message', async (message) => {
    if (message.content === "!rankcard") {
        const rankcard = await new discanvas.RankCard()
        .setAvatar(message.author.avatarURL({ format: 'png' }))
        .setLevel(1)
        .setCurrentXP(200)
        .setRequiredXP(400)
        .setProgressBar("#ff5555")
        .setUsername(message.member.user.username)
        .setDiscriminator(message.member.user.discriminator)
        .setTop(1)
        .setBackground("https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg")
        .setSquareOpacity(0.5)
        .setBorderColor("#00ff55")
        .toCard()

        const attachment = new Discord.MessageAttachment(rankcard.toBuffer(), "RankCard.jpg");
        message.channel.send(attachment);
    }
});
