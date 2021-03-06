class Car {

    constructor (ctx) {
        this.ctx = ctx

        this.img = new Image ()
        this.img.src = './images/car.png'

        this.x = this.ctx.canvas.width / 2 - 25
        this.y = this.ctx.canvas.height - 150
        this.w = 50
        this.h = 80

        this.vx = 20
        this.vy = 0
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    move(direction) {
        if (this. _checkLimits()){
            switch (direction) {
                case 'left':
                    this.x -= this.vx;
                    break;
                case 'right':
                    this.x += this.vx;
                    break;
            }

        }
    }

    _checkLimits() {
        if (this.x < 50 ) {
            this.x = 50
            return false
        } else if (this.x + this.w> this.ctx.canvas.width - 50 ) {
            this.x = this.ctx.canvas.width - 50 - this.w
            return false
        }
        return true
    }
} 