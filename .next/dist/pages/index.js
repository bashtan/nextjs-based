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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _StoryList = require('../components/StoryList');

var _StoryList2 = _interopRequireDefault(_StoryList);

var _error = require('next/dist/lib/error.js');

var _error2 = _interopRequireDefault(_error);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/e.bashtan/projects/bear/pwa-react/pages/index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
                    console.log('service worker registration successful');
                }).catch(function (err) {
                    console.warn('service worker registration failed', err.message);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                stories = _props.stories,
                page = _props.page;

            if (typeof stories === 'undefined' || !stories) return _react2.default.createElement(_error2.default, { statusCode: 503, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            });

            return _react2.default.createElement(_Layout2.default, { title: 'Hacker News Reader',
                description: 'A sample PWA built with React and Next.JS', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_StoryList2.default, { stories: stories, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('footer', {
                className: 'jsx-2149221162',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_link2.default, { href: '/?page=' + (page + 1), prefetch: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('a', {
                className: 'jsx-2149221162',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Next Page >'))), _react2.default.createElement(_style2.default, {
                styleId: '2149221162',
                css: 'footer.jsx-2149221162{padding:2em 1em;}footer.jsx-2149221162 a.jsx-2149221162{font-size:1.5em;font-weight:bold;color:#ff6600;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEd0IsQUFHMkIsQUFHQSxnQkFGbEIsQUFHbUIsaUJBQ0gsY0FDTyxxQkFDdkIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2UuYmFzaHRhbi9wcm9qZWN0cy9iZWFyL3B3YS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgU3RvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvU3RvcnlMaXN0J1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHJlcywgcXVlcnkgfSkge1xuICAgICAgICB2YXIgc3RvcmllcywgcGFnZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UgfHwgMSlcbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9uZXdzP3BhZ2U9JHtwYWdlfWApXG4gICAgICAgICAgICBzdG9yaWVzID0gYXdhaXQgcmVxLmpzb24oKVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHN0b3JpZXMgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN0b3JpZXMsIHBhZ2UgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgICAgICAgICAgLnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yaWVzLCBwYWdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgaWYoIHR5cGVvZiBzdG9yaWVzID09PSAndW5kZWZpbmVkJyB8fCAhIHN0b3JpZXMgKSByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz5cblxuICAgICAgICByZXR1cm4gPExheW91dCB0aXRsZT17J0hhY2tlciBOZXdzIFJlYWRlcid9XG4gICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsnQSBzYW1wbGUgUFdBIGJ1aWx0IHdpdGggUmVhY3QgYW5kIE5leHQuSlMnfT5cbiAgICAgICAgICAgIDxTdG9yeUxpc3Qgc3Rvcmllcz17c3Rvcmllc30gLz5cblxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLz9wYWdlPSR7cGFnZSsxfWB9IHByZWZldGNoPjxhPk5leHQgUGFnZSAmZ3Q7PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZzogMmVtIDFlbTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogI2ZmNjYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgfVxuXG59Il19 */\n/*@ sourceURL=pages/index.js?entry */'
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var req = _ref.req,
                    res = _ref.res,
                    query = _ref.query;

                var stories, page, _req;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                page = parseInt(query.page || 1);
                                _context.next = 4;
                                return fetch('https://node-hnapi.herokuapp.com/news?page=' + page);

                            case 4:
                                _req = _context.sent;
                                _context.next = 7;
                                return _req.json();

                            case 7:
                                stories = _context.sent;
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](0);

                                stories = undefined;

                            case 13:
                                return _context.abrupt('return', { stories: stories, page: page });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 10]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlN0b3J5TGlzdCIsIkVycm9yIiwiTGluayIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJ3YXJuIiwiZXJyIiwibWVzc2FnZSIsInByb3BzIiwic3RvcmllcyIsInBhZ2UiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInBhcnNlSW50IiwiZmV0Y2giLCJqc29uIiwidW5kZWZpbmVkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQWtCa0IsQUFDakI7Z0JBQUksbUJBQUosQUFBdUIsV0FBVyxBQUM5QjswQkFBQSxBQUFVLGNBQVYsQUFDSyxTQURMLEFBQ2Msc0JBRGQsQUFFSyxLQUFLLHdCQUFnQixBQUNsQjs0QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNmO0FBSkwsbUJBQUEsQUFLSyxNQUFNLGVBQU8sQUFDVjs0QkFBQSxBQUFRLEtBQVIsQUFBYSxzQ0FBc0MsSUFBbkQsQUFBdUQsQUFDMUQ7QUFQTCxBQVFIO0FBQ0o7Ozs7aUNBRVE7eUJBQ3FCLEtBRHJCLEFBQzBCO2dCQUQxQixBQUNHLGlCQURILEFBQ0c7Z0JBREgsQUFDWSxjQURaLEFBQ1ksQUFFakI7O2dCQUFJLE9BQUEsQUFBTyxZQUFQLEFBQW1CLGVBQWUsQ0FBdEMsQUFBd0MsZ0NBQWlCLEFBQUMsaUNBQU0sWUFBUCxBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUV6RDtBQUZ5RDthQUFBLENBQVA7O21DQUUzQyxBQUFDLGtDQUFPLE9BQVIsQUFBZSxBQUNQOzZCQURSLEFBQ3FCOzhCQURyQjtnQ0FBQSxBQUVIO0FBRkc7YUFBQSxrQkFFSCxBQUFDLHFDQUFVLFNBQVgsQUFBb0I7OEJBQXBCO2dDQUZHLEFBRUgsQUFFQTtBQUZBO2dDQUVBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsZ0NBQUssbUJBQWdCLE9BQXRCLEFBQU0sQUFBcUIsSUFBSyxVQUFoQzs4QkFBQTtnQ0FBQSxBQUF5QztBQUF6QzsrQkFBeUMsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTDFDLEFBSUgsQUFDSSxBQUF5Qzt5QkFMMUM7cUJBQVAsQUFBTyxBQW9CVjtBQXBCVTs7Ozs7O29CQWhDb0IsQSxXLEFBQUE7b0IsQUFBSyxXQUFBLEE7b0JBQUssQSxhQUFBLEE7Ozs7Ozs7O2dEQUlqQzs7dUNBQU8sU0FBUyxNQUFBLEFBQU0sUUFBdEIsQUFBTyxBQUF1Qjs7dUNBQ1osc0QsQUFBQSxBQUFvRDs7aUNBQWhFO0E7O3VDQUNVLEtBQUEsQUFBSSxBOztpQ0FBcEI7QTs7Ozs7O2dFQUVBOzswQ0FBQSxBQUFVOzs7aUVBR1AsRUFBRSxTQUFGLFNBQVcsTUFBWCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBYmMsZ0JBQU0sQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZS5iYXNodGFuL3Byb2plY3RzL2JlYXIvcHdhLXJlYWN0In0=