var nodeValidator = require('validator');

nodeValidator._errors = [];

nodeValidator.Validator.prototype.error = function (msg) {
    nodeValidator._errors.push(msg);
    return this;
}

nodeValidator.getErrors = function (clearErrors) {
    if(clearErrors) {
        var errors = nodeValidator._errors;
        nodeValidator.clearErrors();
        return errors;
    }
    return nodeValidator._errors;
}

nodeValidator.clearErrors = function () {
    nodeValidator._errors = [];
}

module.exports = nodeValidator;
