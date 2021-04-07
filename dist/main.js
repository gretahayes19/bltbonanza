/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/DOMExample.js":
/*!***********************************!*\
  !*** ./src/scripts/DOMExample.js ***!
  \***********************************/
/***/ (function() {

// import stitchAndYoda from "../images/yoda-stitch.jpg";
// export const DOMExample = () => {
//   const testObj = {
//     key1: "hi",
//     key2: {
//       key3: "Hello",
//     },
//   };
//   const greeting = testObj?.key2?.key3 || testObj.key1;
//   document.body.classList.add("center");
//   const randomCard = document.createElement("div");
//   randomCard.classList.add("card", "center", "rando");
//   const winnerP = document.createElement("p");
//   const randomButton = document.createElement("btn");
//   randomButton.innerText = "Pick Me!";
//   randomCard.append(randomButton, winnerP);
//   document.body.append(randomCard);
//   randomButton.onclick = (e) => {
//     e.preventDefault();
//     winnerP.innerHTML = randomJobSeeker();
//   };
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World!</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
//   const imgElement = document.createElement("img");
//   imgElement.src = buildAssetPath(stitchAndYoda);
//   imgElement.classList.add("card", "center");
//   imgElement.style.objectFit = "cover";
//   imgElement.style.filter = "grayscale(80%)";
//   document.body.appendChild(imgElement);
// };
// // to resolve path issues for images in JS
// function buildAssetPath(imgSrc) {
//   return `./dist/${imgSrc}`;
// }
// function  randomJobSeeker() {
//   let jobSeekers = (process.env.NODE_ENV === 'development') ?
//     require('../../secret').JOBSEEKERS :
//     [
//       "Arthur Dent",
//       "Ford Prefect",
//       "Zaphod Beeblebrox",
//       "Marvin the Paranoid Android",
//       "Trillian",
//       "Slartibartfast",
//     ];
//   const winner = jobSeekers[Math.floor(Math.random() * jobSeekers.length)];
//   return winner;
// }

/***/ }),

/***/ "./src/scripts/brick.js":
/*!******************************!*\
  !*** ./src/scripts/brick.js ***!
  \******************************/
/***/ (function() {

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
var score = 0;
var gameFrame = 0;
ctx.font = "50px Georgia"; //Mouse Stuff

var mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false
};
canvas.addEventListener('mousedown', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(event);
});

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvasExample = /*#__PURE__*/function () {
  function canvasExample(props) {
    _classCallCheck(this, canvasExample);

    this.coords = [10, 10, 150, 100];
    this.animationDir = 1;
    this.fillColor = "green";
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width / 2;
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    } // drawSquare() {
    //   this.ctx.fillStyle = this.fillColor;
    //   this.ctx.fillRect(...this.coords);
    // }
    // updateSquare() {
    //   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
    // }
    // clearSquare() {
    //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }
    // reverseAnimation() {
    //   this.animationDir *= -1;
    // }

  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }]);

  return canvasExample;
}();

/* harmony default export */ __webpack_exports__["default"] = (canvasExample);

/***/ }),

/***/ "./src/scripts/square.js":
/*!*******************************!*\
  !*** ./src/scripts/square.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(ctx, coords) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "green";

    _classCallCheck(this, Square);

    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.animationDir = 1;
  }

  _createClass(Square, [{
    key: "drawSquare",
    value: function drawSquare() {
      var _this$ctx;

      this.ctx.fillStyle = this.color;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "updateSquare",
    value: function updateSquare(color) {
      var _this = this;

      this.color = color;
      this.coords = this.coords.map(function (coord) {
        return coord += 1 * _this.animationDir;
      });
    }
  }, {
    key: "reverseAnimation",
    value: function reverseAnimation() {
      this.animationDir *= -1;
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./src/images/tomato.png":
/*!*******************************!*\
  !*** ./src/images/tomato.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/tomato.png");

/***/ }),

/***/ "./src/images/yoda-stitch.jpg":
/*!************************************!*\
  !*** ./src/images/yoda-stitch.jpg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/yoda-stitch.jpg");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/square */ "./src/scripts/square.js");
