import {
    getRandomArbitrary,
    getRandomColor,
    getRandomDirection,
    getRandomInt,
} from '../utils/random'

const colorPool = ['#FFFF00', '#00FFFF', '#FF00FF']

class Particle {
    x: number
    y: number
    direction: number
    speed: number
    opacity: number
    color: string
    size: number
    deleted: boolean = false

    constructor(stageWidth: number, stageHeight: number) {
        this.x = stageWidth / 2
        this.y = stageHeight / 2
        this.color = getRandomColor(colorPool)
        this.direction = getRandomDirection()
        this.speed = getRandomArbitrary(2, 3)
        this.size = getRandomInt(1, 10)
        this.opacity = 1
    }

    update() {
        this.x += Math.cos(this.direction) * this.speed
        this.y += Math.sin(this.direction) * this.speed
        this.opacity -= 0.01 * this.speed
        if (this.opacity < 0) {
            this.opacity = 0
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        this.update()
        ctx.beginPath()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.size, this.size)
        ctx.fill()
        ctx.globalAlpha = 1.0
        return [this.x, this.y]
    }
}

export class PopEffect {
    particles: Particle[] = []
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    stageWidth: number = 300
    stageHeight: number = 300

    constructor(event: MouseEvent) {
        this.canvas = document.createElement('canvas')
        this.canvas.style.position = 'fixed'
        this.canvas.style.zIndex = '1'
        this.canvas.style.pointerEvents = 'none'
        this.canvas.style.top = `${event.pageY - this.stageHeight / 2}px`
        this.canvas.style.left = `${event.pageX - this.stageWidth / 2}px`
        document.body.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d')!
        this.resize()
        this.addParticles()
        requestAnimationFrame(this.render.bind(this))
    }
    resize() {
        this.canvas.width = this.stageWidth
        this.canvas.height = this.stageHeight
    }
    addParticles() {
        for (let i = 0; i < 30; i++) {
            this.particles.push(new Particle(this.stageWidth, this.stageHeight))
        }
    }
    render() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        this.particles = this.particles.filter((p) => p.deleted === false)
        if (!this.particles.length) return this.delete()

        this.particles.forEach((particle) => {
            const [x, y] = particle.render(this.ctx)
            if (x < 0 || y < 0 || y > this.stageHeight || x > this.stageWidth) {
                particle.deleted = true
            }
        })
        requestAnimationFrame(this.render.bind(this))
    }
    delete() {
        this.canvas.remove()
    }
}
