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
  if (ick >= 2) {
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
    ctx.fillText("YOU LOSE SPACE TO RESTART", 100, 250);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJkdXBsaWNhdGVzIiwiZ2FtZUZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJyZXN0YXJ0IiwiYnJlYWRlZCIsImxhc3RicmVhZCIsInRoaXNicmVhZCIsImVuZEdhbWUiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImNvdW50R3Jvc3MiLCJjb3VudCIsImN1cnIiLCJpc0dyb3NzIiwiaXNCTFQiLCJtYXlvIiwidG9tYXRvIiwibGV0dHVjZSIsImJhY29uIiwiYXJlRHVwbGljYXRlcyIsImhhbmRsZUZvb2QiLCJuZXdGb29kIiwicHVzaCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlSGVpZ2h0IiwiZHJhdyIsInNoaWZ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwidXBkYXRlIiwiZm9udCIsImZpbGxSZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBR01BLEs7QUFDRixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQUE7O0FBQ3hCLFNBQUtDLENBQUwsR0FBU0gsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQXpCO0FBQ0EsU0FBS0YsQ0FBTCxHQUFTQSxDQUFDLElBQUlGLE1BQU0sQ0FBQ0ssS0FBUCxHQUFhLENBQTNCLENBRndCLENBR3hCOztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCLENBTHdCLENBTXhCOztBQUNBLFNBQUtQLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O1dBRUQsa0JB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LENBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQjtBQUNBekYsV0FBRyxDQUFDc0QsU0FBSixHQUFnQixZQUFoQjtBQUNBdEQsV0FBRyxDQUFDd0YsSUFBSixHQUFXLG1CQUFYO0FBQ0F4RixXQUFHLENBQUN1RCxRQUFKLENBQWEsbUJBQWIsRUFBa0MsR0FBbEMsRUFBdUMsR0FBdkM7QUFDQUwsZUFBTztBQUNQd0Msa0JBQVUsQ0FBQyxZQUFNO0FBQ2ZYLCtCQUFxQixDQUFDRCxPQUFELENBQXJCO0FBQ0QsU0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEOztBQUNEO0FBQ0Q7O0FBQ0RsQyxhQUFTO0FBRVRtQyx5QkFBcUIsQ0FBQ0QsT0FBRCxDQUFyQjtBQUNELEdBdERELE1Bc0RPO0FBQ0w5RSxPQUFHLENBQUNzRCxTQUFKLEdBQWdCLEtBQWhCO0FBQ0F0RCxPQUFHLENBQUN1RCxRQUFKLENBQWEsMkJBQWIsRUFBMEMsR0FBMUMsRUFBK0MsR0FBL0M7QUFDQXdCLHlCQUFxQixDQUFDRCxPQUFELENBQXJCO0FBRUQsR0FoRWdCLENBa0VqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFRDs7QUFDREEsT0FBTzs7QUFFUCxTQUFTN0IsT0FBVCxHQUFtQjtBQUNqQnpDLFdBQVMsR0FBRyxFQUFaO0FBQ0ErQixTQUFPLEdBQUcsRUFBVjtBQUNBYSxXQUFTLEdBQUcsSUFBSXRELG1EQUFKLENBQVVDLE1BQVYsRUFBa0JDLEdBQWxCLENBQVo7QUFDQXlDLE1BQUksR0FBRyxDQUFQO0FBQ0FDLEtBQUcsR0FBRyxDQUFOO0FBQ0FwQyxVQUFRLEdBQUcsS0FBWDtBQUNELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNCcmVhZCwgQlJFQUQsIGtleXN9IGZyb20gJy4vdXRpbCdcblxuXG5jbGFzcyBCcmVhZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgpIHtcbiAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy54ID0geCB8fCBjYW52YXMud2lkdGgvMjtcbiAgICAgICAgLy8gdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gbm90U2FuZG8oKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGtleXMubGVmdFByZXNzZWQgJiYgKHRoaXMueCAhPT0gMCkpIHRoaXMueCAtPSA1O1xuICAgICAgICBpZiAoa2V5cy5yaWdodFByZXNzZWQgJiYgKHRoaXMueCAhPT0gdGhpcy5jYW52YXMud2lkdGggLSAxMzApKSB0aGlzLnggKz0gNTtcbiAgICB9XG5cblxuICAgIGRyYXcoY29udGFjdGVkKSB7XG4gICAgICAgIGxldCBzdGFja3ggPSB0aGlzLng7XG4gICAgICAgIGxldCBzdGFja3kgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShCUkVBRCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDAsIDMwMCwgMzAwKTtcbiAgICAgICAgLy8gaWYgKGNvbnRhY3RlZC5sZW5ndGggPj0gNSkgdGhpcy5nYW1lT3ZlciA9dHJ1ZTtcbiAgICAgICAgaWYgKGNvbnRhY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJJbmdyZWRpZW50ID0gY29udGFjdGVkW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpc05vdE1heW8oY3VyckluZ3JlZGllbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JyZWFkKGN1cnJJbmdyZWRpZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAzMDAsIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGJyZWFkZWQsIDIwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVhZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNreSA9IHN0YWNreSAtIDIwO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNreSA9IHN0YWNreSAtIDIwO1xuXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy55IDw9IDgwKSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBpc05vdE1heW8gPSAoaW5ncmVkaWVudCkgPT4ge1xuICAgIHJldHVybiAhIWluZ3JlZGllbnQuaW5ncmVkaWVudDtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWQiLCJpbXBvcnQgeyBpc0JyZWFkLCBCUkVBRCB9IGZyb20gJy4vdXRpbCdcblxuLy9mb29kXG5jb25zdCBUT01BVE8gPSBuZXcgSW1hZ2UoKTtcblRPTUFUTy5zcmMgPSAnLi9kaXN0L2ltYWdlcy90b21hdG8ucG5nJ1xuY29uc3QgTEVUVFVDRSA9IG5ldyBJbWFnZSgpO1xuTEVUVFVDRS5zcmMgPSAnLi9kaXN0L2ltYWdlcy9sZXR0dWNlLnBuZydcbmNvbnN0IEJBQ09OID0gbmV3IEltYWdlKCk7XG5CQUNPTi5zcmMgPSAnLi9kaXN0L2ltYWdlcy9iYWNvbi5wbmcnXG5jb25zdCBNQVlPID0gbmV3IEltYWdlKCk7XG5NQVlPLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL21heW8ucG5nJ1xuY29uc3QgRklTSCA9IG5ldyBJbWFnZSgpO1xuRklTSC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9maXNoLnBuZydcbmNvbnN0IFNPQ0sgPSBuZXcgSW1hZ2UoKTtcblNPQ0suc3JjID0gJy4vZGlzdC9pbWFnZXMvc29jay5wbmcnXG5cblxuY29uc3QgSU5HUkVESUVOVFMgPSBbRklTSCwgRklTSCwgU09DSywgU09DSyxUT01BVE8sIE1BWU8sIExFVFRVQ0UsIEJBQ09OLCBCUkVBRF1cblxuY2xhc3MgRm9vZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy55ID0gLTEwMDtcbiAgICAgICAgdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudCA9IElOR1JFRElFTlRTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIElOR1JFRElFTlRTLmxlbmd0aCldXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuICAgICAgICBpZiAodGhpcy54ID4gNzAwKSB0aGlzLnggLT0gMTAwO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgZHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgKyAxMDA7XG4gICAgICAgIGlmIChkeSAhPSB0aGlzLnkpIHRoaXMueSArPSA1O1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmIChpc0JyZWFkKHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMueSwgMzAwLCAzMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLnksIDI1MCwgMjUwKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kOyIsImV4cG9ydCBjb25zdCBpc0JyZWFkID0gKGluZ3JlZGllbnQpID0+IHtcbiAgICByZXR1cm4gaW5ncmVkaWVudC5pbmdyZWRpZW50Py5jdXJyZW50U3JjLmluY2x1ZGVzKFwiYnJlYWRcIik7XG59XG5cbmV4cG9ydCBjb25zdCBCUkVBRCA9IG5ldyBJbWFnZSgpO1xuQlJFQUQuc3JjID0gJy4vZGlzdC9pbWFnZXMvYnJlYWQucG5nJ1xuZXhwb3J0IGNvbnN0IE1BWU9GTEFUID0gbmV3IEltYWdlKCk7XG5NQVlPRkxBVC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvZmxhdC5wbmcnXG5cbmV4cG9ydCBjb25zdCBrZXlzID0ge1xuICAgIGxlZnRQcmVzc2VkOiBmYWxzZSxcbiAgICByaWdodFByZXNzZWQ6IGZhbHNlXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQnJlYWQgZnJvbSAnLi9zY3JpcHRzL2JyZWFkJ1xuaW1wb3J0IEZvb2QgZnJvbSAnLi9zY3JpcHRzL2Zvb2QnXG5pbXBvcnQge01BWU9GTEFULCBrZXlzfSBmcm9tICcuL3NjcmlwdHMvdXRpbCdcblxuXG5sZXQgY29udGFjdGVkID0gW107XG5sZXQgZm9vZEFyciA9IFtdO1xuXG5sZXQgc2NvcmUgPSAwO1xubGV0IGJsdHMgPSAwO1xubGV0IGljayA9IDA7XG5sZXQgZHVwbGljYXRlcyA9IGZhbHNlO1xubGV0IGdhbWVGcmFtZSA9IDA7XG5sZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuLy8gbGV0IGlzU2FuZG8gPSBmYWxzZTtcblxuXG4vLyBsZXQgY2FudmFzUG9zID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuLy8gY29uc29sZS5sb2coY2FudmFzUG9zKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIDM3OlxuICAgICAga2V5cy5sZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzk6XG4gICAgICBrZXlzLnJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMjpcbiAgICAgIHJlc3RhcnQoKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuXG5cblxuLy8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhldmVudC54LWNhbnZhc1Bvcy5sZWZ0LCBldmVudC55LWNhbnZhc1Bvcy50b3ApXG4vLyB9KTtcblxuXG5cblxuXG5cblxuZnVuY3Rpb24gYnJlYWRlZCgpIHtcbiAgY29udGFjdGVkID0gW107XG4gIGZvb2RBcnIgPSBbXTtcbiAgbGV0IGxhc3RicmVhZCA9IHRoaXNicmVhZDtcbiAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4LCBsYXN0YnJlYWQueCk7XG59XG5cblxuLy8gZnVuY3Rpb24gZ3Jvc3NlZCgpIHtcbi8vICAgY29udGFjdGVkLnBvcCgpO1xuLy8gICBsZXQgbGFzdGJyZWFkID0gdGhpc2JyZWFkO1xuLy8gICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgsIGxhc3RicmVhZC54KTtcbi8vIH1cblxuZnVuY3Rpb24gZW5kR2FtZSAoKSB7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICBjdHguZmlsbFRleHQoXCJZT1UgTE9TRVwiLCA0MDAsIDI1MClcbn1cblxuZnVuY3Rpb24gY291bnRHcm9zcyhjb250YWN0ZWQpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3VyciA9IGNvbnRhY3RlZFtpXTtcbiAgICBpZiAoaXNHcm9zcyhjdXJyKSkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cblxuICBpY2sgPSBjb3VudDtcbn1cblxuY29uc3QgaXNHcm9zcyA9IChpbmdyZWRpZW50KSA9PiB7XG4gIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJzb2NrXCIpIHx8IGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcImZpc2hcIik7XG59XG5cbmZ1bmN0aW9uIGlzQkxUKGNvbnRhY3RlZCkge1xuICAgIGxldCBtYXlvID0gMDtcbiAgICBsZXQgdG9tYXRvID0gMDtcbiAgICBsZXQgbGV0dHVjZSA9IDA7XG4gICAgbGV0IGJhY29uID0gMDsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgICAgaWYgKCFjdXJyLmluZ3JlZGllbnQpIHtcbiAgICAgICAgbWF5bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwidG9tYXRvXCIpKSB7XG4gICAgICAgIHRvbWF0bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibGV0dHVjZVwiKSkge1xuICAgICAgICBsZXR0dWNlKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJiYWNvblwiKSkge1xuICAgICAgICBiYWNvbisrXG4gICAgICB9IFxuICAgIH1cblxuICAgIHJldHVybiAoKG1heW8gPiAwKSAmJiAodG9tYXRvID4gMCkgJiYgKGxldHR1Y2UgPiAwKSAmJiAoYmFjb24gPiAwKSlcbn1cblxuXG5cblxuZnVuY3Rpb24gYXJlRHVwbGljYXRlcyhjb250YWN0ZWQpIHtcbiAgICBsZXQgbWF5byA9IDA7XG4gICAgbGV0IHRvbWF0byA9IDA7XG4gICAgbGV0IGxldHR1Y2UgPSAwO1xuICAgIGxldCBiYWNvbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgICAgaWYgKCFjdXJyLmluZ3JlZGllbnQpIHtcbiAgICAgICAgbWF5bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwidG9tYXRvXCIpKSB7XG4gICAgICAgIHRvbWF0bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibGV0dHVjZVwiKSkge1xuICAgICAgICBsZXR0dWNlKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJiYWNvblwiKSkge1xuICAgICAgICBiYWNvbisrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKChtYXlvID4gMSkgfHwgKHRvbWF0byA+IDEpIHx8IChsZXR0dWNlID4gMSkgfHwgKGJhY29uID4gMSkpIHtcbiAgICAgIGR1cGxpY2F0ZXMgPSB0cnVlO1xuICAgIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gaGFuZGxlRm9vZChjYW52YXMpIHtcbiAgaWYgKGdhbWVGcmFtZSAlIDM1ID09IDApIHtcbiAgICBsZXQgbmV3Rm9vZCA9IG5ldyBGb29kKGNhbnZhcywgY3R4KTtcbiAgICBmb29kQXJyLnB1c2gobmV3Rm9vZCk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGZvb2RBcnJbaV0ueSA9PT0gdGhpc2JyZWFkLnkpICYmIChmb29kQXJyW2ldLnggPiB0aGlzYnJlYWQueCAtIDUwICYmIGZvb2RBcnJbaV0ueCA8IHRoaXNicmVhZC54ICsgNTApKSB7IFxuICAgICAgaWYgKCFmb29kQXJyW2ldLmNvdW50ZWQpIHNjb3JlICs9IDE7XG4gICAgICBcbiAgICAgIGlmIChjb250YWN0ZWQuaW5kZXhPZihmb29kQXJyW2ldKSA9PT0gLTEgKSB7XG4gICAgICAgIGlmIChmb29kQXJyW2ldLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcIm1heW9cIikpIHtcbiAgICAgICAgICBjb250YWN0ZWQucHVzaChNQVlPRkxBVClcbiAgICAgICAgICBmb29kQXJyW2ldLmNvdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGZvb2RBcnIuc3BsaWNlKGksIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgY29udGFjdGVkLnB1c2goZm9vZEFycltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzYnJlYWQueSAtPSAyMDtcbiAgICAgICAgY29uc29sZS5sb2codGhpc2JyZWFkLnkpO1xuXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb29kQXJyW2ldLnVwZGF0ZUhlaWdodCgpO1xuXG4gICAgaWYgKGNvbnRhY3RlZC5pbmRleE9mKGZvb2RBcnJbaV0pID09PSAtMSAmJiBmb29kQXJyW2ldLnkgPCBjYW52YXMuaGVpZ2h0KSBmb29kQXJyW2ldLmRyYXcoKTtcbiAgICBpZiAoZm9vZEFycltpXS55ID4gY2FudmFzLmhlaWdodCkgZm9vZEFyci5zaGlmdChmb29kQXJyW2ldKVxuICB9XG5cbiAgXG59XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5sZXQgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4KTtcblxuXG4vL2FuaW1hdGlvbiBcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGlmIChpY2sgPj0gMikge1xuICAgIHRoaXNicmVhZC5nYW1lT3ZlciA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG4gIGlmICghdGhpc2JyZWFkLmdhbWVPdmVyKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy9kcmF3IGdyZWVuIGxpbmVcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAxNTApO1xuICAgIGN0eC5saW5lVG8oODAwLCAxNTApO1xuICAgIGN0eC5saW5lV2lkdGggPSA2O1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdjaGFydHJldXNlJztcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvL2RyYXcgc2FuZHdpY2hcbiAgICB0aGlzYnJlYWQuZHJhdyhjb250YWN0ZWQpO1xuICAgIHRoaXNicmVhZC51cGRhdGUoKTtcbiAgICBhcmVEdXBsaWNhdGVzKGNvbnRhY3RlZCk7XG4gICAgY291bnRHcm9zcyhjb250YWN0ZWQpO1xuICAgIGhhbmRsZUZvb2QoY2FudmFzKTtcblxuICAgIC8vd3JpdGUgdGV4dFxuICAgIGN0eC5mb250ID0gXCIzMHB4IEJ1bmdlZSBTaGFkZVwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiQkxUIENvdW50OiBcIiArIGJsdHMsIDEwLCAzMClcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIkljazogXCIgKyBpY2ssIDEwLCA2NSlcblxuICAgIC8vc2FuZHdpY2ggY29tcGxldGVcbiAgICBpZiAodGhpc2JyZWFkLmNvbXBsZXRlZCkge1xuICAgICAgaWYgKGlzQkxUKGNvbnRhY3RlZCkpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MCwgMTkwLCA1MDAsIDEwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImNoYXJ0cmV1c2VcIjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjUwcHggQnVuZ2VlIFNoYWRlXCJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiVGhhdCdzIGEgQkxUIVwiLCAxMDAsIDI1MClcbiAgICAgICAgYnJlYWRlZCgpO1xuICAgICAgICBibHRzICs9IDE7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MCwgMTkwLCA3MDAsIDEwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImNoYXJ0cmV1c2VcIjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjUwcHggQnVuZ2VlIFNoYWRlXCJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiVGhhdCdzIE5PVCBhIEJMVCFcIiwgMTAwLCAyNTApXG4gICAgICAgIGJyZWFkZWQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdhbWVGcmFtZSsrO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9IGVsc2Uge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsVGV4dChcIllPVSBMT1NFIFNQQUNFIFRPIFJFU1RBUlRcIiwgMTAwLCAyNTApXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gIH1cblxuICAvLyBpZiAoZHVwbGljYXRlcykge1xuICAvLyAgIHRoaXNicmVhZC5nYW1lT3ZlciA9IHRydWU7XG4gIC8vICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAvLyB9XG5cbn1cbmFuaW1hdGUoKTtcblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgY29udGFjdGVkID0gW107XG4gIGZvb2RBcnIgPSBbXTtcbiAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4KTtcbiAgYmx0cyA9IDA7XG4gIGljayA9IDA7XG4gIGdhbWVPdmVyID0gZmFsc2U7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==