"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var git = /** @class */ (function () {
    function git() {
    }
    git.prototype.getuserinfo = function (username) {
        var options = {
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get('https://api.github.com/users/' + username, function (response) { });
        console.log(Response);
    };
    return git;
}());
exports.git = git;
