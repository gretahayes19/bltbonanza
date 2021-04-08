import Bread from './scripts/bread'
import Food from './scripts/food'
import {MAYOFLAT, keys} from './scripts/util'


let contacted = [];
let foodArr = [];

let score = 0;
let blts = 0;
let ick = 0;
let gameFrame = 0;
let gameOver = false;

// let isSando = false;


// let canvasPos = canvas.getBoundingClientRect();
// console.log(canvasPos);


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
//     console.log(event.x-canvasPos.left, event.y-canvasPos.top)
// });







function breaded() {
  // isSando = true;
  // animate.pause();
  contacted = [];
  foodArr = [];
  let lastbread = thisbread;
  thisbread = new Bread(canvas, ctx, lastbread.x);
}


function grossed() {
  contacted.pop();
  let lastbread = thisbread;
  thisbread = new Bread(canvas, ctx, lastbread.x);
}

function endGame () {
  ctx.fillStyle = "red";
  ctx.fillText("YOU LOSE", 400, 250)
}

function countGross(contacted) {
  let count = 0;
  for (let i = 0; i < contacted.length; i++) {
    let curr = contacted[i];
    if (isGross(curr)) {
      count++;
    }
  }

  ick = count;
}

const isGross = (ingredient) => {
  return ingredient.ingredient?.currentSrc.includes("sock") || ingredient.ingredient?.currentSrc.includes("fish");
}


function handleFood(canvas) {
  if (gameFrame % 50 == 0) {
    let newFood = new Food(canvas, ctx);
    foodArr.push(newFood);
  }

  for (let i = 0; i < foodArr.length; i++) {
    if ((foodArr[i].y === thisbread.y) && (foodArr[i].x > thisbread.x - 50 && foodArr[i].x < thisbread.x + 50)) { 
      if (!foodArr[i].counted) score += 1;
      
      if (contacted.indexOf(foodArr[i]) === -1 ) {
        if (foodArr[i].ingredient.currentSrc.includes("mayo")) {
          contacted.push(MAYOFLAT)
          foodArr[i].counted = true;
          foodArr.shift(foodArr[i])
        } else {
          foodArr[i].counted = true;
          contacted.push(foodArr[i]);
        }

        thisbread.y -= 20;

      }
      break;
    }

    foodArr[i].updateHeight();

    if (contacted.indexOf(foodArr[i]) === -1 && foodArr[i].y < canvas.height) foodArr[i].draw();
    if (foodArr[i].y > canvas.height) foodArr.shift(foodArr[i])
  }

  
}


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
let thisbread = new Bread(canvas, ctx);

//animation 
function animate() {
  if (ick >= 3) {
    thisbread.gameOver = true;
  }
  if (!thisbread.gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    thisbread.draw(contacted);
    thisbread.update();
    countGross(contacted);
    handleFood(canvas);
    ctx.font = "30px Bungee Shade";
    // ctx.fillStyle = "white";
    // ctx.fillText("score: " + score, 10, 30)
    ctx.fillStyle = "white";
    ctx.fillText("BLT Count: " + blts, 10, 30)
    ctx.fillStyle = "white";
    ctx.fillText("Ick: " + ick, 10, 65)
    // if (thisbread.gross) {
    //   ctx.fillStyle = "chartreuse";
    //   ctx.font = "50px Bungee Shade"
    //   ctx.fillText("Ick", 300, 250)
    //   grossed();
    //   ick += 1;
    //   setTimeout(() => {
    //     requestAnimationFrame(animate)
    //   }, 2000)
    //   return;
    // }
    if (thisbread.completed) {
      ctx.fillStyle = "chartreuse";
      ctx.font = "50px Bungee Shade"
      ctx.fillText("That's a BLT!", 300, 250)
      breaded();
      blts += 1;
      setTimeout(() => {
        requestAnimationFrame(animate)
      }, 2000)
      return;
    }
    gameFrame++;

    requestAnimationFrame(animate);
  } else {
    ctx.fillStyle = "red";
    ctx.fillText("YOU LOSE", 400, 250)
  }

}
animate();


