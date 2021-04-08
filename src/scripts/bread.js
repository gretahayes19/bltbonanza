import {isBread, BREAD, keys} from './util'


class Bread {
    constructor(canvas, ctx, x) {
        this.y = canvas.height - 100;
        this.x = x || canvas.width/2;
        // this.counted = false;
        this.completed = false;
        this.gameOver = false;
        // notSando();
        this.canvas = canvas;
        this.ctx = ctx;
    }

    update() {
        if (keys.leftPressed && (this.x !== 0)) this.x -= 5;
        if (keys.rightPressed && (this.x !== this.canvas.width - 130)) this.x += 5;
    }


    draw(contacted) {
        let stackx = this.x;
        let stacky = this.canvas.height - 100;
        this.ctx.drawImage(BREAD, 0, 0, 1000, 1000, this.x, this.canvas.height - 100, 300, 300);

        if (contacted.length) {
            for (let i = 0; i < contacted.length; i++) {
                let currIngredient = contacted[i];
                if (isNotMayo(currIngredient)) {
                    if (isBread(currIngredient)) {
                        this.ctx.drawImage(currIngredient.ingredient, 0, 0, 1000, 1000, stackx, stacky, 300, 300);
                        this.completed = true;
                        // setTimeout(breaded, 2000)
                        // breaded();
                    } else {
                        this.ctx.drawImage(currIngredient.ingredient, 0, 0, 1000, 1000, stackx, stacky, 250, 250);
                        stacky = stacky - 20;

                    }
                } else {
                    this.ctx.drawImage(currIngredient, 0, 0, 1000, 1000, stackx, stacky, 250, 250);
                    stacky = stacky - 20;

                }
                if (stacky < 200) this.gameOver = true;
            }
        }
    }
}

const isNotMayo = (ingredient) => {
    return !!ingredient.ingredient;
}



export default Bread