/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/bread.js":
/*!******************************!*\
  !*** ./src/scripts/bread.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Bread = /*#__PURE__*/function () {
  function Bread(canvas, ctx, x) {
    _classCallCheck(this, Bread);

    this.y = canvas.height - 100;
    this.x = x || canvas.width / 2; // this.counted = false;

    this.completed = false;
    this.gameOver = false; // notSando();

    this.canvas = canvas;
    this.ctx = ctx;
  }

  _createClass(Bread, [{
    key: "update",
    value: function update() {
      if (_util__WEBPACK_IMPORTED_MODULE_0__.keys.leftPressed && this.x !== 0) this.x -= 5;
      if (_util__WEBPACK_IMPORTED_MODULE_0__.keys.rightPressed && this.x !== this.canvas.width - 130) this.x += 5;
    }
  }, {
    key: "draw",
    value: function draw(contacted) {
      var stackx = this.x;
      var stacky = this.canvas.height - 100;
      this.ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.BREAD, 0, 0, 1000, 1000, this.x, this.canvas.height - 100, 300, 300);

      if (contacted.length) {
        for (var i = 0; i < contacted.length; i++) {
          var currIngredient = contacted[i];

          if (isNotMayo(currIngredient)) {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isBread)(currIngredient)) {
              this.ctx.drawImage(currIngredient.ingredient, 0, 0, 1000, 1000, stackx, stacky, 300, 300);
              this.completed = true; // setTimeout(breaded, 2000)
              // breaded();
            } else {
              this.ctx.drawImage(currIngredient.ingredient, 0, 0, 1000, 1000, stackx, stacky, 250, 250);
              stacky = stacky - 20;
            }
          } else {
            this.ctx.drawImage(currIngredient, 0, 0, 1000, 1000, stackx, stacky, 250, 250);
            stacky = stacky - 20;
          }

          if (this.y <= 80) this.gameOver = true;
        }
      }
    }
  }]);

  return Bread;
}();

var isNotMayo = function isNotMayo(ingredient) {
  return !!ingredient.ingredient;
};

/* harmony default export */ __webpack_exports__["default"] = (Bread);

/***/ }),

/***/ "./src/scripts/food.js":
/*!*****************************!*\
  !*** ./src/scripts/food.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 //food

var TOMATO = new Image();
TOMATO.src = './dist/images/tomato.png';
var LETTUCE = new Image();
LETTUCE.src = './dist/images/lettuce.png';
var BACON = new Image();
BACON.src = './dist/images/bacon.png';
var MAYO = new Image();
MAYO.src = './dist/images/mayo.png';
var FISH = new Image();
FISH.src = './dist/images/fish.png';
var SOCK = new Image();
SOCK.src = './dist/images/sock.png';
var INGREDIENTS = [FISH, FISH, SOCK, SOCK, TOMATO, MAYO, LETTUCE, BACON, _util__WEBPACK_IMPORTED_MODULE_0__.BREAD];

var Food = /*#__PURE__*/function () {
  function Food(canvas, ctx) {
    _classCallCheck(this, Food);

    this.x = Math.random() * canvas.width;
    this.y = -100;
    this.counted = false;
    this.ingredient = INGREDIENTS[Math.floor(Math.random() * INGREDIENTS.length)];
    this.ctx = ctx;
    this.canvas = canvas;
    if (this.x > 700) this.x -= 100;
  }

  _createClass(Food, [{
    key: "updateHeight",
    value: function updateHeight() {
      var dy = this.canvas.height + 100;
      if (dy != this.y) this.y += 5;
    }
  }, {
    key: "draw",
    value: function draw() {
      // debugger
      if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isBread)(this)) {
        this.ctx.drawImage(this.ingredient, 0, 0, 1000, 1000, this.x, this.y, 300, 300);
      } else {
        this.ctx.drawImage(this.ingredient, 0, 0, 1000, 1000, this.x, this.y, 250, 250);
      }
    }
  }]);

  return Food;
}();

