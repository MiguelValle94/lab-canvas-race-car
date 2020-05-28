class Road {

    constructor(ctx) {
        this.ctx = ctx

        this.w = ctx.canvas.width
        this.h = ctx.canvas.height

        this.car = new Car(ctx)

        this.obs = new Obstacle(ctx)
        this.intervalObs = 0
    }

    draw() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.w, this.h)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0, this.w - 80, this.h)

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, this.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(this.w - 50, 0)
        this.ctx.lineTo(this.w - 50, this.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.setLineDash([25, 30])
        this.ctx.beginPath()
        this.ctx.moveTo(this.w / 2, 0)
        this.ctx.lineTo(this.w / 2, this.h)
        this.ctx.stroke()
        this.ctx.closePath()
    }
}