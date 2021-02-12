"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var class_1 = require("./class");
function echo(arg) {
    return arg;
}
var mystr = echo(1);
var admin = /** @class */ (function (_super) {
    __extends(admin, _super);
    function admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return admin;
}(class_1.person));
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return manager;
}(class_1.person));
var Admin = new admin('a', 'a');
var Manager = new manager('a', 'a');
function personsecho(person) {
    return person;
}
