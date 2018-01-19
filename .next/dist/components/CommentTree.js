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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/e.bashtan/projects/bear/pwa-react/components/CommentTree.js';


var Layout = function (_React$PureComponent) {
  (0, _inherits3.default)(Layout, _React$PureComponent);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          children = _props.children,
          showBack = _props.showBack;

      return _react2.default.createElement('div', {
        className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('title', {
        className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, title), _react2.default.createElement('meta', { name: 'description', content: description, className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.webmanifest', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: '#ff6600', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/icon.png', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/icon.png', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'Hacker News', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), _react2.default.createElement('nav', {
        className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-1149335257',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, showBack && _react2.default.createElement('span', {
        className: 'jsx-1149335257' + ' ' + 'back',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, '<'), _react2.default.createElement('span', {
        className: 'jsx-1149335257' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Hacker News')))), children, _react2.default.createElement(_style2.default, {
        styleId: '1833090254',
        css: 'nav.jsx-1149335257{background:#ff6600;color:#fff;font-weight:bold;}nav.jsx-1149335257 a.jsx-1149335257{display:inline-block;color:#fff;text-decoration:none;}nav.jsx-1149335257 a.jsx-1149335257:hover{background-color:rgba(0,0,0,0.1);}nav.jsx-1149335257 .back.jsx-1149335257{display:inline-block;height:1em;width:1em;font-weight:300;padding:1em 0 1em 1em;text-align:center;}nav.jsx-1149335257 .title.jsx-1149335257{display:inline-block;padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tbWVudFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0J3QixBQUc4QixBQUtFLEFBS1ksQUFHWixBQVFBLG1CQXBCVixFQUtBLEFBUUEsQUFRQyxTQXBCSyxFQUtJLEFBUVgsQ0FKWixBQVlBLFNBUGtCLEtBYmxCLE1BS0EsS0FTd0Isc0JBQ0osa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvQ29tbWVudFRyZWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2UuYmFzaHRhbi9wcm9qZWN0cy9iZWFyL3B3YS1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4sIHNob3dCYWNrIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXsgZGVzY3JpcHRpb24gfSAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cblxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zdGF0aWMvbWFuaWZlc3Qud2VibWFuaWZlc3RcIiAvPlxuXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZjY2MDBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9pY29uLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvc3RhdGljL2ljb24ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiSGFja2VyIE5ld3NcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCIgY29udGVudD1cImRlZmF1bHRcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPnsgc2hvd0JhY2sgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFja1wiPiZsdDs8L3NwYW4+IH08c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkhhY2tlciBOZXdzPC9zcGFuPjwvYT48L0xpbms+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY2NjAwO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIG5hdiBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IC5iYWNrIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbSAwIDFlbSAxZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIG5hdiAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSJdfQ== */\n/*@ sourceURL=components/CommentTree.js */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '867953662',
        css: 'body{margin:0;background:#f0f0f0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tbWVudFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkQrQixBQUdvQixTQUNVLG1CQUNHLHNCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzL0NvbW1lbnRUcmVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lLmJhc2h0YW4vcHJvamVjdHMvYmVhci9wd2EtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuLCBzaG93QmFjayB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17IGRlc2NyaXB0aW9uIH0gLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc3RhdGljL21hbmlmZXN0LndlYm1hbmlmZXN0XCIgLz5cblxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmY2NjAwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvaWNvbi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL3N0YXRpYy9pY29uLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkhhY2tlciBOZXdzXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVwiIGNvbnRlbnQ9XCJkZWZhdWx0XCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT57IHNob3dCYWNrICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhY2tcIj4mbHQ7PC9zcGFuPiB9PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5IYWNrZXIgTmV3czwvc3Bhbj48L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmNjYwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICB9XG4gICAgICAgIG5hdiAuYmFjayB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxZW0gMCAxZW0gMWVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBuYXYgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0iXX0= */\n/*@ sourceURL=components/CommentTree.js */'
      }));
    }
  }]);

  return Layout;
}(_react2.default.PureComponent);

