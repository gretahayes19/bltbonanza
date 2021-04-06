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
ctx.font = "50px Georgia"; //Mouse Stuff

var canvasPos = canvas.getBoundingClientRect();
console.log(canvasPos);
var mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false
};
canvas.addEventListener('mousedown', function (event) {
  mouse.click = true;
  mouse.x = event.x - canvasPos.left;
  mouse.y = event.y - canvasPos.top; // console.log(mouse.x, mouse.y)
});
var keys = {
  leftPressed: false,
  rightPressed: false
};
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      keys.leftPressed = true;
      break;

    case 38:
      alert('up');
      break;

    case 39:
      keys.rightPressed = true;
      break;

    case 40:
      alert('down');
      break;
  }
});
document.addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    case 37:
      keys.leftPressed = false;
      break;

    case 38:
      alert('up');
      break;

    case 39:
      keys.rightPressed = false;
      break;

    case 40:
      alert('down');
      break;
  }
});
canvas.addEventListener('mouseup', function (event) {
  mouse.click = false;
  console.log(mouse.x, mouse.y);
}); //food

var tomato = new Image();
tomato.src = './dist/images/tomato.png';
var lettuce = new Image();
lettuce.src = './dist/images/lettuce.png';
var bread = new Image();
bread.src = './dist/images/bread.png';
var ingredients = [tomato, lettuce];
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

      if (keys.rightPressed && this.x !== canvas.width) {
        this.x += 5;
      }
    }
  }, {
    key: "draw",
    value: function draw(contacted) {
      var stackx = this.x;
      var stacky = this.y - 20;
      ctx.drawImage(bread, 0, 0, 1000, 1000, this.x, this.y, 300, 300);

      if (contacted) {
        for (var i = 0; i < contacted.length; i++) {
          ctx.drawImage(contacted[i].ingredient, 0, 0, 1000, 1000, stackx, stacky, 250, 250);
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

      contacted.push(foodArr[i]);
      foodArr[i].counted = true;
      break;
    }

    thisbread.draw(contacted);
    foodArr[i].update();
    foodArr[i].draw();
  }
} //animation 


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  thisbread.draw(contacted);
  thisbread.update();
  handleFood(); // food.update();

  gameFrame++;
  ctx.fillStyle = "black";
  ctx.fillText("score:" + score, 10, 50);
  requestAnimationFrame(animate);
}

