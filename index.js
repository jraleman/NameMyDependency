const { validateNpm } = require("is-valid-package-name");

const validatePackageName = (name) => validateNpm(name);

const mockInput = 'invalid-name1!!';

console.log('validatePackageName: ', validatePackageName(mockInput));
