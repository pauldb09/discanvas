const Canvas = require('canvas');
Canvas.registerFont("./Roboto-Black.ttf", { family: 'Roboto' })
/*
By squarfiuz07
My Youtube Channel : https://www.youtube.com/channel/UC2ACluqDgpeNbexpdaTACmw
My Instagram : https://www.instagram.com/squarfiuz07/
My Discord : https://discord.gg/A59kDPN 
*/

module.exports = class leave {
    constructor() {
        this.avatar = "https://cdn.discordapp.com/attachments/764776215273406464/839817855738576896/unknown.png"
        this.username = "username#0000"
        this.circleColor = "#fff"
        this.mainText = "Goodbye"
        this.mainTextColor = "#fff"
        this.secondText = ""
        this.secondTextColor = "#fff"
        this.pseudoColor = "#fff"
        this.background = ""
    }
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    setUsername(value) {
        this.username = value;
        return this;
    }
    setCircleColor(value) {
        this.circleColor = value;
        return this;
    }
    setMainText(value) {
        this.mainText = value;
        return this;
    }
    setMainTextColor(value) {
        this.mainTextColor = value;
        return this;
    }
    setSecondText(value) {
        this.secondText = value;
        return this;
    }
    setSecondTextColor(value) {
        this.secondTextColor = value;
        return this;
    }
    setPseudoColor(value) {
        this.pseudoColor = value;
        return this;
    }
    setBackground(value) {
        this.background = value;
        return this;
    }

    async toLeave() {
        const canvas = Canvas.createCanvas(800, 350);
        const ctx = canvas.getContext('2d');

        if (this.background || this.background !== "") {
            const background = await Canvas.loadImage(this.background);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        }

        ctx.font = '68px "Roboto Black"';
        ctx.fillStyle = this.mainTextColor;
        ctx.textAlign = "center";
        ctx.fillText(this.mainText.toUpperCase(), 400, 245);

        ctx.font = '35px "Roboto Black"';
        ctx.fillStyle = this.pseudoColor;
        ctx.textAlign = "center";
        ctx.fillText(this.username.toUpperCase(), 400, 287.5);

        ctx.font = '27px "Roboto Black"';
        ctx.fillStyle = this.secondTextColor;
        ctx.textAlign = "center";
        ctx.fillText(this.secondText.toUpperCase(), 400, 325);

        ctx.beginPath();
        ctx.fillStyle = this.circleColor;
        ctx.arc(400, 100, 80, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(400, 100, 75, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(await Canvas.loadImage(this.avatar), 325, 25, 150, 150);
        return canvas;
    }
};