/* harmony import */ var _scripts_brick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/brick */ "./src/scripts/brick.js");
/* harmony import */ var _scripts_brick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_brick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/DOMExample */ "./src/scripts/DOMExample.js");
/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_DOMExample__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_tomato_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/tomato.png */ "./src/images/tomato.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var currentStateObj = {
  currentExample: null,
  currentEventListeners: []
};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
var score = 0;
var gameFrame = 0;
ctx.font = "30px Bungee Shade";
var canvasPos = canvas.getBoundingClientRect();
console.log(canvasPos);
var keys = {
  leftPressed: false,
  rightPressed: false
};
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      keys.leftPressed = true;
      break;

    case 39:
      keys.rightPressed = true;
      break;
  }
});
document.addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    case 37:
      keys.leftPressed = false;
      break;

    case 39:
      keys.rightPressed = false;
      break;
  }
}); // canvas.addEventListener('mouseup', function (event) {
//     mouse.click = false;
//     console.log(mouse.x, mouse.y)
// });
//food

var tomato = new Image();
tomato.src = './dist/images/tomato.png';
var lettuce = new Image();
lettuce.src = './dist/images/lettuce.png';
var bread = new Image();
bread.src = './dist/images/bread.png';
var bacon = new Image();
bacon.src = './dist/images/bacon.png';
var mayo = new Image();
mayo.src = './dist/images/mayo.png';
var mayoflat = new Image();
mayoflat.src = './dist/images/mayoflat.png';
var ingredients = [tomato, mayo, lettuce, bacon, tomato, mayo, lettuce, bacon, bread];
var foodArr = [];

var Food = /*#__PURE__*/function () {
  function Food() {
    _classCallCheck(this, Food);

    this.x = Math.random() * canvas.width;
    this.y = -100;
    this.radius = 50;
    this.counted = false;
    this.ingredient = ingredients[Math.floor(Math.random() * ingredients.length)];
  }

  _createClass(Food, [{
    key: "update",
    value: function update() {
      var dy = canvas.height + 100;

      if (dy != this.y) {
        this.y += 5;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.ingredient, 0, 0, 1000, 1000, this.x, this.y, 250, 250);
    }
  }]);

  return Food;
}();

var Bread = /*#__PURE__*/function () {
  function Bread() {
    _classCallCheck(this, Bread);

    this.y = canvas.height - 100;
    this.x = canvas.width / 2;
  }

  _createClass(Bread, [{
    key: "update",
    value: function update() {
      if (keys.leftPressed && this.x !== 0) {
        this.x -= 5;
      }

      if (keys.rightPressed && this.x !== canvas.width - 130) {
        this.x += 5;
      }
    }
  }, {
    key: "draw",
    value: function draw(contacted) {
      var stackx = this.x;
      var stacky = canvas.height - 100;
      ctx.drawImage(bread, 0, 0, 1000, 1000, this.x, canvas.height - 100, 300, 300);

      if (contacted) {
        for (var i = 0; i < contacted.length; i++) {
          if (contacted[i].ingredient) {
            ctx.drawImage(contacted[i].ingredient, 0, 0, 1000, 1000, stackx, stacky, 250, 250);
          } else {
            ctx.drawImage(contacted[i], 0, 0, 1000, 1000, stackx, stacky, 250, 250);
          }

          stacky = stacky - 20;
        }
      }
    }
  }]);

  return Bread;
}();

var thisbread = new Bread();
var contacted = [];

function handleFood() {
  if (gameFrame % 200 == 0) {
    foodArr.push(new Food());
  }

  for (var i = 0; i < foodArr.length; i++) {
    if (foodArr[i].y === thisbread.y && foodArr[i].x > thisbread.x - 50 && foodArr[i].x < thisbread.x + 50) {
      if (!foodArr[i].counted) {
        score += 1;
      }

      if (contacted.indexOf(foodArr[i]) === -1) {
        debugger;

        if (foodArr[i].ingredient.currentSrc.includes("mayo")) {
          contacted.push(mayoflat);
          foodArr[i].counted = true;
          foodArr.shift(foodArr[i]);
        } else {
          foodArr[i].counted = true;
          contacted.push(foodArr[i]);
        }

        thisbread.y -= 20;
      } // foodArr[i].counted = true;


      break;
    }

    thisbread.draw(contacted);
    foodArr[i].update();

    if (contacted.indexOf(foodArr[i]) === -1 && foodArr[i].y < canvas.height) {
      foodArr[i].draw();
    }

    if (foodArr[i].y > canvas.height) {
      foodArr.shift(foodArr[i]);
    }
  }
} //animation 


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  thisbread.draw(contacted);
  thisbread.update();
  handleFood();
  gameFrame++;
  ctx.fillStyle = "white";
  ctx.fillText("score:" + score, 10, 50);
  requestAnimationFrame(animate);
}

