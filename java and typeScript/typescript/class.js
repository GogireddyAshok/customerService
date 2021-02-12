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
var person = /** @class */ (function () {
    function person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    person.prototype.greet = function () {
        console.log("hey there");
    };
    person.prototype.getFirstname = function () {
        return this.firstname;
    };
    person.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    person.prototype.getLastname = function () {
        return this.lastname;
    };
    person.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    person.prototype.getfullname = function () {
        return this.firstname + " " + this.lastname;
    };
    return person;
}());
exports.person = person;
var prog = /** @class */ (function (_super) {
    __extends(prog, _super);
    function prog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    prog.prototype.greet = function () {
        console.log("prog class");
    };
    prog.prototype.greetn = function () {
        _super.prototype.greet.call(this);
    };
    return prog;
}(person));
var p = new prog("Ashok", "Gogireddy");
console.log(p.getfullname());
