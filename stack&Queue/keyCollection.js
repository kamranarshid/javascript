//set

let events = new Set();
// let event1 = { type: "concert", day: "Saturday" };
// let event2 = { type: "book launch", day: "Wednesday" };
// let event3 = { type: "conference", day: "Thursday" };
// let event4 = { type: "meet up", day: "Monday" };
// // Let's add each event to the set
// events.add(event1);
// events.add(event2);
// events.add(event3);
// events.add(event4);
// console.log(events.size); // 4
// console.log(events.has(event1)); // true
// for (let item of events.values()) {
//   console.log(item);
// }

// console.log(events.has(event2));

// events.delete(event3);
// for (let value of events) {
//   console.log(value);
// }
//=======================================================
// Method 1

// let users = ["John", "Murray", "Jane", "Jane", "Anne"];

// function unique(users) {
//   return Array.from(new Set(users));
// }

// console.log(unique(users));

// // Method 2

// let set = new Set(users);
// let arrFromSet = [...set];

// console.log(arrFromSet);

//array vs set affencency test
//=======================================================
// let arr = [];
// let set = new Set();
// let users = [
//   "John",
//   "Murray",
//   "Jane",
//   "Jane",
//   "Anne",
//   "John",
//   "Murray",
//   "Jane",
//   "Jane",
//   "Anne",
// ];

// for (let i = 0; i < users.length; i++) {
//   arr.push(users[i]);
//   set.add(users[i]);
// }

// let result;

// console.time("Array");
// result = arr.indexOf("Anne") !== -1;
// console.timeEnd("Array");

// console.time("Set");
// result = set.has("Anne");
// console.timeEnd("Set");
//=======================================================
//maps
let users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Murray",
  },
  {
    id: 3,
    name: "Jane",
  },
  {
    id: 4,
    name: "Jane",
  },
  {
    id: 5,
    name: "Anne",
  },
];

let userNames = users.map(function (user) {
  //console.log(user.name);
});

//Example Usage of WeakMap
let weakMap = new WeakMap();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

// Adding key-value pairs
weakMap.set(user1, "Admin");
weakMap.set(user2, "Editor");

console.log(weakMap.get(user1)); // Output: "Admin"

// Deleting a reference
user1 = null; // The key-value pair is now eligible for garbage collection

// The key-value pair with user1 is automatically removed by the garbage collector
console.log(weakMap.has(user1)); // Output: false
console.log(weakMap.get(user2)); // Output: "Editor"

//weakset

let weakSet = new WeakSet();

let user3 = { name: "Alice" };
let user4 = { name: "Bob" };

// Adding objects to WeakSet
weakSet.add(user3);
weakSet.add(user4);

console.log(weakSet.has(user3)); // Output: true

// Deleting a reference
user4 = null; // The object is now eligible for garbage collection

// The object with user2 is automatically removed by the garbage collector
console.log(weakSet.has(user4)); // Output: false

/*
Key Differences Between WeakMap/WeakSet and Map/Set
Feature	                WeakMap	                WeakSet	                      Map	                    Set
Keys/Values	        Object keys, any value	    Objects only	              Any keys, any values	Any values
Garbage Collection	Keys held weakly	        Objects held weakly	          No automatic removal	No automatic removal
Iteration Support	Not iterable	            Not iterable	              Iterable	            Iterable
Use Cases	Object metadata	Temporary           object refs	                  General-purpose	        General-purpose

*/
