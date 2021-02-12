var sun = /** @class */ (function () {
    function sun() {
    }
    sun.prototype.getfullname = function () {
        return this.firstname + this.lastname;
    };
    return sun;
}());
var aperson = new sun();
var some = {
    firstname: 'Ashok',
    lastname: 'Reddy',
    getfullname: function () { return 'Test'; }
};
aperson = some;
aperson;
