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
  if (ick >= 2 || duplicates) {
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
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
    areDuplicates(contacted);
    countGross(contacted);
    handleFood(canvas); //write text

    ctx.font = "30px Bungee Shade";
    ctx.fillStyle = "white";
    ctx.fillText("BLT Count: " + blts, 10, 30);
    ctx.fillStyle = "white";
    ctx.fillText("Ick: " + ick, 10, 65); //sandwich complete

    if (thisbread.completed) {
      if (isBLT(contacted)) {
        ctx.fillStyle = 'white';
        ctx.fillRect(50, 190, 500, 100);
        ctx.fillStyle = "chartreuse";
        ctx.font = "50px Bungee Shade";
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
        ctx.font = "50px Bungee Shade";
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
    ctx.fillText("YOU LOSE SPACE TO RESTART", 100, 250); // requestAnimationFrame(animate);
  } // if (duplicates) {
  //   thisbread.gameOver = true;
  //   // requestAnimationFrame(animate);
  // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJkdXBsaWNhdGVzIiwiZ2FtZUZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJyZXN0YXJ0IiwiYnJlYWRlZCIsImxhc3RicmVhZCIsInRoaXNicmVhZCIsImVuZEdhbWUiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImNvdW50R3Jvc3MiLCJjb3VudCIsImN1cnIiLCJpc0dyb3NzIiwiaXNCTFQiLCJtYXlvIiwidG9tYXRvIiwibGV0dHVjZSIsImJhY29uIiwiYXJlRHVwbGljYXRlcyIsImhhbmRsZUZvb2QiLCJuZXdGb29kIiwicHVzaCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlSGVpZ2h0IiwiZHJhdyIsInNoaWZ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwidXBkYXRlIiwiZm9udCIsImZpbGxSZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBR01BLEs7QUFDRixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQUE7O0FBQ3hCLFNBQUtDLENBQUwsR0FBU0gsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQXpCO0FBQ0EsU0FBS0YsQ0FBTCxHQUFTQSxDQUFDLElBQUlGLE1BQU0sQ0FBQ0ssS0FBUCxHQUFhLENBQTNCLENBRndCLENBR3hCOztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCLENBTHdCLENBTXhCOztBQUNBLFNBQUtQLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O1dBRUQsa0JB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QUcsQ0FBQ3lGLFFBQUosQ0FBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCO0FBQ0F6RixXQUFHLENBQUNzRCxTQUFKLEdBQWdCLFlBQWhCO0FBQ0F0RCxXQUFHLENBQUN3RixJQUFKLEdBQVcsbUJBQVg7QUFDQXhGLFdBQUcsQ0FBQ3VELFFBQUosQ0FBYSxtQkFBYixFQUFrQyxHQUFsQyxFQUF1QyxHQUF2QztBQUNBTCxlQUFPO0FBQ1B3QyxrQkFBVSxDQUFDLFlBQU07QUFDZlgsK0JBQXFCLENBQUNELE9BQUQsQ0FBckI7QUFDRCxTQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBQ0Q7QUFDRDs7QUFDRGxDLGFBQVM7QUFFVG1DLHlCQUFxQixDQUFDRCxPQUFELENBQXJCO0FBQ0QsR0F0REQsTUFzRE87QUFDTDlFLE9BQUcsQ0FBQ3NELFNBQUosR0FBZ0IsS0FBaEI7QUFDQXRELE9BQUcsQ0FBQ3VELFFBQUosQ0FBYSwyQkFBYixFQUEwQyxHQUExQyxFQUErQyxHQUEvQyxFQUZLLENBR0w7QUFFRCxHQWhFZ0IsQ0FrRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVEOztBQUNEdUIsT0FBTzs7QUFFUCxTQUFTN0IsT0FBVCxHQUFtQjtBQUNqQnpDLFdBQVMsR0FBRyxFQUFaO0FBQ0ErQixTQUFPLEdBQUcsRUFBVjtBQUNBYSxXQUFTLEdBQUcsSUFBSXRELG1EQUFKLENBQVVDLE1BQVYsRUFBa0JDLEdBQWxCLENBQVo7QUFDQXlDLE1BQUksR0FBRyxDQUFQO0FBQ0FDLEtBQUcsR0FBRyxDQUFOO0FBQ0FwQyxVQUFRLEdBQUcsS0FBWDtBQUNBcUMsWUFBVSxHQUFHLEtBQWI7QUFDRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzQnJlYWQsIEJSRUFELCBrZXlzfSBmcm9tICcuL3V0aWwnXG5cblxuY2xhc3MgQnJlYWQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4KSB7XG4gICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMueCA9IHggfHwgY2FudmFzLndpZHRoLzI7XG4gICAgICAgIC8vIHRoaXMuY291bnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIC8vIG5vdFNhbmRvKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmIChrZXlzLmxlZnRQcmVzc2VkICYmICh0aGlzLnggIT09IDApKSB0aGlzLnggLT0gNTtcbiAgICAgICAgaWYgKGtleXMucmlnaHRQcmVzc2VkICYmICh0aGlzLnggIT09IHRoaXMuY2FudmFzLndpZHRoIC0gMTMwKSkgdGhpcy54ICs9IDU7XG4gICAgfVxuXG5cbiAgICBkcmF3KGNvbnRhY3RlZCkge1xuICAgICAgICBsZXQgc3RhY2t4ID0gdGhpcy54O1xuICAgICAgICBsZXQgc3RhY2t5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoQlJFQUQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwLCAzMDAsIDMwMCk7XG4gICAgICAgIC8vIGlmIChjb250YWN0ZWQubGVuZ3RoID49IDUpIHRoaXMuZ2FtZU92ZXIgPXRydWU7XG4gICAgICAgIGlmIChjb250YWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJySW5ncmVkaWVudCA9IGNvbnRhY3RlZFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOb3RNYXlvKGN1cnJJbmdyZWRpZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcmVhZChjdXJySW5ncmVkaWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudC5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMzAwLCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dChicmVhZGVkLCAyMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcblxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMueSA8PSA4MCkgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaXNOb3RNYXlvID0gKGluZ3JlZGllbnQpID0+IHtcbiAgICByZXR1cm4gISFpbmdyZWRpZW50LmluZ3JlZGllbnQ7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkIiwiaW1wb3J0IHsgaXNCcmVhZCwgQlJFQUQgfSBmcm9tICcuL3V0aWwnXG5cbi8vZm9vZFxuY29uc3QgVE9NQVRPID0gbmV3IEltYWdlKCk7XG5UT01BVE8uc3JjID0gJy4vZGlzdC9pbWFnZXMvdG9tYXRvLnBuZydcbmNvbnN0IExFVFRVQ0UgPSBuZXcgSW1hZ2UoKTtcbkxFVFRVQ0Uuc3JjID0gJy4vZGlzdC9pbWFnZXMvbGV0dHVjZS5wbmcnXG5jb25zdCBCQUNPTiA9IG5ldyBJbWFnZSgpO1xuQkFDT04uc3JjID0gJy4vZGlzdC9pbWFnZXMvYmFjb24ucG5nJ1xuY29uc3QgTUFZTyA9IG5ldyBJbWFnZSgpO1xuTUFZTy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvLnBuZydcbmNvbnN0IEZJU0ggPSBuZXcgSW1hZ2UoKTtcbkZJU0guc3JjID0gJy4vZGlzdC9pbWFnZXMvZmlzaC5wbmcnXG5jb25zdCBTT0NLID0gbmV3IEltYWdlKCk7XG5TT0NLLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3NvY2sucG5nJ1xuXG5cbmNvbnN0IElOR1JFRElFTlRTID0gW0ZJU0gsIEZJU0gsIFNPQ0ssIFNPQ0ssVE9NQVRPLCBNQVlPLCBMRVRUVUNFLCBCQUNPTiwgQlJFQURdXG5cbmNsYXNzIEZvb2Qge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMueSA9IC0xMDA7XG4gICAgICAgIHRoaXMuY291bnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnQgPSBJTkdSRURJRU5UU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBJTkdSRURJRU5UUy5sZW5ndGgpXVxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICAgICAgaWYgKHRoaXMueCA+IDcwMCkgdGhpcy54IC09IDEwMDtcbiAgICB9XG5cbiAgICB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0ICsgMTAwO1xuICAgICAgICBpZiAoZHkgIT0gdGhpcy55KSB0aGlzLnkgKz0gNTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBpZiAoaXNCcmVhZCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLnksIDMwMCwgMzAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy55LCAyNTAsIDI1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZDsiLCJleHBvcnQgY29uc3QgaXNCcmVhZCA9IChpbmdyZWRpZW50KSA9PiB7XG4gICAgcmV0dXJuIGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcImJyZWFkXCIpO1xufVxuXG5leHBvcnQgY29uc3QgQlJFQUQgPSBuZXcgSW1hZ2UoKTtcbkJSRUFELnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2JyZWFkLnBuZydcbmV4cG9ydCBjb25zdCBNQVlPRkxBVCA9IG5ldyBJbWFnZSgpO1xuTUFZT0ZMQVQuc3JjID0gJy4vZGlzdC9pbWFnZXMvbWF5b2ZsYXQucG5nJ1xuXG5leHBvcnQgY29uc3Qga2V5cyA9IHtcbiAgICBsZWZ0UHJlc3NlZDogZmFsc2UsXG4gICAgcmlnaHRQcmVzc2VkOiBmYWxzZVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJyZWFkIGZyb20gJy4vc2NyaXB0cy9icmVhZCdcbmltcG9ydCBGb29kIGZyb20gJy4vc2NyaXB0cy9mb29kJ1xuaW1wb3J0IHtNQVlPRkxBVCwga2V5c30gZnJvbSAnLi9zY3JpcHRzL3V0aWwnXG5cblxubGV0IGNvbnRhY3RlZCA9IFtdO1xubGV0IGZvb2RBcnIgPSBbXTtcblxubGV0IHNjb3JlID0gMDtcbmxldCBibHRzID0gMDtcbmxldCBpY2sgPSAwO1xubGV0IGR1cGxpY2F0ZXMgPSBmYWxzZTtcbmxldCBnYW1lRnJhbWUgPSAwO1xubGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbi8vIGxldCBpc1NhbmRvID0gZmFsc2U7XG5cblxuLy8gbGV0IGNhbnZhc1BvcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vIGNvbnNvbGUubG9nKGNhbnZhc1Bvcyk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgMzc6XG4gICAgICBrZXlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzI6XG4gICAgICByZXN0YXJ0KCk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cblxuXG5cbi8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgY29uc29sZS5sb2coZXZlbnQueC1jYW52YXNQb3MubGVmdCwgZXZlbnQueS1jYW52YXNQb3MudG9wKVxuLy8gfSk7XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGJyZWFkZWQoKSB7XG4gIGNvbnRhY3RlZCA9IFtdO1xuICBmb29kQXJyID0gW107XG4gIGxldCBsYXN0YnJlYWQgPSB0aGlzYnJlYWQ7XG4gIHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCwgbGFzdGJyZWFkLngpO1xufVxuXG5cbi8vIGZ1bmN0aW9uIGdyb3NzZWQoKSB7XG4vLyAgIGNvbnRhY3RlZC5wb3AoKTtcbi8vICAgbGV0IGxhc3RicmVhZCA9IHRoaXNicmVhZDtcbi8vICAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4LCBsYXN0YnJlYWQueCk7XG4vLyB9XG5cbmZ1bmN0aW9uIGVuZEdhbWUgKCkge1xuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgY3R4LmZpbGxUZXh0KFwiWU9VIExPU0VcIiwgNDAwLCAyNTApXG59XG5cbmZ1bmN0aW9uIGNvdW50R3Jvc3MoY29udGFjdGVkKSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGN1cnIgPSBjb250YWN0ZWRbaV07XG4gICAgaWYgKGlzR3Jvc3MoY3VycikpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgaWNrID0gY291bnQ7XG59XG5cbmNvbnN0IGlzR3Jvc3MgPSAoaW5ncmVkaWVudCkgPT4ge1xuICByZXR1cm4gaW5ncmVkaWVudC5pbmdyZWRpZW50Py5jdXJyZW50U3JjLmluY2x1ZGVzKFwic29ja1wiKSB8fCBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJmaXNoXCIpO1xufVxuXG5mdW5jdGlvbiBpc0JMVChjb250YWN0ZWQpIHtcbiAgICBsZXQgbWF5byA9IDA7XG4gICAgbGV0IHRvbWF0byA9IDA7XG4gICAgbGV0IGxldHR1Y2UgPSAwO1xuICAgIGxldCBiYWNvbiA9IDA7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VyciA9IGNvbnRhY3RlZFtpXTtcbiAgICAgIGlmICghY3Vyci5pbmdyZWRpZW50KSB7XG4gICAgICAgIG1heW8rK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcInRvbWF0b1wiKSkge1xuICAgICAgICB0b21hdG8rK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcImxldHR1Y2VcIikpIHtcbiAgICAgICAgbGV0dHVjZSsrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwiYmFjb25cIikpIHtcbiAgICAgICAgYmFjb24rK1xuICAgICAgfSBcbiAgICB9XG5cbiAgICByZXR1cm4gKChtYXlvID4gMCkgJiYgKHRvbWF0byA+IDApICYmIChsZXR0dWNlID4gMCkgJiYgKGJhY29uID4gMCkpXG59XG5cblxuXG5cbmZ1bmN0aW9uIGFyZUR1cGxpY2F0ZXMoY29udGFjdGVkKSB7XG4gICAgbGV0IG1heW8gPSAwO1xuICAgIGxldCB0b21hdG8gPSAwO1xuICAgIGxldCBsZXR0dWNlID0gMDtcbiAgICBsZXQgYmFjb24gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VyciA9IGNvbnRhY3RlZFtpXTtcbiAgICAgIGlmICghY3Vyci5pbmdyZWRpZW50KSB7XG4gICAgICAgIG1heW8rK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcInRvbWF0b1wiKSkge1xuICAgICAgICB0b21hdG8rK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcImxldHR1Y2VcIikpIHtcbiAgICAgICAgbGV0dHVjZSsrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwiYmFjb25cIikpIHtcbiAgICAgICAgYmFjb24rK1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgobWF5byA+IDEpIHx8ICh0b21hdG8gPiAxKSB8fCAobGV0dHVjZSA+IDEpIHx8IChiYWNvbiA+IDEpKSB7XG4gICAgICBkdXBsaWNhdGVzID0gdHJ1ZTtcbiAgICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIGhhbmRsZUZvb2QoY2FudmFzKSB7XG4gIGlmIChnYW1lRnJhbWUgJSAzNSA9PSAwKSB7XG4gICAgbGV0IG5ld0Zvb2QgPSBuZXcgRm9vZChjYW52YXMsIGN0eCk7XG4gICAgZm9vZEFyci5wdXNoKG5ld0Zvb2QpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChmb29kQXJyW2ldLnkgPT09IHRoaXNicmVhZC55KSAmJiAoZm9vZEFycltpXS54ID4gdGhpc2JyZWFkLnggLSA1MCAmJiBmb29kQXJyW2ldLnggPCB0aGlzYnJlYWQueCArIDUwKSkgeyBcbiAgICAgIGlmICghZm9vZEFycltpXS5jb3VudGVkKSBzY29yZSArPSAxO1xuICAgICAgXG4gICAgICBpZiAoY29udGFjdGVkLmluZGV4T2YoZm9vZEFycltpXSkgPT09IC0xICkge1xuICAgICAgICBpZiAoZm9vZEFycltpXS5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJtYXlvXCIpKSB7XG4gICAgICAgICAgY29udGFjdGVkLnB1c2goTUFZT0ZMQVQpXG4gICAgICAgICAgZm9vZEFycltpXS5jb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICBmb29kQXJyLnNwbGljZShpLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb29kQXJyW2ldLmNvdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRhY3RlZC5wdXNoKGZvb2RBcnJbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc2JyZWFkLnkgLT0gMjA7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXNicmVhZC55KTtcblxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9vZEFycltpXS51cGRhdGVIZWlnaHQoKTtcblxuICAgIGlmIChjb250YWN0ZWQuaW5kZXhPZihmb29kQXJyW2ldKSA9PT0gLTEgJiYgZm9vZEFycltpXS55IDwgY2FudmFzLmhlaWdodCkgZm9vZEFycltpXS5kcmF3KCk7XG4gICAgaWYgKGZvb2RBcnJbaV0ueSA+IGNhbnZhcy5oZWlnaHQpIGZvb2RBcnIuc2hpZnQoZm9vZEFycltpXSlcbiAgfVxuXG4gIFxufVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xubGV0IHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCk7XG5cblxuLy9hbmltYXRpb24gXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBpZiAoaWNrID49IDIgfHwgZHVwbGljYXRlcykge1xuICAgIHRoaXNicmVhZC5nYW1lT3ZlciA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG4gIGlmICghdGhpc2JyZWFkLmdhbWVPdmVyKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy9kcmF3IGdyZWVuIGxpbmVcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAxNTApO1xuICAgIGN0eC5saW5lVG8oODAwLCAxNTApO1xuICAgIGN0eC5saW5lV2lkdGggPSA2O1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdjaGFydHJldXNlJztcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvL2RyYXcgc2FuZHdpY2hcbiAgICB0aGlzYnJlYWQuZHJhdyhjb250YWN0ZWQpO1xuICAgIHRoaXNicmVhZC51cGRhdGUoKTtcbiAgICBhcmVEdXBsaWNhdGVzKGNvbnRhY3RlZCk7XG4gICAgY291bnRHcm9zcyhjb250YWN0ZWQpO1xuICAgIGhhbmRsZUZvb2QoY2FudmFzKTtcblxuICAgIC8vd3JpdGUgdGV4dFxuICAgIGN0eC5mb250ID0gXCIzMHB4IEJ1bmdlZSBTaGFkZVwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiQkxUIENvdW50OiBcIiArIGJsdHMsIDEwLCAzMClcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIkljazogXCIgKyBpY2ssIDEwLCA2NSlcblxuICAgIC8vc2FuZHdpY2ggY29tcGxldGVcbiAgICBpZiAodGhpc2JyZWFkLmNvbXBsZXRlZCkge1xuICAgICAgaWYgKGlzQkxUKGNvbnRhY3RlZCkpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MCwgMTkwLCA1MDAsIDEwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImNoYXJ0cmV1c2VcIjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjUwcHggQnVuZ2VlIFNoYWRlXCJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiVGhhdCdzIGEgQkxUIVwiLCAxMDAsIDI1MClcbiAgICAgICAgYnJlYWRlZCgpO1xuICAgICAgICBibHRzICs9IDE7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MCwgMTkwLCA3MDAsIDEwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImNoYXJ0cmV1c2VcIjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjUwcHggQnVuZ2VlIFNoYWRlXCJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiVGhhdCdzIE5PVCBhIEJMVCFcIiwgMTAwLCAyNTApXG4gICAgICAgIGJyZWFkZWQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdhbWVGcmFtZSsrO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9IGVsc2Uge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsVGV4dChcIllPVSBMT1NFIFNQQUNFIFRPIFJFU1RBUlRcIiwgMTAwLCAyNTApXG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gIH1cblxuICAvLyBpZiAoZHVwbGljYXRlcykge1xuICAvLyAgIHRoaXNicmVhZC5nYW1lT3ZlciA9IHRydWU7XG4gIC8vICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAvLyB9XG5cbn1cbmFuaW1hdGUoKTtcblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgY29udGFjdGVkID0gW107XG4gIGZvb2RBcnIgPSBbXTtcbiAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4KTtcbiAgYmx0cyA9IDA7XG4gIGljayA9IDA7XG4gIGdhbWVPdmVyID0gZmFsc2U7XG4gIGR1cGxpY2F0ZXMgPSBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9