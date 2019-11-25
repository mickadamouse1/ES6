console.log("Const and Let are the same except Const variables cannot be changed once initialised.");

// Declaring a object with let
let person = {
  name: "Jim"
};
console.log(person.name);
person.name = "Greg";
console.log(person.name);
person = {
  name: "Fridge"
};
console.log(person.name);

// Declaring a object with const
const person2 = {
  name: "Jim"
};
console.log(person2.name);
person2.name = "Greg";         // can change values of properties of const object
console.log(person2.name);
person2.age = 62;
console.log(person2.age);     // can add properties to a const object
person2 = {                   // Cannot change the object as a whole
  name: "Fridge"
};
console.log(person2.name);
