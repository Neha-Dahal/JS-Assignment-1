// Write a function that searches for an object by a specific key value in an array of objects:

var fruits = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];

var searchByName = (fruits, fruit) => {
  return fruits.find((fruits) => fruits.name.toLowerCase() === fruit);
};

var searchByKey = (fruits, key, fruit) => {
  return fruits.find((fruits) => fruits[key].toLowerCase() === fruit);
};

console.log(searchByName(fruits, "apple"));
console.log(searchByKey(fruits, "name", "apple"));
