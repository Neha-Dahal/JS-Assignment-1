// Write a program to sort an array of object by a target key. The original array should remain unchanged.

var arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Andrew",
  },
];

function sortBy(array, key) {
  var sortedArray = [...array];
  return sortedArray.sort(function (a, b) {
    return a[key].localeCompare(b[key]);
  });
}

var sorted = sortBy(arr, "name");

console.log(sorted);
