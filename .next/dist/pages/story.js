'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _CommentTree = require('../components/CommentTree');

var _CommentTree2 = _interopRequireDefault(_CommentTree);

var _error = require('next/dist/lib/error.js');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/e.bashtan/projects/bear/pwa-react/pages/story.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            var story = this.props.story;

            if (typeof story === 'undefined' || !story) return _react2.default.createElement(_error2.default, { statusCode: 503, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            });

            return _react2.default.createElement(_Layout2.default, { title: story.title, showBack: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('main', {
                className: 'jsx-408339018',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('h1', {
                className: 'jsx-408339018',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('a', { href: story.url, className: 'jsx-408339018',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, story.title)), _react2.default.createElement('div', {
                className: 'jsx-408339018' + ' ' + 'storyDetails',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('strong', {
                className: 'jsx-408339018',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, story.points, ' points'), _react2.default.createElement('strong', {
                className: 'jsx-408339018',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, story.comments_count, ' comments'), _react2.default.createElement('strong', {
                className: 'jsx-408339018',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, story.time_ago)), story.comments.length ? _react2.default.createElement(_CommentTree2.default, { comments: story.comments, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }) : _react2.default.createElement('div', {
                className: 'jsx-408339018',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'There are no comments yet')), _react2.default.createElement(_style2.default, {
                styleId: '408339018',
                css: 'main.jsx-408339018{padding:1em;}h1.jsx-408339018{font-size:1.5em;margin:0;font-weight:300;padding-bottom:0.5em;}h1.jsx-408339018 a.jsx-408339018{color:#333;text-decoration:none;}h1.jsx-408339018 a.jsx-408339018:hover{text-decoration:underline;}.storyDetails.jsx-408339018{font-size:0.8em;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.2);margin-bottom:1em;}.storyDetails.jsx-408339018 strong.jsx-408339018{margin-right:1em;}.storyDetails.jsx-408339018 a.jsx-408339018{color:#ff6600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3J5LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDd0IsQUFHdUIsQUFHSSxBQU1MLEFBSWUsQUFHVixBQU1DLEFBR0gsV0FmTyxDQVR2QixFQXlCQSxFQXRCVyxBQWFVLENBTXJCLFFBbEJrQixDQVNsQixNQUhBLEdBTzBDLE1BWm5CLHFCQUN2QixhQVlvQixrQkFDcEIiLCJmaWxlIjoicGFnZXMvc3RvcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2UuYmFzaHRhbi9wcm9qZWN0cy9iZWFyL3B3YS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBVUkwgZnJvbSAndXJsJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBDb21tZW50VHJlZSBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1lbnRUcmVlJ1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHJlcywgcXVlcnkgfSkge1xuICAgICAgICB2YXIgc3Rvcnk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzdG9yeUlkID0gcXVlcnkuaWRcblxuICAgICAgICAgICAgaWYoICEgKC9bMC05XSsvKS50ZXN0KHN0b3J5SWQpICkgdGhyb3cgXCJTdG9yeSBJRCBtdXN0IGJlIG51bWVyaWNcIlxuXG4gICAgICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vaXRlbS8ke3N0b3J5SWR9YClcbiAgICAgICAgICAgIHN0b3J5ID0gYXdhaXQgcmVxLmpzb24oKVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHN0b3J5ID0gdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBzdG9yeSB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0b3J5IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGlmKCB0eXBlb2Ygc3RvcnkgPT09ICd1bmRlZmluZWQnIHx8ICEgc3RvcnkgKSByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz5cblxuICAgICAgICByZXR1cm4gPExheW91dCB0aXRsZT17IHN0b3J5LnRpdGxlIH0gc2hvd0JhY2s9eyB0cnVlIH0+XG5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxoMT48YSBocmVmPXsgc3RvcnkudXJsIH0+eyBzdG9yeS50aXRsZSB9PC9hPjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57IHN0b3J5LnBvaW50cyB9IHBvaW50czwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnsgc3RvcnkuY29tbWVudHNfY291bnQgfSBjb21tZW50czwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnsgc3RvcnkudGltZV9hZ28gfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyBzdG9yeS5jb21tZW50cy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFRyZWUgY29tbWVudHM9eyBzdG9yeS5jb21tZW50cyB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGVyZSBhcmUgbm8gY29tbWVudHMgeWV0PC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgICAgIH1cbiAgICAgICAgaDEgYSB7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGgxIGE6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5zdG9yeURldGFpbHMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3RvcnlEZXRhaWxzIHN0cm9uZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3J5RGV0YWlscyBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmNjYwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICB9XG5cbn0iXX0= */\n/*@ sourceURL=pages/story.js?entry */'
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var req = _ref.req,
                    res = _ref.res,
                    query = _ref.query;

                var story, storyId, _req;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                storyId = query.id;

                                if (/[0-9]+/.test(storyId)) {
                                    _context.next = 4;
                                    break;
                                }

                                throw "Story ID must be numeric";

                            case 4:
                                _context.next = 6;
                                return fetch('https://node-hnapi.herokuapp.com/item/' + storyId);

                            case 6:
                                _req = _context.sent;
                                _context.next = 9;
                                return _req.json();

                            case 9:
                                story = _context.sent;
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](0);

                                story = undefined;

                            case 15:
                                return _context.abrupt('return', { story: story });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 12]]);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0b3J5LmpzIl0sIm5hbWVzIjpbIlVSTCIsIkxheW91dCIsIkNvbW1lbnRUcmVlIiwiRXJyb3IiLCJzdG9yeSIsInByb3BzIiwidGl0bGUiLCJ1cmwiLCJwb2ludHMiLCJjb21tZW50c19jb3VudCIsInRpbWVfYWdvIiwiY29tbWVudHMiLCJsZW5ndGgiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInN0b3J5SWQiLCJpZCIsInRlc3QiLCJmZXRjaCIsImpzb24iLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQW9CTTtnQkFBQSxBQUNHLFFBQVUsS0FEYixBQUNrQixNQURsQixBQUNHLEFBQ1I7O2dCQUFJLE9BQUEsQUFBTyxVQUFQLEFBQWlCLGVBQWUsQ0FBcEMsQUFBc0MsOEJBQWUsQUFBQyxpQ0FBTSxZQUFQLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBRXJEO0FBRnFEO2FBQUEsQ0FBUDs7bUNBRXZDLEFBQUMsa0NBQU8sT0FBUSxNQUFoQixBQUFzQixPQUFRLFVBQTlCLEFBQXlDOzhCQUF6QztnQ0FBQSxBQUVIO0FBRkc7YUFBQSxrQkFFSCxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSwrQkFBSSxjQUFBLE9BQUcsTUFBTyxNQUFWLEFBQWdCLGdCQUFoQjs7OEJBQUE7Z0NBQUEsQUFBd0I7QUFBeEI7cUJBRFIsQUFDSSxBQUFJLEFBQThCLEFBQ2xDLHlCQUFBLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFBVTtBQUFWO0FBQUEscUJBQUEsQUFBZ0IsUUFEcEIsQUFDSSxBQUNBLDRCQUFBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQVU7QUFBVjtBQUFBLHFCQUFBLEFBQWdCLGdCQUZwQixBQUVJLEFBQ0EsOEJBQUEsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFBVTtBQUFWO0FBQUEscUJBTFIsQUFFSSxBQUdJLEFBQWdCLEFBR2xCLGtCQUFBLEFBQU0sU0FBTixBQUFlLHlCQUNiLEFBQUMsdUNBQVksVUFBVyxNQUF4QixBQUE4Qjs4QkFBOUI7Z0NBREYsQUFDRTtBQUFBO2FBQUEsb0JBRUEsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGFBQUEsRUFiTCxBQUVILEFBV1E7eUJBYkw7cUJBQVAsQUFBTyxBQWdEVjtBQWhEVTs7Ozs7O29CLEFBcEJvQixXQUFBLEE7b0JBQUssQSxXQUFBLEE7b0JBQUssQSxhLEFBQUE7Ozs7Ozs7O2dEQUczQjtBLDBDQUFVLE1BQU0sQTs7b0NBRWhCLEFBQUMsU0FBRCxBQUFXLEtBQVgsQSxBQUFnQjs7Ozs7c0NBQWlCLEE7Ozs7dUNBRXJCLGlEQUFBLEFBQStDLEE7O2lDQUEzRDtBOzt1Q0FDUSxLQUFBLEFBQUksQTs7aUNBQWxCO0E7Ozs7OztnRUFFQTs7d0NBQUEsQUFBUTs7O2lFQUdMLEVBQUUsT0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZmMsZ0JBQU0sQSIsImZpbGUiOiJzdG9yeS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZS5iYXNodGFuL3Byb2plY3RzL2JlYXIvcHdhLXJlYWN0In0=