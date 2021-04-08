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

          if (stacky < 200) this.gameOver = true;
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
var INGREDIENTS = [FISH, FISH, SOCK, SOCK, TOMATO, MAYO, LETTUCE, BACON, TOMATO, MAYO, LETTUCE, BACON, _util__WEBPACK_IMPORTED_MODULE_0__.BREAD, _util__WEBPACK_IMPORTED_MODULE_0__.BREAD, _util__WEBPACK_IMPORTED_MODULE_0__.BREAD];

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
  }
}); // canvas.addEventListener('mouseup', function (event) {
//     console.log(event.x-canvasPos.left, event.y-canvasPos.top)
// });

function breaded() {
  // isSando = true;
  // animate.pause();
  contacted = [];
  foodArr = [];
  var lastbread = thisbread;
  thisbread = new _scripts_bread__WEBPACK_IMPORTED_MODULE_0__.default(canvas, ctx, lastbread.x);
}

function grossed() {
  contacted.pop();
  var lastbread = thisbread;
  thisbread = new _scripts_bread__WEBPACK_IMPORTED_MODULE_0__.default(canvas, ctx, lastbread.x);
}

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

var isGross = function isGross(ingredient) {
  var _ingredient$ingredien, _ingredient$ingredien2;

  return ((_ingredient$ingredien = ingredient.ingredient) === null || _ingredient$ingredien === void 0 ? void 0 : _ingredient$ingredien.currentSrc.includes("sock")) || ((_ingredient$ingredien2 = ingredient.ingredient) === null || _ingredient$ingredien2 === void 0 ? void 0 : _ingredient$ingredien2.currentSrc.includes("fish"));
};

function handleFood(canvas) {
  if (gameFrame % 50 == 0) {
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
          foodArr.shift(foodArr[i]);
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
    if (foodArr[i].y > canvas.height) foodArr.shift(foodArr[i]);
  }
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
var thisbread = new _scripts_bread__WEBPACK_IMPORTED_MODULE_0__.default(canvas, ctx); //animation 

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
    ctx.font = "30px Bungee Shade"; // ctx.fillStyle = "white";
    // ctx.fillText("score: " + score, 10, 30)

    ctx.fillStyle = "white";
    ctx.fillText("BLT Count: " + blts, 10, 30);
    ctx.fillStyle = "white";
    ctx.fillText("Ick: " + ick, 10, 65); // if (thisbread.gross) {
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
      ctx.font = "50px Bungee Shade";
      ctx.fillText("That's a BLT!", 300, 250);
      breaded();
      blts += 1;
      setTimeout(function () {
        requestAnimationFrame(animate);
      }, 2000);
      return;
    }

    gameFrame++;
    requestAnimationFrame(animate);
  } else {
    ctx.fillStyle = "red";
    ctx.fillText("YOU LOSE", 400, 250);
  }
}

