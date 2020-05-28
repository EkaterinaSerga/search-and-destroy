"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (array[0] === target) {
    return true;
  }

  //split the array in half
  const leftHalf = array.slice(0, Math.floor(array.length / 2));
  const rightHalf = array.slice(Math.floor(array.length / 2));

  if (leftHalf.length === 0 || rightHalf.length === 0) {
    return false;
  }

  if (target >= rightHalf[0] && rightHalf.length !== 0) {
    return binarySearch(rightHalf, target);
  } else if (target > leftHalf[0] && leftHalf.length !== 0) {
    return binarySearch(leftHalf, target);
  } else {
    return false;
  }
};

module.exports = binarySearch;

//ASSUMPTIONS:
// - is target an integer?
// - our array is ordered!
// - is array ordered in the order on binary search tree ADT?
// - array only holds integer values
// - array is not an empty array (holds at least one value)

//EDGE CASES:
// - if array.length === 1 and array[0] !== target, we return FALSE
// - if array.length === 1 and array[0] === target, we return TRUE
// - if array.length > 1 (if the has a LEFT or/and RIGHT), then we search either the left or right if the target is < || > node value relatively

//APPROACH:
// - do I need to eliminate certain elements? If the target is less or more than the root of the tree I'd inspect the left or right side of the tree

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/
