webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const homePanelsArr = [{
    arrayIndex: 0,
    title: "Dry Needling",
    image: "images/acu-image.jpg",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    breakClass: "col-xs-12 home-hr-1",
    listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
},
    {
        arrayIndex: 1,
        title: "Acupuncture Services",
        image: "images/acupuncture.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12 home-hr-2",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    },
    {
        arrayIndex: 2,
        title: "Herbal Medicine",
        image: "images/herbal-img.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12 home-hr-3 home-hr-1",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    },
    {
        arrayIndex: 3,
        title: "Energy Field Diagnosis",
        image: "images/energy-field.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12 home-hr-2",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    },
    {
        arrayIndex: 4,
        title: "Nutritional Counseling",
        image: "images/nutrition.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12 home-hr-1",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    },
    {
        arrayIndex: 5,
        title: "General Medicine",
        image: "images/acupuncture.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    }];

    /* harmony default export */ __webpack_exports__["default"] = (homePanelsArr);

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

var _bio = __webpack_require__(66);

var _bio2 = _interopRequireDefault(_bio);

var _Modal = __webpack_require__(64);

var _Modal2 = _interopRequireDefault(_Modal);

var _Home = __webpack_require__(63);

var _Home2 = _interopRequireDefault(_Home);

var _NavBar = __webpack_require__(65);

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalSwitch = function (_React$Component) {
    _inherits(ModalSwitch, _React$Component);

    function ModalSwitch(props) {
        _classCallCheck(this, ModalSwitch);

        var _this = _possibleConstructorReturn(this, (ModalSwitch.__proto__ || Object.getPrototypeOf(ModalSwitch)).call(this, props));

        _this.previousLocation = _this.props.location;

        return _this;
    }

    _createClass(ModalSwitch, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            var location = this.props.location;

            if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
                this.previousLocation = this.props.location;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var location = this.props;
            var isModal = location.state && location.state.modal && this.previousLocation !== location;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    { location: isModal ? this.previousLocation : location },
                    _react2.default.createElement(_NavBar2.default, null),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/home', component: _Home2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/bio', component: _bio2.default })
                ),
                isModal ? _react2.default.createElement(_reactRouterDom.Route, { path: '/subjects/:id', component: _Modal2.default }) : null
            );
        }
    }]);

    return ModalSwitch;
}(_react2.default.Component);

exports.default = ModalSwitch;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Home = __webpack_require__(63);

var _Home2 = _interopRequireDefault(_Home);

var _NavBar = __webpack_require__(65);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _bio = __webpack_require__(66);

var _bio2 = _interopRequireDefault(_bio);

var _Modal = __webpack_require__(64);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalSwitch = __webpack_require__(103);

var _ModalSwitch2 = _interopRequireDefault(_ModalSwitch);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(40);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoutedApp = function RoutedApp() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_NavBar2.default, null),
            _react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: '/home' }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/home', component: _Home2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/bio', component: _bio2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/subjects/:id', component: _Modal2.default })
        )
    );
};

_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), document.getElementById('app'));

if (false) {
    module.hot.accept();
}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(39);

var _reactRouterDom = __webpack_require__(17);

var _querystring = __webpack_require__(74);

var _querystring2 = _interopRequireDefault(_querystring);

var _homePanelsArr = __webpack_require__(102);

var _homePanelsArr2 = _interopRequireDefault(_homePanelsArr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(HomeJumbo, null),
                _react2.default.createElement(HomeMessage, null),
                _react2.default.createElement(HomeBreakBar, { elemClass: 'col-xs-12' }),
                _react2.default.createElement(HomeContent /*arr={homePanelsArr}*/, null)
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

var HomeJumbo = function (_React$Component2) {
    _inherits(HomeJumbo, _React$Component2);

    function HomeJumbo() {
        _classCallCheck(this, HomeJumbo);

        return _possibleConstructorReturn(this, (HomeJumbo.__proto__ || Object.getPrototypeOf(HomeJumbo)).apply(this, arguments));
    }

    _createClass(HomeJumbo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'jumbotron', id: 'jumbotron' },
                _react2.default.createElement('div', { className: 'container jumbo-div' })
            );
        }
    }]);

    return HomeJumbo;
}(_react2.default.Component);

