"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var Auth = function (code) {
    var _a = react_1.useState(), accessToken = _a[0], setAccessToken = _a[1];
    var _b = react_1.useState(), refreshToken = _b[0], setRefreshToken = _b[1];
    var _c = react_1.useState(), expiresIn = _c[0], setExpiresIn = _c[1];
    react_1.useEffect(function () {
        axios_1["default"].post('http://localhost:3000/ready', {
            code: code
        })
            .then(function (res) {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, "/", null);
        })["catch"](function () {
            window.location.assign("/");
        });
    }, [code]);
    react_1.useEffect(function () {
        if (!refreshToken || !expiresIn)
            return;
        var timeout = setTimeout(function () {
            axios_1["default"].post('http://localhost:3000/refresh', {
                refreshToken: refreshToken
            })
                .then(function (res) {
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
            })["catch"](function () {
                window.location.assign("/");
            });
        }, (expiresIn - 60) * 1000);
        return function () { return clearTimeout(timeout); };
    }, [refreshToken, expiresIn]);
    return accessToken;
};
exports["default"] = Auth;
