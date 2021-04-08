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
    ctx.fillText("YOU LOSE SPACE TO RESTART", 100, 250);
    requestAnimationFrame(animate);
  }

  if (ick >= 2 || duplicates) {
    thisbread.gameOver = true;
    requestAnimationFrame(animate);
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
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJkdXBsaWNhdGVzIiwiZ2FtZUZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJyZXN0YXJ0IiwiYnJlYWRlZCIsImxhc3RicmVhZCIsInRoaXNicmVhZCIsImVuZEdhbWUiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImNvdW50R3Jvc3MiLCJjb3VudCIsImN1cnIiLCJpc0dyb3NzIiwiaXNCTFQiLCJtYXlvIiwidG9tYXRvIiwibGV0dHVjZSIsImJhY29uIiwiYXJlRHVwbGljYXRlcyIsImhhbmRsZUZvb2QiLCJuZXdGb29kIiwicHVzaCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlSGVpZ2h0IiwiZHJhdyIsInNoaWZ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwidXBkYXRlIiwiZm9udCIsImZpbGxSZWN0Iiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBR01BLEs7QUFDRixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQUE7O0FBQ3hCLFNBQUtDLENBQUwsR0FBU0gsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQXpCO0FBQ0EsU0FBS0YsQ0FBTCxHQUFTQSxDQUFDLElBQUlGLE1BQU0sQ0FBQ0ssS0FBUCxHQUFhLENBQTNCLENBRndCLENBR3hCOztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCLENBTHdCLENBTXhCOztBQUNBLFNBQUtQLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O1dBRUQsa0JB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QUosR0FBVyxtQkFBWDtBQUNBdkYsV0FBRyxDQUFDdUQsUUFBSixDQUFhLG1CQUFiLEVBQWtDLEdBQWxDLEVBQXVDLEdBQXZDO0FBQ0FMLGVBQU87QUFDUHVDLGtCQUFVLENBQUMsWUFBTTtBQUNmQywrQkFBcUIsQ0FBQ1osT0FBRCxDQUFyQjtBQUNELFNBRlMsRUFFUCxJQUZPLENBQVY7QUFHRDs7QUFDRDtBQUNEOztBQUNEbEMsYUFBUztBQUVUOEMseUJBQXFCLENBQUNaLE9BQUQsQ0FBckI7QUFDRCxHQXRERCxNQXNETztBQUNMOUUsT0FBRyxDQUFDc0QsU0FBSixHQUFnQixLQUFoQjtBQUNBdEQsT0FBRyxDQUFDdUQsUUFBSixDQUFhLDJCQUFiLEVBQTBDLEdBQTFDLEVBQStDLEdBQS9DO0FBQ0FtQyx5QkFBcUIsQ0FBQ1osT0FBRCxDQUFyQjtBQUVEOztBQUNELE1BQUlwQyxHQUFHLElBQUksQ0FBUCxJQUFZQyxVQUFoQixFQUE0QjtBQUMxQlMsYUFBUyxDQUFDOUMsUUFBVixHQUFxQixJQUFyQjtBQUNBb0YseUJBQXFCLENBQUNaLE9BQUQsQ0FBckI7QUFDRCxHQWhFZ0IsQ0FpRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVEOztBQUNEQSxPQUFPOztBQUlQLFNBQVM3QixPQUFULEdBQW1CO0FBQ2pCekMsV0FBUyxHQUFHLEVBQVo7QUFDQStCLFNBQU8sR0FBRyxFQUFWO0FBQ0FhLFdBQVMsR0FBRyxJQUFJdEQsbURBQUosQ0FBVUMsTUFBVixFQUFrQkMsR0FBbEIsQ0FBWjtBQUNBeUMsTUFBSSxHQUFHLENBQVA7QUFDQUMsS0FBRyxHQUFHLENBQU47QUFDQXBDLFVBQVEsR0FBRyxLQUFYO0FBQ0QsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0JyZWFkLCBCUkVBRCwga2V5c30gZnJvbSAnLi91dGlsJ1xuXG5cbmNsYXNzIEJyZWFkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCkge1xuICAgICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgICAgICB0aGlzLnggPSB4IHx8IGNhbnZhcy53aWR0aC8yO1xuICAgICAgICAvLyB0aGlzLmNvdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAvLyBub3RTYW5kbygpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoa2V5cy5sZWZ0UHJlc3NlZCAmJiAodGhpcy54ICE9PSAwKSkgdGhpcy54IC09IDU7XG4gICAgICAgIGlmIChrZXlzLnJpZ2h0UHJlc3NlZCAmJiAodGhpcy54ICE9PSB0aGlzLmNhbnZhcy53aWR0aCAtIDEzMCkpIHRoaXMueCArPSA1O1xuICAgIH1cblxuXG4gICAgZHJhdyhjb250YWN0ZWQpIHtcbiAgICAgICAgbGV0IHN0YWNreCA9IHRoaXMueDtcbiAgICAgICAgbGV0IHN0YWNreSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKEJSRUFELCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMuY2FudmFzLmhlaWdodCAtIDEwMCwgMzAwLCAzMDApO1xuICAgICAgICAvLyBpZiAoY29udGFjdGVkLmxlbmd0aCA+PSA1KSB0aGlzLmdhbWVPdmVyID10cnVlO1xuICAgICAgICBpZiAoY29udGFjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyckluZ3JlZGllbnQgPSBjb250YWN0ZWRbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlzTm90TWF5byhjdXJySW5ncmVkaWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJlYWQoY3VyckluZ3JlZGllbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDMwMCwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoYnJlYWRlZCwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudC5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2t5ID0gc3RhY2t5IC0gMjA7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2t5ID0gc3RhY2t5IC0gMjA7XG5cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnkgPD0gODApIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGlzTm90TWF5byA9IChpbmdyZWRpZW50KSA9PiB7XG4gICAgcmV0dXJuICEhaW5ncmVkaWVudC5pbmdyZWRpZW50O1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZCIsImltcG9ydCB7IGlzQnJlYWQsIEJSRUFEIH0gZnJvbSAnLi91dGlsJ1xuXG4vL2Zvb2RcbmNvbnN0IFRPTUFUTyA9IG5ldyBJbWFnZSgpO1xuVE9NQVRPLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3RvbWF0by5wbmcnXG5jb25zdCBMRVRUVUNFID0gbmV3IEltYWdlKCk7XG5MRVRUVUNFLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2xldHR1Y2UucG5nJ1xuY29uc3QgQkFDT04gPSBuZXcgSW1hZ2UoKTtcbkJBQ09OLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2JhY29uLnBuZydcbmNvbnN0IE1BWU8gPSBuZXcgSW1hZ2UoKTtcbk1BWU8uc3JjID0gJy4vZGlzdC9pbWFnZXMvbWF5by5wbmcnXG5jb25zdCBGSVNIID0gbmV3IEltYWdlKCk7XG5GSVNILnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2Zpc2gucG5nJ1xuY29uc3QgU09DSyA9IG5ldyBJbWFnZSgpO1xuU09DSy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9zb2NrLnBuZydcblxuXG5jb25zdCBJTkdSRURJRU5UUyA9IFtGSVNILCBGSVNILCBTT0NLLCBTT0NLLFRPTUFUTywgTUFZTywgTEVUVFVDRSwgQkFDT04sIEJSRUFEXVxuXG5jbGFzcyBGb29kIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICB0aGlzLmNvdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50ID0gSU5HUkVESUVOVFNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSU5HUkVESUVOVFMubGVuZ3RoKV1cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgICAgIGlmICh0aGlzLnggPiA3MDApIHRoaXMueCAtPSAxMDA7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBkeSA9IHRoaXMuY2FudmFzLmhlaWdodCArIDEwMDtcbiAgICAgICAgaWYgKGR5ICE9IHRoaXMueSkgdGhpcy55ICs9IDU7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKGlzQnJlYWQodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy55LCAzMDAsIDMwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMueSwgMjUwLCAyNTApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2Q7IiwiZXhwb3J0IGNvbnN0IGlzQnJlYWQgPSAoaW5ncmVkaWVudCkgPT4ge1xuICAgIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJicmVhZFwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJSRUFEID0gbmV3IEltYWdlKCk7XG5CUkVBRC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9icmVhZC5wbmcnXG5leHBvcnQgY29uc3QgTUFZT0ZMQVQgPSBuZXcgSW1hZ2UoKTtcbk1BWU9GTEFULnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL21heW9mbGF0LnBuZydcblxuZXhwb3J0IGNvbnN0IGtleXMgPSB7XG4gICAgbGVmdFByZXNzZWQ6IGZhbHNlLFxuICAgIHJpZ2h0UHJlc3NlZDogZmFsc2Vcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCcmVhZCBmcm9tICcuL3NjcmlwdHMvYnJlYWQnXG5pbXBvcnQgRm9vZCBmcm9tICcuL3NjcmlwdHMvZm9vZCdcbmltcG9ydCB7TUFZT0ZMQVQsIGtleXN9IGZyb20gJy4vc2NyaXB0cy91dGlsJ1xuXG5cbmxldCBjb250YWN0ZWQgPSBbXTtcbmxldCBmb29kQXJyID0gW107XG5cbmxldCBzY29yZSA9IDA7XG5sZXQgYmx0cyA9IDA7XG5sZXQgaWNrID0gMDtcbmxldCBkdXBsaWNhdGVzID0gZmFsc2U7XG5sZXQgZ2FtZUZyYW1lID0gMDtcbmxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4vLyBsZXQgaXNTYW5kbyA9IGZhbHNlO1xuXG5cbi8vIGxldCBjYW52YXNQb3MgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4vLyBjb25zb2xlLmxvZyhjYW52YXNQb3MpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgMzc6XG4gICAgICBrZXlzLmxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzk6XG4gICAgICBrZXlzLnJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIDM3OlxuICAgICAga2V5cy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMyOlxuICAgICAgcmVzdGFydCgpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5cblxuXG4vLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50LngtY2FudmFzUG9zLmxlZnQsIGV2ZW50LnktY2FudmFzUG9zLnRvcClcbi8vIH0pO1xuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBicmVhZGVkKCkge1xuICBjb250YWN0ZWQgPSBbXTtcbiAgZm9vZEFyciA9IFtdO1xuICBsZXQgbGFzdGJyZWFkID0gdGhpc2JyZWFkO1xuICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgsIGxhc3RicmVhZC54KTtcbn1cblxuXG4vLyBmdW5jdGlvbiBncm9zc2VkKCkge1xuLy8gICBjb250YWN0ZWQucG9wKCk7XG4vLyAgIGxldCBsYXN0YnJlYWQgPSB0aGlzYnJlYWQ7XG4vLyAgIHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCwgbGFzdGJyZWFkLngpO1xuLy8gfVxuXG5mdW5jdGlvbiBlbmRHYW1lICgpIHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gIGN0eC5maWxsVGV4dChcIllPVSBMT1NFXCIsIDQwMCwgMjUwKVxufVxuXG5mdW5jdGlvbiBjb3VudEdyb3NzKGNvbnRhY3RlZCkge1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgIGlmIChpc0dyb3NzKGN1cnIpKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGljayA9IGNvdW50O1xufVxuXG5jb25zdCBpc0dyb3NzID0gKGluZ3JlZGllbnQpID0+IHtcbiAgcmV0dXJuIGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcInNvY2tcIikgfHwgaW5ncmVkaWVudC5pbmdyZWRpZW50Py5jdXJyZW50U3JjLmluY2x1ZGVzKFwiZmlzaFwiKTtcbn1cblxuZnVuY3Rpb24gaXNCTFQoY29udGFjdGVkKSB7XG4gICAgbGV0IG1heW8gPSAwO1xuICAgIGxldCB0b21hdG8gPSAwO1xuICAgIGxldCBsZXR0dWNlID0gMDtcbiAgICBsZXQgYmFjb24gPSAwOyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGN1cnIgPSBjb250YWN0ZWRbaV07XG4gICAgICBpZiAoIWN1cnIuaW5ncmVkaWVudCkge1xuICAgICAgICBtYXlvKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJ0b21hdG9cIikpIHtcbiAgICAgICAgdG9tYXRvKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJsZXR0dWNlXCIpKSB7XG4gICAgICAgIGxldHR1Y2UrK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcImJhY29uXCIpKSB7XG4gICAgICAgIGJhY29uKytcbiAgICAgIH0gXG4gICAgfVxuXG4gICAgcmV0dXJuICgobWF5byA+IDApICYmICh0b21hdG8gPiAwKSAmJiAobGV0dHVjZSA+IDApICYmIChiYWNvbiA+IDApKVxufVxuXG5cblxuXG5mdW5jdGlvbiBhcmVEdXBsaWNhdGVzKGNvbnRhY3RlZCkge1xuICAgIGxldCBtYXlvID0gMDtcbiAgICBsZXQgdG9tYXRvID0gMDtcbiAgICBsZXQgbGV0dHVjZSA9IDA7XG4gICAgbGV0IGJhY29uID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGN1cnIgPSBjb250YWN0ZWRbaV07XG4gICAgICBpZiAoIWN1cnIuaW5ncmVkaWVudCkge1xuICAgICAgICBtYXlvKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJ0b21hdG9cIikpIHtcbiAgICAgICAgdG9tYXRvKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJsZXR0dWNlXCIpKSB7XG4gICAgICAgIGxldHR1Y2UrK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcImJhY29uXCIpKSB7XG4gICAgICAgIGJhY29uKytcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKG1heW8gPiAxKSB8fCAodG9tYXRvID4gMSkgfHwgKGxldHR1Y2UgPiAxKSB8fCAoYmFjb24gPiAxKSkge1xuICAgICAgZHVwbGljYXRlcyA9IHRydWU7XG4gICAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBoYW5kbGVGb29kKGNhbnZhcykge1xuICBpZiAoZ2FtZUZyYW1lICUgMzUgPT0gMCkge1xuICAgIGxldCBuZXdGb29kID0gbmV3IEZvb2QoY2FudmFzLCBjdHgpO1xuICAgIGZvb2RBcnIucHVzaChuZXdGb29kKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZEFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmICgoZm9vZEFycltpXS55ID09PSB0aGlzYnJlYWQueSkgJiYgKGZvb2RBcnJbaV0ueCA+IHRoaXNicmVhZC54IC0gNTAgJiYgZm9vZEFycltpXS54IDwgdGhpc2JyZWFkLnggKyA1MCkpIHsgXG4gICAgICBpZiAoIWZvb2RBcnJbaV0uY291bnRlZCkgc2NvcmUgKz0gMTtcbiAgICAgIFxuICAgICAgaWYgKGNvbnRhY3RlZC5pbmRleE9mKGZvb2RBcnJbaV0pID09PSAtMSApIHtcbiAgICAgICAgaWYgKGZvb2RBcnJbaV0uaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibWF5b1wiKSkge1xuICAgICAgICAgIGNvbnRhY3RlZC5wdXNoKE1BWU9GTEFUKVxuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgZm9vZEFyci5zcGxpY2UoaSwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9vZEFycltpXS5jb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250YWN0ZWQucHVzaChmb29kQXJyW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNicmVhZC55IC09IDIwO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzYnJlYWQueSk7XG5cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvb2RBcnJbaV0udXBkYXRlSGVpZ2h0KCk7XG5cbiAgICBpZiAoY29udGFjdGVkLmluZGV4T2YoZm9vZEFycltpXSkgPT09IC0xICYmIGZvb2RBcnJbaV0ueSA8IGNhbnZhcy5oZWlnaHQpIGZvb2RBcnJbaV0uZHJhdygpO1xuICAgIGlmIChmb29kQXJyW2ldLnkgPiBjYW52YXMuaGVpZ2h0KSBmb29kQXJyLnNoaWZ0KGZvb2RBcnJbaV0pXG4gIH1cblxuICBcbn1cblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDUwMDtcbmxldCB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgpO1xuXG5cbi8vYW5pbWF0aW9uIFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgaWYgKCF0aGlzYnJlYWQuZ2FtZU92ZXIpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvL2RyYXcgZ3JlZW4gbGluZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDE1MCk7XG4gICAgY3R4LmxpbmVUbyg4MDAsIDE1MCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDY7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2NoYXJ0cmV1c2UnO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vZHJhdyBzYW5kd2ljaFxuICAgIHRoaXNicmVhZC5kcmF3KGNvbnRhY3RlZCk7XG4gICAgdGhpc2JyZWFkLnVwZGF0ZSgpO1xuICAgIGFyZUR1cGxpY2F0ZXMoY29udGFjdGVkKTtcbiAgICBjb3VudEdyb3NzKGNvbnRhY3RlZCk7XG4gICAgaGFuZGxlRm9vZChjYW52YXMpO1xuXG4gICAgLy93cml0ZSB0ZXh0XG4gICAgY3R4LmZvbnQgPSBcIjMwcHggQnVuZ2VlIFNoYWRlXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJCTFQgQ291bnQ6IFwiICsgYmx0cywgMTAsIDMwKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSWNrOiBcIiArIGljaywgMTAsIDY1KVxuXG4gICAgLy9zYW5kd2ljaCBjb21wbGV0ZVxuICAgIGlmICh0aGlzYnJlYWQuY29tcGxldGVkKSB7XG4gICAgICBpZiAoaXNCTFQoY29udGFjdGVkKSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDUwLCAxOTAsIDUwMCwgMTAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiY2hhcnRyZXVzZVwiO1xuICAgICAgICBjdHguZm9udCA9IFwiNTBweCBCdW5nZWUgU2hhZGVcIlxuICAgICAgICBjdHguZmlsbFRleHQoXCJUaGF0J3MgYSBCTFQhXCIsIDEwMCwgMjUwKVxuICAgICAgICBicmVhZGVkKCk7XG4gICAgICAgIGJsdHMgKz0gMTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDUwLCAxOTAsIDcwMCwgMTAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiY2hhcnRyZXVzZVwiO1xuICAgICAgICBjdHguZm9udCA9IFwiNTBweCBCdW5nZWUgU2hhZGVcIlxuICAgICAgICBjdHguZmlsbFRleHQoXCJUaGF0J3MgTk9UIGEgQkxUIVwiLCAxMDAsIDI1MClcbiAgICAgICAgYnJlYWRlZCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2FtZUZyYW1lKys7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiWU9VIExPU0UgU1BBQ0UgVE8gUkVTVEFSVFwiLCAxMDAsIDI1MClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgfVxuICBpZiAoaWNrID49IDIgfHwgZHVwbGljYXRlcykge1xuICAgIHRoaXNicmVhZC5nYW1lT3ZlciA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG4gIC8vIGlmIChkdXBsaWNhdGVzKSB7XG4gIC8vICAgdGhpc2JyZWFkLmdhbWVPdmVyID0gdHJ1ZTtcbiAgLy8gICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIC8vIH1cblxufVxuYW5pbWF0ZSgpO1xuXG5cblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgY29udGFjdGVkID0gW107XG4gIGZvb2RBcnIgPSBbXTtcbiAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4KTtcbiAgYmx0cyA9IDA7XG4gIGljayA9IDA7XG4gIGdhbWVPdmVyID0gZmFsc2U7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==