var HomeMessage = function (_React$Component3) {
    _inherits(HomeMessage, _React$Component3);

    function HomeMessage() {
        _classCallCheck(this, HomeMessage);

        return _possibleConstructorReturn(this, (HomeMessage.__proto__ || Object.getPrototypeOf(HomeMessage)).apply(this, arguments));
    }

    _createClass(HomeMessage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'col-xs-12' },
                _react2.default.createElement(
                    'h2',
                    { className: '' },
                    'Welcome to our clinic'
                ),
                _react2.default.createElement(
                    'p',
                    { className: '' },
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
                )
            );
        }
    }]);

    return HomeMessage;
}(_react2.default.Component);

var HomeBreakBar = function (_React$Component4) {
    _inherits(HomeBreakBar, _React$Component4);

    function HomeBreakBar() {
        _classCallCheck(this, HomeBreakBar);

        return _possibleConstructorReturn(this, (HomeBreakBar.__proto__ || Object.getPrototypeOf(HomeBreakBar)).apply(this, arguments));
    }

    _createClass(HomeBreakBar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.props.elemClass },
                _react2.default.createElement('hr', null)
            );
        }
    }]);

    return HomeBreakBar;
}(_react2.default.Component);

var HomeContent = function (_React$Component5) {
    _inherits(HomeContent, _React$Component5);

    function HomeContent(props) {
        _classCallCheck(this, HomeContent);

        var _this5 = _possibleConstructorReturn(this, (HomeContent.__proto__ || Object.getPrototypeOf(HomeContent)).call(this, props));

        _this5.state = {
            homeArr: [],
            panelClass: "col-xs-12 col-sm-6 col-md-4 home-section"
        };

        _this5.homeSectionWidth = _this5.homeSectionWidth.bind(_this5);

        return _this5;
    }

    _createClass(HomeContent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadData();
            var mql = window.matchMedia("screen and (min-width: 480px) and (orientation: landscape)");
            this.homeSectionWidth(mql);
            mql.addListener(this.homeSectionWidth);
        }
    }, {
        key: 'loadData',
        value: function loadData() {
            // fetch('/api/homeData').then(response => {
            //     if(response.ok){
            //         response.json().then(data =>{
            //             console.log("total count of records:", data._metadata.total_count);
            //             console.log(data.records[0]._id);
            //             this.setState({homeArr: data.records});
            //         });
            //     }else{
            //         response.json().then(error =>{
            //             alert("Failed to fetch home content:" + error.message);
            //         });
            //     }
            // }).catch(err =>{
            //     alert("Error in fetching data from server:", err);
            // });
            this.setState({ homeArr: _homePanelsArr2.default });
        }
    }, {
        key: 'homeSectionWidth',
        value: function homeSectionWidth(mql) {
            if (mql.matches) {
                // if media query matches
                this.setState({
                    panelClass: 'col-xs-6 col-sm-6 col-md-4 home-section'
                });
            } else {
                this.setState({
                    panelClass: "col-xs-12 col-sm-6 col-md-4 home-section"
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var homePanels = this.state.homeArr.map(function (item) {
                return _react2.default.createElement(HomePanel, { key: item.title, title: item.title, image: item.image,
                    text: item.text, panelList: item.listText,
                    panelClass: _this6.state.panelClass, breakClass: item.breakClass,
                    arrayIndex: item.arrayIndex, urlParam: item.urlParam });
            });
            return _react2.default.createElement(
                'div',
                null,
                homePanels
            );
        }
    }]);

    return HomeContent;
}(_react2.default.Component);

