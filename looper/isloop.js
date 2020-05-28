"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  if (linkedlist.tail.next === null) {
    return false;
  }

  let node = linkedlist.head;
  if (!node.previous) {
    node = node.next;
  } else {
    if (node.previous.next.value !== node.value) {
      return true;
    }
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;

//ASSUMPTIONS:
// - linked list is an object
// - the linked list has HEAD & TAIL
// - HEAD's previous is ALWAYS null;
// - the head and tail are nodes which have VALUE, PREVIOUS, NEXT
// - the value of each node is unique
// - DO NOT mutate any nodes on the list

//EDGE CASES:
// - IF tail's next !== null => return TRUE
// - IF tail's next === null => return FALSE

//APPROACH:
// - If node.previous.next !== node => THERE IS A LOOP (only works for doubly lists)
// - to check that: start with head then moving to it's next node until you reach the tail
