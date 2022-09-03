// let addr = "";
// for(let i = 0; i < 4; i++) {
// addr += customer[`address${i}`] + "\n";
// }


// let o = {};
// // o inherits object methods from Object.prototype
// o.x = 1;
// // and it now has an own property x.
// let p = Object.create(o); // p inherits properties from o and Object.prototype
// p.y = 4;
// // and has an own property y.
// let q = Object.create(p); // q inherits properties from p, o, and...
// q.z = 3;
// // ...Object.prototype and has an own property z.
// let f = q.toString();
// // toString is inherited from Object.prototype
// q.x + q.y

let unitcircle = { r: 1 };
// An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1;
// c defines two properties of its own
c.r = 2;
// c overrides its inherited property
unitcircle.r

// console.log(unitcircle);
// console.log(unitcircle.r);
// console.log(c);
// console.log(p.y);
// console.log(q);
// console.log(q.z);
// console.log(f);
// console.log(q.x + q.y);

// let o = {x: 1, y: 2, z: function () {return 3}, $: "hi", w:[], v:{a:33, b:"name"}};

// o.propertyIsEnumerable("toString")
// for(let p in o) {
// // console.log(p);
// }

// for(let p in o) {
    // if (!o.hasOwnProperty(p)) console.log(`if1`);;
    // }
    // // Skip inherited properties
    // for(let p in o) {
    // if (typeof o[p] === "function") console.log("if2");; // Skip all methods
    // }

// console.log(Object.keys(o), Object.getOwnPropertyNames(o), Object.getOwnPropertySymbols(o), Reflect.ownKeys(o));

// const object1 = {
//     property1: 42
//   };
  
//   Object.seal(object1);
//   object1.property1 = 33;
//   console.log(object1.property1);
//   // expected output: 33
  
//   delete object1.property1; // cannot delete when sealed
//   console.log(object1.property1);
//   // expected output: 33
  

// let s = JSON.stringify(o);
// // s == '{"x":1,"y":{"z":[false,null,""]}}'
// let p = JSON.parse(s);
// let s = { x: 1, y: 1 }.toString();
// console.log(s);
// console.log(p);
// let str="{jhgfs ftvhjk}"
// console.log(str);


// const PROPERTY_NAME = "p1";
// function computePropertyName() { return "p" + 2; }
// let p = {
// [PROPERTY_NAME]: 1,
// [computePropertyName()]: 3
// };
// p.p1 + p.p2

// const extension = Symbol("my extension symbol");
// console.log(extension);
// let o = {
// [extension]: { /* extension data stored in this object */ }
// };
// o[extension].x = 0;

// let position = { x: 0, y: 0 };
// let dimensions = { width: 100, height: 75 };
// let rect = { ...position, ...dimensions };
// rect.x + rect.y + rect.width + rect.height

// let o = { x: 1 };
// let q = { ...o};
// q.x

// const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// let letters = [..."hello world"];
// let l= [...new Set(letters)]
// console.log(letters);

let a = ["world"];
let value = a[0];
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
console.log(a);

