// const stack = [];
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.pop()); // [1, 2, 3]
// console.log(stack); // [1, 2, 3]
// console.log(stack.pop()); // 3

//Maximize efficiency of stack:0(1) time complexity for push, pop, peek, isEmpty

class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(value) {
    this.stack.push(value);
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    this.length--;
    return this.stack.pop();
  }

  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }

  getSize() {
    return this.length;
  }

  getTop() {
    return this.stack[this.length - 1];
  }

  getBottom() {
    return this.stack[0];
  }
}

// const myStack = new Stack();
// myStack.push("a");
// myStack.push("b");
// myStack.push("c");

// console.log(myStack.getSize());
// console.log(myStack.pop());
// console.log(myStack.getSize());
// console.log(myStack.getTop());

//build queue for queue -enqueue and dequeue using array

class queueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new queueNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    const removedNode = this.first;
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return removedNode;
  }
}

// const myQueue = new Queue();
// myQueue.enqueue("a");
// myQueue.enqueue("b");
// myQueue.enqueue("c");
// myQueue.enqueue("d");
// console.log(myQueue.length);
// console.log(myQueue.first.value);
// console.log(myQueue.last.value);
// myQueue.dequeue();
// console.log(myQueue.length);
// console.log(myQueue.first.value);
// console.log(myQueue.last.value);

//map vs forEach

const myAwesomeArray1 = [5, 4, 3, 2, 1];

console.log(myAwesomeArray1.map((x) => x * x));

const myAwesomeArray2 = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
];

myAwesomeArray2.forEach((element) => console.log(element.name));

const myAwesomeArray = [1, 2, 3, 4, 5];

const startForEach = performance.now();
myAwesomeArray.forEach((x) => (x + x) * 10000000000);
const endForEach = performance.now();
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`);

const startMap = performance.now();
myAwesomeArray.map((x) => (x + x) * 10000000000);
const endMap = performance.now();
console.log(`Speed [map]: ${endMap - startMap} miliseconds`);