var HomePanel = function (_React$Component6) {
    _inherits(HomePanel, _React$Component6);

    function HomePanel() {
        _classCallCheck(this, HomePanel);

        return _possibleConstructorReturn(this, (HomePanel.__proto__ || Object.getPrototypeOf(HomePanel)).apply(this, arguments));
    }

    _createClass(HomePanel, [{
        key: 'render',
        value: function render() {
            var bottomUlStyle = {
                marginTop: 25,
                padding: 0,

                color: "white",
                listStyleType: "none",
                fontWeight: "bold"

            };
            var bottomLiStyle = {
                border: "none",
                backgroundColor: "black",
                textAlign: "center",
                padding: 0
            };

            var panelList = this.props.panelList.map(function (item) {
                return _react2.default.createElement(HomePanelList, { key: item.id, text: item.text });
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: this.props.panelClass },
                    _react2.default.createElement(
                        'h3',
                        { className: 'home-section-title' },
                        this.props.title
                    ),
                    _react2.default.createElement('img', { className: 'home-section-img img-responsive', src: this.props.image, alt: 'calming image' }),
                    _react2.default.createElement(
                        'p',
                        { className: '' },
                        this.props.text
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        panelList
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-12', style: bottomUlStyle },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: { pathname: "/subjects/" + this.props.urlParam, search: '?arrayIndex=' + this.props.arrayIndex, state: { modal: true } }, className: 'col-xs-3', style: bottomLiStyle },
                            'more...'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'col-xs-4 col-xs-offset-1', style: bottomLiStyle },
                            'appointments'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'col-xs-3 col-xs-offset-1', style: bottomLiStyle },
                            'contact'
                        )
                    )
                ),
                _react2.default.createElement(HomeBreakBar, { elemClass: this.props.breakClass })
            );
        }
    }]);

    return HomePanel;
}(_react2.default.Component);

var HomePanelList = function (_React$Component7) {
    _inherits(HomePanelList, _React$Component7);

    function HomePanelList() {
        _classCallCheck(this, HomePanelList);

        return _possibleConstructorReturn(this, (HomePanelList.__proto__ || Object.getPrototypeOf(HomePanelList)).apply(this, arguments));
    }

    _createClass(HomePanelList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                null,
                this.props.text
            );
        }
    }]);

    return HomePanelList;
}(_react2.default.Component);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

var _querystring = __webpack_require__(74);

var _querystring2 = _interopRequireDefault(_querystring);

__webpack_require__(39);

var _homePanelsArr = __webpack_require__(102);

var _homePanelsArr2 = _interopRequireDefault(_homePanelsArr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = { modalData: [] };
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: 'loadData',
        value: function loadData() {
            var query = this.props.location.search.slice(1);
            var subjectQuery = _querystring2.default.parse(query);
            var subjectIndex = subjectQuery.arrayIndex;

            // fetch('/api/homeData').then(response =>{
            //     if(response.ok){
            //         response.json().then(data =>{
            //             this.setState({modalData: data.records[subjectIndex]});
            //             console.log(this.state.modalData);
            //         });
            //     }else{
            //         response.json().then(error =>{
            //             alert("Failed to fetch home content:" + error.message);
            //         });
            //     }
            // }).catch(err =>{
            //     alert("Error in fetching data from server:", err);
            // });

            this.setState({ modalData: _homePanelsArr2.default[subjectIndex] });
        }
    }, {
        key: 'render',
        value: function render() {
            //let query = this.props.location.search.slice(1);
            //let subjectQuery = querystring.parse(query);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    this.state.modalData.title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.state.modalData.modalText
                )
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

exports.default = Modal;


var ModalContent = function ModalContent(history) {
    var back = function back(e) {
        e.stopPropagation();
        history.goBack();
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            undefined.props.title
        ),
        _react2.default.createElement(
            'p',
            null,
            undefined.props.text
        ),
        _react2.default.createElement('button', { type: 'button', onClick: back })
    );
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavButton = function (_React$Component) {
    _inherits(NavButton, _React$Component);

    function NavButton() {
        _classCallCheck(this, NavButton);

        return _possibleConstructorReturn(this, (NavButton.__proto__ || Object.getPrototypeOf(NavButton)).apply(this, arguments));
    }

    _createClass(NavButton, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { onClick: this.props.buttonHandler, type: 'button', className: 'navbar-toggle collapsed', 'aria-expanded': 'false', id: 'menu-button' },
                _react2.default.createElement(
                    'span',
                    { className: 'sr-only' },
                    'Toggle navigation'
                ),
                _react2.default.createElement('span', { className: 'icon-bar' }),
                _react2.default.createElement('span', { className: 'icon-bar' }),
                _react2.default.createElement('span', { className: 'icon-bar' })
            );
        }
    }]);

    return NavButton;
}(_react2.default.Component);

