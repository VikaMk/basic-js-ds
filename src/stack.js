const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(...array) {
		this.stack = [...array];
	}
	push(array) {
		return this.stack.unshift(array);
	}
	pop() {
		return this.stack.shift();
	}
	peek() {
		return this.stack[0];
	}
}

module.exports = {
  Stack
};
