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
var gameFrame = 0; // let gameOver = false;

document.addEventListener('keydown', function (e) {
  e.preventDefault();

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
  e.preventDefault();

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
});

function breaded() {
  contacted = [];
  foodArr = [];
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

    ctx.font = "25px Krona One";
    ctx.fillStyle = "#3E1907";
    ctx.fillText("BLT Count: " + blts, 10, 30);
    ctx.fillStyle = "#3E1907";
    ctx.fillText("Ick: " + ick, 10, 65); //sandwich complete

    if (thisbread.completed) {
      if (isBLT(contacted)) {
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
  ick = 0; // gameOver = false;

  duplicates = false;
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJkdXBsaWNhdGVzIiwiZ2FtZUZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInJlc3RhcnQiLCJicmVhZGVkIiwibGFzdGJyZWFkIiwidGhpc2JyZWFkIiwiZW5kR2FtZSIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiY291bnRHcm9zcyIsImNvdW50IiwiY3VyciIsImlzR3Jvc3MiLCJpc0JMVCIsIm1heW8iLCJ0b21hdG8iLCJsZXR0dWNlIiwiYmFjb24iLCJhcmVEdXBsaWNhdGVzIiwiaGFuZGxlRm9vZCIsIm5ld0Zvb2QiLCJwdXNoIiwiaW5kZXhPZiIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVIZWlnaHQiLCJkcmF3Iiwic2hpZnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJjYW52YXNkaXYiLCJhbmltYXRlIiwicmVtb3ZlQnV0dG9uIiwicmVtb3ZlIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJmb250Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBR01BLEs7QUFDRixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQUE7O0FBQ3hCLFNBQUtDLENBQUwsR0FBU0gsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQXpCO0FBQ0EsU0FBS0YsQ0FBTCxHQUFTQSxDQUFDLElBQUlGLE1BQU0sQ0FBQ0ssS0FBUCxHQUFhLENBQTNCLENBRndCLENBR3hCOztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCLENBTHdCLENBTXhCOztBQUNBLFNBQUtQLE1BQUwsR0FBY0EsTUFB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LCBrZXlzfSBmcm9tICcuL3V0aWwnXG5cblxuY2xhc3MgQnJlYWQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4KSB7XG4gICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMueCA9IHggfHwgY2FudmFzLndpZHRoLzI7XG4gICAgICAgIC8vIHRoaXMuY291bnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIC8vIG5vdFNhbmRvKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmIChrZXlzLmxlZnRQcmVzc2VkICYmICh0aGlzLnggIT09IDApKSB0aGlzLnggLT0gNTtcbiAgICAgICAgaWYgKGtleXMucmlnaHRQcmVzc2VkICYmICh0aGlzLnggIT09IHRoaXMuY2FudmFzLndpZHRoIC0gMTMwKSkgdGhpcy54ICs9IDU7XG4gICAgfVxuXG5cbiAgICBkcmF3KGNvbnRhY3RlZCkge1xuICAgICAgICBsZXQgc3RhY2t4ID0gdGhpcy54O1xuICAgICAgICBsZXQgc3RhY2t5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoQlJFQUQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwLCAzMDAsIDMwMCk7XG4gICAgICAgIC8vIGlmIChjb250YWN0ZWQubGVuZ3RoID49IDUpIHRoaXMuZ2FtZU92ZXIgPXRydWU7XG4gICAgICAgIGlmIChjb250YWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJySW5ncmVkaWVudCA9IGNvbnRhY3RlZFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOb3RNYXlvKGN1cnJJbmdyZWRpZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcmVhZChjdXJySW5ncmVkaWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJySW5ncmVkaWVudC5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMzAwLCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dChicmVhZGVkLCAyMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcblxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMueSA8PSA4MCkgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaXNOb3RNYXlvID0gKGluZ3JlZGllbnQpID0+IHtcbiAgICByZXR1cm4gISFpbmdyZWRpZW50LmluZ3JlZGllbnQ7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkIiwiaW1wb3J0IHsgaXNCcmVhZCwgQlJFQUQgfSBmcm9tICcuL3V0aWwnXG5cbi8vZm9vZFxuY29uc3QgVE9NQVRPID0gbmV3IEltYWdlKCk7XG5UT01BVE8uc3JjID0gJy4vZGlzdC9pbWFnZXMvdG9tYXRvLnBuZydcbmNvbnN0IExFVFRVQ0UgPSBuZXcgSW1hZ2UoKTtcbkxFVFRVQ0Uuc3JjID0gJy4vZGlzdC9pbWFnZXMvbGV0dHVjZS5wbmcnXG5jb25zdCBCQUNPTiA9IG5ldyBJbWFnZSgpO1xuQkFDT04uc3JjID0gJy4vZGlzdC9pbWFnZXMvYmFjb24ucG5nJ1xuY29uc3QgTUFZTyA9IG5ldyBJbWFnZSgpO1xuTUFZTy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvLnBuZydcbmNvbnN0IEZJU0ggPSBuZXcgSW1hZ2UoKTtcbkZJU0guc3JjID0gJy4vZGlzdC9pbWFnZXMvZmlzaC5wbmcnXG5jb25zdCBTT0NLID0gbmV3IEltYWdlKCk7XG5TT0NLLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3NvY2sucG5nJ1xuXG5cbmNvbnN0IElOR1JFRElFTlRTID0gW0ZJU0gsIEZJU0gsIFNPQ0ssIFNPQ0ssVE9NQVRPLCBNQVlPLCBMRVRUVUNFLCBCQUNPTiwgQlJFQURdXG5cbmNsYXNzIEZvb2Qge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMueSA9IC0xMDA7XG4gICAgICAgIHRoaXMuY291bnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnQgPSBJTkdSRURJRU5UU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBJTkdSRURJRU5UUy5sZW5ndGgpXVxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICAgICAgaWYgKHRoaXMueCA+IDcwMCkgdGhpcy54IC09IDEwMDtcbiAgICB9XG5cbiAgICB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0ICsgMTAwO1xuICAgICAgICBpZiAoZHkgIT0gdGhpcy55KSB0aGlzLnkgKz0gNTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBpZiAoaXNCcmVhZCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLnksIDMwMCwgMzAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgdGhpcy55LCAyNTAsIDI1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZDsiLCJleHBvcnQgY29uc3QgaXNCcmVhZCA9IChpbmdyZWRpZW50KSA9PiB7XG4gICAgcmV0dXJuIGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcImJyZWFkXCIpO1xufVxuXG5leHBvcnQgY29uc3QgQlJFQUQgPSBuZXcgSW1hZ2UoKTtcbkJSRUFELnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2JyZWFkLnBuZydcbmV4cG9ydCBjb25zdCBNQVlPRkxBVCA9IG5ldyBJbWFnZSgpO1xuTUFZT0ZMQVQuc3JjID0gJy4vZGlzdC9pbWFnZXMvbWF5b2ZsYXQucG5nJ1xuXG5leHBvcnQgY29uc3Qga2V5cyA9IHtcbiAgICBsZWZ0UHJlc3NlZDogZmFsc2UsXG4gICAgcmlnaHRQcmVzc2VkOiBmYWxzZVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJyZWFkIGZyb20gJy4vc2NyaXB0cy9icmVhZCdcbmltcG9ydCBGb29kIGZyb20gJy4vc2NyaXB0cy9mb29kJ1xuaW1wb3J0IHtNQVlPRkxBVCwga2V5c30gZnJvbSAnLi9zY3JpcHRzL3V0aWwnXG5cblxubGV0IGNvbnRhY3RlZCA9IFtdO1xubGV0IGZvb2RBcnIgPSBbXTtcblxubGV0IHNjb3JlID0gMDtcbmxldCBibHRzID0gMDtcbmxldCBpY2sgPSAwO1xubGV0IGR1cGxpY2F0ZXMgPSBmYWxzZTtcbmxldCBnYW1lRnJhbWUgPSAwO1xuLy8gbGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIDM3OlxuICAgICAga2V5cy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMyOlxuICAgICAgcmVzdGFydCgpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBicmVhZGVkKCkge1xuICBjb250YWN0ZWQgPSBbXTtcbiAgZm9vZEFyciA9IFtdO1xuICBsZXQgbGFzdGJyZWFkID0gdGhpc2JyZWFkO1xuICB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgsIGxhc3RicmVhZC54KTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSAoKSB7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICBjdHguZmlsbFRleHQoXCJZT1UgTE9TRVwiLCA0MDAsIDI1MClcbn1cblxuZnVuY3Rpb24gY291bnRHcm9zcyhjb250YWN0ZWQpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3VyciA9IGNvbnRhY3RlZFtpXTtcbiAgICBpZiAoaXNHcm9zcyhjdXJyKSkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cblxuICBpY2sgPSBjb3VudDtcbn1cblxuY29uc3QgaXNHcm9zcyA9IChpbmdyZWRpZW50KSA9PiB7XG4gIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnQ/LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJzb2NrXCIpIHx8IGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcImZpc2hcIik7XG59XG5cbmZ1bmN0aW9uIGlzQkxUKGNvbnRhY3RlZCkge1xuICAgIGxldCBtYXlvID0gMDtcbiAgICBsZXQgdG9tYXRvID0gMDtcbiAgICBsZXQgbGV0dHVjZSA9IDA7XG4gICAgbGV0IGJhY29uID0gMDsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgICAgaWYgKCFjdXJyLmluZ3JlZGllbnQpIHtcbiAgICAgICAgbWF5bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwidG9tYXRvXCIpKSB7XG4gICAgICAgIHRvbWF0bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibGV0dHVjZVwiKSkge1xuICAgICAgICBsZXR0dWNlKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJiYWNvblwiKSkge1xuICAgICAgICBiYWNvbisrXG4gICAgICB9IFxuICAgIH1cblxuICAgIHJldHVybiAoKG1heW8gPiAwKSAmJiAodG9tYXRvID4gMCkgJiYgKGxldHR1Y2UgPiAwKSAmJiAoYmFjb24gPiAwKSlcbn1cblxuZnVuY3Rpb24gYXJlRHVwbGljYXRlcyhjb250YWN0ZWQpIHtcbiAgICBsZXQgbWF5byA9IDA7XG4gICAgbGV0IHRvbWF0byA9IDA7XG4gICAgbGV0IGxldHR1Y2UgPSAwO1xuICAgIGxldCBiYWNvbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgICAgaWYgKCFjdXJyLmluZ3JlZGllbnQpIHtcbiAgICAgICAgbWF5bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwidG9tYXRvXCIpKSB7XG4gICAgICAgIHRvbWF0bysrXG4gICAgICB9IGVsc2UgaWYgKGN1cnIuaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibGV0dHVjZVwiKSkge1xuICAgICAgICBsZXR0dWNlKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJiYWNvblwiKSkge1xuICAgICAgICBiYWNvbisrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKChtYXlvID4gMSkgfHwgKHRvbWF0byA+IDEpIHx8IChsZXR0dWNlID4gMSkgfHwgKGJhY29uID4gMSkpIHtcbiAgICAgIGR1cGxpY2F0ZXMgPSB0cnVlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVGb29kKGNhbnZhcykge1xuICBpZiAoZ2FtZUZyYW1lICUgMTUgPT0gMCkge1xuICAgIGxldCBuZXdGb29kID0gbmV3IEZvb2QoY2FudmFzLCBjdHgpO1xuICAgIGZvb2RBcnIucHVzaChuZXdGb29kKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZEFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmICgoZm9vZEFycltpXS55ID09PSB0aGlzYnJlYWQueSkgJiYgKGZvb2RBcnJbaV0ueCA+IHRoaXNicmVhZC54IC0gNzAgJiYgZm9vZEFycltpXS54IDwgdGhpc2JyZWFkLnggKyA3MCkpIHsgXG4gICAgICBpZiAoIWZvb2RBcnJbaV0uY291bnRlZCkgc2NvcmUgKz0gMTtcbiAgICAgIFxuICAgICAgaWYgKGNvbnRhY3RlZC5pbmRleE9mKGZvb2RBcnJbaV0pID09PSAtMSApIHtcbiAgICAgICAgaWYgKGZvb2RBcnJbaV0uaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibWF5b1wiKSkge1xuICAgICAgICAgIGNvbnRhY3RlZC5wdXNoKE1BWU9GTEFUKVxuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgZm9vZEFyci5zcGxpY2UoaSwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9vZEFycltpXS5jb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250YWN0ZWQucHVzaChmb29kQXJyW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNicmVhZC55IC09IDIwO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzYnJlYWQueSk7XG5cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvb2RBcnJbaV0udXBkYXRlSGVpZ2h0KCk7XG5cbiAgICBpZiAoY29udGFjdGVkLmluZGV4T2YoZm9vZEFycltpXSkgPT09IC0xICYmIGZvb2RBcnJbaV0ueSA8IGNhbnZhcy5oZWlnaHQpIGZvb2RBcnJbaV0uZHJhdygpO1xuICAgIGlmIChmb29kQXJyW2ldLnkgPiBjYW52YXMuaGVpZ2h0KSBmb29kQXJyLnNoaWZ0KGZvb2RBcnJbaV0pXG4gIH1cblxuICBcbn1cblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDUwMDtcbmxldCB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgpO1xuY29uc3QgY2FudmFzZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNkaXZcIik7XG5cblxuLy9hbmltYXRpb24gXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIik7XG4gIGlmIChyZW1vdmVCdXR0b24pIHJlbW92ZUJ1dHRvbi5yZW1vdmUoKTtcblxuICBpZiAoaWNrID49IDIpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJZVUNLISBIaXQgc3BhY2UgdG8gcmVzdGFydFwiXG4gICAgY2FudmFzZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgdGhpc2JyZWFkLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH0gZWxzZSBpZiAoZHVwbGljYXRlcykge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIk5PIERVUExJQ0FURVMhIEhpdCBzcGFjZSB0byByZXN0YXJ0XCJcbiAgICBjYW52YXNkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB0aGlzYnJlYWQuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfSBcbiAgXG4gIGlmICghdGhpc2JyZWFkLmdhbWVPdmVyKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy9kcmF3IHNhbmR3aWNoXG4gICAgdGhpc2JyZWFkLmRyYXcoY29udGFjdGVkKTtcbiAgICB0aGlzYnJlYWQudXBkYXRlKCk7XG4gICAgYXJlRHVwbGljYXRlcyhjb250YWN0ZWQpO1xuICAgIGNvdW50R3Jvc3MoY29udGFjdGVkKTtcbiAgICBoYW5kbGVGb29kKGNhbnZhcyk7XG5cbiAgICAvL3dyaXRlIHRleHRcbiAgICBjdHguZm9udCA9IFwiMjVweCBLcm9uYSBPbmVcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjM0UxOTA3XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiQkxUIENvdW50OiBcIiArIGJsdHMsIDEwLCAzMClcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjM0UxOTA3XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSWNrOiBcIiArIGljaywgMTAsIDY1KVxuXG4gICAgLy9zYW5kd2ljaCBjb21wbGV0ZVxuICAgIGlmICh0aGlzYnJlYWQuY29tcGxldGVkKSB7XG4gICAgICBpZiAoaXNCTFQoY29udGFjdGVkKSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlRoYXQncyBhIEJMVCFcIlxuICAgICAgICBjYW52YXNkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnJlYWRlZCgpO1xuICAgICAgICBibHRzICs9IDE7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJUaGF0J3MgTk9UIGEgQkxUIVwiXG4gICAgICAgIGNhbnZhc2Rpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBicmVhZGVkKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnYW1lRnJhbWUrKztcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfSBcbiAgXG5cbn1cbmFuaW1hdGUoKTtcblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgY29udGFjdGVkID0gW107XG4gIGZvb2RBcnIgPSBbXTtcbiAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4KTtcbiAgYmx0cyA9IDA7XG4gIGljayA9IDA7XG4gIC8vIGdhbWVPdmVyID0gZmFsc2U7XG4gIGR1cGxpY2F0ZXMgPSBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9