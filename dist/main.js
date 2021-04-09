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
var thisbread = new _scripts_bread__WEBPACK_IMPORTED_MODULE_0__.default(canvas, ctx);
var canvasdiv = document.getElementById("canvasdiv"); //animation 

function animate() {
  var removeButton = document.getElementById("button");
  if (removeButton) removeButton.remove();

  if (ick >= 2) {
    var button = document.createElement("button");
    button.setAttribute("id", "button");
    button.textContent = "YUCK! Hit space to restart";
    canvasdiv.appendChild(button);
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
  } else if (duplicates) {
    var _button = document.createElement("button");

    _button.setAttribute("id", "button");

    _button.textContent = "NO DUPLICATES! Hit space to restart";
    canvasdiv.appendChild(_button);
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
  }

  if (!thisbread.gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //draw sandwich

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
        // ctx.fillStyle = 'white';
        // ctx.fillRect(50, 190, 500, 100);
        // ctx.fillStyle = "chartreuse";
        // ctx.font = "80px Londrina Solid"
        // ctx.fillText("That's a BLT!", 100, 250)
        var _button2 = document.createElement("button");

        _button2.setAttribute("id", "button");

        _button2.textContent = "That's a BLT!";
        canvasdiv.appendChild(_button2);
        breaded();
        blts += 1;
        setTimeout(function () {
          requestAnimationFrame(animate);
        }, 2000);
      } else {
        // ctx.fillStyle = 'white';
        // ctx.fillRect(50, 190, 700, 100);
        // ctx.fillStyle = "chartreuse";
        // ctx.font = "80px Londrina Solid"
        // ctx.fillText("That's NOT a BLT!", 100, 250)
        var _button3 = document.createElement("button");

        _button3.setAttribute("id", "button");

        _button3.textContent = "That's NOT a BLT!";
        canvasdiv.appendChild(_button3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJkdXBsaWNhdGVzIiwiZ2FtZUZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJyZXN0YXJ0IiwiYnJlYWRlZCIsImxhc3RicmVhZCIsInRoaXNicmVhZCIsImVuZEdhbWUiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImNvdW50R3Jvc3MiLCJjb3VudCIsImN1cnIiLCJpc0dyb3NzIiwiaXNCTFQiLCJtYXlvIiwidG9tYXRvIiwibGV0dHVjZSIsImJhY29uIiwiYXJlRHVwbGljYXRlcyIsImhhbmRsZUZvb2QiLCJuZXdGb29kIiwicHVzaCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlSGVpZ2h0IiwiZHJhdyIsInNoaWZ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiY2FudmFzZGl2IiwiYW5pbWF0ZSIsInJlbW92ZUJ1dHRvbiIsInJlbW92ZSIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwidXBkYXRlIiwiZm9udCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdNQSxLO0FBQ0YsaUJBQVlDLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCQyxDQUF6QixFQUE0QjtBQUFBOztBQUN4QixTQUFLQyxDQUFMLEdBQVNILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUF6QjtBQUNBLFNBQUtGLENBQUwsR0FBU0EsQ0FBQyxJQUFJRixNQUFNLENBQUNLLEtBQVAsR0FBYSxDQUEzQixDQUZ3QixDQUd4Qjs7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQixDQUx3QixDQU14Qjs7QUFDQSxTQUFLUCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFM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VSxHQUFHLEtBQWI7QUFDRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzQnJlYWQsIEJSRUFELCBrZXlzfSBmcm9tICcuL3V0aWwnXG5cblxuY2xhc3MgQnJlYWQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4KSB7XG4gICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMueCA9IHggfHwgY2FudmFzLndpZHRoLzI7XG4gICAgICAgIC8vIHRoaXMuY291bnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIC8vIG5vdFNhbmRvKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmIChrZXlzLmxlZnRQcmVzc2VkICYmICh0aGlzLnggIT09IDApKSB0aGlzLnggLT0gNTtcbiAgICAgICAgaWYgKGtleXMucmlnaHRQcmVzc2VkICYmICh0aGlzLnggIT09IHRoaXMuY2FudmFzLndpZHRoIC0gMTMwKSkgdGhpcy54ICs9IDU7XG4gICAgfVxuXG5cbiAgICBkcmF3KGNvbnRhY3RlZCkge1xuICAgICAgICBsZXQgc3RhY2t4ID0gdGhpcy54O1xuICAgICAgICBsZXQgc3RhY2t5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoQlJFQUQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwLCAzMDAsIDMwMCk7XG4gICAgICAgIC8vIGlmIChjb250YWN0ZWQubGVuZ3RoID49IDUpIHRoaXMuZ2FtZU92ZXIgPXRydWU7XG4gICAgICAgIGlmIChjb250YWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJySW5ncmVkaWVudCA9IGNvbnRhY3RlZFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOb3RNYXlvKGN1cnJJbmdyZWRpZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcmVhZChjdXJySW5ncmVkaWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudC5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMzAwLCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dChicmVhZGVkLCAyMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcblxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMueSA8PSA4MCkgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaXNOb3RNYXlvID0gKGluZ3JlZGllbnQpID0+IHtcbiAgICByZXR1cm4gISFpbmdyZWRpZW50LmluZ3JlZGllbnQ7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkIiwiaW1wb3J0IHsgaXNCcmVhZCwgQlJFQUQgfSBmcm9tICcuL3V0aWwnXG5cbi8vZm9vZFxuY29uc3QgVE9NQVRPID0gbmV3IEltYWdlKCk7XG5UT01BVE8uc3JjID0gJy4vZGlzdC9pbWFnZXMvdG9tYXRvLnBuZydcbmNvbnN0IExFVFRVQ0UgPSBuZXcgSW1hZ2UoKTtcbkxFVFRVQ0Uuc3JjID0gJy4vZGlzdC9pbWFnZXMvbGV0dHVjZS5wbmcnXG5jb25zdCBCQUNPTiA9IG5ldyBJbWFnZSgpO1xuQkFDT04uc3JjID0gJy4vZGlzdC9pbWFnZXMvYmFjb24ucG5nJ1xuY29uc3QgTUFZTyA9IG5ldyBJbWFnZSgpO1xuTUFZTy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvLnBuZydcbmNvbnN0IEZJU0ggPSBuZXcgSW1hZ2UoKTtcbkZJU0guc3JjID0gJy4vZGlzdC9pbWFnZXMvZmlzaC5wbmcnXG5jb25zdCBTT0NLID0gbmV3IEltYWdlKCk7XG5TT0NLLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3NvY2sucG5nJ1xuXG5cbmNvbnN0IElOR1JFRElFTlRTID0gW0ZJU0gsIEZJU0gsIFNPQ0ssIFNPQ0ssVE9NQVRPLCBNQVlPLCBMRVRUVUNFLCBCQUNPTiwgQlJFQURdXG5cbmNsYXNzIEZvb2Qge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMueSA9IC0xMDA7XG4gICAgICAgIHRoaXMuY291bnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnQgPSBJTkdSRURJRU5UU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBJTkdSRURJRU5UUy5sZW5ndGgpXVxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICAgICAgaWYgKHRoaXMueCA+IDcwMCkgdGhpcy54IC09IDEwMDtcbiAgICB9XG5cbiAgICB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0ICsgMTAwO1xuICAgICAgICBpZiAoZHkgIT0gdGhpcy55KSB0aGlzLnkgKz0gNTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBpZiAoaXNCcmVhZCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLnksIDMwMCwgMzAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy55LCAyNTAsIDI1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZDsiLCJleHBvcnQgY29uc3QgaXNCcmVhZCA9IChpbmdyZWRpZW50KSA9PiB7XG4gICAgcmV0dXJuIGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcImJyZWFkXCIpO1xufVxuXG5leHBvcnQgY29uc3QgQlJFQUQgPSBuZXcgSW1hZ2UoKTtcbkJSRUFELnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2JyZWFkLnBuZydcbmV4cG9ydCBjb25zdCBNQVlPRkxBVCA9IG5ldyBJbWFnZSgpO1xuTUFZT0ZMQVQuc3JjID0gJy4vZGlzdC9pbWFnZXMvbWF5b2ZsYXQucG5nJ1xuXG5leHBvcnQgY29uc3Qga2V5cyA9IHtcbiAgICBsZWZ0UHJlc3NlZDogZmFsc2UsXG4gICAgcmlnaHRQcmVzc2VkOiBmYWxzZVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJyZWFkIGZyb20gJy4vc2NyaXB0cy9icmVhZCdcbmltcG9ydCBGb29kIGZyb20gJy4vc2NyaXB0cy9mb29kJ1xuaW1wb3J0IHtNQVlPRkxBVCwga2V5c30gZnJvbSAnLi9zY3JpcHRzL3V0aWwnXG5cblxubGV0IGNvbnRhY3RlZCA9IFtdO1xubGV0IGZvb2RBcnIgPSBbXTtcblxubGV0IHNjb3JlID0gMDtcbmxldCBibHRzID0gMDtcbmxldCBpY2sgPSAwO1xubGV0IGR1cGxpY2F0ZXMgPSBmYWxzZTtcbmxldCBnYW1lRnJhbWUgPSAwO1xubGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbi8vIGxldCBpc1NhbmRvID0gZmFsc2U7XG5cblxuLy8gbGV0IGNhbnZhc1BvcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vIGNvbnNvbGUubG9nKGNhbnZhc1Bvcyk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgMzc6XG4gICAgICBrZXlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzI6XG4gICAgICByZXN0YXJ0KCk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cblxuXG5cbi8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgY29uc29sZS5sb2coZXZlbnQueC1jYW52YXNQb3MubGVmdCwgZXZlbnQueS1jYW52YXNQb3MudG9wKVxuLy8gfSk7XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGJyZWFkZWQoKSB7XG4gIGNvbnRhY3RlZCA9IFtdO1xuICBmb29kQXJyID0gW107XG4gIGxldCBsYXN0YnJlYWQgPSB0aGlzYnJlYWQ7XG4gIHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCwgbGFzdGJyZWFkLngpO1xufVxuXG5cbi8vIGZ1bmN0aW9uIGdyb3NzZWQoKSB7XG4vLyAgIGNvbnRhY3RlZC5wb3AoKTtcbi8vICAgbGV0IGxhc3RicmVhZCA9IHRoaXNicmVhZDtcbi8vICAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4LCBsYXN0YnJlYWQueCk7XG4vLyB9XG5cbmZ1bmN0aW9uIGVuZEdhbWUgKCkge1xuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgY3R4LmZpbGxUZXh0KFwiWU9VIExPU0VcIiwgNDAwLCAyNTApXG59XG5cbmZ1bmN0aW9uIGNvdW50R3Jvc3MoY29udGFjdGVkKSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGN1cnIgPSBjb250YWN0ZWRbaV07XG4gICAgaWYgKGlzR3Jvc3MoY3VycikpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgaWNrID0gY291bnQ7XG59XG5cbmNvbnN0IGlzR3Jvc3MgPSAoaW5ncmVkaWVudCkgPT4ge1xuICByZXR1cm4gaW5ncmVkaWVudC5pbmdyZWRpZW50Py5jdXJyZW50U3JjLmluY2x1ZGVzKFwic29ja1wiKSB8fCBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJmaXNoXCIpO1xufVxuXG5mdW5jdGlvbiBpc0JMVChjb250YWN0ZWQpIHtcbiAgICBsZXQgbWF5byA9IDA7XG4gICAgbGV0IHRvbWF0byA9IDA7XG4gICAgbGV0IGxldHR1Y2UgPSAwO1xuICAgIGxldCBiYWNvbiA9IDA7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VyciA9IGNvbnRhY3RlZFtpXTtcbiAgICAgIGlmICghY3Vyci5pbmdyZWRpZW50KSB7XG4gICAgICAgIG1heW8rK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcInRvbWF0b1wiKSkge1xuICAgICAgICB0b21hdG8rK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcImxldHR1Y2VcIikpIHtcbiAgICAgICAgbGV0dHVjZSsrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwiYmFjb25cIikpIHtcbiAgICAgICAgYmFjb24rK1xuICAgICAgfSBcbiAgICB9XG5cbiAgICByZXR1cm4gKChtYXlvID4gMCkgJiYgKHRvbWF0byA+IDApICYmIChsZXR0dWNlID4gMCkgJiYgKGJhY29uID4gMCkpXG59XG5cblxuXG5cbmZ1bmN0aW9uIGFyZUR1cGxpY2F0ZXMoY29udGFjdGVkKSB7XG4gICAgbGV0IG1heW8gPSAwO1xuICAgIGxldCB0b21hdG8gPSAwO1xuICAgIGxldCBsZXR0dWNlID0gMDtcbiAgICBsZXQgYmFjb24gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VyciA9IGNvbnRhY3RlZFtpXTtcbiAgICAgIGlmICghY3Vyci5pbmdyZWRpZW50KSB7XG4gICAgICAgIG1heW8rK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcInRvbWF0b1wiKSkge1xuICAgICAgICB0b21hdG8rK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcImxldHR1Y2VcIikpIHtcbiAgICAgICAgbGV0dHVjZSsrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwiYmFjb25cIikpIHtcbiAgICAgICAgYmFjb24rK1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgobWF5byA+IDEpIHx8ICh0b21hdG8gPiAxKSB8fCAobGV0dHVjZSA+IDEpIHx8IChiYWNvbiA+IDEpKSB7XG4gICAgICBkdXBsaWNhdGVzID0gdHJ1ZTtcbiAgICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIGhhbmRsZUZvb2QoY2FudmFzKSB7XG4gIGlmIChnYW1lRnJhbWUgJSAxNSA9PSAwKSB7XG4gICAgbGV0IG5ld0Zvb2QgPSBuZXcgRm9vZChjYW52YXMsIGN0eCk7XG4gICAgZm9vZEFyci5wdXNoKG5ld0Zvb2QpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChmb29kQXJyW2ldLnkgPT09IHRoaXNicmVhZC55KSAmJiAoZm9vZEFycltpXS54ID4gdGhpc2JyZWFkLnggLSA3MCAmJiBmb29kQXJyW2ldLnggPCB0aGlzYnJlYWQueCArIDcwKSkgeyBcbiAgICAgIGlmICghZm9vZEFycltpXS5jb3VudGVkKSBzY29yZSArPSAxO1xuICAgICAgXG4gICAgICBpZiAoY29udGFjdGVkLmluZGV4T2YoZm9vZEFycltpXSkgPT09IC0xICkge1xuICAgICAgICBpZiAoZm9vZEFycltpXS5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJtYXlvXCIpKSB7XG4gICAgICAgICAgY29udGFjdGVkLnB1c2goTUFZT0ZMQVQpXG4gICAgICAgICAgZm9vZEFycltpXS5jb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICBmb29kQXJyLnNwbGljZShpLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb29kQXJyW2ldLmNvdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRhY3RlZC5wdXNoKGZvb2RBcnJbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc2JyZWFkLnkgLT0gMjA7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXNicmVhZC55KTtcblxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9vZEFycltpXS51cGRhdGVIZWlnaHQoKTtcblxuICAgIGlmIChjb250YWN0ZWQuaW5kZXhPZihmb29kQXJyW2ldKSA9PT0gLTEgJiYgZm9vZEFycltpXS55IDwgY2FudmFzLmhlaWdodCkgZm9vZEFycltpXS5kcmF3KCk7XG4gICAgaWYgKGZvb2RBcnJbaV0ueSA+IGNhbnZhcy5oZWlnaHQpIGZvb2RBcnIuc2hpZnQoZm9vZEFycltpXSlcbiAgfVxuXG4gIFxufVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xubGV0IHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCk7XG5jb25zdCBjYW52YXNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc2RpdlwiKTtcblxuXG4vL2FuaW1hdGlvbiBcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTtcbiAgaWYgKHJlbW92ZUJ1dHRvbikgcmVtb3ZlQnV0dG9uLnJlbW92ZSgpO1xuXG4gIGlmIChpY2sgPj0gMikge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIllVQ0shIEhpdCBzcGFjZSB0byByZXN0YXJ0XCJcbiAgICBjYW52YXNkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB0aGlzYnJlYWQuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfSBlbHNlIGlmIChkdXBsaWNhdGVzKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTk8gRFVQTElDQVRFUyEgSGl0IHNwYWNlIHRvIHJlc3RhcnRcIlxuICAgIGNhbnZhc2Rpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHRoaXNicmVhZC5nYW1lT3ZlciA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9IFxuICBcbiAgaWYgKCF0aGlzYnJlYWQuZ2FtZU92ZXIpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvL2RyYXcgc2FuZHdpY2hcbiAgICB0aGlzYnJlYWQuZHJhdyhjb250YWN0ZWQpO1xuICAgIHRoaXNicmVhZC51cGRhdGUoKTtcbiAgICBhcmVEdXBsaWNhdGVzKGNvbnRhY3RlZCk7XG4gICAgY291bnRHcm9zcyhjb250YWN0ZWQpO1xuICAgIGhhbmRsZUZvb2QoY2FudmFzKTtcblxuICAgIC8vd3JpdGUgdGV4dFxuICAgIGN0eC5mb250ID0gXCIzMHB4IExvbmRyaW5hIFNvbGlkXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJCTFQgQ291bnQ6IFwiICsgYmx0cywgMTAsIDMwKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSWNrOiBcIiArIGljaywgMTAsIDY1KVxuXG4gICAgLy9zYW5kd2ljaCBjb21wbGV0ZVxuICAgIGlmICh0aGlzYnJlYWQuY29tcGxldGVkKSB7XG4gICAgICBpZiAoaXNCTFQoY29udGFjdGVkKSkge1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDUwLCAxOTAsIDUwMCwgMTAwKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiY2hhcnRyZXVzZVwiO1xuICAgICAgICAvLyBjdHguZm9udCA9IFwiODBweCBMb25kcmluYSBTb2xpZFwiXG4gICAgICAgIC8vIGN0eC5maWxsVGV4dChcIlRoYXQncyBhIEJMVCFcIiwgMTAwLCAyNTApXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVGhhdCdzIGEgQkxUIVwiXG4gICAgICAgIGNhbnZhc2Rpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBicmVhZGVkKCk7XG4gICAgICAgIGJsdHMgKz0gMTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDUwLCAxOTAsIDcwMCwgMTAwKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiY2hhcnRyZXVzZVwiO1xuICAgICAgICAvLyBjdHguZm9udCA9IFwiODBweCBMb25kcmluYSBTb2xpZFwiXG4gICAgICAgIC8vIGN0eC5maWxsVGV4dChcIlRoYXQncyBOT1QgYSBCTFQhXCIsIDEwMCwgMjUwKVxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlRoYXQncyBOT1QgYSBCTFQhXCJcbiAgICAgICAgY2FudmFzZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGJyZWFkZWQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdhbWVGcmFtZSsrO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9IFxuICBcblxufVxuYW5pbWF0ZSgpO1xuXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICBjb250YWN0ZWQgPSBbXTtcbiAgZm9vZEFyciA9IFtdO1xuICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgpO1xuICBibHRzID0gMDtcbiAgaWNrID0gMDtcbiAgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgZHVwbGljYXRlcyA9IGZhbHNlO1xufSJdLCJzb3VyY2VSb290IjoiIn0=