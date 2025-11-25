// sculptureScript.js
// Import sculptureList from data.js
const { sculptureList } = require('./data');

// Create the required output object
const sculptureListLengths = {};

// Loop through all sculptures
sculptureList.forEach((sculpture, index) => {
  const lengthObject = {};

  // Loop through each property of the sculpture
  for (const key in sculpture) {
    // Ensure string conversion, then get length
    lengthObject[key] = String(sculpture[key]).length;
  }

  // Insert into the final object using index as the key
  sculptureListLengths[index] = lengthObject;
});

// Log final object
console.log(sculptureListLengths);

// Export for README use
module.exports = { sculptureListLengths };
