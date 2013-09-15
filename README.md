validator-errors
================
A wrapper for the validator package that adds an error list

To install node-validator-errors, use [npm](http://github.com/isaacs/npm):

```bash
$ npm install validator-errors
```

Please refer to [node-validator](https://github.com/chriso/node-validator) for documentation on how to use the validator functions.

## Example

```javascript
var validator = require('validator-errors'),
    check = validator.check,
    sanitize = validator.sanitize;
    
// Has an error
check("bacon").isEmail();

// No error
check("tasty@bacon.com").isEmail();

// Logs an array of errors to the console, in this case [ 'Invalid email' ]
console.log(validator.getErrors());

// Clears the errors
validator.clearErrors();

// Logs an empty array to the console as we've just cleared the errors
console.log(validator.getErrors());

// Has an error
check("bacon").isEmail();

// Logs an array of errors to the console, in this case [ 'Invalid email' ]
console.log(validator.getErrors(true));

// Logs an empty array to the console as we've just cleared the errors
console.log(validator.getErrors());
```

## Usage
To use validator-errors, you need to require it in your file instead of node-validator (as validator-errors is a wrapper and includes node-validator). From that point, you call your validator methods as normal and then when you want to retrieve a list of errors, you call `.getErrors()` on your validator-errors instance.

To clear the list of errors, you can call `.clearErrors()` on your validator-errors instance. You can also do this upon retrieval by passing `true` to `.getErrors()`


## License

The MIT License (MIT)

Copyright (c) 2013 Luke Bonaccorsi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
