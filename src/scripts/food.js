import { isBread, BREAD } from './util'

//food
const TOMATO = new Image();
TOMATO.src = './dist/images/tomato.png'
const LETTUCE = new Image();
LETTUCE.src = './dist/images/lettuce.png'

const BACON = new Image();
BACON.src = './dist/images/bacon.png'
const MAYO = new Image();
MAYO.src = './dist/images/mayo.png'


const INGREDIENTS = [TOMATO, MAYO, LETTUCE, BACON, TOMATO, MAYO, LETTUCE, BACON, BREAD, BREAD, BREAD]

class Food {
    constructor(canvas, ctx) {
        this.x = Math.random() * canvas.width;
        this.y = -100;
        this.counted = false;
        this.ingredient = INGREDIENTS[Math.floor(Math.random() * INGREDIENTS.length)]
        this.ctx = ctx;
        this.canvas = canvas;

        if (this.x > 700) this.x -= 100;
    }

    updateHeight() {
        const dy = this.canvas.height + 100;
        if (dy != this.y) this.y += 5;
    }

    draw() {
        // debugger
        if (this.ingredient.currentSrc.includes("bread")) {
            this.ctx.drawImage(this.ingredient, 0, 0, 1000, 1000, this.x, this.y, 300, 300);
        } else {
            this.ctx.drawImage(this.ingredient, 0, 0, 1000, 1000, this.x, this.y, 250, 250);
        }
    }

}

export default Food;