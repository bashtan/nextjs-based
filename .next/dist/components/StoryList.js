'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/e.bashtan/projects/bear/pwa-react/components/StoryList.js';


var StoryList = function (_React$PureComponent) {
  (0, _inherits3.default)(StoryList, _React$PureComponent);

  function StoryList() {
    (0, _classCallCheck3.default)(this, StoryList);

    return (0, _possibleConstructorReturn3.default)(this, (StoryList.__proto__ || (0, _getPrototypeOf2.default)(StoryList)).apply(this, arguments));
  }

  (0, _createClass3.default)(StoryList, [{
    key: 'render',
    value: function render() {
      var stories = this.props.stories;

      return _react2.default.createElement('div', {
        className: 'jsx-1673929572' + ' ' + 'storyList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, stories.map(function (story) {
        return _react2.default.createElement('div', { key: story.id, className: 'jsx-1673929572' + ' ' + 'storyItem',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, _react2.default.createElement('h2', {
          className: 'jsx-1673929572',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, _react2.default.createElement('a', { href: story.url, className: 'jsx-1673929572',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, story.title)), _react2.default.createElement('div', {
          className: 'jsx-1673929572' + ' ' + 'storyDetails',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, _react2.default.createElement('strong', {
          className: 'jsx-1673929572',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, story.points, ' points'), _react2.default.createElement(_link2.default, { href: '/story?id=' + story.id, prefetch: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, _react2.default.createElement('a', {
          className: 'jsx-1673929572',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, story.comments_count, ' comments'))));
      }), _react2.default.createElement(_style2.default, {
        styleId: '1673929572',
        css: '.storyList.jsx-1673929572{padding:0 1em;}.storyItem.jsx-1673929572{padding:1em 0;border-bottom:1px solid rgba(0,0,0,0.1);}h2.jsx-1673929572{font-size:1.1em;font-weight:400;margin:0;margin-bottom:0.5em;}h2.jsx-1673929572 a.jsx-1673929572{color:#333;text-decoration:none;}h2.jsx-1673929572 a.jsx-1673929572:hover{text-decoration:underline;}.storyDetails.jsx-1673929572{font-size:0.9em;font-weight:bold;}.storyDetails.jsx-1673929572 strong.jsx-1673929572{margin-right:1em;}.storyDetails.jsx-1673929572 a.jsx-1673929572{color:#ff6600;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCd0IsQUFHeUIsQUFHQSxBQUlFLEFBTUwsQUFJZSxBQUdWLEFBSUMsQUFHSCxXQWJPLEdBYnZCLEFBRzBDLEFBd0JuQixFQXBCTCxBQWFDLENBSW5CLFNBUEEsTUFUVyxBQU1YLENBT0EsRUFPQSxNQW5Cc0IsYUFMdEIsT0FNQSIsImZpbGUiOiJjb21wb25lbnRzL1N0b3J5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZS5iYXNodGFuL3Byb2plY3RzL2JlYXIvcHdhLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcnlMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0b3JpZXMgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzdG9yeUxpc3RcIj5cblxuICAgICAgICAgICAgeyBzdG9yaWVzLm1hcCggKHN0b3J5KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeUl0ZW1cIiBrZXk9eyBzdG9yeS5pZCB9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+PGEgaHJlZj17IHN0b3J5LnVybCB9Pnsgc3RvcnkudGl0bGUgfTwvYT48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5RGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57IHN0b3J5LnBvaW50cyB9IHBvaW50czwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9IHByZWZldGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnsgc3RvcnkuY29tbWVudHNfY291bnQgfSBjb21tZW50czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApICkgfVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zdG9yeUxpc3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdG9yeUl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgIH1cbiAgICAgICAgaDIgYSB7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGgyIGE6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5zdG9yeURldGFpbHMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3J5RGV0YWlscyBzdHJvbmcge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdG9yeURldGFpbHMgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZjY2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/StoryList.js */'
      }));
    }
  }]);

  return StoryList;
}(_react2.default.PureComponent);

exports.default = StoryList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJSb3V0ZXIiLCJTdG9yeUxpc3QiLCJzdG9yaWVzIiwicHJvcHMiLCJtYXAiLCJzdG9yeSIsImlkIiwidXJsIiwidGl0bGUiLCJwb2ludHMiLCJjb21tZW50c19jb3VudCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SUFFYyxBOzs7Ozs7Ozs7Ozs2QkFDUjtVQUFBLEFBQ0csVUFBWSxLQURmLEFBQ29CLE1BRHBCLEFBQ0csQUFFUjs7NkJBQU8sY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUVEO0FBRkM7QUFBQSxPQUFBLFVBRUQsQUFBUSxJQUFLLFVBQUEsQUFBQyxPQUFEOytCQUNYLGNBQUEsU0FBMkIsS0FBTSxNQUFqQyxBQUF1Qyx3Q0FBdkMsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO1NBQUEsa0JBQ0ksY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsMkJBQUksY0FBQSxPQUFHLE1BQU8sTUFBVixBQUFnQixnQkFBaEI7O3NCQUFBO3dCQUFBLEFBQXdCO0FBQXhCO2lCQURSLEFBQ0ksQUFBSSxBQUE4QixBQUNsQyx5QkFBQSxjQUFBOzhDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDJCQUNJLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQVU7QUFBVjtBQUFBLGlCQUFBLEFBQWdCLFFBRHBCLEFBQ0ksQUFDQSw0QkFBQSxBQUFDLGdDQUFLLHFCQUFtQixNQUF6QixBQUErQixJQUFNLFVBQXJDO3NCQUFBO3dCQUFBLEFBQ0k7QUFESjsyQkFDSSxjQUFBO3FCQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxpQkFBQSxBQUFXLGdCQU5aLEFBQ1gsQUFFSSxBQUVJLEFBQ0k7QUFSYixBQUVEO2lCQUZDO2FBQVAsQUFBTyxBQWlEVjtBQWpEVTs7Ozs7RUFKd0IsZ0JBQU0sQTs7a0JBQXhCLEEiLCJmaWxlIjoiU3RvcnlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lLmJhc2h0YW4vcHJvamVjdHMvYmVhci9wd2EtcmVhY3QifQ==