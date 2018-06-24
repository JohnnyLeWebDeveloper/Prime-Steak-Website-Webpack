webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _TopImage = __webpack_require__(10);

var _TopImage2 = _interopRequireDefault(_TopImage);

var _OurStory = __webpack_require__(6);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(9);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(7);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(8);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImage2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions })
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)("section", { id: "contact-us" });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Party Platters"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Rewards"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        )
      )
    )
  );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "our-story" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking Is The Art Of Adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eaque vel temporibus asperiores laborum repellat ipsa ullam at explicabo repudiandae!"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best Steakhouse in town.\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Loyal Customer"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-button" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-image" })
        )
      )
    )
  );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "random-quote" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "Simple ingredients prepared in a simple way - that's the best way to take your everyday cooking to a higher level."
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- Chef Rachael Lindsay -"
      )
    )
  );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-image" },
            (0, _hyperapp.h)("img", { src: "#", alt: "Chef Image" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "food-details" },
            "REVIEWS"
          ),
          (0, _hyperapp.h)(
            "h2",
            { "class": "food-network" },
            "The Food Network"
          ),
          (0, _hyperapp.h)(
            "h4",
            null,
            "Best restaurant in Atlanta!"
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "review-paragraph" },
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ex pariatur necessitatibus labore ab, fugiat sint quo eveniet aliquam eaque!"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "author" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "John William"
            ),
            " - Winner of the 2018 James Beard Award Chef -"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left" }),
            (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right ready" })
          )
        )
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "special-menu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "special-menu-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavors"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-image" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Super BBQ Grill"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "food-details" },
              "Fried Eggs, Steak, Baked Potato or French Fries. Side of vegetables."
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-image2" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Classic Burger With Fries"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "food-details" },
              "Our thick 'n hearty burger on a toasted bakery bun. Served with lettuce, tomato, onion and pickles. Served with classic fries."
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-image3" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Delicious Chocolate Cake"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "food-details" },
              "A variety of assorted desserts are available for the sweet tooth."
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "javascript:fullMenuComingSoon();", "class": "link" },
        "View Our Full Menu"
      )
    )
  );
}

function fullMenuComingSoon() {
  alert("Full Menu is coming soon!");
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Top;

var _hyperapp = __webpack_require__(0);

function Top(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "top-image" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "introduction-title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome to"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          "Prime Steak",
          (0, _hyperapp.h)("br", null),
          "Restaurant"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "container" },
        (0, _hyperapp.h)(
          "div",
          { "class": "contact-info" },
          (0, _hyperapp.h)(
            "div",
            { "class": "book-reservation" },
            "Book Reservation Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "123-123-1234"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours-of-operation" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Monday - Friday: "
            ),
            " 9AM - 11PM EST",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Saturday - Sunday: "
            ),
            " 9AM - 11PM EST"
          )
        )
      )
    )
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[11]);