const { validateNpm } = require("is-valid-package-name");

const dependencyName = '';
const nameStatus = validateNpm(dependencyName);

console.log('nameStatus: ', nameStatus);
