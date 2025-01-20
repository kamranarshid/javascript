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
  console.log(user.name);
});

/*
Key Differences Between WeakMap/WeakSet and Map/Set
Feature	                WeakMap	                WeakSet	                      Map	                    Set
Keys/Values	        Object keys, any value	    Objects only	              Any keys, any values	Any values
Garbage Collection	Keys held weakly	        Objects held weakly	          No automatic removal	No automatic removal
Iteration Support	Not iterable	            Not iterable	              Iterable	            Iterable
Use Cases	Object metadata	Temporary           object refs	                  General-purpose	        General-purpose

*/
