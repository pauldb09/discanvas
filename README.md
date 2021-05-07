# discanvas
## From simple image with configurable canvas
### More canvas coming soon

discanvas

> V1

## Example of code
```js
const RankCard = require('discanvas');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => console.log('I am ready!'));

client.on('message', async (message) => {
    if(message.content === '!rank') {
        const rankcard = await new discanvas.RankCard()
            .setAvatar(message.author.avatarURL({ format: 'png' }))
            .setLevel(1)
            .setCurrentXP(200)
            .setRequiredXP(400)
            .setProgressBar("#ff5555")
            .setUsername(message.member.user.username)
            .setDiscriminator(message.member.user.discriminator)
            .setTop(1)
            .setBackground('https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg')
            .setSquareOpacity(0.2)
            .setBorderColor("#00ff55")
            .toCard()
            .toCard();

        const attachment = new Discord.MessageAttachment(rankcard.toBuffer(), 'RankCard.jpg');
        await message.channel.send(attachment);
    }
});

client.login('your token');
```
![img](https://cdn.discordapp.com/attachments/819995259261288475/840151051440226304/RankCard.jpg)
