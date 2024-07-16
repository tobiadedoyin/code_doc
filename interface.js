"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moody = {
    name: "Tobi",
    email: "tobi@t.com",
    age: 20,
    startTrail: function () {
        return "";
    },
    endNow: function (name, email) {
        var one = name.length;
        var two = email.length;
        return one + two;
    },
};
console.log(moody.endNow("oladele", "meeee"));
