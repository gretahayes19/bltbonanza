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
var INGREDIENTS = [TOMATO, MAYO, LETTUCE, BACON, TOMATO, MAYO, LETTUCE, BACON, _util__WEBPACK_IMPORTED_MODULE_0__.BREAD, _util__WEBPACK_IMPORTED_MODULE_0__.BREAD, _util__WEBPACK_IMPORTED_MODULE_0__.BREAD];

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
      if (this.ingredient.currentSrc.includes("bread")) {
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



var score = 0;
var blts = 0;
var gameFrame = 0;
var gameOver = false; // let isSando = false;

var contacted = [];
var foodArr = []; // let canvasPos = canvas.getBoundingClientRect();
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

function endGame() {
  ctx.fillStyle = "red";
  ctx.fillText("YOU LOSE", 400, 250);
} // function notSando() {
//   isSando = false;
// }


function handleFood(canvas) {
  if (gameFrame % 100 == 0) {
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
    } // thisbread.draw(contacted);


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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    thisbread.draw(contacted);
    thisbread.update();
    handleFood(canvas);
    ctx.font = "30px Bungee Shade"; // ctx.fillStyle = "white";
    // ctx.fillText("score: " + score, 10, 30)

    ctx.fillStyle = "white";
    ctx.fillText("BLT Count: " + blts, 10, 30);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIklOR1JFRElFTlRTIiwiRm9vZCIsIk1hdGgiLCJyYW5kb20iLCJjb3VudGVkIiwiZmxvb3IiLCJkeSIsImN1cnJlbnRTcmMiLCJpbmNsdWRlcyIsIk1BWU9GTEFUIiwibGVmdFByZXNzZWQiLCJyaWdodFByZXNzZWQiLCJzY29yZSIsImJsdHMiLCJnYW1lRnJhbWUiLCJmb29kQXJyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJicmVhZGVkIiwibGFzdGJyZWFkIiwidGhpc2JyZWFkIiwiZW5kR2FtZSIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiaGFuZGxlRm9vZCIsIm5ld0Zvb2QiLCJwdXNoIiwiaW5kZXhPZiIsInNoaWZ0IiwidXBkYXRlSGVpZ2h0IiwiZHJhdyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJmb250Iiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBR01BLEs7QUFDRixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQUE7O0FBQ3hCLFNBQUtDLENBQUwsR0FBU0gsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQXpCO0FBQ0EsU0FBS0YsQ0FBTCxHQUFTQSxDQUFDLElBQUlGLE1BQU0sQ0FBQ0ssS0FBUCxHQUFhLENBQTNCLENBRndCLENBR3hCOztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCLENBTHdCLENBTXhCOztBQUNBLFNBQUtQLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O1dBRUQsa0JBQVM7QUFDTCxVQUFJTyxtREFBQSxJQUFxQixLQUFLTixDQUFMLEtBQVcsQ0FBcEMsRUFBd0MsS0FBS0EsQ0FBTCxJQUFVLENBQVY7QUFDeEMsVUFBSU0sb0RBQUEsSUFBc0IsS0FBS04sQ0FBTCxLQUFXLEtBQUtGLE1BQUwsQ0FBWUssS0FBWixHQUFvQixHQUF6RCxFQUErRCxLQUFLSCxDQUFMLElBQVUsQ0FBVjtBQUNsRTs7O1dBR0QsY0FBS08sU0FBTCxFQUFnQjtBQUNaLFVBQUlDLE1BQU0sR0FBRyxLQUFLUixDQUFsQjtB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QVgsQ0FMdUIsQ0FNdkI7QUFDQTs7QUFDQS9ELE9BQUcsQ0FBQ2lELFNBQUosR0FBZ0IsT0FBaEI7QUFDQWpELE9BQUcsQ0FBQ2tELFFBQUosQ0FBYSxnQkFBZ0JaLElBQTdCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDOztBQUNBLFFBQUlTLFNBQVMsQ0FBQzFDLFNBQWQsRUFBeUI7QUFDdkJMLFNBQUcsQ0FBQ2lELFNBQUosR0FBZ0IsWUFBaEI7QUFDQWpELFNBQUcsQ0FBQytELElBQUosR0FBVyxtQkFBWDtBQUNBL0QsU0FBRyxDQUFDa0QsUUFBSixDQUFhLGVBQWIsRUFBOEIsR0FBOUIsRUFBbUMsR0FBbkM7QUFDQUwsYUFBTztBQUNQUCxVQUFJLElBQUksQ0FBUjtBQUNBMEIsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2ZDLDZCQUFxQixDQUFDTCxPQUFELENBQXJCO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBO0FBQ0Q7O0FBQ0RyQixhQUFTO0FBRVQwQix5QkFBcUIsQ0FBQ0wsT0FBRCxDQUFyQjtBQUNELEdBeEJELE1Bd0JPO0FBQ0w1RCxPQUFHLENBQUNpRCxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FqRCxPQUFHLENBQUNrRCxRQUFKLENBQWEsVUFBYixFQUF5QixHQUF6QixFQUE4QixHQUE5QjtBQUNEO0FBRUY7O0FBQ0RVLE9BQU8sRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0JyZWFkLCBCUkVBRCwga2V5c30gZnJvbSAnLi91dGlsJ1xuXG5cbmNsYXNzIEJyZWFkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCkge1xuICAgICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgICAgICB0aGlzLnggPSB4IHx8IGNhbnZhcy53aWR0aC8yO1xuICAgICAgICAvLyB0aGlzLmNvdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAvLyBub3RTYW5kbygpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoa2V5cy5sZWZ0UHJlc3NlZCAmJiAodGhpcy54ICE9PSAwKSkgdGhpcy54IC09IDU7XG4gICAgICAgIGlmIChrZXlzLnJpZ2h0UHJlc3NlZCAmJiAodGhpcy54ICE9PSB0aGlzLmNhbnZhcy53aWR0aCAtIDEzMCkpIHRoaXMueCArPSA1O1xuICAgIH1cblxuXG4gICAgZHJhdyhjb250YWN0ZWQpIHtcbiAgICAgICAgbGV0IHN0YWNreCA9IHRoaXMueDtcbiAgICAgICAgbGV0IHN0YWNreSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKEJSRUFELCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMuY2FudmFzLmhlaWdodCAtIDEwMCwgMzAwLCAzMDApO1xuXG4gICAgICAgIGlmIChjb250YWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJySW5ncmVkaWVudCA9IGNvbnRhY3RlZFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOb3RNYXlvKGN1cnJJbmdyZWRpZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcmVhZChjdXJySW5ncmVkaWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudC5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMzAwLCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dChicmVhZGVkLCAyMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhY2t5IDwgMjAwKSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaXNOb3RNYXlvID0gKGluZ3JlZGllbnQpID0+IHtcbiAgICByZXR1cm4gISFpbmdyZWRpZW50LmluZ3JlZGllbnQ7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZCIsImltcG9ydCB7IGlzQnJlYWQsIEJSRUFEIH0gZnJvbSAnLi91dGlsJ1xuXG4vL2Zvb2RcbmNvbnN0IFRPTUFUTyA9IG5ldyBJbWFnZSgpO1xuVE9NQVRPLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3RvbWF0by5wbmcnXG5jb25zdCBMRVRUVUNFID0gbmV3IEltYWdlKCk7XG5MRVRUVUNFLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2xldHR1Y2UucG5nJ1xuXG5jb25zdCBCQUNPTiA9IG5ldyBJbWFnZSgpO1xuQkFDT04uc3JjID0gJy4vZGlzdC9pbWFnZXMvYmFjb24ucG5nJ1xuY29uc3QgTUFZTyA9IG5ldyBJbWFnZSgpO1xuTUFZTy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvLnBuZydcblxuXG5jb25zdCBJTkdSRURJRU5UUyA9IFtUT01BVE8sIE1BWU8sIExFVFRVQ0UsIEJBQ09OLCBUT01BVE8sIE1BWU8sIExFVFRVQ0UsIEJBQ09OLCBCUkVBRCwgQlJFQUQsIEJSRUFEXVxuXG5jbGFzcyBGb29kIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICB0aGlzLmNvdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50ID0gSU5HUkVESUVOVFNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSU5HUkVESUVOVFMubGVuZ3RoKV1cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgICAgIGlmICh0aGlzLnggPiA3MDApIHRoaXMueCAtPSAxMDA7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBkeSA9IHRoaXMuY2FudmFzLmhlaWdodCArIDEwMDtcbiAgICAgICAgaWYgKGR5ICE9IHRoaXMueSkgdGhpcy55ICs9IDU7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKHRoaXMuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwiYnJlYWRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy55LCAzMDAsIDMwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMueSwgMjUwLCAyNTApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2Q7IiwiZXhwb3J0IGNvbnN0IGlzQnJlYWQgPSAoaW5ncmVkaWVudCkgPT4ge1xuICAgIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJicmVhZFwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJSRUFEID0gbmV3IEltYWdlKCk7XG5CUkVBRC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9icmVhZC5wbmcnXG5leHBvcnQgY29uc3QgTUFZT0ZMQVQgPSBuZXcgSW1hZ2UoKTtcbk1BWU9GTEFULnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL21heW9mbGF0LnBuZydcblxuZXhwb3J0IGNvbnN0IGtleXMgPSB7XG4gICAgbGVmdFByZXNzZWQ6IGZhbHNlLFxuICAgIHJpZ2h0UHJlc3NlZDogZmFsc2Vcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCcmVhZCBmcm9tICcuL3NjcmlwdHMvYnJlYWQnXG5pbXBvcnQgRm9vZCBmcm9tICcuL3NjcmlwdHMvZm9vZCdcbmltcG9ydCB7TUFZT0ZMQVQsIGtleXN9IGZyb20gJy4vc2NyaXB0cy91dGlsJ1xuXG5cbmxldCBzY29yZSA9IDA7XG5sZXQgYmx0cyA9IDA7XG5sZXQgZ2FtZUZyYW1lID0gMDtcbmxldCBnYW1lT3ZlciA9IGZhbHNlO1xuLy8gbGV0IGlzU2FuZG8gPSBmYWxzZTtcbmxldCBjb250YWN0ZWQgPSBbXTtcbmxldCBmb29kQXJyID0gW107XG5cblxuLy8gbGV0IGNhbnZhc1BvcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vIGNvbnNvbGUubG9nKGNhbnZhc1Bvcyk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgMzc6XG4gICAgICBrZXlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuXG4vLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50LngtY2FudmFzUG9zLmxlZnQsIGV2ZW50LnktY2FudmFzUG9zLnRvcClcbi8vIH0pO1xuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBicmVhZGVkKCkge1xuICAvLyBpc1NhbmRvID0gdHJ1ZTtcbiAgLy8gYW5pbWF0ZS5wYXVzZSgpO1xuICBjb250YWN0ZWQgPSBbXTtcbiAgZm9vZEFyciA9IFtdO1xuICBsZXQgbGFzdGJyZWFkID0gdGhpc2JyZWFkO1xuICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgsIGxhc3RicmVhZC54KTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSAoKSB7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICBjdHguZmlsbFRleHQoXCJZT1UgTE9TRVwiLCA0MDAsIDI1MClcbn1cblxuLy8gZnVuY3Rpb24gbm90U2FuZG8oKSB7XG4vLyAgIGlzU2FuZG8gPSBmYWxzZTtcbi8vIH1cblxuZnVuY3Rpb24gaGFuZGxlRm9vZChjYW52YXMpIHtcbiAgaWYgKGdhbWVGcmFtZSAlIDEwMCA9PSAwKSB7XG4gICAgbGV0IG5ld0Zvb2QgPSBuZXcgRm9vZChjYW52YXMsIGN0eCk7XG4gICAgZm9vZEFyci5wdXNoKG5ld0Zvb2QpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChmb29kQXJyW2ldLnkgPT09IHRoaXNicmVhZC55KSAmJiAoZm9vZEFycltpXS54ID4gdGhpc2JyZWFkLnggLSA1MCAmJiBmb29kQXJyW2ldLnggPCB0aGlzYnJlYWQueCArIDUwKSkgeyBcbiAgICAgIGlmICghZm9vZEFycltpXS5jb3VudGVkKSBzY29yZSArPSAxO1xuICAgICAgXG4gICAgICBpZiAoY29udGFjdGVkLmluZGV4T2YoZm9vZEFycltpXSkgPT09IC0xICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKGZvb2RBcnJbaV0uaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibWF5b1wiKSkge1xuICAgICAgICAgIGNvbnRhY3RlZC5wdXNoKE1BWU9GTEFUKVxuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgZm9vZEFyci5zaGlmdChmb29kQXJyW2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgY29udGFjdGVkLnB1c2goZm9vZEFycltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzYnJlYWQueSAtPSAyMDtcblxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gdGhpc2JyZWFkLmRyYXcoY29udGFjdGVkKTtcbiAgICBmb29kQXJyW2ldLnVwZGF0ZUhlaWdodCgpO1xuXG4gICAgaWYgKGNvbnRhY3RlZC5pbmRleE9mKGZvb2RBcnJbaV0pID09PSAtMSAmJiBmb29kQXJyW2ldLnkgPCBjYW52YXMuaGVpZ2h0KSBmb29kQXJyW2ldLmRyYXcoKTtcbiAgICBpZiAoZm9vZEFycltpXS55ID4gY2FudmFzLmhlaWdodCkgZm9vZEFyci5zaGlmdChmb29kQXJyW2ldKVxuICB9XG5cbiAgXG59XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xubGV0IHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCk7XG5cbi8vYW5pbWF0aW9uIFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgaWYgKCF0aGlzYnJlYWQuZ2FtZU92ZXIpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgdGhpc2JyZWFkLmRyYXcoY29udGFjdGVkKTtcbiAgICB0aGlzYnJlYWQudXBkYXRlKCk7XG4gICAgaGFuZGxlRm9vZChjYW52YXMpO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEJ1bmdlZSBTaGFkZVwiO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgLy8gY3R4LmZpbGxUZXh0KFwic2NvcmU6IFwiICsgc2NvcmUsIDEwLCAzMClcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIkJMVCBDb3VudDogXCIgKyBibHRzLCAxMCwgMzApXG4gICAgaWYgKHRoaXNicmVhZC5jb21wbGV0ZWQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcImNoYXJ0cmV1c2VcIjtcbiAgICAgIGN0eC5mb250ID0gXCI1MHB4IEJ1bmdlZSBTaGFkZVwiXG4gICAgICBjdHguZmlsbFRleHQoXCJUaGF0J3MgYSBCTFQhXCIsIDMwMCwgMjUwKVxuICAgICAgYnJlYWRlZCgpO1xuICAgICAgYmx0cyArPSAxO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgfSwgMjAwMClcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2FtZUZyYW1lKys7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiWU9VIExPU0VcIiwgNDAwLCAyNTApXG4gIH1cblxufVxuYW5pbWF0ZSgpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=