animate();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvRE9NRXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYnJpY2suanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvc3F1YXJlLmpzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW1hZ2VzL3RvbWF0by5wbmciLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9pbWFnZXMveW9kYS1zdGl0Y2guanBnIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0Iiwic2NvcmUiLCJnYW1lRnJhbWUiLCJmb250IiwibW91c2UiLCJ4IiwieSIsImNsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImNhbnZhc0V4YW1wbGUiLCJwcm9wcyIsImNvb3JkcyIsImFuaW1hdGlvbkRpciIsImZpbGxDb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm9keSIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJTcXVhcmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcCIsImNvb3JkIiwiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJjYW52YXNQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwidG9wIiwia2V5cyIsImxlZnRQcmVzc2VkIiwicmlnaHRQcmVzc2VkIiwiZSIsImtleUNvZGUiLCJhbGVydCIsInRvbWF0byIsIkltYWdlIiwic3JjIiwibGV0dHVjZSIsImJyZWFkIiwiaW5ncmVkaWVudHMiLCJmb29kQXJyIiwiRm9vZCIsIk1hdGgiLCJyYW5kb20iLCJyYWRpdXMiLCJjb3VudGVkIiwiaW5ncmVkaWVudCIsImZsb29yIiwibGVuZ3RoIiwiZHkiLCJkcmF3SW1hZ2UiLCJCcmVhZCIsImNvbnRhY3RlZCIsInN0YWNreCIsInN0YWNreSIsImkiLCJ0aGlzYnJlYWQiLCJoYW5kbGVGb29kIiwicHVzaCIsImRyYXciLCJ1cGRhdGUiLCJhbmltYXRlIiwiZmlsbFRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FBQ0csSUFBVixDQUFlUCxTQUFmO0FBQ0FJLFdBQVMsQ0FBQ0ksTUFBVjtBQUNBSCxZQUFVLEdBSk8sQ0FLakI7O0FBQ0FsRSxXQUFTO0FBQ1RMLEtBQUcsQ0FBQytCLFNBQUosR0FBZ0IsT0FBaEI7QUFDQS9CLEtBQUcsQ0FBQzRFLFFBQUosQ0FBYSxXQUFXeEUsS0FBeEIsRUFBK0IsRUFBL0IsRUFBbUMsRUFBbkM7QUFDQXlFLHVCQUFxQixDQUFDRixPQUFELENBQXJCO0FBQ0Q7O0FBQ0RBLE9BQU8sRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHN0aXRjaEFuZFlvZGEgZnJvbSBcIi4uL2ltYWdlcy95b2RhLXN0aXRjaC5qcGdcIjtcblxuLy8gZXhwb3J0IGNvbnN0IERPTUV4YW1wbGUgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHRlc3RPYmogPSB7XG4vLyAgICAga2V5MTogXCJoaVwiLFxuLy8gICAgIGtleTI6IHtcbi8vICAgICAgIGtleTM6IFwiSGVsbG9cIixcbi8vICAgICB9LFxuLy8gICB9O1xuXG4vLyAgIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XG4vLyAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImNlbnRlclwiKTtcbi8vICAgY29uc3QgcmFuZG9tQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIHJhbmRvbUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJyYW5kb1wiKTtcbi8vICAgY29uc3Qgd2lubmVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gICBjb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnRuXCIpO1xuLy8gICByYW5kb21CdXR0b24uaW5uZXJUZXh0ID0gXCJQaWNrIE1lIVwiO1xuLy8gICByYW5kb21DYXJkLmFwcGVuZChyYW5kb21CdXR0b24sIHdpbm5lclApO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChyYW5kb21DYXJkKTtcbi8vICAgcmFuZG9tQnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICB3aW5uZXJQLmlubmVySFRNTCA9IHJhbmRvbUpvYlNlZWtlcigpO1xuLy8gICB9O1xuLy8gICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiKTtcbi8vICAgY2FyZC5pbm5lckhUTUwgPSBgPGgyPiR7Z3JlZXRpbmd9IFdvcmxkITwvaDI+YDtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FyZCk7XG4vLyAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBpbWdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwiaW1hZ2UtY2FyZFwiKTtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdDYXJkKTtcbi8vICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4vLyAgIGltZ0VsZW1lbnQuc3JjID0gYnVpbGRBc3NldFBhdGgoc3RpdGNoQW5kWW9kYSk7XG4vLyAgIGltZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XG4vLyAgIGltZ0VsZW1lbnQuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuLy8gICBpbWdFbGVtZW50LnN0eWxlLmZpbHRlciA9IFwiZ3JheXNjYWxlKDgwJSlcIjtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbiAgXG4vLyB9O1xuXG4vLyAvLyB0byByZXNvbHZlIHBhdGggaXNzdWVzIGZvciBpbWFnZXMgaW4gSlNcblxuLy8gZnVuY3Rpb24gYnVpbGRBc3NldFBhdGgoaW1nU3JjKSB7XG4vLyAgIHJldHVybiBgLi9kaXN0LyR7aW1nU3JjfWA7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uICByYW5kb21Kb2JTZWVrZXIoKSB7XG4vLyAgIGxldCBqb2JTZWVrZXJzID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/XG4vLyAgICAgcmVxdWlyZSgnLi4vLi4vc2VjcmV0JykuSk9CU0VFS0VSUyA6XG4vLyAgICAgW1xuLy8gICAgICAgXCJBcnRodXIgRGVudFwiLFxuLy8gICAgICAgXCJGb3JkIFByZWZlY3RcIixcbi8vICAgICAgIFwiWmFwaG9kIEJlZWJsZWJyb3hcIixcbi8vICAgICAgIFwiTWFydmluIHRoZSBQYXJhbm9pZCBBbmRyb2lkXCIsXG4vLyAgICAgICBcIlRyaWxsaWFuXCIsXG4vLyAgICAgICBcIlNsYXJ0aWJhcnRmYXN0XCIsXG4vLyAgICAgXTtcbi8vICAgY29uc3Qgd2lubmVyID0gam9iU2Vla2Vyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBqb2JTZWVrZXJzLmxlbmd0aCldO1xuLy8gICByZXR1cm4gd2lubmVyO1xuLy8gfVxuXG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDUwMDtcblxubGV0IHNjb3JlID0gMDtcbmxldCBnYW1lRnJhbWUgPSAwO1xuY3R4LmZvbnQgPSBcIjUwcHggR2VvcmdpYVwiO1xuXG4vL01vdXNlIFN0dWZmXG5cbmNvbnN0IG1vdXNlID0ge1xuICAgIHg6IGNhbnZhcy53aWR0aC8yLFxuICAgIHk6IGNhbnZhcy5oZWlnaHQvMixcbiAgICBjbGljazogZmFsc2Vcbn1cblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbW91c2UueCA9IGV2ZW50Lng7XG4gICAgbW91c2UueSA9IGV2ZW50Lnk7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xufSk7XG4iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmNvb3JkcyA9IFsxMCwgMTAsIDE1MCwgMTAwXTtcbiAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBgZ3JlZW5gO1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC43NTtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIH1cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgfVxuICAvLyBkcmF3U3F1YXJlKCkge1xuICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgLy8gfVxuICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gIC8vIH1cblxuICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIC8vIH1cblxuICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAvLyB9XG4gIGNsZWFyQ2FudmFzKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuICBzZXRDb2xvcihjb2xvcikge1xuICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlO1xuIiwiY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgfVxuXG4gIGRyYXdTcXVhcmUoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gIH1cbiAgdXBkYXRlU3F1YXJlKGNvbG9yKSB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICB9XG5cbiAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90b21hdG8ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL3lvZGEtc3RpdGNoLmpwZ1wiO1xuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCBkcmF3QnJpY2sgZnJvbSAnLi9zY3JpcHRzL2JyaWNrJ1xuaW1wb3J0IHsgRE9NRXhhbXBsZSB9IGZyb20gXCIuL3NjcmlwdHMvRE9NRXhhbXBsZVwiO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9zY3JpcHRzL2JyaWNrXCI7XG5pbXBvcnQgdG9tYXRvcG5nIGZyb20gJy4vaW1hZ2VzL3RvbWF0by5wbmcnXG5cbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDUwMDtcblxubGV0IHNjb3JlID0gMDtcbmxldCBnYW1lRnJhbWUgPSAwO1xuY3R4LmZvbnQgPSBcIjUwcHggR2VvcmdpYVwiO1xuXG4vL01vdXNlIFN0dWZmXG5cbmxldCBjYW52YXNQb3MgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5jb25zb2xlLmxvZyhjYW52YXNQb3MpO1xuXG5jb25zdCBtb3VzZSA9IHtcbiAgeDogY2FudmFzLndpZHRoIC8gMixcbiAgeTogY2FudmFzLmhlaWdodCAvIDIsXG4gIGNsaWNrOiBmYWxzZVxufVxuXG5cblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICBtb3VzZS5jbGljayA9IHRydWU7XG4gIG1vdXNlLnggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gIG1vdXNlLnkgPSBldmVudC55IC0gY2FudmFzUG9zLnRvcDtcbiAgLy8gY29uc29sZS5sb2cobW91c2UueCwgbW91c2UueSlcbn0pO1xuXG5jb25zdCBrZXlzID0ge1xuICBsZWZ0UHJlc3NlZDogZmFsc2UsXG4gIHJpZ2h0UHJlc3NlZDogZmFsc2Vcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzODpcbiAgICAgIGFsZXJ0KCd1cCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOTpcbiAgICAgIGtleXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA6XG4gICAgICBhbGVydCgnZG93bicpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIGtleXMubGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzg6XG4gICAgICBhbGVydCgndXAnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzk6XG4gICAgICBrZXlzLnJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MDpcbiAgICAgIGFsZXJ0KCdkb3duJyk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbW91c2UuY2xpY2sgPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyhtb3VzZS54LCBtb3VzZS55KVxufSk7XG5cblxuLy9mb29kXG5jb25zdCB0b21hdG8gPSBuZXcgSW1hZ2UoKTtcbnRvbWF0by5zcmMgPSAnLi9kaXN0L2ltYWdlcy90b21hdG8ucG5nJ1xuY29uc3QgbGV0dHVjZSA9IG5ldyBJbWFnZSgpOyBcbmxldHR1Y2Uuc3JjID0gJy4vZGlzdC9pbWFnZXMvbGV0dHVjZS5wbmcnXG5jb25zdCBicmVhZCA9IG5ldyBJbWFnZSgpO1xuYnJlYWQuc3JjID0gJy4vZGlzdC9pbWFnZXMvYnJlYWQucG5nJ1xuY29uc3QgaW5ncmVkaWVudHMgPSBbdG9tYXRvLCBsZXR0dWNlXVxuXG5cbmNvbnN0IGZvb2RBcnIgPSBbXTtcbmNsYXNzIEZvb2Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgIHRoaXMueSA9IC0xMDA7XG4gICAgdGhpcy5yYWRpdXMgPSA1MDtcbiAgICB0aGlzLmNvdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZ3JlZGllbnQgPSBpbmdyZWRpZW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbmdyZWRpZW50cy5sZW5ndGgpXVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGR5ID0gY2FudmFzLmhlaWdodCsxMDA7XG4gICAgaWYgKGR5ICE9IHRoaXMueSkge1xuICAgICAgdGhpcy55ICs9IDU7XG4gICAgfVxuICB9XG4gIFxuICBkcmF3KCkge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCB0aGlzLngsIHRoaXMueSwgMjUwLCAyNTApOyBcbiAgfVxuXG59XG5cblxuXG5jbGFzcyBCcmVhZHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodC0xMDA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoLzI7XG5cblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmIChrZXlzLmxlZnRQcmVzc2VkICYmICh0aGlzLnggIT09IDApKSB7XG4gICAgICB0aGlzLnggLT0gNTtcbiAgICB9XG4gICAgaWYgKGtleXMucmlnaHRQcmVzc2VkICYmICh0aGlzLnggIT09IGNhbnZhcy53aWR0aCkpIHtcbiAgICAgIHRoaXMueCArPSA1O1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGFjdGVkKSB7XG4gICAgbGV0IHN0YWNreCA9IHRoaXMueDtcbiAgICBsZXQgc3RhY2t5ID0gdGhpcy55IC0gMjA7XG4gICAgY3R4LmRyYXdJbWFnZShicmVhZCwgMCwgMCwgMTAwMCwgMTAwMCwgdGhpcy54LCB0aGlzLnksIDMwMCwgMzAwKTtcbiAgICBpZiAoY29udGFjdGVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGNvbnRhY3RlZFtpXS5pbmdyZWRpZW50LCAwLCAwLCAxMDAwLCAxMDAwLCBzdGFja3gsIHN0YWNreSwgMjUwLCAyNTApO1xuICAgICAgICBzdGFja3kgPSBzdGFja3kgLSAyMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdGhpc2JyZWFkID0gbmV3IEJyZWFkKCk7XG5jb25zdCBjb250YWN0ZWQgPSBbXTtcblxuZnVuY3Rpb24gaGFuZGxlRm9vZCgpIHtcbiAgaWYgKGdhbWVGcmFtZSAlIDIwMCA9PSAwKSB7XG4gICAgZm9vZEFyci5wdXNoKG5ldyBGb29kKCkpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZEFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmICgoZm9vZEFycltpXS55ID09PSB0aGlzYnJlYWQueSkgJiYgKGZvb2RBcnJbaV0ueCA+IHRoaXNicmVhZC54IC0gNTAgJiYgZm9vZEFycltpXS54IDwgdGhpc2JyZWFkLnggKyA1MCkpIHtcbiAgICAgIGlmICghZm9vZEFycltpXS5jb3VudGVkKSB7XG4gICAgICAgIHNjb3JlICs9IDE7XG4gICAgICB9XG4gICAgICBjb250YWN0ZWQucHVzaChmb29kQXJyW2ldKTtcbiAgICAgIGZvb2RBcnJbaV0uY291bnRlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpc2JyZWFkLmRyYXcoY29udGFjdGVkKTtcblxuICAgIGZvb2RBcnJbaV0udXBkYXRlKCk7XG4gICAgZm9vZEFycltpXS5kcmF3KCk7XG5cbiAgfVxuXG4gIFxufVxuLy9hbmltYXRpb24gXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIHRoaXNicmVhZC5kcmF3KGNvbnRhY3RlZCk7XG4gIHRoaXNicmVhZC51cGRhdGUoKTtcbiAgaGFuZGxlRm9vZCgpO1xuICAvLyBmb29kLnVwZGF0ZSgpO1xuICBnYW1lRnJhbWUrKztcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgY3R4LmZpbGxUZXh0KFwic2NvcmU6XCIgKyBzY29yZSwgMTAsIDUwKVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5hbmltYXRlKCk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==