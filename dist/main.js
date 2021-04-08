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
      this.ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.BREAD, 0, 0, 1000, 1000, this.x, this.canvas.height - 100, 300, 300); // if (contacted.length >= 5) this.gameOver =true;

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
          } // if (this.y <= 80) this.gameOver = true;

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
var duplicates = false;
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

var isGross = function isGross(ingredient) {
  var _ingredient$ingredien, _ingredient$ingredien2;

  return ((_ingredient$ingredien = ingredient.ingredient) === null || _ingredient$ingredien === void 0 ? void 0 : _ingredient$ingredien.currentSrc.includes("sock")) || ((_ingredient$ingredien2 = ingredient.ingredient) === null || _ingredient$ingredien2 === void 0 ? void 0 : _ingredient$ingredien2.currentSrc.includes("fish"));
};

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

function areDuplicates(contacted) {
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

  if (mayo > 1 || tomato > 1 || lettuce > 1 || bacon > 1) {
    duplicates = true;
  }
}

function handleFood(canvas) {
  if (gameFrame % 15 == 0) {
    var newFood = new _scripts_food__WEBPACK_IMPORTED_MODULE_1__.default(canvas, ctx);
    foodArr.push(newFood);
  }

  for (var i = 0; i < foodArr.length; i++) {
    if (foodArr[i].y === thisbread.y && foodArr[i].x > thisbread.x - 70 && foodArr[i].x < thisbread.x + 70) {
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
    ctx.fillStyle = "red";
    ctx.font = "80px Londrina Solid";
    ctx.fillText("YUCK!", 200, 250);
    ctx.font = "40px Londrina Solid";
    ctx.fillText("Hit space to restart", 200, 300);
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
  } else if (duplicates) {
    ctx.fillStyle = "red";
    ctx.font = "80px Londrina Solid";
    ctx.fillText("NO DUPLICATES!", 200, 250);
    ctx.font = "40px Londrina Solid";
    ctx.fillText("Hit space to restart", 200, 300);
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
  }

  if (!thisbread.gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // //draw green line
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
    handleFood(canvas); //write text

    ctx.font = "30px Londrina Solid";
    ctx.fillStyle = "white";
    ctx.fillText("BLT Count: " + blts, 10, 30);
    ctx.fillStyle = "white";
    ctx.fillText("Ick: " + ick, 10, 65); //sandwich complete

    if (thisbread.completed) {
      if (isBLT(contacted)) {
        ctx.fillStyle = 'white';
        ctx.fillRect(50, 190, 500, 100);
        ctx.fillStyle = "chartreuse";
        ctx.font = "80px Londrina Solid";
        ctx.fillText("That's a BLT!", 100, 250);
        breaded();
        blts += 1;
        setTimeout(function () {
          requestAnimationFrame(animate);
        }, 2000);
      } else {
        ctx.fillStyle = 'white';
        ctx.fillRect(50, 190, 700, 100);
        ctx.fillStyle = "chartreuse";
        ctx.font = "80px Londrina Solid";
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
  duplicates = false;
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJkdXBsaWNhdGVzIiwiZ2FtZUZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJyZXN0YXJ0IiwiYnJlYWRlZCIsImxhc3RicmVhZCIsInRoaXNicmVhZCIsImVuZEdhbWUiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImNvdW50R3Jvc3MiLCJjb3VudCIsImN1cnIiLCJpc0dyb3NzIiwiaXNCTFQiLCJtYXlvIiwidG9tYXRvIiwibGV0dHVjZSIsImJhY29uIiwiYXJlRHVwbGljYXRlcyIsImhhbmRsZUZvb2QiLCJuZXdGb29kIiwicHVzaCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlSGVpZ2h0IiwiZHJhdyIsInNoaWZ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYW5pbWF0ZSIsImZvbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJmaWxsUmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdNQSxLO0FBQ0YsaUJBQVlDLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCQyxDQUF6QixFQUE0QjtBQUFBOztBQUN4QixTQUFLQyxDQUFMLEdBQVNILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUF6QjtBQUNBLFNBQUtGLENBQUwsR0FBU0EsQ0FBQyxJQUFJRixNQUFNLENBQUNLLEtBQVAsR0FBYSxDQUEzQixDQUZ3QixDQUd4Qjs7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQixDQUx3QixDQU14Qjs7QUFDQSxTQUFLUCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7OztXQUVELGtCQUFTO0FBQ0wsVUFBSU8sbURBQUEsSUFBcUIsS0FBS04sQ0FBTCxLQUFXLENBQXBDLEVBQXdDLEtBQUtBLENBQUws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ImltcG9ydCB7aXNCcmVhZCwgQlJFQUQsIGtleXN9IGZyb20gJy4vdXRpbCdcblxuXG5jbGFzcyBCcmVhZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgpIHtcbiAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy54ID0geCB8fCBjYW52YXMud2lkdGgvMjtcbiAgICAgICAgLy8gdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gbm90U2FuZG8oKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGtleXMubGVmdFByZXNzZWQgJiYgKHRoaXMueCAhPT0gMCkpIHRoaXMueCAtPSA1O1xuICAgICAgICBpZiAoa2V5cy5yaWdodFByZXNzZWQgJiYgKHRoaXMueCAhPT0gdGhpcy5jYW52YXMud2lkdGggLSAxMzApKSB0aGlzLnggKz0gNTtcbiAgICB9XG5cblxuICAgIGRyYXcoY29udGFjdGVkKSB7XG4gICAgICAgIGxldCBzdGFja3ggPSB0aGlzLng7XG4gICAgICAgIGxldCBzdGFja3kgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShCUkVBRCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDAsIDMwMCwgMzAwKTtcbiAgICAgICAgLy8gaWYgKGNvbnRhY3RlZC5sZW5ndGggPj0gNSkgdGhpcy5nYW1lT3ZlciA9dHJ1ZTtcbiAgICAgICAgaWYgKGNvbnRhY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJJbmdyZWRpZW50ID0gY29udGFjdGVkW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpc05vdE1heW8oY3VyckluZ3JlZGllbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JyZWFkKGN1cnJJbmdyZWRpZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAzMDAsIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGJyZWFkZWQsIDIwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVhZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNreSA9IHN0YWNreSAtIDIwO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNreSA9IHN0YWNreSAtIDIwO1xuXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy55IDw9IDgwKSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBpc05vdE1heW8gPSAoaW5ncmVkaWVudCkgPT4ge1xuICAgIHJldHVybiAhIWluZ3JlZGllbnQuaW5ncmVkaWVudDtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWQiLCJpbXBvcnQgeyBpc0JyZWFkLCBCUkVBRCB9IGZyb20gJy4vdXRpbCdcblxuLy9mb29kXG5jb25zdCBUT01BVE8gPSBuZXcgSW1hZ2UoKTtcblRPTUFUTy5zcmMgPSAnLi9kaXN0L2ltYWdlcy90b21hdG8ucG5nJ1xuY29uc3QgTEVUVFVDRSA9IG5ldyBJbWFnZSgpO1xuTEVUVFVDRS5zcmMgPSAnLi9kaXN0L2ltYWdlcy9sZXR0dWNlLnBuZydcbmNvbnN0IEJBQ09OID0gbmV3IEltYWdlKCk7XG5CQUNPTi5zcmMgPSAnLi9kaXN0L2ltYWdlcy9iYWNvbi5wbmcnXG5jb25zdCBNQVlPID0gbmV3IEltYWdlKCk7XG5NQVlPLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL21heW8ucG5nJ1xuY29uc3QgRklTSCA9IG5ldyBJbWFnZSgpO1xuRklTSC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9maXNoLnBuZydcbmNvbnN0IFNPQ0sgPSBuZXcgSW1hZ2UoKTtcblNPQ0suc3JjID0gJy4vZGlzdC9pbWFnZXMvc29jay5wbmcnXG5cblxuY29uc3QgSU5HUkVESUVOVFMgPSBbRklTSCwgRklTSCwgU09DSywgU09DSyxUT01BVE8sIE1BWU8sIExFVFRVQ0UsIEJBQ09OLCBCUkVBRF1cblxuY2xhc3MgRm9vZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy55ID0gLTEwMDtcbiAgICAgICAgdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudCA9IElOR1JFRElFTlRTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIElOR1JFRElFTlRTLmxlbmd0aCldXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuICAgICAgICBpZiAodGhpcy54ID4gNzAwKSB0aGlzLnggLT0gMTAwO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgZHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgKyAxMDA7XG4gICAgICAgIGlmIChkeSAhPSB0aGlzLnkpIHRoaXMueSArPSA1O1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmIChpc0JyZWFkKHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMueSwgMzAwLCAzMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLnksIDI1MCwgMjUwKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kOyIsImV4cG9ydCBjb25zdCBpc0JyZWFkID0gKGluZ3JlZGllbnQpID0+IHtcbiAgICByZXR1cm4gaW5ncmVkaWVudC5pbmdyZWRpZW50Py5jdXJyZW50U3JjLmluY2x1ZGVzKFwiYnJlYWRcIik7XG59XG5cbmV4cG9ydCBjb25zdCBCUkVBRCA9IG5ldyBJbWFnZSgpO1xuQlJFQUQuc3JjID0gJy4vZGlzdC9pbWFnZXMvYnJlYWQucG5nJ1xuZXhwb3J0IGNvbnN0IE1BWU9GTEFUID0gbmV3IEltYWdlKCk7XG5NQVlPRkxBVC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvZmxhdC5wbmcnXG5cbmV4cG9ydCBjb25zdCBrZXlzID0ge1xuICAgIGxlZnRQcmVzc2VkOiBmYWxzZSxcbiAgICByaWdodFByZXNzZWQ6IGZhbHNlXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQnJlYWQgZnJvbSAnLi9zY3JpcHRzL2JyZWFkJ1xuaW1wb3J0IEZvb2QgZnJvbSAnLi9zY3JpcHRzL2Zvb2QnXG5pbXBvcnQge01BWU9GTEFULCBrZXlzfSBmcm9tICcuL3NjcmlwdHMvdXRpbCdcblxuXG5sZXQgY29udGFjdGVkID0gW107XG5sZXQgZm9vZEFyciA9IFtdO1xuXG5sZXQgc2NvcmUgPSAwO1xubGV0IGJsdHMgPSAwO1xubGV0IGljayA9IDA7XG5sZXQgZHVwbGljYXRlcyA9IGZhbHNlO1xubGV0IGdhbWVGcmFtZSA9IDA7XG5sZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuLy8gbGV0IGlzU2FuZG8gPSBmYWxzZTtcblxuXG4vLyBsZXQgY2FudmFzUG9zID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuLy8gY29uc29sZS5sb2coY2FudmFzUG9zKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIDM3OlxuICAgICAga2V5cy5sZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzk6XG4gICAgICBrZXlzLnJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMjpcbiAgICAgIHJlc3RhcnQoKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuXG5cblxuLy8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhldmVudC54LWNhbnZhc1Bvcy5sZWZ0LCBldmVudC55LWNhbnZhc1Bvcy50b3ApXG4vLyB9KTtcblxuXG5cblxuXG5cblxuZnVuY3Rpb24gYnJlYWRlZCgpIHtcbiAgY29udGFjdGVkID0gW107XG4gIGZvb2RBcnIgPSBbXTtcbiAgbGV0IGxhc3RicmVhZCA9IHRoaXNicmVhZDtcbiAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4LCBsYXN0YnJlYWQueCk7XG59XG5cblxuLy8gZnVuY3Rpb24gZ3Jvc3NlZCgpIHtcbi8vICAgY29udGFjdGVkLnBvcCgpO1xuLy8gICBsZXQgbGFzdGJyZWFkID0gdGhpc2JyZWFkO1xuLy8gICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgsIGxhc3RicmVhZC54KTtcbi8vIH1cblxuZnVuY3Rpb24gZW5kR2FtZSAoKSB7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICBjdHguZmlsbFRleHQoXCJZT1UgTE9TRVwiLCA0MDAsIDI1MClcbn1cblxuZnVuY3Rpb24gY291bnRHcm9zcyhjb250YWN0ZWQpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3VyciA9IGNvbnRhY3RlZFtpXTtcbiAgICBpZiAoaXNHcm9zcyhjdXJyKSkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cblxuICBpY2sgPSBjb3VudDtcbn1cblxuY29uc3QgaXNHcm9zcyA9IChpbmdyZWRpZW50KSA9PiB7XG4gIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJzb2NrXCIpIHx8IGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcImZpc2hcIik7XG59XG5cbmZ1bmN0aW9uIGlzQkxUKGNvbnRhY3RlZCkge1xuICAgIGxldCBtYXlvID0gMDtcbiAgICBsZXQgdG9tYXRvID0gMDtcbiAgICBsZXQgbGV0dHVjZSA9IDA7XG4gICAgbGV0IGJhY29uID0gMDsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgICAgaWYgKCFjdXJyLmluZ3JlZGllbnQpIHtcbiAgICAgICAgbWF5bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwidG9tYXRvXCIpKSB7XG4gICAgICAgIHRvbWF0bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibGV0dHVjZVwiKSkge1xuICAgICAgICBsZXR0dWNlKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJiYWNvblwiKSkge1xuICAgICAgICBiYWNvbisrXG4gICAgICB9IFxuICAgIH1cblxuICAgIHJldHVybiAoKG1heW8gPiAwKSAmJiAodG9tYXRvID4gMCkgJiYgKGxldHR1Y2UgPiAwKSAmJiAoYmFjb24gPiAwKSlcbn1cblxuXG5cblxuZnVuY3Rpb24gYXJlRHVwbGljYXRlcyhjb250YWN0ZWQpIHtcbiAgICBsZXQgbWF5byA9IDA7XG4gICAgbGV0IHRvbWF0byA9IDA7XG4gICAgbGV0IGxldHR1Y2UgPSAwO1xuICAgIGxldCBiYWNvbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgICAgaWYgKCFjdXJyLmluZ3JlZGllbnQpIHtcbiAgICAgICAgbWF5bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwidG9tYXRvXCIpKSB7XG4gICAgICAgIHRvbWF0bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibGV0dHVjZVwiKSkge1xuICAgICAgICBsZXR0dWNlKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJiYWNvblwiKSkge1xuICAgICAgICBiYWNvbisrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKChtYXlvID4gMSkgfHwgKHRvbWF0byA+IDEpIHx8IChsZXR0dWNlID4gMSkgfHwgKGJhY29uID4gMSkpIHtcbiAgICAgIGR1cGxpY2F0ZXMgPSB0cnVlO1xuICAgIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gaGFuZGxlRm9vZChjYW52YXMpIHtcbiAgaWYgKGdhbWVGcmFtZSAlIDE1ID09IDApIHtcbiAgICBsZXQgbmV3Rm9vZCA9IG5ldyBGb29kKGNhbnZhcywgY3R4KTtcbiAgICBmb29kQXJyLnB1c2gobmV3Rm9vZCk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGZvb2RBcnJbaV0ueSA9PT0gdGhpc2JyZWFkLnkpICYmIChmb29kQXJyW2ldLnggPiB0aGlzYnJlYWQueCAtIDcwICYmIGZvb2RBcnJbaV0ueCA8IHRoaXNicmVhZC54ICsgNzApKSB7IFxuICAgICAgaWYgKCFmb29kQXJyW2ldLmNvdW50ZWQpIHNjb3JlICs9IDE7XG4gICAgICBcbiAgICAgIGlmIChjb250YWN0ZWQuaW5kZXhPZihmb29kQXJyW2ldKSA9PT0gLTEgKSB7XG4gICAgICAgIGlmIChmb29kQXJyW2ldLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcIm1heW9cIikpIHtcbiAgICAgICAgICBjb250YWN0ZWQucHVzaChNQVlPRkxBVClcbiAgICAgICAgICBmb29kQXJyW2ldLmNvdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGZvb2RBcnIuc3BsaWNlKGksIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgY29udGFjdGVkLnB1c2goZm9vZEFycltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzYnJlYWQueSAtPSAyMDtcbiAgICAgICAgY29uc29sZS5sb2codGhpc2JyZWFkLnkpO1xuXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb29kQXJyW2ldLnVwZGF0ZUhlaWdodCgpO1xuXG4gICAgaWYgKGNvbnRhY3RlZC5pbmRleE9mKGZvb2RBcnJbaV0pID09PSAtMSAmJiBmb29kQXJyW2ldLnkgPCBjYW52YXMuaGVpZ2h0KSBmb29kQXJyW2ldLmRyYXcoKTtcbiAgICBpZiAoZm9vZEFycltpXS55ID4gY2FudmFzLmhlaWdodCkgZm9vZEFyci5zaGlmdChmb29kQXJyW2ldKVxuICB9XG5cbiAgXG59XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5sZXQgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4KTtcblxuXG4vL2FuaW1hdGlvbiBcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGlmIChpY2sgPj0gMikge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5mb250ID0gXCI4MHB4IExvbmRyaW5hIFNvbGlkXCJcbiAgICBjdHguZmlsbFRleHQoXCJZVUNLIVwiLCAyMDAsIDI1MClcbiAgICBjdHguZm9udCA9IFwiNDBweCBMb25kcmluYSBTb2xpZFwiXG4gICAgY3R4LmZpbGxUZXh0KFwiSGl0IHNwYWNlIHRvIHJlc3RhcnRcIiwgMjAwLCAzMDApXG4gICAgdGhpc2JyZWFkLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH0gZWxzZSBpZiAoZHVwbGljYXRlcykge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5mb250ID0gXCI4MHB4IExvbmRyaW5hIFNvbGlkXCJcbiAgICBjdHguZmlsbFRleHQoXCJOTyBEVVBMSUNBVEVTIVwiLCAyMDAsIDI1MClcbiAgICBjdHguZm9udCA9IFwiNDBweCBMb25kcmluYSBTb2xpZFwiXG4gICAgY3R4LmZpbGxUZXh0KFwiSGl0IHNwYWNlIHRvIHJlc3RhcnRcIiwgMjAwLCAzMDApXG4gICAgXG5cbiAgICB0aGlzYnJlYWQuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfSBcbiAgXG4gIGlmICghdGhpc2JyZWFkLmdhbWVPdmVyKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gLy9kcmF3IGdyZWVuIGxpbmVcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4Lm1vdmVUbygwLCAxNTApO1xuICAgIC8vIGN0eC5saW5lVG8oODAwLCAxNTApO1xuICAgIC8vIGN0eC5saW5lV2lkdGggPSA2O1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9ICdjaGFydHJldXNlJztcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgICAvL2RyYXcgc2FuZHdpY2hcbiAgICB0aGlzYnJlYWQuZHJhdyhjb250YWN0ZWQpO1xuICAgIHRoaXNicmVhZC51cGRhdGUoKTtcbiAgICBhcmVEdXBsaWNhdGVzKGNvbnRhY3RlZCk7XG4gICAgY291bnRHcm9zcyhjb250YWN0ZWQpO1xuICAgIGhhbmRsZUZvb2QoY2FudmFzKTtcblxuICAgIC8vd3JpdGUgdGV4dFxuICAgIGN0eC5mb250ID0gXCIzMHB4IExvbmRyaW5hIFNvbGlkXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJCTFQgQ291bnQ6IFwiICsgYmx0cywgMTAsIDMwKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSWNrOiBcIiArIGljaywgMTAsIDY1KVxuXG4gICAgLy9zYW5kd2ljaCBjb21wbGV0ZVxuICAgIGlmICh0aGlzYnJlYWQuY29tcGxldGVkKSB7XG4gICAgICBpZiAoaXNCTFQoY29udGFjdGVkKSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDUwLCAxOTAsIDUwMCwgMTAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiY2hhcnRyZXVzZVwiO1xuICAgICAgICBjdHguZm9udCA9IFwiODBweCBMb25kcmluYSBTb2xpZFwiXG4gICAgICAgIGN0eC5maWxsVGV4dChcIlRoYXQncyBhIEJMVCFcIiwgMTAwLCAyNTApXG4gICAgICAgIGJyZWFkZWQoKTtcbiAgICAgICAgYmx0cyArPSAxO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICBjdHguZmlsbFJlY3QoNTAsIDE5MCwgNzAwLCAxMDApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJjaGFydHJldXNlXCI7XG4gICAgICAgIGN0eC5mb250ID0gXCI4MHB4IExvbmRyaW5hIFNvbGlkXCJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiVGhhdCdzIE5PVCBhIEJMVCFcIiwgMTAwLCAyNTApXG4gICAgICAgIGJyZWFkZWQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdhbWVGcmFtZSsrO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9IFxuICBcblxufVxuYW5pbWF0ZSgpO1xuXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICBjb250YWN0ZWQgPSBbXTtcbiAgZm9vZEFyciA9IFtdO1xuICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgpO1xuICBibHRzID0gMDtcbiAgaWNrID0gMDtcbiAgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgZHVwbGljYXRlcyA9IGZhbHNlO1xufSJdLCJzb3VyY2VSb290IjoiIn0=