var NavTitle = function NavTitle(props) {
    return _react2.default.createElement(
        'a',
        { className: 'navbar-brand', href: '#' },
        'Jamie Hampton DAOM LAc'
    );
};

var CollapsibleNav = function CollapsibleNav(props) {
    return _react2.default.createElement(
        'div',
        { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
        _react2.default.createElement(
            'ul',
            { className: 'nav navbar-right navbar-nav' },
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    'Home'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/bio' },
                    'About Dr Hampton'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    'Link'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    'Link'
                )
            )
        )
    );
};

var NavbarCombined = function (_React$Component2) {
    _inherits(NavbarCombined, _React$Component2);

    function NavbarCombined() {
        _classCallCheck(this, NavbarCombined);

        return _possibleConstructorReturn(this, (NavbarCombined.__proto__ || Object.getPrototypeOf(NavbarCombined)).apply(this, arguments));
    }

    _createClass(NavbarCombined, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default' },
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar-header' },
                        _react2.default.createElement(NavButton, { buttonHandler: this.props.buttonHandler }),
                        _react2.default.createElement(NavTitle, null)
                    ),
                    _react2.default.createElement(CollapsibleNav, null)
                )
            );
        }
    }]);

    return NavbarCombined;
}(_react2.default.Component);

var MobileNav = function (_React$Component3) {
    _inherits(MobileNav, _React$Component3);

    function MobileNav() {
        _classCallCheck(this, MobileNav);

        return _possibleConstructorReturn(this, (MobileNav.__proto__ || Object.getPrototypeOf(MobileNav)).apply(this, arguments));
    }

    _createClass(MobileNav, [{
        key: 'render',
        value: function render() {
            var navMargin = this.props.navMargin;
            var mobileNavStyle = {
                marginLeft: navMargin + 'vw'
            };
            return _react2.default.createElement(
                'div',
                { className: 'mobile-nav-link-container', id: 'mobile-nav-link-container', style: mobileNavStyle },
                _react2.default.createElement(
                    'ul',
                    { className: 'nav navbar-nav' },
                    _react2.default.createElement(
                        'li',
                        { className: 'normal-link ' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' },
                            'Home'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'normal-link ' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/bio' },
                            'About Dr Hampton'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'normal-link ' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' },
                            'Link'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'normal-link ' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' },
                            'Link'
                        )
                    )
                )
            );
        }
    }]);

    return MobileNav;
}(_react2.default.Component);

