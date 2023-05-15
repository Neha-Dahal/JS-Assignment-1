// Write a function to render the following pattern in the console:
// * * * * *
// * * * *
// * * *
// * *
// *

const displayInvertedTrianglePattern = (initialStarCount) => {
  array = [];
  for (let i = initialStarCount; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      array.push("*");
    }
    console.log(...array);
    array = [];
  }
};
displayInvertedTrianglePattern(5);
