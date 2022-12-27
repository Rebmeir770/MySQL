"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
// import your route components too
var Register_1 = require("./features/register/Register");
var Login_1 = require("./features/login/Login");
var main_1 = require("./features/Main/main");
var home_1 = require("./features/Home/home");
var Nav_1 = require("./components/nav/Nav");
var Ready_1 = require("./features/ready/Ready");
var Dashboard_1 = require("./features/dashboard/Dashboard");
var JewishDate_1 = require("./features/jewishDate/JewishDate");
var App = function () {
    var _a = react_1.useState(null), codeKey = _a[0], setCodeKey = _a[1];
    react_1.useEffect(function () {
        var codeKeyStart = new URLSearchParams(window.location.search).get('code');
        console.log(codeKeyStart);
        setCodeKey(codeKeyStart);
    }, []);
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(JewishDate_1["default"], null),
        React.createElement(Nav_1["default"], null),
        codeKey ? React.createElement(Dashboard_1["default"], { code: codeKey }) : React.createElement(Ready_1["default"], null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(main_1["default"], null) },
                React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(home_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "login", index: true, element: React.createElement(Login_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "Register", element: React.createElement(Register_1["default"], null) })))));
};
exports["default"] = App;