animate();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvRE9NRXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJpY2suanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvc3F1YXJlLmpzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW1hZ2VzL3RvbWF0by5wbmciLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9pbWFnZXMveW9kYS1zdGl0Y2guanBnIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0Iiwic2NvcmUiLCJnYW1lRnJhbWUiLCJmb250IiwibW91c2UiLCJ4IiwieSIsImNsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImNhbnZhc0V4YW1wbGUiLCJwcm9wcyIsImNvb3JkcyIsImFuaW1hdGlvbkRpciIsImZpbGxDb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm9keSIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJTcXVhcmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcCIsImNvb3JkIiwiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJjYW52YXNQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJrZXlzIiwibGVmdFByZXNzZWQiLCJyaWdodFByZXNzZWQiLCJlIiwia2V5Q29kZSIsInRvbWF0byIsIkltYWdlIiwic3JjIiwibGV0dHVjZSIsImJyZWFkIiwiYmFjb24iLCJtYXlvIiwibWF5b2ZsYXQiLCJpbmdyZWRpZW50cyIsImZvb2RBcnIiLCJGb29kIiwiTWF0aCIsInJhbmRvbSIsInJhZGl1cyIsImNvdW50ZWQiLCJpbmdyZWRpZW50IiwiZmxvb3IiLCJsZW5ndGgiLCJkeSIsImRyYXdJbWFnZSIsIkJyZWFkIiwiY29udGFjdGVkIiwic3RhY2t4Iiwic3RhY2t5IiwiaSIsInRoaXNicmVhZCIsImhhbmRsZUZvb2QiLCJwdXNoIiwiaW5kZXhPZiIsImN1cnJlbnRTcmMiLCJpbmNsdWRlcyIsInNoaWZ0IiwiZHJhdyIsInVwZGF0ZSIsImFuaW1hdGUiLCJmaWxsVGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDRDs7QUFDRDZELGFBQVMsQ0FBQ08sSUFBVixDQUFlWCxTQUFmO0FBRUFaLFdBQU8sQ0FBQ2UsQ0FBRCxDQUFQLENBQVdTLE1BQVg7O0FBQ0EsUUFBSVosU0FBUyxDQUFDTyxPQUFWLENBQWtCbkIsT0FBTyxDQUFDZSxDQUFELENBQXpCLE1BQWtDLENBQUMsQ0FBbkMsSUFBd0NmLE9BQU8sQ0FBQ2UsQ0FBRCxDQUFQLENBQVc1RCxDQUFYLEdBQWVaLE1BQU0sQ0FBQ00sTUFBbEUsRUFBMEU7QUFDeEVtRCxhQUFPLENBQUNlLENBQUQsQ0FBUCxDQUFXUSxJQUFYO0FBQ0Q7O0FBRUQsUUFBSXZCLE9BQU8sQ0FBQ2UsQ0FBRCxDQUFQLENBQVc1RCxDQUFYLEdBQWVaLE1BQU0sQ0FBQ00sTUFBMUIsRUFBa0M7QUFDaENtRCxhQUFPLENBQUNzQixLQUFSLENBQWN0QixPQUFPLENBQUNlLENBQUQsQ0FBckI7QUFDRDtBQUlGO0FBR0YsQyxDQUNEOzs7QUFDQSxTQUFTVSxPQUFULEdBQW1CO0FBQ2pCL0UsS0FBRyxDQUFDeUIsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0I1QixNQUFNLENBQUNLLEtBQTNCLEVBQWtDTCxNQUFNLENBQUNNLE1BQXpDO0FBQ0FtRSxXQUFTLENBQUNPLElBQVYsQ0FBZVgsU0FBZjtBQUNBSSxXQUFTLENBQUNRLE1BQVY7QUFDQVAsWUFBVTtBQUNWbEUsV0FBUztBQUNUTCxLQUFHLENBQUMrQixTQUFKLEdBQWdCLE9BQWhCO0FBQ0EvQixLQUFHLENBQUNnRixRQUFKLENBQWEsV0FBVzVFLEtBQXhCLEVBQStCLEVBQS9CLEVBQW1DLEVBQW5DO0FBQ0E2RSx1QkFBcUIsQ0FBQ0YsT0FBRCxDQUFyQjtBQUNEOztBQUNEQSxPQUFPLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzdGl0Y2hBbmRZb2RhIGZyb20gXCIuLi9pbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBET01FeGFtcGxlID0gKCkgPT4ge1xuLy8gICBjb25zdCB0ZXN0T2JqID0ge1xuLy8gICAgIGtleTE6IFwiaGlcIixcbi8vICAgICBrZXkyOiB7XG4vLyAgICAgICBrZXkzOiBcIkhlbGxvXCIsXG4vLyAgICAgfSxcbi8vICAgfTtcblxuLy8gICBjb25zdCBncmVldGluZyA9IHRlc3RPYmo/LmtleTI/LmtleTMgfHwgdGVzdE9iai5rZXkxO1xuLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4vLyAgIGNvbnN0IHJhbmRvbUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICByYW5kb21DYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwicmFuZG9cIik7XG4vLyAgIGNvbnN0IHdpbm5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ0blwiKTtcbi8vICAgcmFuZG9tQnV0dG9uLmlubmVyVGV4dCA9IFwiUGljayBNZSFcIjtcbi8vICAgcmFuZG9tQ2FyZC5hcHBlbmQocmFuZG9tQnV0dG9uLCB3aW5uZXJQKTtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocmFuZG9tQ2FyZCk7XG4vLyAgIHJhbmRvbUJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgd2lubmVyUC5pbm5lckhUTUwgPSByYW5kb21Kb2JTZWVrZXIoKTtcbi8vICAgfTtcbi8vICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XG4vLyAgIGNhcmQuaW5uZXJIVE1MID0gYDxoMj4ke2dyZWV0aW5nfSBXb3JsZCE8L2gyPmA7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xuLy8gICBjb25zdCBpbWdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgaW1nQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiLCBcImltYWdlLWNhcmRcIik7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nQ2FyZCk7XG4vLyAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuLy8gICBpbWdFbGVtZW50LnNyYyA9IGJ1aWxkQXNzZXRQYXRoKHN0aXRjaEFuZFlvZGEpO1xuLy8gICBpbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuLy8gICBpbWdFbGVtZW50LnN0eWxlLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcbi8vICAgaW1nRWxlbWVudC5zdHlsZS5maWx0ZXIgPSBcImdyYXlzY2FsZSg4MCUpXCI7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gIFxuLy8gfTtcblxuLy8gLy8gdG8gcmVzb2x2ZSBwYXRoIGlzc3VlcyBmb3IgaW1hZ2VzIGluIEpTXG5cbi8vIGZ1bmN0aW9uIGJ1aWxkQXNzZXRQYXRoKGltZ1NyYykge1xuLy8gICByZXR1cm4gYC4vZGlzdC8ke2ltZ1NyY31gO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiAgcmFuZG9tSm9iU2Vla2VyKCkge1xuLy8gICBsZXQgam9iU2Vla2VycyA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgP1xuLy8gICAgIHJlcXVpcmUoJy4uLy4uL3NlY3JldCcpLkpPQlNFRUtFUlMgOlxuLy8gICAgIFtcbi8vICAgICAgIFwiQXJ0aHVyIERlbnRcIixcbi8vICAgICAgIFwiRm9yZCBQcmVmZWN0XCIsXG4vLyAgICAgICBcIlphcGhvZCBCZWVibGVicm94XCIsXG4vLyAgICAgICBcIk1hcnZpbiB0aGUgUGFyYW5vaWQgQW5kcm9pZFwiLFxuLy8gICAgICAgXCJUcmlsbGlhblwiLFxuLy8gICAgICAgXCJTbGFydGliYXJ0ZmFzdFwiLFxuLy8gICAgIF07XG4vLyAgIGNvbnN0IHdpbm5lciA9IGpvYlNlZWtlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogam9iU2Vla2Vycy5sZW5ndGgpXTtcbi8vICAgcmV0dXJuIHdpbm5lcjtcbi8vIH1cblxuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbmxldCBzY29yZSA9IDA7XG5sZXQgZ2FtZUZyYW1lID0gMDtcbmN0eC5mb250ID0gXCI1MHB4IEdlb3JnaWFcIjtcblxuLy9Nb3VzZSBTdHVmZlxuXG5jb25zdCBtb3VzZSA9IHtcbiAgICB4OiBjYW52YXMud2lkdGgvMixcbiAgICB5OiBjYW52YXMuaGVpZ2h0LzIsXG4gICAgY2xpY2s6IGZhbHNlXG59XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgIG1vdXNlLnggPSBldmVudC54O1xuICAgIG1vdXNlLnkgPSBldmVudC55O1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbn0pO1xuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jb29yZHMgPSBbMTAsIDEwLCAxNTAsIDEwMF07XG4gICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIHRoaXMuZmlsbENvbG9yID0gYGdyZWVuYDtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNzU7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gIH1cbiAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gIC8vIH1cbiAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAvLyB9XG5cbiAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAvLyB9XG5cbiAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgLy8gfVxuICBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTtcbiIsImNsYXNzIFNxdWFyZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gIH1cblxuICBkcmF3U3F1YXJlKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICB9XG4gIHVwZGF0ZVNxdWFyZShjb2xvcikge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvdG9tYXRvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3lvZGEtc3RpdGNoLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy95b2RhLXN0aXRjaC5qcGdcIjtcbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG5pbXBvcnQgZHJhd0JyaWNrIGZyb20gJy4vc2NyaXB0cy9icmljaydcbmltcG9ydCB7IERPTUV4YW1wbGUgfSBmcm9tIFwiLi9zY3JpcHRzL0RPTUV4YW1wbGVcIjtcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9icmlja1wiO1xuaW1wb3J0IHRvbWF0b3BuZyBmcm9tICcuL2ltYWdlcy90b21hdG8ucG5nJ1xuXG5jb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4gIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuICBjdXJyZW50RXZlbnRMaXN0ZW5lcnM6IFtdLFxufTtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cblxubGV0IHNjb3JlID0gMDtcbmxldCBnYW1lRnJhbWUgPSAwO1xuY3R4LmZvbnQgPSBcIjMwcHggQnVuZ2VlIFNoYWRlXCI7XG5cbmxldCBjYW52YXNQb3MgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5jb25zb2xlLmxvZyhjYW52YXNQb3MpO1xuXG5jb25zdCBrZXlzID0ge1xuICBsZWZ0UHJlc3NlZDogZmFsc2UsXG4gIHJpZ2h0UHJlc3NlZDogZmFsc2Vcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgMzc6XG4gICAgICBrZXlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAga2V5cy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuLy8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgICBtb3VzZS5jbGljayA9IGZhbHNlO1xuLy8gICAgIGNvbnNvbGUubG9nKG1vdXNlLngsIG1vdXNlLnkpXG4vLyB9KTtcblxuXG4vL2Zvb2RcbmNvbnN0IHRvbWF0byA9IG5ldyBJbWFnZSgpO1xudG9tYXRvLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3RvbWF0by5wbmcnXG5jb25zdCBsZXR0dWNlID0gbmV3IEltYWdlKCk7IFxubGV0dHVjZS5zcmMgPSAnLi9kaXN0L2ltYWdlcy9sZXR0dWNlLnBuZydcbmNvbnN0IGJyZWFkID0gbmV3IEltYWdlKCk7XG5icmVhZC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9icmVhZC5wbmcnXG5jb25zdCBiYWNvbiA9IG5ldyBJbWFnZSgpO1xuYmFjb24uc3JjID0gJy4vZGlzdC9pbWFnZXMvYmFjb24ucG5nJ1xuY29uc3QgbWF5byA9IG5ldyBJbWFnZSgpO1xubWF5by5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvLnBuZydcbmNvbnN0IG1heW9mbGF0ID0gbmV3IEltYWdlKCk7XG5tYXlvZmxhdC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tYXlvZmxhdC5wbmcnXG5jb25zdCBpbmdyZWRpZW50cyA9IFt0b21hdG8sIG1heW8sIGxldHR1Y2UsIGJhY29uLCB0b21hdG8sIG1heW8sIGxldHR1Y2UsIGJhY29uLCBicmVhZF1cblxuXG5jb25zdCBmb29kQXJyID0gW107XG5jbGFzcyBGb29kIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLnkgPSAtMTAwO1xuICAgIHRoaXMucmFkaXVzID0gNTA7XG4gICAgdGhpcy5jb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmdyZWRpZW50ID0gaW5ncmVkaWVudHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW5ncmVkaWVudHMubGVuZ3RoKV1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBkeSA9IGNhbnZhcy5oZWlnaHQrMTAwO1xuICAgIGlmIChkeSAhPSB0aGlzLnkpIHtcbiAgICAgIHRoaXMueSArPSA1O1xuICAgIH1cbiAgfVxuICBcbiAgZHJhdygpIHtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW5ncmVkaWVudCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLnksIDI1MCwgMjUwKTsgXG4gIH1cblxufVxuXG5cblxuY2xhc3MgQnJlYWR7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQtMTAwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aC8yO1xuXG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoa2V5cy5sZWZ0UHJlc3NlZCAmJiAodGhpcy54ICE9PSAwKSkge1xuICAgICAgdGhpcy54IC09IDU7XG4gICAgfVxuICAgIGlmIChrZXlzLnJpZ2h0UHJlc3NlZCAmJiAodGhpcy54ICE9PSBjYW52YXMud2lkdGgtMTMwKSkge1xuICAgICAgdGhpcy54ICs9IDU7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjb250YWN0ZWQpIHtcbiAgICBsZXQgc3RhY2t4ID0gdGhpcy54O1xuICAgIGxldCBzdGFja3kgPSBjYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgIGN0eC5kcmF3SW1hZ2UoYnJlYWQsIDAsIDAsIDEwMDAsIDEwMDAsIHRoaXMueCwgY2FudmFzLmhlaWdodC0xMDAsIDMwMCwgMzAwKTtcbiAgICBpZiAoY29udGFjdGVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY29udGFjdGVkW2ldLmluZ3JlZGllbnQpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbnRhY3RlZFtpXS5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29udGFjdGVkW2ldLCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNreSA9IHN0YWNreSAtIDIwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCB0aGlzYnJlYWQgPSBuZXcgQnJlYWQoKTtcbmNvbnN0IGNvbnRhY3RlZCA9IFtdO1xuXG5mdW5jdGlvbiBoYW5kbGVGb29kKCkge1xuICBpZiAoZ2FtZUZyYW1lICUgMjAwID09IDApIHtcbiAgICBmb29kQXJyLnB1c2gobmV3IEZvb2QoKSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChmb29kQXJyW2ldLnkgPT09IHRoaXNicmVhZC55KSAmJiAoZm9vZEFycltpXS54ID4gdGhpc2JyZWFkLnggLSA1MCAmJiBmb29kQXJyW2ldLnggPCB0aGlzYnJlYWQueCArIDUwKSkge1xuXG4gICAgICBpZiAoIWZvb2RBcnJbaV0uY291bnRlZCkge1xuICAgICAgICBzY29yZSArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGNvbnRhY3RlZC5pbmRleE9mKGZvb2RBcnJbaV0pID09PSAtMSApIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKGZvb2RBcnJbaV0uaW5ncmVkaWVudC5jdXJyZW50U3JjLmluY2x1ZGVzKFwibWF5b1wiKSkge1xuICAgICAgICAgIGNvbnRhY3RlZC5wdXNoKG1heW9mbGF0KVxuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgZm9vZEFyci5zaGlmdChmb29kQXJyW2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250YWN0ZWQucHVzaChmb29kQXJyW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzYnJlYWQueSAtPSAyMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gZm9vZEFycltpXS5jb3VudGVkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzYnJlYWQuZHJhdyhjb250YWN0ZWQpO1xuXG4gICAgZm9vZEFycltpXS51cGRhdGUoKTtcbiAgICBpZiAoY29udGFjdGVkLmluZGV4T2YoZm9vZEFycltpXSkgPT09IC0xICYmIGZvb2RBcnJbaV0ueSA8IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIGZvb2RBcnJbaV0uZHJhdygpO1xuICAgIH0gIFxuXG4gICAgaWYgKGZvb2RBcnJbaV0ueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIGZvb2RBcnIuc2hpZnQoZm9vZEFycltpXSlcbiAgICB9ICBcblxuICAgIFxuXG4gIH1cblxuICBcbn1cbi8vYW5pbWF0aW9uIFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB0aGlzYnJlYWQuZHJhdyhjb250YWN0ZWQpO1xuICB0aGlzYnJlYWQudXBkYXRlKCk7XG4gIGhhbmRsZUZvb2QoKTtcbiAgZ2FtZUZyYW1lKys7XG4gIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gIGN0eC5maWxsVGV4dChcInNjb3JlOlwiICsgc2NvcmUsIDEwLCA1MClcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuYW5pbWF0ZSgpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=