module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    mutation scriptTagCreate($input: ScriptTagInput!) {\n        scriptTagCreate(input: $input) {\n            scriptTag {\n                id\n            }\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n`;\nconst QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    query {\n        scriptTags(first: 5) {\n            edges {\n                node {\n                    id\n                    src\n                    displayScope\n                }\n            }\n        }\n    }\n`;\nconst DELETE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    mutation scriptTagDelete($id: ID!) {\n        scriptTagDelete(id: $id) {\n            deletedScriptTagId\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n`;\n\nfunction ScriptPage() {\n  const [createScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(CREATE_SCRIPT_TAG);\n  const [deleteScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(DELETE_SCRIPTTAG);\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(QUERY_SCRIPTTAGS);\n  if (loading) return __jsx(\"div\", null, \"Loading\\u2026\");\n  if (error) return __jsx(\"div\", null, error.message);\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    title: \"These are the Script Tags:\",\n    sectioned: true\n  }, __jsx(\"p\", null, \"Create or Delete a Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n    secondary: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    title: \"Delete Tag\",\n    sectioned: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    primary: true,\n    size: \"slim\",\n    type: \"submit\",\n    onClick: () => {\n      createScripts({\n        variables: {\n          input: {\n            src: \"https://654385c244c8.ngrok.io/test-script.js\",\n            displayScope: \"ALL\"\n          }\n        },\n        refetchQueries: [{\n          query: QUERY_SCRIPTTAGS\n        }]\n      });\n    }\n  }, \"Create Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"], {\n    showHeader: true,\n    resourceName: {\n      singular: 'Script',\n      plural: 'Scripts'\n    },\n    items: data.scriptTags.edges,\n    renderItem: item => {\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"].Item, {\n        id: item.id\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(\"p\", null, item.node.id)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        onClick: () => {\n          deleteScripts({\n            variables: {\n              id: item.node.id\n            },\n            refetchQueries: [{\n              query: QUERY_SCRIPTTAGS\n            }]\n          });\n        }\n      }, \"Delete Script Tag\"))));\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScriptPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcz9jYzkwIl0sIm5hbWVzIjpbIkNSRUFURV9TQ1JJUFRfVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJTY3JpcHRQYWdlIiwiY3JlYXRlU2NyaXB0cyIsInVzZU11dGF0aW9uIiwiZGVsZXRlU2NyaXB0cyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIm1lc3NhZ2UiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInNyYyIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJzaW5ndWxhciIsInBsdXJhbCIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsIml0ZW0iLCJpZCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBOUI7QUFjQSxNQUFNQyxnQkFBZ0IsR0FBR0Qsa0RBQUk7Ozs7Ozs7Ozs7OztDQUE3QjtBQWNBLE1BQU1FLGdCQUFnQixHQUFHRixrREFBSTs7Ozs7Ozs7OztDQUE3Qjs7QUFZQSxTQUFTRyxVQUFULEdBQXNCO0FBRXBCLFFBQU0sQ0FBQ0MsYUFBRCxJQUFrQkMsdUVBQVcsQ0FBQ04saUJBQUQsQ0FBbkM7QUFDQSxRQUFNLENBQUNPLGFBQUQsSUFBa0JELHVFQUFXLENBQUNILGdCQUFELENBQW5DO0FBQ0EsUUFBTTtBQUFFSyxXQUFGO0FBQVdDLFNBQVg7QUFBa0JDO0FBQWxCLE1BQTJCQyxvRUFBUSxDQUFDVCxnQkFBRCxDQUF6QztBQUdBLE1BQUlNLE9BQUosRUFBYSxPQUFPLG1DQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLE9BQU8sbUJBQU1BLEtBQUssQ0FBQ0csT0FBWixDQUFQO0FBRVgsU0FDRSxNQUFDLHFEQUFELFFBQ0UsTUFBQyx1REFBRCxRQUNFLE1BQUMsdURBQUQsQ0FBUSxPQUFSLFFBQ0UsTUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyw0QkFBWjtBQUF5QyxhQUFTO0FBQWxELEtBQ0UsaURBREYsQ0FERixDQURGLEVBUUUsTUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0IsYUFBUztBQUF6QixLQUNFLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUMsWUFBWjtBQUF5QixhQUFTO0FBQWxDLEtBQ0UsTUFBQyx1REFBRDtBQUNFLFdBQU8sTUFEVDtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFHZ0IsV0FBTyxFQUFFLE1BQU07QUFDM0JQLG1CQUFhLENBQUM7QUFDWlEsaUJBQVMsRUFBRTtBQUNUQyxlQUFLLEVBQUU7QUFDTEMsZUFBRyxFQUFFLDhDQURBO0FBRUxDLHdCQUFZLEVBQUU7QUFGVDtBQURFLFNBREM7QUFPWkMsc0JBQWMsRUFBRSxDQUFDO0FBQUVDLGVBQUssRUFBRWhCO0FBQVQsU0FBRDtBQVBKLE9BQUQsQ0FBYjtBQVNEO0FBYkgseUJBREYsQ0FERixDQVJGLEVBNkJFLE1BQUMsdURBQUQsQ0FBUSxPQUFSLFFBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsNkRBQUQ7QUFDRSxjQUFVLE1BRFo7QUFFRSxnQkFBWSxFQUFFO0FBQUVpQixjQUFRLEVBQUUsUUFBWjtBQUFzQkMsWUFBTSxFQUFFO0FBQTlCLEtBRmhCO0FBR0UsU0FBSyxFQUFFVixJQUFJLENBQUNXLFVBQUwsQ0FBZ0JDLEtBSHpCO0FBSUUsY0FBVSxFQUFFQyxJQUFJLElBQUk7QUFDbEIsYUFDRSxNQUFDLDZEQUFELENBQWMsSUFBZDtBQUNFLFVBQUUsRUFBRUEsSUFBSSxDQUFDQztBQURYLFNBR0UsTUFBQyxzREFBRCxRQUNFLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0UsaUJBQ0dELElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxFQURiLENBREYsQ0FERixFQU1FLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0UsTUFBQyx1REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxNQUFNO0FBQ25DakIsdUJBQWEsQ0FBQztBQUNaTSxxQkFBUyxFQUFFO0FBQ1RXLGdCQUFFLEVBQUVELElBQUksQ0FBQ0UsSUFBTCxDQUFVRDtBQURMLGFBREM7QUFJWlAsMEJBQWMsRUFBRSxDQUFDO0FBQUVDLG1CQUFLLEVBQUVoQjtBQUFULGFBQUQ7QUFKSixXQUFELENBQWI7QUFNRDtBQVBELDZCQURGLENBTkYsQ0FIRixDQURGO0FBeUJEO0FBOUJILElBREYsQ0FERixDQTdCRixDQURGLENBREY7QUFzRUQ7O0FBRWNFLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2NyaXB0LXBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMYXlvdXQsIFBhZ2UsIFJlc291cmNlTGlzdCwgU3RhY2sgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcblxuY29uc3QgQ1JFQVRFX1NDUklQVF9UQUcgPSBncWxgXG4gICAgbXV0YXRpb24gc2NyaXB0VGFnQ3JlYXRlKCRpbnB1dDogU2NyaXB0VGFnSW5wdXQhKSB7XG4gICAgICAgIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XG4gICAgICAgICAgICBzY3JpcHRUYWcge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgICAgICAgICBmaWVsZFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IFFVRVJZX1NDUklQVFRBR1MgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgICBzY3JpcHRUYWdzKGZpcnN0OiA1KSB7XG4gICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHNyY1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBERUxFVEVfU0NSSVBUVEFHID0gZ3FsYFxuICAgIG11dGF0aW9uIHNjcmlwdFRhZ0RlbGV0ZSgkaWQ6IElEISkge1xuICAgICAgICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xuICAgICAgICAgICAgZGVsZXRlZFNjcmlwdFRhZ0lkXG4gICAgICAgICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgICAgICAgICBmaWVsZFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmZ1bmN0aW9uIFNjcmlwdFBhZ2UoKSB7XG5cbiAgY29uc3QgW2NyZWF0ZVNjcmlwdHNdID0gdXNlTXV0YXRpb24oQ1JFQVRFX1NDUklQVF9UQUcpO1xuICBjb25zdCBbZGVsZXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihERUxFVEVfU0NSSVBUVEFHKTtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUllfU0NSSVBUVEFHUyk7XG5cblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIlRoZXNlIGFyZSB0aGUgU2NyaXB0IFRhZ3M6XCIgc2VjdGlvbmVkPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIENyZWF0ZSBvciBEZWxldGUgYSBTY3JpcHQgVGFnXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICA8TGF5b3V0LlNlY3Rpb24gc2Vjb25kYXJ5PlxuICAgICAgICAgIDxDYXJkIHRpdGxlPVwiRGVsZXRlIFRhZ1wiIHNlY3Rpb25lZD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICBzaXplPVwic2xpbVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlU2NyaXB0cyh7XG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly82NTQzODVjMjQ0Yzgubmdyb2suaW8vdGVzdC1zY3JpcHQuanNcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGU6IFwiQUxMXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENyZWF0ZSBTY3JpcHQgVGFnXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgc2hvd0hlYWRlclxuICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdTY3JpcHQnLCBwbHVyYWw6ICdTY3JpcHRzJyB9fVxuICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5zY3JpcHRUYWdzLmVkZ2VzfVxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTY3JpcHRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLm5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBTY3JpcHQgVGFnXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9QYWdlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/script-page.js\n");

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/script-page.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Catboy/noSideShopifyApp/pages/script-page.js */"./pages/script-page.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });