
// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0);   
let thirdCodePoint = inputString1.charCodeAt(2);   

// Task 2
let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108); 

// Task 3
let inputString2 = "Launch";
let firstChar = inputString2.charAt(0); 
let lastChar = inputString2.charAt(inputString2.length - 1); 

// Swap first and last
let swappedString = lastChar + inputString2.slice(1, -1) + firstChar;

// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});