animate();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJnYW1lRnJhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsImJyZWFkZWQiLCJsYXN0YnJlYWQiLCJ0aGlzYnJlYWQiLCJncm9zc2VkIiwicG9wIiwiZW5kR2FtZSIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiY291bnRHcm9zcyIsImNvdW50IiwiY3VyciIsImlzR3Jvc3MiLCJoYW5kbGVGb29kIiwibmV3Rm9vZCIsInB1c2giLCJpbmRleE9mIiwic2hpZnQiLCJ1cGRhdGVIZWlnaHQiLCJkcmF3IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImZvbnQiLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFHTUEsSztBQUNGLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QkMsQ0FBekIsRUFBNEI7QUFBQTs7QUFDeEIsU0FBS0MsQ0FBTCxHQUFTSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBekI7QUFDQSxTQUFLRixDQUFMLEdBQVNBLENBQUMsSUFBSUYsTUFBTSxDQUFDSyxLQUFQLEdBQWEsQ0FBM0IsQ0FGd0IsQ0FHeEI7O0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEIsQ0FMd0IsQ0FNeEI7O0FBQ0EsU0FBS1AsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7Ozs7V0FFRCxrQkFBUztBQUNMLFVBQUlPLG1EQUFBLElBQXFCLEtBQUtOLENBQUwsS0FBVyxDQUFwQyxFQUF3QyxLQUFLQSxDQUFMLElBQVUsQ0FBVjtBQUN4QyxVQUFJTSxvREFBQSxJQUFzQixLQUFLTixDQUFMLEtBQVcsS0FBS0YsTUFBTCxDQUFZSyxLQUFaLEdBQW9CLEdBQXpELEVBQStELEtBQUtILENBQUws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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNCcmVhZCwgQlJFQUQsIGtleXN9IGZyb20gJy4vdXRpbCdcblxuXG5jbGFzcyBCcmVhZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgpIHtcbiAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy54ID0geCB8fCBjYW52YXMud2lkdGgvMjtcbiAgICAgICAgLy8gdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gbm90U2FuZG8oKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGtleXMubGVmdFByZXNzZWQgJiYgKHRoaXMueCAhPT0gMCkpIHRoaXMueCAtPSA1O1xuICAgICAgICBpZiAoa2V5cy5yaWdodFByZXNzZWQgJiYgKHRoaXMueCAhPT0gdGhpcy5jYW52YXMud2lkdGggLSAxMzApKSB0aGlzLnggKz0gNTtcbiAgICB9XG5cblxuICAgIGRyYXcoY29udGFjdGVkKSB7XG4gICAgICAgIGxldCBzdGFja3ggPSB0aGlzLng7XG4gICAgICAgIGxldCBzdGFja3kgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShCUkVBRCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDAsIDMwMCwgMzAwKTtcblxuICAgICAgICBpZiAoY29udGFjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyckluZ3JlZGllbnQgPSBjb250YWN0ZWRbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlzTm90TWF5byhjdXJySW5ncmVkaWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJlYWQoY3VyckluZ3JlZGllbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDMwMCwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoYnJlYWRlZCwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudC5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2t5ID0gc3RhY2t5IC0gMjA7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2t5ID0gc3RhY2t5IC0gMjA7XG5cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmIChzdGFja3kgPCAyMDApIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGlzTm90TWF5byA9IChpbmdyZWRpZW50KSA9PiB7XG4gICAgcmV0dXJuICEhaW5ncmVkaWVudC5pbmdyZWRpZW50O1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZCIsImltcG9ydCB7IGlzQnJlYWQsIEJSRUFEIH0gZnJvbSAnLi91dGlsJ1xuXG4vL2Zvb2RcbmNvbnN0IFRPTUFUTyA9IG5ldyBJbWFnZSgpO1xuVE9NQVRPLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3RvbWF0by5wbmcnXG5jb25zdCBMRVRUVUNFID0gbmV3IEltYWdlKCk7XG5MRVRUVUNFLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2xldHR1Y2UucG5nJ1xuY29uc3QgQkFDT04gPSBuZXcgSW1hZ2UoKTtcbkJBQ09OLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2JhY29uLnBuZydcbmNvbnN0IE1BWU8gPSBuZXcgSW1hZ2UoKTtcbk1BWU8uc3JjID0gJy4vZGlzdC9pbWFnZXMvbWF5by5wbmcnXG5jb25zdCBGSVNIID0gbmV3IEltYWdlKCk7XG5GSVNILnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2Zpc2gucG5nJ1xuY29uc3QgU09DSyA9IG5ldyBJbWFnZSgpO1xuU09DSy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9zb2NrLnBuZydcblxuXG5jb25zdCBJTkdSRURJRU5UUyA9IFtGSVNILCBGSVNILCBTT0NLLCBTT0NLLCBUT01BVE8sIE1BWU8sIExFVFRVQ0UsIEJBQ09OLCBUT01BVE8sIE1BWU8sIExFVFRVQ0UsIEJBQ09OLCBCUkVBRCwgQlJFQUQsIEJSRUFEXVxuXG5jbGFzcyBGb29kIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICB0aGlzLmNvdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50ID0gSU5HUkVESUVOVFNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSU5HUkVESUVOVFMubGVuZ3RoKV1cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgICAgIGlmICh0aGlzLnggPiA3MDApIHRoaXMueCAtPSAxMDA7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBkeSA9IHRoaXMuY2FudmFzLmhlaWdodCArIDEwMDtcbiAgICAgICAgaWYgKGR5ICE9IHRoaXMueSkgdGhpcy55ICs9IDU7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKGlzQnJlYWQodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy55LCAzMDAsIDMwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMueSwgMjUwLCAyNTApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2Q7IiwiZXhwb3J0IGNvbnN0IGlzQnJlYWQgPSAoaW5ncmVkaWVudCkgPT4ge1xuICAgIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJicmVhZFwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJSRUFEID0gbmV3IEltYWdlKCk7XG5CUkVBRC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9icmVhZC5wbmcnXG5leHBvcnQgY29uc3QgTUFZT0ZMQVQgPSBuZXcgSW1hZ2UoKTtcbk1BWU9GTEFULnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL21heW9mbGF0LnBuZydcblxuZXhwb3J0IGNvbnN0IGtleXMgPSB7XG4gICAgbGVmdFByZXNzZWQ6IGZhbHNlLFxuICAgIHJpZ2h0UHJlc3NlZDogZmFsc2Vcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCcmVhZCBmcm9tICcuL3NjcmlwdHMvYnJlYWQnXG5pbXBvcnQgRm9vZCBmcm9tICcuL3NjcmlwdHMvZm9vZCdcbmltcG9ydCB7TUFZT0ZMQVQsIGtleXN9IGZyb20gJy4vc2NyaXB0cy91dGlsJ1xuXG5cbmxldCBjb250YWN0ZWQgPSBbXTtcbmxldCBmb29kQXJyID0gW107XG5cbmxldCBzY29yZSA9IDA7XG5sZXQgYmx0cyA9IDA7XG5sZXQgaWNrID0gMDtcbmxldCBnYW1lRnJhbWUgPSAwO1xubGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbi8vIGxldCBpc1NhbmRvID0gZmFsc2U7XG5cblxuLy8gbGV0IGNhbnZhc1BvcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vIGNvbnNvbGUubG9nKGNhbnZhc1Bvcyk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgMzc6XG4gICAgICBrZXlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuXG4vLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50LngtY2FudmFzUG9zLmxlZnQsIGV2ZW50LnktY2FudmFzUG9zLnRvcClcbi8vIH0pO1xuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBicmVhZGVkKCkge1xuICAvLyBpc1NhbmRvID0gdHJ1ZTtcbiAgLy8gYW5pbWF0ZS5wYXVzZSgpO1xuICBjb250YWN0ZWQgPSBbXTtcbiAgZm9vZEFyciA9IFtdO1xuICBsZXQgbGFzdGJyZWFkID0gdGhpc2JyZWFkO1xuICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgsIGxhc3RicmVhZC54KTtcbn1cblxuXG5mdW5jdGlvbiBncm9zc2VkKCkge1xuICBjb250YWN0ZWQucG9wKCk7XG4gIGxldCBsYXN0YnJlYWQgPSB0aGlzYnJlYWQ7XG4gIHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCwgbGFzdGJyZWFkLngpO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lICgpIHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gIGN0eC5maWxsVGV4dChcIllPVSBMT1NFXCIsIDQwMCwgMjUwKVxufVxuXG5mdW5jdGlvbiBjb3VudEdyb3NzKGNvbnRhY3RlZCkge1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgIGlmIChpc0dyb3NzKGN1cnIpKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGljayA9IGNvdW50O1xufVxuXG5jb25zdCBpc0dyb3NzID0gKGluZ3JlZGllbnQpID0+IHtcbiAgcmV0dXJuIGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcInNvY2tcIikgfHwgaW5ncmVkaWVudC5pbmdyZWRpZW50Py5jdXJyZW50U3JjLmluY2x1ZGVzKFwiZmlzaFwiKTtcbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVGb29kKGNhbnZhcykge1xuICBpZiAoZ2FtZUZyYW1lICUgNTAgPT0gMCkge1xuICAgIGxldCBuZXdGb29kID0gbmV3IEZvb2QoY2FudmFzLCBjdHgpO1xuICAgIGZvb2RBcnIucHVzaChuZXdGb29kKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZEFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmICgoZm9vZEFycltpXS55ID09PSB0aGlzYnJlYWQueSkgJiYgKGZvb2RBcnJbaV0ueCA+IHRoaXNicmVhZC54IC0gNTAgJiYgZm9vZEFycltpXS54IDwgdGhpc2JyZWFkLnggKyA1MCkpIHsgXG4gICAgICBpZiAoIWZvb2RBcnJbaV0uY291bnRlZCkgc2NvcmUgKz0gMTtcbiAgICAgIFxuICAgICAgaWYgKGNvbnRhY3RlZC5pbmRleE9mKGZvb2RBcnJbaV0pID09PSAtMSApIHtcbiAgICAgICAgaWYgKGZvb2RBcnJbaV0uaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibWF5b1wiKSkge1xuICAgICAgICAgIGNvbnRhY3RlZC5wdXNoKE1BWU9GTEFUKVxuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgZm9vZEFyci5zaGlmdChmb29kQXJyW2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgY29udGFjdGVkLnB1c2goZm9vZEFycltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzYnJlYWQueSAtPSAyMDtcblxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9vZEFycltpXS51cGRhdGVIZWlnaHQoKTtcblxuICAgIGlmIChjb250YWN0ZWQuaW5kZXhPZihmb29kQXJyW2ldKSA9PT0gLTEgJiYgZm9vZEFycltpXS55IDwgY2FudmFzLmhlaWdodCkgZm9vZEFycltpXS5kcmF3KCk7XG4gICAgaWYgKGZvb2RBcnJbaV0ueSA+IGNhbnZhcy5oZWlnaHQpIGZvb2RBcnIuc2hpZnQoZm9vZEFycltpXSlcbiAgfVxuXG4gIFxufVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xubGV0IHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCk7XG5cbi8vYW5pbWF0aW9uIFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgaWYgKGljayA+PSAzKSB7XG4gICAgdGhpc2JyZWFkLmdhbWVPdmVyID0gdHJ1ZTtcbiAgfVxuICBpZiAoIXRoaXNicmVhZC5nYW1lT3Zlcikge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzYnJlYWQuZHJhdyhjb250YWN0ZWQpO1xuICAgIHRoaXNicmVhZC51cGRhdGUoKTtcbiAgICBjb3VudEdyb3NzKGNvbnRhY3RlZCk7XG4gICAgaGFuZGxlRm9vZChjYW52YXMpO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEJ1bmdlZSBTaGFkZVwiO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgLy8gY3R4LmZpbGxUZXh0KFwic2NvcmU6IFwiICsgc2NvcmUsIDEwLCAzMClcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIkJMVCBDb3VudDogXCIgKyBibHRzLCAxMCwgMzApXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJJY2s6IFwiICsgaWNrLCAxMCwgNjUpXG4gICAgLy8gaWYgKHRoaXNicmVhZC5ncm9zcykge1xuICAgIC8vICAgY3R4LmZpbGxTdHlsZSA9IFwiY2hhcnRyZXVzZVwiO1xuICAgIC8vICAgY3R4LmZvbnQgPSBcIjUwcHggQnVuZ2VlIFNoYWRlXCJcbiAgICAvLyAgIGN0eC5maWxsVGV4dChcIklja1wiLCAzMDAsIDI1MClcbiAgICAvLyAgIGdyb3NzZWQoKTtcbiAgICAvLyAgIGljayArPSAxO1xuICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgIC8vICAgfSwgMjAwMClcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXNicmVhZC5jb21wbGV0ZWQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcImNoYXJ0cmV1c2VcIjtcbiAgICAgIGN0eC5mb250ID0gXCI1MHB4IEJ1bmdlZSBTaGFkZVwiXG4gICAgICBjdHguZmlsbFRleHQoXCJUaGF0J3MgYSBCTFQhXCIsIDMwMCwgMjUwKVxuICAgICAgYnJlYWRlZCgpO1xuICAgICAgYmx0cyArPSAxO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgfSwgMjAwMClcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2FtZUZyYW1lKys7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiWU9VIExPU0VcIiwgNDAwLCAyNTApXG4gIH1cblxufVxuYW5pbWF0ZSgpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=