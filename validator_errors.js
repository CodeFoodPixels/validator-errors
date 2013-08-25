var Validator = require('validator');

Validator.prototype.error = function (msg) {
    this._errors.push(msg);
    return this;
}

Validator.prototype.getErrors = function () {
    return this._errors;
}

module.exports = new Validator();
