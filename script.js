//your JS code here. If required.
// script.js
function secondHighest(arr) {
  // Check if the array has less than 2 elements or if all elements are the same
  if (arr.length < 2 || new Set(arr).size === 1) {
    return -Infinity;
  }

  // Sort the array in descending order
  arr.sort((a, b) => b - a);

  // Find the second highest element
  let secondHighest = arr[1];

  return secondHighest;
}

// Test cases
console.log(secondHighest([1, 2, 3, 4, 5])); // Output: 4
console.log(secondHighest([5, 5, 5, 5, 5])); // Output: -Infinity
console.log(secondHighest([6, 4, 8, 2, 9])); // Output: 8
console.log(secondHighest([7])); // Output: -Infinity
