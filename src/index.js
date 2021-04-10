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
// let gameOver = false;

document.addEventListener('keydown', function (e) {
  e.preventDefault();
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
  e.preventDefault();

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

function breaded() {
  contacted = [];
  foodArr = [];
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
const canvasdiv = document.getElementById("canvasdiv");


//animation 
function animate() {
  let removeButton = document.getElementById("button");
  if (removeButton) removeButton.remove();

  if (ick >= 2) {
    let button = document.createElement("button");
    button.setAttribute("id", "button");
    button.textContent = "YUCK! Hit space to restart"
    canvasdiv.appendChild(button);
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
  } else if (duplicates) {
    let button = document.createElement("button");
    button.setAttribute("id", "button");
    button.textContent = "NO DUPLICATES! Hit space to restart"
    canvasdiv.appendChild(button);
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
  } 
  
  if (!thisbread.gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw sandwich
    thisbread.draw(contacted);
    thisbread.update();
    areDuplicates(contacted);
    countGross(contacted);
    handleFood(canvas);

    //write text
    ctx.font = "25px Krona One";
    ctx.fillStyle = "#3E1907";
    ctx.fillText("BLT Count: " + blts, 10, 30)
    ctx.fillStyle = "#3E1907";
    ctx.fillText("Ick: " + ick, 10, 65)

    //sandwich complete
    if (thisbread.completed) {
      if (isBLT(contacted)) {
        let button = document.createElement("button");
        button.setAttribute("id", "button");
        button.textContent = "That's a BLT!"
        canvasdiv.appendChild(button);
        breaded();
        blts += 1;
        setTimeout(() => {
          requestAnimationFrame(animate)
        }, 2000)
      } else {
        let button = document.createElement("button");
        button.setAttribute("id", "button");
        button.textContent = "That's NOT a BLT!"
        canvasdiv.appendChild(button);
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
  // gameOver = false;
  duplicates = false;
}