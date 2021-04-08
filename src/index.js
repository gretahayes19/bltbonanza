import Bread from './scripts/bread'
import Food from './scripts/food'
import {MAYOFLAT, keys} from './scripts/util'


let contacted = [];
let foodArr = [];

let score = 0;
let blts = 0;
let ick = 0;
let duplicates = false;
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
    case 32:
      restart();
      break;
  }
});




// canvas.addEventListener('mouseup', function (event) {
//     console.log(event.x-canvasPos.left, event.y-canvasPos.top)
// });







function breaded() {
  contacted = [];
  foodArr = [];
  let lastbread = thisbread;
  thisbread = new Bread(canvas, ctx, lastbread.x);
}


// function grossed() {
//   contacted.pop();
//   let lastbread = thisbread;
//   thisbread = new Bread(canvas, ctx, lastbread.x);
// }

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

function isBLT(contacted) {
    let mayo = 0;
    let tomato = 0;
    let lettuce = 0;
    let bacon = 0; 
    for (let i = 0; i < contacted.length; i++) {
      let curr = contacted[i];
      if (!curr.ingredient) {
        mayo++
      } else if (curr.ingredient.currentSrc.includes("tomato")) {
        tomato++
      } else if (curr.ingredient.currentSrc.includes("lettuce")) {
        lettuce++
      } else if (curr.ingredient.currentSrc.includes("bacon")) {
        bacon++
      } 
    }

    return ((mayo > 0) && (tomato > 0) && (lettuce > 0) && (bacon > 0))
}




function areDuplicates(contacted) {
    let mayo = 0;
    let tomato = 0;
    let lettuce = 0;
    let bacon = 0;
    for (let i = 0; i < contacted.length; i++) {
      let curr = contacted[i];
      if (!curr.ingredient) {
        mayo++
      } else if (curr.ingredient.currentSrc.includes("tomato")) {
        tomato++
      } else if (curr.ingredient.currentSrc.includes("lettuce")) {
        lettuce++
      } else if (curr.ingredient.currentSrc.includes("bacon")) {
        bacon++
      }
    }

    if ((mayo > 1) || (tomato > 1) || (lettuce > 1) || (bacon > 1)) {
      duplicates = true;
    }
}




function handleFood(canvas) {
  if (gameFrame % 15 == 0) {
    let newFood = new Food(canvas, ctx);
    foodArr.push(newFood);
  }

  for (let i = 0; i < foodArr.length; i++) {
    if ((foodArr[i].y === thisbread.y) && (foodArr[i].x > thisbread.x - 70 && foodArr[i].x < thisbread.x + 70)) { 
      if (!foodArr[i].counted) score += 1;
      
      if (contacted.indexOf(foodArr[i]) === -1 ) {
        if (foodArr[i].ingredient.currentSrc.includes("mayo")) {
          contacted.push(MAYOFLAT)
          foodArr[i].counted = true;
          foodArr.splice(i, i);
        } else {
          foodArr[i].counted = true;
          contacted.push(foodArr[i]);
        }

        thisbread.y -= 20;
        console.log(thisbread.y);

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
  if (ick >= 2) {
    ctx.fillStyle = "red";
    ctx.font = "80px Londrina Solid"
    ctx.fillText("YUCK!", 200, 250)
    ctx.font = "40px Londrina Solid"
    ctx.fillText("Hit space to restart", 200, 300)
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
  } else if (duplicates) {
    ctx.fillStyle = "red";
    ctx.font = "80px Londrina Solid"
    ctx.fillText("NO DUPLICATES!", 200, 250)
    ctx.font = "40px Londrina Solid"
    ctx.fillText("Hit space to restart", 200, 300)
    

    thisbread.gameOver = true;
    requestAnimationFrame(animate);
  } 
  
  if (!thisbread.gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // //draw green line
    // ctx.beginPath();
    // ctx.moveTo(0, 150);
    // ctx.lineTo(800, 150);
    // ctx.lineWidth = 6;
    // ctx.strokeStyle = 'chartreuse';
    // ctx.stroke();

    //draw sandwich
    thisbread.draw(contacted);
    thisbread.update();
    areDuplicates(contacted);
    countGross(contacted);
    handleFood(canvas);

    //write text
    ctx.font = "30px Londrina Solid";
    ctx.fillStyle = "white";
    ctx.fillText("BLT Count: " + blts, 10, 30)
    ctx.fillStyle = "white";
    ctx.fillText("Ick: " + ick, 10, 65)

    //sandwich complete
    if (thisbread.completed) {
      if (isBLT(contacted)) {
        ctx.fillStyle = 'white';
        ctx.fillRect(50, 190, 500, 100);
        ctx.fillStyle = "chartreuse";
        ctx.font = "80px Londrina Solid"
        ctx.fillText("That's a BLT!", 100, 250)
        breaded();
        blts += 1;
        setTimeout(() => {
          requestAnimationFrame(animate)
        }, 2000)
      } else {
        ctx.fillStyle = 'white';
        ctx.fillRect(50, 190, 700, 100);
        ctx.fillStyle = "chartreuse";
        ctx.font = "80px Londrina Solid"
        ctx.fillText("That's NOT a BLT!", 100, 250)
        breaded();
        setTimeout(() => {
          requestAnimationFrame(animate)
        }, 2000)
      }
      return;
    }
    gameFrame++;

    requestAnimationFrame(animate);
  } 
  

}
animate();

function restart() {
  contacted = [];
  foodArr = [];
  thisbread = new Bread(canvas, ctx);
  blts = 0;
  ick = 0;
  gameOver = false;
  duplicates = false;
}