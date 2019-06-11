'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Home = require('./Home.js');

var _Home2 = _interopRequireDefault(_Home);

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
            return React.createElement(
                'button',
                { onClick: this.props.buttonHandler, type: 'button', className: 'navbar-toggle collapsed', 'aria-expanded': 'false', id: 'menu-button' },
                React.createElement(
                    'span',
                    { className: 'sr-only' },
                    'Toggle navigation'
                ),
                React.createElement('span', { className: 'icon-bar' }),
                React.createElement('span', { className: 'icon-bar' }),
                React.createElement('span', { className: 'icon-bar' })
            );
        }
    }]);

    return NavButton;
}(React.Component);

var NavTitle = function (_React$Component2) {
    _inherits(NavTitle, _React$Component2);

    function NavTitle() {
        _classCallCheck(this, NavTitle);

        return _possibleConstructorReturn(this, (NavTitle.__proto__ || Object.getPrototypeOf(NavTitle)).apply(this, arguments));
    }

    _createClass(NavTitle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'a',
                { className: 'navbar-brand', href: '#' },
                'Jamie Hampton DAOM LAc'
            );
        }
    }]);

    return NavTitle;
}(React.Component);

var CollapsibleNav = function (_React$Component3) {
    _inherits(CollapsibleNav, _React$Component3);

    function CollapsibleNav() {
        _classCallCheck(this, CollapsibleNav);

        return _possibleConstructorReturn(this, (CollapsibleNav.__proto__ || Object.getPrototypeOf(CollapsibleNav)).apply(this, arguments));
    }

    _createClass(CollapsibleNav, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
                React.createElement(
                    'ul',
                    { className: 'nav navbar-right navbar-nav' },
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#/' },
                            'Home'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#staff' },
                            'About Dr Hampton'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#' },
                            'Link'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#' },
                            'Link'
                        )
                    )
                )
            );
        }
    }]);

    return CollapsibleNav;
}(React.Component);

var NavbarCombined = function (_React$Component4) {
    _inherits(NavbarCombined, _React$Component4);

    function NavbarCombined() {
        _classCallCheck(this, NavbarCombined);

        return _possibleConstructorReturn(this, (NavbarCombined.__proto__ || Object.getPrototypeOf(NavbarCombined)).apply(this, arguments));
    }

    _createClass(NavbarCombined, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'nav',
                { className: 'navbar navbar-default' },
                React.createElement(
                    'div',
                    { className: 'container-fluid' },
                    React.createElement(
                        'div',
                        { className: 'navbar-header' },
                        React.createElement(NavButton, { buttonHandler: this.props.buttonHandler }),
                        React.createElement(NavTitle, null)
                    ),
                    React.createElement(CollapsibleNav, null)
                )
            );
        }
    }]);

    return NavbarCombined;
}(React.Component);

var MobileNav = function (_React$Component5) {
    _inherits(MobileNav, _React$Component5);

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
            return React.createElement(
                'div',
                { className: 'mobile-nav-link-container', id: 'mobile-nav-link-container', style: mobileNavStyle },
                React.createElement(
                    'ul',
                    { className: 'nav navbar-nav' },
                    React.createElement(
                        'li',
                        { className: 'normal-link ' },
                        React.createElement(
                            'a',
                            { href: '#/' },
                            'Home'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'normal-link ' },
                        React.createElement(
                            'a',
                            { href: '#staff' },
                            'About Dr Hampton'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'normal-link ' },
                        React.createElement(
                            'a',
                            { href: '#' },
                            'Link'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'normal-link ' },
                        React.createElement(
                            'a',
                            { href: '#' },
                            'Link'
                        )
                    )
                )
            );
        }
    }]);

    return MobileNav;
}(React.Component);

var NavBar = function (_React$Component6) {
    _inherits(NavBar, _React$Component6);

    function NavBar(props) {
        _classCallCheck(this, NavBar);

        var _this6 = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

        _this6.state = {
            navDisplayed: false,
            navMoving: true,
            navMargin: -51
        };
        _this6.mobileNavHandler = _this6.mobileNavHandler.bind(_this6);
        _this6.displayMobileMenu = _this6.displayMobileMenu.bind(_this6);
        _this6.hideMobileMenu = _this6.hideMobileMenu.bind(_this6);
        return _this6;
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
            return React.createElement(
                'header',
                null,
                React.createElement(NavbarCombined, { buttonHandler: this.mobileNavHandler }),
                React.createElement(MobileNav, { navMargin: this.state.navMargin })
            );
        }
    }]);

    return NavBar;
}(React.Component);

var App = function (_React$Component7) {
    _inherits(App, _React$Component7);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(NavBar, null),
                React.createElement(_Home2.default, null)
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));