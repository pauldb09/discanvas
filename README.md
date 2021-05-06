# discanvas
## From simple image with configurable canvas
### More canvas coming soon

> V1

## Example of code
```js
const RankCard = require('discanvas');
const Discord = require('discord.js');

const rankcard = await new RankCard()
.setAvatar(message.author.avatarURL({ format: 'png' }))
.setLevel(1)
.setCurrentXP(200)
.setRequiredXP(400)
.setProgressBar("#ff5555")
.setUsername("username#7777")
.setTop(1)
.setBackground("https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg")
.toCard()

const attachment = new Discord.MessageAttachment(rankcard.toBuffer(), "RankCard.jpg");
message.channel.send(attachment);
```
![img](https://cdn.discordapp.com/attachments/819995259261288475/839919856513974283/RankCard.jpg)
