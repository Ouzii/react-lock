"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var app = express_1["default"]();
dotenv_1["default"].config();
app.use(cors_1["default"]());
app.use(express_1["default"].json());
var getCode = function () {
    var _a;
    return ((_a = process.env.CORRECT_CODE) === null || _a === void 0 ? void 0 : _a.toString()) || '1234';
};
var getPort = function () {
    var _a;
    return ((_a = process.env.PORT) === null || _a === void 0 ? void 0 : _a.toString()) || '3000';
};
app.use(express_1["default"].static('build'));
app.post('/', function (req, res) {
    if (!req || !req.body)
        return res.status(400).json(false);
    if (req.body.code === getCode())
        return res.status(200).json(true);
    return res.status(200).json(false);
});
app.listen(getPort(), function () {
    console.log('Listening port ' + getPort());
});
