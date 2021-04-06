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
ctx.font = "50px Georgia";

//Mouse Stuff

let canvasPos = canvas.getBoundingClientRect();
console.log(canvasPos);

const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false
}



canvas.addEventListener('mousedown', function (event) {
  mouse.click = true;
  mouse.x = event.x - canvasPos.left;
  mouse.y = event.y - canvasPos.top;
  // console.log(mouse.x, mouse.y)
});

const keys = {
  leftPressed: false,
  rightPressed: false
}

document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      keys.leftPressed = true;
      break;
    case 38:
      alert('up');
      break;
    case 39:
      keys.rightPressed = true;
      break;
    case 40:
      alert('down');
      break;
  }
});

document.addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    case 37:
      keys.leftPressed = false;
      break;
    case 38:
      alert('up');
      break;
    case 39:
      keys.rightPressed = false;
      break;
    case 40:
      alert('down');
      break;
  }
});

canvas.addEventListener('mouseup', function (event) {
    mouse.click = false;
    console.log(mouse.x, mouse.y)
});


//food
const tomato = new Image();
tomato.src = './dist/images/tomato.png'
const lettuce = new Image(); 
lettuce.src = './dist/images/lettuce.png'
const bread = new Image();
bread.src = './dist/images/bread.png'
const ingredients = [tomato, lettuce]


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
    if (keys.rightPressed && (this.x !== canvas.width)) {
      this.x += 5;
    }
  }

  draw(contacted) {
    let stackx = this.x;
    let stacky = this.y - 20;
    ctx.drawImage(bread, 0, 0, 1000, 1000, this.x, this.y, 300, 300);
    if (contacted) {
      for (let i = 0; i < contacted.length; i++) {
        ctx.drawImage(contacted[i].ingredient, 0, 0, 1000, 1000, stackx, stacky, 250, 250);
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
      contacted.push(foodArr[i]);
      foodArr[i].counted = true;
      break;
    }
    thisbread.draw(contacted);

    foodArr[i].update();
    foodArr[i].draw();

  }

  
}
//animation 
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  thisbread.draw(contacted);
  thisbread.update();
  handleFood();
  // food.update();
  gameFrame++;
  ctx.fillStyle = "black";
  ctx.fillText("score:" + score, 10, 50)
  requestAnimationFrame(animate);
}
animate();


