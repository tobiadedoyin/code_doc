"use strict";
class User {
    email;
    password;
    _isValid;
    // email: string;
    // password: string;
    // isValid: boolean;
    constructor(email, password, _isValid) {
        this.email = email;
        this.password = password;
        this._isValid = _isValid;
        // this.email = email;
        // this.password = password;
        // this.isValid = true;
    }
    getDetails(name) {
        if (this.email.includes(name)) {
            return `${name} is a subset of email ${this.email}`;
        }
        return "different";
    }
    get isValid() {
        return this._isValid;
    }
    set isValid(valid) {
        this._isValid = valid;
    }
}
const output = new User("ola@.com", "tobi", true);
console.log(output.getDetails("ola"));