/* harmony default export */ __webpack_exports__["default"] = (Food);

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBread": function() { return /* binding */ isBread; },
/* harmony export */   "BREAD": function() { return /* binding */ BREAD; },
/* harmony export */   "MAYOFLAT": function() { return /* binding */ MAYOFLAT; },
/* harmony export */   "keys": function() { return /* binding */ keys; }
/* harmony export */ });
var isBread = function isBread(ingredient) {
  var _ingredient$ingredien;

  return (_ingredient$ingredien = ingredient.ingredient) === null || _ingredient$ingredien === void 0 ? void 0 : _ingredient$ingredien.currentSrc.includes("bread");
};
var BREAD = new Image();
BREAD.src = './dist/images/bread.png';
var MAYOFLAT = new Image();
MAYOFLAT.src = './dist/images/mayoflat.png';
var keys = {
  leftPressed: false,
  rightPressed: false
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_bread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/bread */ "./src/scripts/bread.js");
/* harmony import */ var _scripts_food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/food */ "./src/scripts/food.js");
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/util */ "./src/scripts/util.js");



var contacted = [];
var foodArr = [];
var score = 0;
var blts = 0;
var ick = 0;
var gameFrame = 0;
var gameOver = false; // let isSando = false;
// let canvasPos = canvas.getBoundingClientRect();
// console.log(canvasPos);

document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      _scripts_util__WEBPACK_IMPORTED_MODULE_2__.keys.leftPressed = true;
      break;

    case 39:
      _scripts_util__WEBPACK_IMPORTED_MODULE_2__.keys.rightPressed = true;
      break;
  }
});
document.addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    case 37:
      _scripts_util__WEBPACK_IMPORTED_MODULE_2__.keys.leftPressed = false;
      break;

    case 39:
      _scripts_util__WEBPACK_IMPORTED_MODULE_2__.keys.rightPressed = false;
      break;

    case 32:
      restart();
      break;
  }
}); // canvas.addEventListener('mouseup', function (event) {
//     console.log(event.x-canvasPos.left, event.y-canvasPos.top)
// });

function breaded() {
  contacted = [];
  foodArr = [];
  var lastbread = thisbread;
  thisbread = new _scripts_bread__WEBPACK_IMPORTED_MODULE_0__.default(canvas, ctx, lastbread.x);
} // function grossed() {
//   contacted.pop();
//   let lastbread = thisbread;
//   thisbread = new Bread(canvas, ctx, lastbread.x);
// }


function endGame() {
  ctx.fillStyle = "red";
  ctx.fillText("YOU LOSE", 400, 250);
}

function countGross(contacted) {
  var count = 0;

  for (var i = 0; i < contacted.length; i++) {
    var curr = contacted[i];

    if (isGross(curr)) {
      count++;
    }
  }

  ick = count;
}

function isBLT(contacted) {
  var mayo = 0;
  var tomato = 0;
  var lettuce = 0;
  var bacon = 0;

  for (var i = 0; i < contacted.length; i++) {
    var curr = contacted[i];

    if (!curr.ingredient) {
      mayo++;
    } else if (curr.ingredient.currentSrc.includes("tomato")) {
      tomato++;
    } else if (curr.ingredient.currentSrc.includes("lettuce")) {
      lettuce++;
    } else if (curr.ingredient.currentSrc.includes("bacon")) {
      bacon++;
    }
  }

  return mayo > 0 && tomato > 0 && lettuce > 0 && bacon > 0;
}

var isGross = function isGross(ingredient) {
  var _ingredient$ingredien, _ingredient$ingredien2;

  return ((_ingredient$ingredien = ingredient.ingredient) === null || _ingredient$ingredien === void 0 ? void 0 : _ingredient$ingredien.currentSrc.includes("sock")) || ((_ingredient$ingredien2 = ingredient.ingredient) === null || _ingredient$ingredien2 === void 0 ? void 0 : _ingredient$ingredien2.currentSrc.includes("fish"));
};

