// Write a program to normalize a given input to get the expected output.

var input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      { id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
    ],
  },
  5: {
    id: 5,
    name: "Mike",
    children: [{ id: 6, name: "Peter" }],
  },
};

function normalizeInput(input) {
  var output = {};

  function normalizeNode(node) {
    var normalizedNode = {
      id: node.id,
      name: node.name,
    };

    if (node.children && node.children.length > 0) {
      normalizedNode.children = node.children.map((child) => child.id);
      node.children.forEach((child) => normalizeNode(child));
    }

    output[node.id] = normalizedNode;
  }

  Object.values(input).forEach((node) => normalizeNode(node));

  return output;
}

var normalizedOutput = normalizeInput(input);
console.log(normalizedOutput);
