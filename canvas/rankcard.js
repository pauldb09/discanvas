const Canvas = require('canvas');

/*
By squarfiuz07
Discanvas
My Youtube Channel : https://www.youtube.com/channel/UC2ACluqDgpeNbexpdaTACmw
My Instagram : https://www.instagram.com/squarfiuz07/
My Discord : https://discord.gg/A59kDPN 
*/

module.exports = class RankCard {
    constructor() {
        this.avatar = "https://cdn.discordapp.com/attachments/764776215273406464/839817855738576896/unknown.png"
        this.level = 1
        this.currentXP = 100
        this.requiredXP = 200
        this.progressBar = "#ff5555"
        this.username = "username#0000"
        this.top = 1
        this.background = ""
        this.backgroundColor = ""
        this.squareOpacity = 0.7
        this.borderColor = "#ff5555"
    }
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    setLevel(value) {
        this.level = value;
        return this;
    }
    setCurrentXP(value) {
        this.currentXP = value;
        return this;
    }
    setRequiredXP(value) {
        this.requiredXP = value;
        return this;
    }
    setProgressBar(value) {
        this.progressBar = value;
        return this;
    }
    setTop(value) {
        this.top = value;
        return this;
    }
    setUsername(value) {
        this.username = value;
        return this;
    }
    setDiscriminator(value) {
        this.discriminator = value;
        return this;
    }
    setBackground(type, value) {
        if(type == "BACKGROUND"){
            this.background = value;
            return this;
        }else if(type == "COLOR"){
            this.backgroundColor = value;
            return this;
        }else{
            throw "The first argument of .setBackground must be 'COLOR' or 'BACKGROUND'.";
        }
    }
    setSquareOpacity(value) {
        this.squareOpacity = value;
        return this;
    }
    setBorderColor(value) {
        this.borderColor = value;
        return this;
    }

    async toCard() {
        const xpBarre = Math.floor(this.currentXP / this.requiredXP * 490);

        const canvas = Canvas.createCanvas(800, 300);
        const ctx = canvas.getContext('2d');

        if(this.background || this.background !== ""){
            const background = await Canvas.loadImage(this.background);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        }

        if (this.backgroundColor || this.backgroundColor !== "") {
            ctx.beginPath();
            ctx.fillStyle = this.backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        if(this.borderColor || this.borderColor !== ""){
            ctx.strokeStyle = this.borderColor;
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
        }

        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.globalAlpha = this.squareOpacity;
        ctx.fillRect(20, 20, 760, 260);
        ctx.closePath();

        ctx.globalAlpha = 1;
        ctx.font = '35px "Roboto Black"';
        ctx.fillStyle = '#fff';
        if(this.username.length > 15){
            const username = this.username;
            ctx.fillText(`${username.slice(0, 15) + "..."}`, 225, 125);
            ctx.fillText(this.discriminator, (15 * 19.5 + (3 * 6)) + 225, 125)
        }else{
            ctx.fillText(this.username, 225, 125);
            ctx.fillText(`#${this.discriminator}`, ((this.username.length * 19) - (this.username.length * 1.4)) + 225, 125)
        }

        ctx.globalAlpha = 1;
        ctx.font = '38px "Roboto Black"';
        ctx.fillStyle = '#fff';
        ctx.fillText(`Level : ${this.level}`, 570, 65);
        
        ctx.globalAlpha = 1;
        ctx.font = '38px "Roboto Black"';
        ctx.fillStyle = '#fff';
        ctx.fillText(`Rank : ${this.top}`, 370, 65);

        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.lineWidth = 2;
        ctx.fillStyle = "#fff";
        ctx.moveTo(220, 135);
        ctx.lineTo(690, 135);
        ctx.quadraticCurveTo(710, 135, 710, 152.5);  
        ctx.quadraticCurveTo(710, 170, 690, 170);
        ctx.lineTo(220, 170);
        ctx.lineTo(220, 135);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.lineWidth = 2;
        ctx.fillStyle = this.progressBar;
        ctx.moveTo(220, 135);
        ctx.lineTo(220 + xpBarre - 20, 135);
        ctx.quadraticCurveTo(220 + xpBarre, 135, 220 + xpBarre, 152.5); 
        ctx.quadraticCurveTo(220 + xpBarre, 170, 220 + xpBarre-20, 170); 
        ctx.lineTo(220, 170);
        ctx.lineTo(220, 135);
        ctx.fill();
        ctx.font = '28px "Roboto Black"';
        ctx.fillStyle = "#000";
        ctx.fillText(`${this.currentXP} / ${this.requiredXP} xp`, 230, 162)
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = await Canvas.loadImage(this.avatar);
        ctx.drawImage(avatar, 25, 50, 200, 200);
        return canvas;
    }
};