function handleFood(canvas) {
  if (gameFrame % 35 == 0) {
    var newFood = new _scripts_food__WEBPACK_IMPORTED_MODULE_1__.default(canvas, ctx);
    foodArr.push(newFood);
  }

  for (var i = 0; i < foodArr.length; i++) {
    if (foodArr[i].y === thisbread.y && foodArr[i].x > thisbread.x - 50 && foodArr[i].x < thisbread.x + 50) {
      if (!foodArr[i].counted) score += 1;

      if (contacted.indexOf(foodArr[i]) === -1) {
        if (foodArr[i].ingredient.currentSrc.includes("mayo")) {
          contacted.push(_scripts_util__WEBPACK_IMPORTED_MODULE_2__.MAYOFLAT);
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
    if (foodArr[i].y > canvas.height) foodArr.shift(foodArr[i]);
  }
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
var thisbread = new _scripts_bread__WEBPACK_IMPORTED_MODULE_0__.default(canvas, ctx); //animation 

function animate() {
  if (ick >= 2) {
    thisbread.gameOver = true; // requestAnimationFrame(animate);
  }

  if (!thisbread.gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //draw green line

    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(800, 150);
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'chartreuse';
    ctx.stroke(); //draw sandwich

    thisbread.draw(contacted);
    thisbread.update();
    countGross(contacted);
    handleFood(canvas); //write text

    ctx.font = "30px Bungee Shade";
    ctx.fillStyle = "white";
    ctx.fillText("BLT Count: " + blts, 10, 30);
    ctx.fillStyle = "white";
    ctx.fillText("Ick: " + ick, 10, 65); //sandwich complete

    if (thisbread.completed) {
      ctx.fillStyle = "chartreuse";
      ctx.font = "50px Bungee Shade";

      if (isBLT(contacted)) {
        ctx.fillText("That's a BLT!", 100, 250);
        breaded();
        blts += 1;
        setTimeout(function () {
          requestAnimationFrame(animate);
        }, 2000);
      } else {
        ctx.fillText("That's NOT a BLT!", 100, 250);
        breaded();
        setTimeout(function () {
          requestAnimationFrame(animate);
        }, 2000);
      }

      return;
    }

    gameFrame++;
    requestAnimationFrame(animate);
  } else {
    ctx.fillStyle = "red";
    ctx.fillText("YOU LOSE SPACE TO RESTART", 100, 250);
    requestAnimationFrame(animate);
  }
}

animate();

function restart() {
  contacted = [];
  foodArr = [];
  thisbread = new _scripts_bread__WEBPACK_IMPORTED_MODULE_0__.default(canvas, ctx);
  blts = 0;
  ick = 0;
  gameOver = false;
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJnYW1lRnJhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInJlc3RhcnQiLCJicmVhZGVkIiwibGFzdGJyZWFkIiwidGhpc2JyZWFkIiwiZW5kR2FtZSIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiY291bnRHcm9zcyIsImNvdW50IiwiY3VyciIsImlzR3Jvc3MiLCJpc0JMVCIsIm1heW8iLCJ0b21hdG8iLCJsZXR0dWNlIiwiYmFjb24iLCJoYW5kbGVGb29kIiwibmV3Rm9vZCIsInB1c2giLCJpbmRleE9mIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUhlaWdodCIsImRyYXciLCJzaGlmdCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInVwZGF0ZSIsImZvbnQiLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFHTUEsSztBQUNGLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QkMsQ0FBekIsRUFBNEI7QUFBQTs7QUFDeEIsU0FBS0MsQ0FBTCxHQUFTSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBekI7QUFDQSxTQUFLRixDQUFMLEdBQVNBLENBQUMsSUFBSUYsTUFBTSxDQUFDSyxLQUFQLEdBQWEsQ0FBM0IsQ0FGd0IsQ0FHeEI7O0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEIsQ0FMd0IsQ0FNeEI7O0FBQ0EsU0FBS1AsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7Ozs7V0FFRCxrQkFBUztBQUNMLFVBQUlPLG1EQUFBLElBQXFCLEtBQUtOLENBQUwsS0FB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UyxFQUVQLElBRk8sQ0FBVjtBQUdEOztBQUNEO0FBQ0Q7O0FBQ0RqQyxhQUFTO0FBRVQ0Qyx5QkFBcUIsQ0FBQ1gsT0FBRCxDQUFyQjtBQUNELEdBL0NELE1BK0NPO0FBQ0w1RSxPQUFHLENBQUNxRCxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FyRCxPQUFHLENBQUNzRCxRQUFKLENBQWEsMkJBQWIsRUFBMEMsR0FBMUMsRUFBK0MsR0FBL0M7QUFDQWlDLHlCQUFxQixDQUFDWCxPQUFELENBQXJCO0FBRUQ7QUFFRjs7QUFDREEsT0FBTzs7QUFJUCxTQUFTNUIsT0FBVCxHQUFtQjtBQUNqQnhDLFdBQVMsR0FBRyxFQUFaO0FBQ0ErQixTQUFPLEdBQUcsRUFBVjtBQUNBWSxXQUFTLEdBQUcsSUFBSXJELG1EQUFKLENBQVVDLE1BQVYsRUFBa0JDLEdBQWxCLENBQVo7QUFDQXlDLE1BQUksR0FBRyxDQUFQO0FBQ0FDLEtBQUcsR0FBRyxDQUFOO0FBQ0FwQyxVQUFRLEdBQUcsS0FBWDtBQUNELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNCcmVhZCwgQlJFQUQsIGtleXN9IGZyb20gJy4vdXRpbCdcblxuXG5jbGFzcyBCcmVhZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgpIHtcbiAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy54ID0geCB8fCBjYW52YXMud2lkdGgvMjtcbiAgICAgICAgLy8gdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gbm90U2FuZG8oKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGtleXMubGVmdFByZXNzZWQgJiYgKHRoaXMueCAhPT0gMCkpIHRoaXMueCAtPSA1O1xuICAgICAgICBpZiAoa2V5cy5yaWdodFByZXNzZWQgJiYgKHRoaXMueCAhPT0gdGhpcy5jYW52YXMud2lkdGggLSAxMzApKSB0aGlzLnggKz0gNTtcbiAgICB9XG5cblxuICAgIGRyYXcoY29udGFjdGVkKSB7XG4gICAgICAgIGxldCBzdGFja3ggPSB0aGlzLng7XG4gICAgICAgIGxldCBzdGFja3kgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShCUkVBRCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDAsIDMwMCwgMzAwKTtcblxuICAgICAgICBpZiAoY29udGFjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyckluZ3JlZGllbnQgPSBjb250YWN0ZWRbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlzTm90TWF5byhjdXJySW5ncmVkaWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJlYWQoY3VyckluZ3JlZGllbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDMwMCwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoYnJlYWRlZCwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudC5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2t5ID0gc3RhY2t5IC0gMjA7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2t5ID0gc3RhY2t5IC0gMjA7XG5cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPD0gODApIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGlzTm90TWF5byA9IChpbmdyZWRpZW50KSA9PiB7XG4gICAgcmV0dXJuICEhaW5ncmVkaWVudC5pbmdyZWRpZW50O1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZCIsImltcG9ydCB7IGlzQnJlYWQsIEJSRUFEIH0gZnJvbSAnLi91dGlsJ1xuXG4vL2Zvb2RcbmNvbnN0IFRPTUFUTyA9IG5ldyBJbWFnZSgpO1xuVE9NQVRPLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3RvbWF0by5wbmcnXG5jb25zdCBMRVRUVUNFID0gbmV3IEltYWdlKCk7XG5MRVRUVUNFLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2xldHR1Y2UucG5nJ1xuY29uc3QgQkFDT04gPSBuZXcgSW1hZ2UoKTtcbkJBQ09OLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2JhY29uLnBuZydcbmNvbnN0IE1BWU8gPSBuZXcgSW1hZ2UoKTtcbk1BWU8uc3JjID0gJy4vZGlzdC9pbWFnZXMvbWF5by5wbmcnXG5jb25zdCBGSVNIID0gbmV3IEltYWdlKCk7XG5GSVNILnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2Zpc2gucG5nJ1xuY29uc3QgU09DSyA9IG5ldyBJbWFnZSgpO1xuU09DSy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9zb2NrLnBuZydcblxuXG5jb25zdCBJTkdSRURJRU5UUyA9IFtGSVNILCBGSVNILCBTT0NLLCBTT0NLLFRPTUFUTywgTUFZTywgTEVUVFVDRSwgQkFDT04sIEJSRUFEXVxuXG5jbGFzcyBGb29kIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICB0aGlzLmNvdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50ID0gSU5HUkVESUVOVFNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSU5HUkVESUVOVFMubGVuZ3RoKV1cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgICAgIGlmICh0aGlzLnggPiA3MDApIHRoaXMueCAtPSAxMDA7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBkeSA9IHRoaXMuY2FudmFzLmhlaWdodCArIDEwMDtcbiAgICAgICAgaWYgKGR5ICE9IHRoaXMueSkgdGhpcy55ICs9IDU7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKGlzQnJlYWQodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy55LCAzMDAsIDMwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMueSwgMjUwLCAyNTApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2Q7IiwiZXhwb3J0IGNvbnN0IGlzQnJlYWQgPSAoaW5ncmVkaWVudCkgPT4ge1xuICAgIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJicmVhZFwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJSRUFEID0gbmV3IEltYWdlKCk7XG5CUkVBRC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9icmVhZC5wbmcnXG5leHBvcnQgY29uc3QgTUFZT0ZMQVQgPSBuZXcgSW1hZ2UoKTtcbk1BWU9GTEFULnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL21heW9mbGF0LnBuZydcblxuZXhwb3J0IGNvbnN0IGtleXMgPSB7XG4gICAgbGVmdFByZXNzZWQ6IGZhbHNlLFxuICAgIHJpZ2h0UHJlc3NlZDogZmFsc2Vcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCcmVhZCBmcm9tICcuL3NjcmlwdHMvYnJlYWQnXG5pbXBvcnQgRm9vZCBmcm9tICcuL3NjcmlwdHMvZm9vZCdcbmltcG9ydCB7TUFZT0ZMQVQsIGtleXN9IGZyb20gJy4vc2NyaXB0cy91dGlsJ1xuXG5cbmxldCBjb250YWN0ZWQgPSBbXTtcbmxldCBmb29kQXJyID0gW107XG5cbmxldCBzY29yZSA9IDA7XG5sZXQgYmx0cyA9IDA7XG5sZXQgaWNrID0gMDtcbmxldCBnYW1lRnJhbWUgPSAwO1xubGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbi8vIGxldCBpc1NhbmRvID0gZmFsc2U7XG5cblxuLy8gbGV0IGNhbnZhc1BvcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vIGNvbnNvbGUubG9nKGNhbnZhc1Bvcyk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgMzc6XG4gICAgICBrZXlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzI6XG4gICAgICByZXN0YXJ0KCk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cblxuXG5cbi8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgY29uc29sZS5sb2coZXZlbnQueC1jYW52YXNQb3MubGVmdCwgZXZlbnQueS1jYW52YXNQb3MudG9wKVxuLy8gfSk7XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGJyZWFkZWQoKSB7XG4gIGNvbnRhY3RlZCA9IFtdO1xuICBmb29kQXJyID0gW107XG4gIGxldCBsYXN0YnJlYWQgPSB0aGlzYnJlYWQ7XG4gIHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCwgbGFzdGJyZWFkLngpO1xufVxuXG5cbi8vIGZ1bmN0aW9uIGdyb3NzZWQoKSB7XG4vLyAgIGNvbnRhY3RlZC5wb3AoKTtcbi8vICAgbGV0IGxhc3RicmVhZCA9IHRoaXNicmVhZDtcbi8vICAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4LCBsYXN0YnJlYWQueCk7XG4vLyB9XG5cbmZ1bmN0aW9uIGVuZEdhbWUgKCkge1xuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgY3R4LmZpbGxUZXh0KFwiWU9VIExPU0VcIiwgNDAwLCAyNTApXG59XG5cbmZ1bmN0aW9uIGNvdW50R3Jvc3MoY29udGFjdGVkKSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGN1cnIgPSBjb250YWN0ZWRbaV07XG4gICAgaWYgKGlzR3Jvc3MoY3VycikpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgaWNrID0gY291bnQ7XG59XG5cbmZ1bmN0aW9uIGlzQkxUKGNvbnRhY3RlZCkge1xuICAgIGxldCBtYXlvID0gMDtcbiAgICBsZXQgdG9tYXRvID0gMDtcbiAgICBsZXQgbGV0dHVjZSA9IDA7XG4gICAgbGV0IGJhY29uID0gMDsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgICAgaWYgKCFjdXJyLmluZ3JlZGllbnQpIHtcbiAgICAgICAgbWF5bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwidG9tYXRvXCIpKSB7XG4gICAgICAgIHRvbWF0bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibGV0dHVjZVwiKSkge1xuICAgICAgICBsZXR0dWNlKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJiYWNvblwiKSkge1xuICAgICAgICBiYWNvbisrXG4gICAgICB9IFxuICAgIH1cblxuICAgIHJldHVybiAoKG1heW8gPiAwKSAmJiAodG9tYXRvID4gMCkgJiYgKGxldHR1Y2UgPiAwKSAmJiAoYmFjb24gPiAwKSlcbn1cblxuY29uc3QgaXNHcm9zcyA9IChpbmdyZWRpZW50KSA9PiB7XG4gIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJzb2NrXCIpIHx8IGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcImZpc2hcIik7XG59XG5cblxuZnVuY3Rpb24gaGFuZGxlRm9vZChjYW52YXMpIHtcbiAgaWYgKGdhbWVGcmFtZSAlIDM1ID09IDApIHtcbiAgICBsZXQgbmV3Rm9vZCA9IG5ldyBGb29kKGNhbnZhcywgY3R4KTtcbiAgICBmb29kQXJyLnB1c2gobmV3Rm9vZCk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGZvb2RBcnJbaV0ueSA9PT0gdGhpc2JyZWFkLnkpICYmIChmb29kQXJyW2ldLnggPiB0aGlzYnJlYWQueCAtIDUwICYmIGZvb2RBcnJbaV0ueCA8IHRoaXNicmVhZC54ICsgNTApKSB7IFxuICAgICAgaWYgKCFmb29kQXJyW2ldLmNvdW50ZWQpIHNjb3JlICs9IDE7XG4gICAgICBcbiAgICAgIGlmIChjb250YWN0ZWQuaW5kZXhPZihmb29kQXJyW2ldKSA9PT0gLTEgKSB7XG4gICAgICAgIGlmIChmb29kQXJyW2ldLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcIm1heW9cIikpIHtcbiAgICAgICAgICBjb250YWN0ZWQucHVzaChNQVlPRkxBVClcbiAgICAgICAgICBmb29kQXJyW2ldLmNvdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGZvb2RBcnIuc3BsaWNlKGksIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgY29udGFjdGVkLnB1c2goZm9vZEFycltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzYnJlYWQueSAtPSAyMDtcbiAgICAgICAgY29uc29sZS5sb2codGhpc2JyZWFkLnkpO1xuXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb29kQXJyW2ldLnVwZGF0ZUhlaWdodCgpO1xuXG4gICAgaWYgKGNvbnRhY3RlZC5pbmRleE9mKGZvb2RBcnJbaV0pID09PSAtMSAmJiBmb29kQXJyW2ldLnkgPCBjYW52YXMuaGVpZ2h0KSBmb29kQXJyW2ldLmRyYXcoKTtcbiAgICBpZiAoZm9vZEFycltpXS55ID4gY2FudmFzLmhlaWdodCkgZm9vZEFyci5zaGlmdChmb29kQXJyW2ldKVxuICB9XG5cbiAgXG59XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5sZXQgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4KTtcblxuXG4vL2FuaW1hdGlvbiBcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGlmIChpY2sgPj0gMikge1xuICAgIHRoaXNicmVhZC5nYW1lT3ZlciA9IHRydWU7XG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gIH1cbiAgaWYgKCF0aGlzYnJlYWQuZ2FtZU92ZXIpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvL2RyYXcgZ3JlZW4gbGluZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDE1MCk7XG4gICAgY3R4LmxpbmVUbyg4MDAsIDE1MCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDY7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2NoYXJ0cmV1c2UnO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vZHJhdyBzYW5kd2ljaFxuICAgIHRoaXNicmVhZC5kcmF3KGNvbnRhY3RlZCk7XG4gICAgdGhpc2JyZWFkLnVwZGF0ZSgpO1xuICAgIGNvdW50R3Jvc3MoY29udGFjdGVkKTtcbiAgICBoYW5kbGVGb29kKGNhbnZhcyk7XG5cbiAgICAvL3dyaXRlIHRleHRcbiAgICBjdHguZm9udCA9IFwiMzBweCBCdW5nZWUgU2hhZGVcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIkJMVCBDb3VudDogXCIgKyBibHRzLCAxMCwgMzApXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJJY2s6IFwiICsgaWNrLCAxMCwgNjUpXG5cbiAgICAvL3NhbmR3aWNoIGNvbXBsZXRlXG4gICAgaWYgKHRoaXNicmVhZC5jb21wbGV0ZWQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcImNoYXJ0cmV1c2VcIjtcbiAgICAgIGN0eC5mb250ID0gXCI1MHB4IEJ1bmdlZSBTaGFkZVwiXG4gICAgICBpZiAoaXNCTFQoY29udGFjdGVkKSkge1xuICAgICAgICBjdHguZmlsbFRleHQoXCJUaGF0J3MgYSBCTFQhXCIsIDEwMCwgMjUwKVxuICAgICAgICBicmVhZGVkKCk7XG4gICAgICAgIGJsdHMgKz0gMTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbFRleHQoXCJUaGF0J3MgTk9UIGEgQkxUIVwiLCAxMDAsIDI1MClcbiAgICAgICAgYnJlYWRlZCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2FtZUZyYW1lKys7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiWU9VIExPU0UgU1BBQ0UgVE8gUkVTVEFSVFwiLCAxMDAsIDI1MClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgfVxuXG59XG5hbmltYXRlKCk7XG5cblxuXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICBjb250YWN0ZWQgPSBbXTtcbiAgZm9vZEFyciA9IFtdO1xuICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgpO1xuICBibHRzID0gMDtcbiAgaWNrID0gMDtcbiAgZ2FtZU92ZXIgPSBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9