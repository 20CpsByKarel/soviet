class Player {
    constructor(X, Y) {
        this.height = 80
        this.width = 80
        this.x = X;
        this.y = Y;

        this.speed = 0;
        this.gravity = 0.25;
        this.jump = - 6.6;

        
        this.DefaultX = this.x;
        this.DefaultY = this.y;
        this.DefaultSpeed = this.speed;
    }
    
    
    Render() { //TODO - Top fix
	var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
	my_gradient.addColorStop(0, "#8c2727");
	my_gradient.addColorStop(1, "#570909");
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0, 0, okno.ln, okno.lp);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.drawImage(PlayerSkin, this.x, this.y - this.height, this.width, this.height)
if (Game.StatusPoint > 10) {
	var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
	my_gradient.addColorStop(0, "black");
	my_gradient.addColorStop(1, "grey");
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0, 0, okno.ln, okno.lp);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.drawImage(PlayerSkin, this.x, this.y - this.height, this.width, this.height)
}
if (Game.StatusPoint > 20) {
	var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
	my_gradient.addColorStop(0, "green");
	my_gradient.addColorStop(1, "blue");
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0, 0, okno.ln, okno.lp);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.drawImage(PlayerSkin, this.x, this.y - this.height, this.width, this.height)
}
if (Game.StatusPoint > 25) {
	var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
	my_gradient.addColorStop(0, "#8c2727");
	my_gradient.addColorStop(1, "#570909");
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0, 0, okno.ln, okno.lp);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.drawImage(PlayerSkin, this.x, this.y - this.height, this.width, this.height)
}


        if (Game.Status == true) {
            this.Move();
        }
        if (this.y > Ground.y - 210 - this.height / 2) {
            this.speed = 0;
            Game.GameOver();
        }
        if (this.y < this.height) {
            this.speed = 0;
            Game.GameOver();
        }
    }
    Move() {
        this.speed += this.gravity;
        this.y += this.speed;
    }
    Jump() {
        this.speed = this.jump;
    }



}