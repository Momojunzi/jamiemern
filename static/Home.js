"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(HomeJumbo, null),
                React.createElement(HomeMessage, null),
                React.createElement(HomeBreakBar, { elemClass: "col-xs-12" }),
                React.createElement(HomeContent /*arr={homePanelsArr}*/, null)
            );
        }
    }]);

    return Home;
}(React.Component);

exports.default = Home;

var HomeJumbo = function (_React$Component2) {
    _inherits(HomeJumbo, _React$Component2);

    function HomeJumbo() {
        _classCallCheck(this, HomeJumbo);

        return _possibleConstructorReturn(this, (HomeJumbo.__proto__ || Object.getPrototypeOf(HomeJumbo)).apply(this, arguments));
    }

    _createClass(HomeJumbo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "jumbotron", id: "jumbotron" },
                React.createElement("div", { className: "container jumbo-div" })
            );
        }
    }]);

    return HomeJumbo;
}(React.Component);

var HomeMessage = function (_React$Component3) {
    _inherits(HomeMessage, _React$Component3);

    function HomeMessage() {
        _classCallCheck(this, HomeMessage);

        return _possibleConstructorReturn(this, (HomeMessage.__proto__ || Object.getPrototypeOf(HomeMessage)).apply(this, arguments));
    }

    _createClass(HomeMessage, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "col-xs-12" },
                React.createElement(
                    "h2",
                    { className: "" },
                    "Welcome to our clinic"
                ),
                React.createElement(
                    "p",
                    { className: "" },
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate"
                )
            );
        }
    }]);

    return HomeMessage;
}(React.Component);

var HomeBreakBar = function (_React$Component4) {
    _inherits(HomeBreakBar, _React$Component4);

    function HomeBreakBar() {
        _classCallCheck(this, HomeBreakBar);

        return _possibleConstructorReturn(this, (HomeBreakBar.__proto__ || Object.getPrototypeOf(HomeBreakBar)).apply(this, arguments));
    }

    _createClass(HomeBreakBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: this.props.elemClass },
                React.createElement("hr", null)
            );
        }
    }]);

    return HomeBreakBar;
}(React.Component);

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
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadData();
            var mql = window.matchMedia("screen and (min-width: 480px) and (orientation: landscape)");
            this.homeSectionWidth(mql);
            mql.addListener(this.homeSectionWidth);
        }
    }, {
        key: "loadData",
        value: function loadData() {
            var _this6 = this;

            fetch('/api/homeData').then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log("total count of records:", data._metadata.total_count);
                        console.log(data.records[0]._id);
                        _this6.setState({ homeArr: data.records });
                    });
                } else {
                    response.json().then(function (error) {
                        alert("Failed to fetch home content:" + error.message);
                    });
                }
            }).catch(function (err) {
                alert("Error in fetching data from server:", err);
            });
        }
    }, {
        key: "homeSectionWidth",
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
        key: "render",
        value: function render() {
            var _this7 = this;

            var homePanels = this.state.homeArr.map(function (item) {
                return React.createElement(HomePanel, { key: item.title, title: item.title, image: item.image,
                    text: item.text, panelList: item.listText,
                    panelClass: _this7.state.panelClass, breakClass: item.breakClass });
            });
            return React.createElement(
                "div",
                null,
                homePanels
            );
        }
    }]);

    return HomeContent;
}(React.Component);

var HomePanel = function (_React$Component6) {
    _inherits(HomePanel, _React$Component6);

    function HomePanel() {
        _classCallCheck(this, HomePanel);

        return _possibleConstructorReturn(this, (HomePanel.__proto__ || Object.getPrototypeOf(HomePanel)).apply(this, arguments));
    }

    _createClass(HomePanel, [{
        key: "render",
        value: function render() {
            var panelList = this.props.panelList.map(function (item) {
                return React.createElement(HomePanelList, { key: item.id, text: item.text });
            });
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: this.props.panelClass },
                    React.createElement(
                        "h3",
                        { className: "home-section-title" },
                        this.props.title
                    ),
                    React.createElement("img", { className: "home-section-img img-responsive", src: this.props.image, alt: "calming image" }),
                    React.createElement(
                        "p",
                        { className: "" },
                        this.props.text
                    ),
                    React.createElement(
                        "ul",
                        null,
                        panelList
                    )
                ),
                React.createElement(HomeBreakBar, { elemClass: this.props.breakClass })
            );
        }
    }]);

    return HomePanel;
}(React.Component);

var HomePanelList = function (_React$Component7) {
    _inherits(HomePanelList, _React$Component7);

    function HomePanelList() {
        _classCallCheck(this, HomePanelList);

        return _possibleConstructorReturn(this, (HomePanelList.__proto__ || Object.getPrototypeOf(HomePanelList)).apply(this, arguments));
    }

    _createClass(HomePanelList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.text
            );
        }
    }]);

    return HomePanelList;
}(React.Component);