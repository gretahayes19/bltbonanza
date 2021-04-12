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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJlYWQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJlYWQiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29tcGxldGVkIiwiZ2FtZU92ZXIiLCJrZXlzIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiZHJhd0ltYWdlIiwiQlJFQUQiLCJsZW5ndGgiLCJpIiwiY3VyckluZ3JlZGllbnQiLCJpc05vdE1heW8iLCJpc0JyZWFkIiwiaW5ncmVkaWVudCIsIlRPTUFUTyIsIkltYWdlIiwic3JjIiwiTEVUVFVDRSIsIkJBQ09OIiwiTUFZTyIsIkZJU0giLCJTT0NLIiwiSU5HUkVESUVOVFMiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsImNvdW50ZWQiLCJmbG9vciIsImR5IiwiY3VycmVudFNyYyIsImluY2x1ZGVzIiwiTUFZT0ZMQVQiLCJsZWZ0UHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImZvb2RBcnIiLCJzY29yZSIsImJsdHMiLCJpY2siLCJkdXBsaWNhdGVzIiwiZ2FtZUZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInJlc3RhcnQiLCJicmVhZGVkIiwibGFzdGJyZWFkIiwidGhpc2JyZWFkIiwiZW5kR2FtZSIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiY291bnRHcm9zcyIsImNvdW50IiwiY3VyciIsImlzR3Jvc3MiLCJpc0JMVCIsIm1heW8iLCJ0b21hdG8iLCJsZXR0dWNlIiwiYmFjb24iLCJhcmVEdXBsaWNhdGVzIiwiaGFuZGxlRm9vZCIsIm5ld0Zvb2QiLCJwdXNoIiwiaW5kZXhPZiIsInNwbGljZSIsInVwZGF0ZUhlaWdodCIsImRyYXciLCJzaGlmdCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImNhbnZhc2RpdiIsImFuaW1hdGUiLCJyZW1vdmVCdXR0b24iLCJyZW1vdmUiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImZvbnQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFHTUEsSztBQUNGLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QkMsQ0FBekIsRUFBNEI7QUFBQTs7QUFDeEIsU0FBS0MsQ0FBTCxHQUFTSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBekI7QUFDQSxTQUFLRixDQUFMLEdBQVNBLENBQUMsSUFBSUYsTUFBTSxDQUFDSyxLQUFQLEdBQWEsQ0FBM0IsQ0FGd0IsQ0FHeEI7O0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEIsQ0FMd0IsQ0FNeEI7O0FBQ0EsU0FBS1AsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FB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SUFBcEIsRUFBMEIsUUFBMUI7O0FBQ0FGLGdCQUFNLENBQUNHLFdBQVAsR0FBcUIsZUFBckI7QUFDQVAsaUJBQVMsQ0FBQ1EsV0FBVixDQUFzQkosUUFBdEI7QUFDQTlCLGVBQU87QUFDUFYsWUFBSSxJQUFJLENBQVI7QUFDQWlELGtCQUFVLENBQUMsWUFBTTtBQUNmSiwrQkFBcUIsQ0FBQ1IsT0FBRCxDQUFyQjtBQUNELFNBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxPQVZELE1BVU87QUFDTCxZQUFJRyxRQUFNLEdBQUdwQyxRQUFRLENBQUNxQyxhQUFULENBQXVCLFFBQXZCLENBQWI7O0FBQ0FELGdCQUFNLENBQUNFLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEIsUUFBMUI7O0FBQ0FGLGdCQUFNLENBQUNHLFdBQVAsR0FBcUIsbUJBQXJCO0FBQ0FQLGlCQUFTLENBQUNRLFdBQVYsQ0FBc0JKLFFBQXRCO0FBQ0E5QixlQUFPO0FBQ1B1QyxrQkFBVSxDQUFDLFlBQU07QUFDZkosK0JBQXFCLENBQUNSLE9BQUQsQ0FBckI7QUFDRCxTQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBQ0Q7QUFDRDs7QUFDRGxDLGFBQVM7QUFFVDBDLHlCQUFxQixDQUFDUixPQUFELENBQXJCO0FBQ0Q7QUFHRjs7QUFDREEsT0FBTzs7QUFFUCxTQUFTNUIsT0FBVCxHQUFtQjtBQUNqQjFDLFdBQVMsR0FBRyxFQUFaO0FBQ0ErQixTQUFPLEdBQUcsRUFBVjtBQUNBYyxXQUFTLEdBQUcsSUFBSXZELG1EQUFKLENBQVVDLE1BQVYsRUFBa0JDLEdBQWxCLENBQVo7QUFDQXlDLE1BQUksR0FBRyxDQUFQO0FBQ0FDLEtBQUcsR0FBRyxDQUFOLENBTGlCLENBTWpCOztBQUNBQyxZQUFVLEdBQUcsS0FBYjtBQUNELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNCcmVhZCwgQlJFQUQsIGtleXN9IGZyb20gJy4vdXRpbCdcblxuXG5jbGFzcyBCcmVhZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgpIHtcbiAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy54ID0geCB8fCBjYW52YXMud2lkdGgvMjtcbiAgICAgICAgLy8gdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gbm90U2FuZG8oKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGtleXMubGVmdFByZXNzZWQgJiYgKHRoaXMueCAhPT0gMCkpIHRoaXMueCAtPSA1O1xuICAgICAgICBpZiAoa2V5cy5yaWdodFByZXNzZWQgJiYgKHRoaXMueCAhPT0gdGhpcy5jYW52YXMud2lkdGggLSAxMzApKSB0aGlzLnggKz0gNTtcbiAgICB9XG5cblxuICAgIGRyYXcoY29udGFjdGVkKSB7XG4gICAgICAgIGxldCBzdGFja3ggPSB0aGlzLng7XG4gICAgICAgIGxldCBzdGFja3kgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShCUkVBRCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDAsIDMwMCwgMzAwKTtcbiAgICAgICAgLy8gaWYgKGNvbnRhY3RlZC5sZW5ndGggPj0gNSkgdGhpcy5nYW1lT3ZlciA9dHJ1ZTtcbiAgICAgICAgaWYgKGNvbnRhY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJJbmdyZWRpZW50ID0gY29udGFjdGVkW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpc05vdE1heW8oY3VyckluZ3JlZGllbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JyZWFkKGN1cnJJbmdyZWRpZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnJJbmdyZWRpZW50LmluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAzMDAsIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGJyZWFkZWQsIDIwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVhZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgc3RhY2t4LCBzdGFja3ksIDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNreSA9IHN0YWNreSAtIDIwO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VyckluZ3JlZGllbnQsIDAsIDAsIDEwMDAsIDEwMDAsIHN0YWNreCwgc3RhY2t5LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNreSA9IHN0YWNreSAtIDIwO1xuXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy55IDw9IDgwKSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBpc05vdE1heW8gPSAoaW5ncmVkaWVudCkgPT4ge1xuICAgIHJldHVybiAhIWluZ3JlZGllbnQuaW5ncmVkaWVudDtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWQiLCJpbXBvcnQgeyBpc0JyZWFkLCBCUkVBRCB9IGZyb20gJy4vdXRpbCdcblxuLy9mb29kXG5jb25zdCBUT01BVE8gPSBuZXcgSW1hZ2UoKTtcblRPTUFUTy5zcmMgPSAnLi9kaXN0L2ltYWdlcy90b21hdG8ucG5nJ1xuY29uc3QgTEVUVFVDRSA9IG5ldyBJbWFnZSgpO1xuTEVUVFVDRS5zcmMgPSAnLi9kaXN0L2ltYWdlcy9sZXR0dWNlLnBuZydcbmNvbnN0IEJBQ09OID0gbmV3IEltYWdlKCk7XG5CQUNPTi5zcmMgPSAnLi9kaXN0L2ltYWdlcy9iYWNvbi5wbmcnXG5jb25zdCBNQVlPID0gbmV3IEltYWdlKCk7XG5NQVlPLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL21heW8ucG5nJ1xuY29uc3QgRklTSCA9IG5ldyBJbWFnZSgpO1xuRklTSC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9maXNoLnBuZydcbmNvbnN0IFNPQ0sgPSBuZXcgSW1hZ2UoKTtcblNPQ0suc3JjID0gJy4vZGlzdC9pbWFnZXMvc29jay5wbmcnXG5cblxuY29uc3QgSU5HUkVESUVOVFMgPSBbRklTSCwgRklTSCwgU09DSywgU09DSyxUT01BVE8sIE1BWU8sIExFVFRVQ0UsIEJBQ09OLCBCUkVBRF1cblxuY2xhc3MgRm9vZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy55ID0gLTEwMDtcbiAgICAgICAgdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudCA9IElOR1JFRElFTlRTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIElOR1JFRElFTlRTLmxlbmd0aCldXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuICAgICAgICBpZiAodGhpcy54ID4gNzAwKSB0aGlzLnggLT0gMTAwO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgZHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgKyAxMDA7XG4gICAgICAgIGlmIChkeSAhPSB0aGlzLnkpIHRoaXMueSArPSA1O1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmIChpc0JyZWFkKHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMueSwgMzAwLCAzMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLnksIDI1MCwgMjUwKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kOyIsImV4cG9ydCBjb25zdCBpc0JyZWFkID0gKGluZ3JlZGllbnQpID0+IHtcbiAgICByZXR1cm4gaW5ncmVkaWVudC5pbmdyZWRpZW50Py5jdXJyZW50U3JjLmluY2x1ZGVzKFwiYnJlYWRcIik7XG59XG5cbmV4cG9ydCBjb25zdCBCUkVBRCA9IG5ldyBJbWFnZSgpO1xuQlJFQUQuc3JjID0gJy4vZGlzdC9pbWFnZXMvYnJlYWQucG5nJ1xuZXhwb3J0IGNvbnN0IE1BWU9GTEFUID0gbmV3IEltYWdlKCk7XG5NQVlPRkxBVC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvZmxhdC5wbmcnXG5cbmV4cG9ydCBjb25zdCBrZXlzID0ge1xuICAgIGxlZnRQcmVzc2VkOiBmYWxzZSxcbiAgICByaWdodFByZXNzZWQ6IGZhbHNlXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQnJlYWQgZnJvbSAnLi9zY3JpcHRzL2JyZWFkJ1xuaW1wb3J0IEZvb2QgZnJvbSAnLi9zY3JpcHRzL2Zvb2QnXG5pbXBvcnQge01BWU9GTEFULCBrZXlzfSBmcm9tICcuL3NjcmlwdHMvdXRpbCdcblxuXG5sZXQgY29udGFjdGVkID0gW107XG5sZXQgZm9vZEFyciA9IFtdO1xuXG5sZXQgc2NvcmUgPSAwO1xubGV0IGJsdHMgPSAwO1xubGV0IGljayA9IDA7XG5sZXQgZHVwbGljYXRlcyA9IGZhbHNlO1xubGV0IGdhbWVGcmFtZSA9IDA7XG4vLyBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIDM3OlxuICAgICAga2V5cy5sZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgMzc6XG4gICAgICBrZXlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzI6XG4gICAgICByZXN0YXJ0KCk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGJyZWFkZWQoKSB7XG4gIGNvbnRhY3RlZCA9IFtdO1xuICBmb29kQXJyID0gW107XG4gIGxldCBsYXN0YnJlYWQgPSB0aGlzYnJlYWQ7XG4gIHRoaXNicmVhZCA9IG5ldyBCcmVhZChjYW52YXMsIGN0eCwgbGFzdGJyZWFkLngpO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lICgpIHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gIGN0eC5maWxsVGV4dChcIllPVSBMT1NFXCIsIDQwMCwgMjUwKVxufVxuXG5mdW5jdGlvbiBjb3VudEdyb3NzKGNvbnRhY3RlZCkge1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjdXJyID0gY29udGFjdGVkW2ldO1xuICAgIGlmIChpc0dyb3NzKGN1cnIpKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGljayA9IGNvdW50O1xufVxuXG5jb25zdCBpc0dyb3NzID0gKGluZ3JlZGllbnQpID0+IHtcbiAgcmV0dXJuIGluZ3JlZGllbnQuaW5ncmVkaWVudD8uY3VycmVudFNyYy5pbmNsdWRlcyhcInNvY2tcIikgfHwgaW5ncmVkaWVudC5pbmdyZWRpZW50Py5jdXJyZW50U3JjLmluY2x1ZGVzKFwiZmlzaFwiKTtcbn1cblxuZnVuY3Rpb24gaXNCTFQoY29udGFjdGVkKSB7XG4gICAgbGV0IG1heW8gPSAwO1xuICAgIGxldCB0b21hdG8gPSAwO1xuICAgIGxldCBsZXR0dWNlID0gMDtcbiAgICBsZXQgYmFjb24gPSAwOyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGN1cnIgPSBjb250YWN0ZWRbaV07XG4gICAgICBpZiAoIWN1cnIuaW5ncmVkaWVudCkge1xuICAgICAgICBtYXlvKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJ0b21hdG9cIikpIHtcbiAgICAgICAgdG9tYXRvKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJsZXR0dWNlXCIpKSB7XG4gICAgICAgIGxldHR1Y2UrK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcImJhY29uXCIpKSB7XG4gICAgICAgIGJhY29uKytcbiAgICAgIH0gXG4gICAgfVxuXG4gICAgcmV0dXJuICgobWF5byA+IDApICYmICh0b21hdG8gPiAwKSAmJiAobGV0dHVjZSA+IDApICYmIChiYWNvbiA+IDApKVxufVxuXG5mdW5jdGlvbiBhcmVEdXBsaWNhdGVzKGNvbnRhY3RlZCkge1xuICAgIGxldCBtYXlvID0gMDtcbiAgICBsZXQgdG9tYXRvID0gMDtcbiAgICBsZXQgbGV0dHVjZSA9IDA7XG4gICAgbGV0IGJhY29uID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGN1cnIgPSBjb250YWN0ZWRbaV07XG4gICAgICBpZiAoIWN1cnIuaW5ncmVkaWVudCkge1xuICAgICAgICBtYXlvKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJ0b21hdG9cIikpIHtcbiAgICAgICAgdG9tYXRvKytcbiAgICAgIH0gZWxzZSBpZiAoY3Vyci5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJsZXR0dWNlXCIpKSB7XG4gICAgICAgIGxldHR1Y2UrK1xuICAgICAgfSBlbHNlIGlmIChjdXJyLmluZ3JlZGllbnQuY3VycmVudFNyYy5pbmNsdWRlcyhcImJhY29uXCIpKSB7XG4gICAgICAgIGJhY29uKytcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKG1heW8gPiAxKSB8fCAodG9tYXRvID4gMSkgfHwgKGxldHR1Y2UgPiAxKSB8fCAoYmFjb24gPiAxKSkge1xuICAgICAgZHVwbGljYXRlcyA9IHRydWU7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZUZvb2QoY2FudmFzKSB7XG4gIGlmIChnYW1lRnJhbWUgJSAxNSA9PSAwKSB7XG4gICAgbGV0IG5ld0Zvb2QgPSBuZXcgRm9vZChjYW52YXMsIGN0eCk7XG4gICAgZm9vZEFyci5wdXNoKG5ld0Zvb2QpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChmb29kQXJyW2ldLnkgPT09IHRoaXNicmVhZC55KSAmJiAoZm9vZEFycltpXS54ID4gdGhpc2JyZWFkLnggLSA3MCAmJiBmb29kQXJyW2ldLnggPCB0aGlzYnJlYWQueCArIDcwKSkgeyBcbiAgICAgIGlmICghZm9vZEFycltpXS5jb3VudGVkKSBzY29yZSArPSAxO1xuICAgICAgXG4gICAgICBpZiAoY29udGFjdGVkLmluZGV4T2YoZm9vZEFycltpXSkgPT09IC0xICkge1xuICAgICAgICBpZiAoZm9vZEFycltpXS5pbmdyZWRpZW50LmN1cnJlbnRTcmMuaW5jbHVkZXMoXCJtYXlvXCIpKSB7XG4gICAgICAgICAgY29udGFjdGVkLnB1c2goTUFZT0ZMQVQpXG4gICAgICAgICAgZm9vZEFycltpXS5jb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICBmb29kQXJyLnNwbGljZShpLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb29kQXJyW2ldLmNvdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRhY3RlZC5wdXNoKGZvb2RBcnJbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc2JyZWFkLnkgLT0gMjA7XG5cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvb2RBcnJbaV0udXBkYXRlSGVpZ2h0KCk7XG5cbiAgICBpZiAoY29udGFjdGVkLmluZGV4T2YoZm9vZEFycltpXSkgPT09IC0xICYmIGZvb2RBcnJbaV0ueSA8IGNhbnZhcy5oZWlnaHQpIGZvb2RBcnJbaV0uZHJhdygpO1xuICAgIGlmIChmb29kQXJyW2ldLnkgPiBjYW52YXMuaGVpZ2h0KSBmb29kQXJyLnNoaWZ0KGZvb2RBcnJbaV0pXG4gIH1cblxuICBcbn1cblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDUwMDtcbmxldCB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoY2FudmFzLCBjdHgpO1xuY29uc3QgY2FudmFzZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNkaXZcIik7XG5cblxuLy9hbmltYXRpb24gXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIik7XG4gIGlmIChyZW1vdmVCdXR0b24pIHJlbW92ZUJ1dHRvbi5yZW1vdmUoKTtcblxuICBpZiAoaWNrID49IDIpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJZVUNLISBIaXQgc3BhY2UgdG8gcmVzdGFydFwiXG4gICAgY2FudmFzZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgdGhpc2JyZWFkLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH0gZWxzZSBpZiAoZHVwbGljYXRlcykge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIk5PIERVUExJQ0FURVMhIEhpdCBzcGFjZSB0byByZXN0YXJ0XCJcbiAgICBjYW52YXNkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB0aGlzYnJlYWQuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfSBcbiAgXG4gIGlmICghdGhpc2JyZWFkLmdhbWVPdmVyKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy9kcmF3IHNhbmR3aWNoXG4gICAgdGhpc2JyZWFkLmRyYXcoY29udGFjdGVkKTtcbiAgICB0aGlzYnJlYWQudXBkYXRlKCk7XG4gICAgYXJlRHVwbGljYXRlcyhjb250YWN0ZWQpO1xuICAgIGNvdW50R3Jvc3MoY29udGFjdGVkKTtcbiAgICBoYW5kbGVGb29kKGNhbnZhcyk7XG5cbiAgICAvL3dyaXRlIHRleHRcbiAgICBjdHguZm9udCA9IFwiMjVweCBLcm9uYSBPbmVcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjM0UxOTA3XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiQkxUIENvdW50OiBcIiArIGJsdHMsIDEwLCAzMClcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjM0UxOTA3XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSWNrOiBcIiArIGljaywgMTAsIDY1KVxuXG4gICAgLy9zYW5kd2ljaCBjb21wbGV0ZVxuICAgIGlmICh0aGlzYnJlYWQuY29tcGxldGVkKSB7XG4gICAgICBpZiAoaXNCTFQoY29udGFjdGVkKSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlRoYXQncyBhIEJMVCFcIlxuICAgICAgICBjYW52YXNkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnJlYWRlZCgpO1xuICAgICAgICBibHRzICs9IDE7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJUaGF0J3MgTk9UIGEgQkxUIVwiXG4gICAgICAgIGNhbnZhc2Rpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBicmVhZGVkKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnYW1lRnJhbWUrKztcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfSBcbiAgXG5cbn1cbmFuaW1hdGUoKTtcblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgY29udGFjdGVkID0gW107XG4gIGZvb2RBcnIgPSBbXTtcbiAgdGhpc2JyZWFkID0gbmV3IEJyZWFkKGNhbnZhcywgY3R4KTtcbiAgYmx0cyA9IDA7XG4gIGljayA9IDA7XG4gIC8vIGdhbWVPdmVyID0gZmFsc2U7XG4gIGR1cGxpY2F0ZXMgPSBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9