exports.default = Layout;


Layout.propTypes = {
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tbWVudFRyZWUuanMiXSwibmFtZXMiOlsiSGVhZCIsIlByb3BUeXBlcyIsIkxpbmsiLCJMYXlvdXQiLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiIsInNob3dCYWNrIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0ksQUFFYzs7Ozs7Ozs7Ozs7NkJBQ1I7bUJBQzhDLEtBRDlDLEFBQ21EO1VBRG5ELEFBQ0csZUFESCxBQUNHO1VBREgsQUFDVSxxQkFEVixBQUNVO1VBRFYsQUFDdUIsa0JBRHZCLEFBQ3VCO1VBRHZCLEFBQ2lDLGtCQURqQyxBQUNpQyxBQUV0Qzs7NkJBQU8sY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDSDtBQURHO0FBQUEsT0FBQSxrQkFDSCxBQUFDOztvQkFBRDtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFTO0FBQVQ7QUFBQSxTQURKLEFBQ0ksQUFDQSxnREFBTSxNQUFOLEFBQVcsZUFBYyxTQUF6QixBQUFtQyx3QkFBbkM7O29CQUFBO3NCQUZKLEFBRUksQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9EQUE5Qjs7b0JBQUE7c0JBSEosQUFHSSxBQUVBO0FBRkE7a0RBRU0sS0FBTixBQUFVLFlBQVcsTUFBckIsQUFBMEIsMkNBQTFCOztvQkFBQTtzQkFMSixBQUtJLEFBRUE7QUFGQTtrREFFTSxNQUFOLEFBQVcsZUFBYyxTQUF6QixBQUFpQyxzQkFBakM7O29CQUFBO3NCQVBKLEFBT0ksQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxpQkFBZ0IsTUFBMUIsQUFBK0IsK0JBQS9COztvQkFBQTtzQkFSSixBQVFJLEFBQ0E7QUFEQTtrREFDTSxLQUFOLEFBQVUsb0JBQW1CLE1BQTdCLEFBQWtDLCtCQUFsQzs7b0JBQUE7c0JBVEosQUFTSSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLDhCQUE2QixTQUF4QyxBQUFnRCwwQkFBaEQ7O29CQUFBO3NCQVZKLEFBVUksQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyx5Q0FBd0MsU0FBbkQsQUFBMkQsc0JBQTNEOztvQkFBQTtzQkFYSixBQVdJLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsZ0NBQStCLFNBQTFDLEFBQWtELGtCQUFsRDs7b0JBQUE7c0JBWkosQUFZSSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLDBCQUF5QixTQUFwQyxBQUE0QyxrQkFBNUM7O29CQUFBO3NCQWRELEFBQ0gsQUFhSSxBQUdKO0FBSEk7MkJBR0osY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEseUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFBZTtBQUFmO3lCQUFlLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLHFDQUFpQixjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFBakIsQUFBaUIsQUFBb0Msc0JBQUEsY0FBQTs0Q0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBO0FBQUE7QUFBQSxTQWxCckUsQUFpQkgsQUFDSSxBQUFlLEFBQXFELEFBR3RFLG1CQXJCQztpQkFBQTthQUFBO0FBQUE7aUJBQUE7YUFBUCxBQUFPLEFBMkRWO0FBM0RVOzs7OztFQUpxQixnQkFBTSxBOztrQkFBckIsQTs7O0FBa0VyQixPQUFBLEFBQU87U0FDSSxvQkFBQSxBQUFVLE9BREYsQUFDUyxBQUN4QjtlQUFhLG9CQUFBLEFBQVUsT0FGM0IsQUFBbUIsQUFFZTtBQUZmLEFBQ2YiLCJmaWxlIjoiQ29tbWVudFRyZWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2UuYmFzaHRhbi9wcm9qZWN0cy9iZWFyL3B3YS1yZWFjdCJ9