var NavBar = function (_React$Component4) {
    _inherits(NavBar, _React$Component4);

    function NavBar(props) {
        _classCallCheck(this, NavBar);

        var _this4 = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

        _this4.state = {
            navDisplayed: false,
            navMoving: true,
            navMargin: -51
        };
        _this4.mobileNavHandler = _this4.mobileNavHandler.bind(_this4);
        _this4.displayMobileMenu = _this4.displayMobileMenu.bind(_this4);
        _this4.hideMobileMenu = _this4.hideMobileMenu.bind(_this4);
        return _this4;
    }

    _createClass(NavBar, [{
        key: 'displayMobileMenu',
        value: function displayMobileMenu() {
            var displayed = this.state.navDisplayed;
            var navMargin = this.state.navMargin;
            if (displayed == false) {
                this.setState({
                    navMargin: this.state.navMargin + 3
                });
                requestAnimationFrame(this.displayMobileMenu);
            }
            if (navMargin >= 0) {
                this.setState({
                    navDisplayed: true
                });
            }
        }
    }, {
        key: 'hideMobileMenu',
        value: function hideMobileMenu() {
            var displayed = this.state.navDisplayed;
            var navMargin = this.state.navMargin;
            if (displayed == true) {
                this.setState({
                    navMargin: this.state.navMargin - 3
                });
                requestAnimationFrame(this.hideMobileMenu);
            }
            if (navMargin <= -48) {
                this.setState({
                    navDisplayed: false
                });
            }
        }
    }, {
        key: 'mobileNavHandler',
        value: function mobileNavHandler(e) {
            var navDisplayed = this.state.navDisplayed;
            if (navDisplayed == false) {
                requestAnimationFrame(this.displayMobileMenu);
            } else {
                requestAnimationFrame(this.hideMobileMenu);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(NavbarCombined, { buttonHandler: this.mobileNavHandler }),
                _react2.default.createElement(MobileNav, { navMargin: this.state.navMargin })
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

exports.default = NavBar;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BioSection = function (_React$Component) {
    _inherits(BioSection, _React$Component);

    function BioSection() {
        _classCallCheck(this, BioSection);

        return _possibleConstructorReturn(this, (BioSection.__proto__ || Object.getPrototypeOf(BioSection)).apply(this, arguments));
    }

    _createClass(BioSection, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "col-xs-12" },
                    _react2.default.createElement(
                        "h3",
                        null,
                        "Dr Hampton"
                    ),
                    _react2.default.createElement("img", { className: "img-responsive staff-img", src: "images/dr-jamie-hampton2.jpg" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-xs-12" },
                    _react2.default.createElement("hr", null)
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-xs-12" },
                    _react2.default.createElement(
                        "p",
                        { className: "article-text" },
                        "Dr. Hampton specializes in Myofascial Trigger Point Acupuncture (Dry Needling) for complex orthopedic issues including Pelvic Floor Acupuncture. She is the bay area\u2019s leading expert in acupuncture care for Pelvic Floor pain."
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "article-text" },
                        "She is a passionate advocate for the use of Chinese Medicine and acupuncture as a preventative method to achieve and maintain ongoing health and wellness."
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "article-text" },
                        "Dr. Hampton\u2019s goal is to help her patients live a full and healthy life. She believes in the power of Traditional Chinese Medicine, positive thinking, and happiness. She lives in beautiful North Berkeley, California with her husband and son. She enjoys travel, reading, cooking, fine dining, and learning foreign languages, and she thinks that every day is a blessing."
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-xs-12" },
                    _react2.default.createElement("hr", null)
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-xs-12" },
                    _react2.default.createElement(
                        "h4",
                        { className: "headline" },
                        "Education and Training"
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "article-list" },
                        _react2.default.createElement(
                            "li",
                            { className: "article-text" },
                            "Doctorate Degree in Acupuncture and Oriental Medicine, American College of Traditional Chinese Medicine (ACTCM), emphasis on Women\u2019s Primary Care and Pain Management."
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "article-text" },
                            "Master of Sciences in Chinese Medicine, ACTCM."
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "article-text" },
                            "Bachelor of Arts in Anthropology, University of Cincinnati."
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "article-text" },
                            "Residency in Gynecology and Pain Management at Yue Yang Hospital in Shanghai, China."
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "article-text" },
                            "Research at Brigham and Women\u2019s Hospital in Boston, Massachusetts working with a cardiology team on an NIH funded clinical trial."
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "article-text" },
                            "Internships with California Pacific Medical Center, Haight Ashbury Free Clinic, The Women\u2019s Community Clinic, San Francisco."
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "article-text" },
                            "Faculty at Alameda County Health Services (Highland Hospital, University of California San Francisco Teaching affiliate)."
                        ),
                        _react2.default.createElement(
                            "li",
                            { className: "article-text" },
                            "Faculty at Acupuncture and Integrative Medical College (AIMC) Berkeley, CA."
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-xs-12" },
                    _react2.default.createElement("hr", null)
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-xs-12" },
                    _react2.default.createElement(
                        "p",
                        { className: "article-text" },
                        "Dr. Hampton is a licensed Acupuncturist in California and a Diplomate of Oriental Medicine through the National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM)."
                    )
                )
            );
        }
    }]);

    return BioSection;
}(_react2.default.Component);

exports.default = BioSection;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(125);
exports.encode = exports.stringify = __webpack_require__(126);


/***/ })

},[104]);