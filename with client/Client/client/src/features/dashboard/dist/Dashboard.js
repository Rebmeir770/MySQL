"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Auth_1 = require("../authentication/Auth");
var react_2 = require("react");
var Dashboard = function (_a) {
    var code = _a.code;
    var accessToken = Auth_1["default"](code);
    var _b = react_2.useState(""), seach = _b[0], setsearch = _b[1];
    function handleSearch(ev) {
        try {
            setsearch(ev.target.value);
        }
        catch (error) {
            console.error(error);
        }
    }
    function handleSubmit(ev) {
        ev.preventDefault();
        try {
            var search = ev.target.elements.search;
            search = search.value;
        }
        catch (error) {
            console.error(error);
        }
    }
    return (react_1["default"].createElement("div", { className: 'seacrhSongs' },
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("input", { type: "search", name: 'search', placeholder: 'Seacrh Songs/Artists', onChange: handleSearch }),
            react_1["default"].createElement("button", null, "SEARCH"))));
};
exports["default"] = Dashboard;
