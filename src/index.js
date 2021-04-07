import "./styles/index.scss";
import "./images/yoda-stitch.jpg";
import canvasExample from "./scripts/canvas";
import Square from "./scripts/square";
import drawBrick from './scripts/brick'
import { DOMExample } from "./scripts/DOMExample";
import startGame from "./scripts/brick";
import tomatopng from './images/tomato.png'

const currentStateObj = {
  currentExample: null,
  currentEventListeners: [],
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;


let score = 0;
let gameFrame = 0;
ctx.font = "30px Bungee Shade";

let canvasPos = canvas.getBoundingClientRect();
console.log(canvasPos);

const keys = {
  leftPressed: false,
  rightPressed: false
}

document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      keys.leftPressed = true;
      break;
    case 39:
      keys.rightPressed = true;
      break;
  }
});

document.addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    case 37:
      keys.leftPressed = false;
      break;
    case 39:
      keys.rightPressed = false;
      break;
  }
});

// canvas.addEventListener('mouseup', function (event) {
//     mouse.click = false;
//     console.log(mouse.x, mouse.y)
// });


//food
const tomato = new Image();
tomato.src = './dist/images/tomato.png'
const lettuce = new Image(); 
lettuce.src = './dist/images/lettuce.png'
const bread = new Image();
bread.src = './dist/images/bread.png'
const bacon = new Image();
bacon.src = './dist/images/bacon.png'
const mayo = new Image();
mayo.src = './dist/images/mayo.png'
const mayoflat = new Image();
mayoflat.src = './dist/images/mayoflat.png'
const ingredients = [tomato, mayo, lettuce, bacon, tomato, mayo, lettuce, bacon, bread]


const foodArr = [];
class Food {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -100;
    this.radius = 50;
    this.counted = false;
    this.ingredient = ingredients[Math.floor(Math.random() * ingredients.length)]
  }

  update() {
    const dy = canvas.height+100;
    if (dy != this.y) {
      this.y += 5;
    }
  }
  
  draw() {
    ctx.drawImage(this.ingredient, 0, 0, 1000, 1000, this.x, this.y, 250, 250); 
  }

}



class Bread{
  constructor() {
    this.y = canvas.height-100;
    this.x = canvas.width/2;


  }

  update() {
    if (keys.leftPressed && (this.x !== 0)) {
      this.x -= 5;
    }
    if (keys.rightPressed && (this.x !== canvas.width-130)) {
      this.x += 5;
    }
  }

  draw(contacted) {
    let stackx = this.x;
    let stacky = canvas.height - 100;
    ctx.drawImage(bread, 0, 0, 1000, 1000, this.x, canvas.height-100, 300, 300);
    if (contacted) {
      for (let i = 0; i < contacted.length; i++) {
        if (contacted[i].ingredient) {
          ctx.drawImage(contacted[i].ingredient, 0, 0, 1000, 1000, stackx, stacky, 250, 250);
        } else {
          ctx.drawImage(contacted[i], 0, 0, 1000, 1000, stackx, stacky, 250, 250);
        }
        stacky = stacky - 20;
      }
    }
  }
}

const thisbread = new Bread();
const contacted = [];

function handleFood() {
  if (gameFrame % 200 == 0) {
    foodArr.push(new Food());
  }
  for (let i = 0; i < foodArr.length; i++) {
    if ((foodArr[i].y === thisbread.y) && (foodArr[i].x > thisbread.x - 50 && foodArr[i].x < thisbread.x + 50)) {

      if (!foodArr[i].counted) {
        score += 1;
      }
      if (contacted.indexOf(foodArr[i]) === -1 ) {
        debugger
        if (foodArr[i].ingredient.currentSrc.includes("mayo")) {
          contacted.push(mayoflat)
          foodArr[i].counted = true;
          foodArr.shift(foodArr[i])
        } else {
          foodArr[i].counted = true;

          contacted.push(foodArr[i]);
        }
        thisbread.y -= 20;
      }
      
      // foodArr[i].counted = true;
      break;
    }
    thisbread.draw(contacted);

    foodArr[i].update();
    if (contacted.indexOf(foodArr[i]) === -1 && foodArr[i].y < canvas.height) {
      foodArr[i].draw();
    }  

    if (foodArr[i].y > canvas.height) {
      foodArr.shift(foodArr[i])
    }  

    

  }

  
}
//animation 
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  thisbread.draw(contacted);
  thisbread.update();
  handleFood();
  gameFrame++;
  ctx.fillStyle = "white";
  ctx.fillText("score:" + score, 10, 50)
  requestAnimationFrame(animate);
}
animate();


