
if (1 > 0) {
  let ham = "ham"; // let is defined in here
  var ham2 = "ham";
}

console.log(`My favourite food is ${typeof sa}.`); // sa and ham don't have values here
console.log(`My favourite food is ${typeof ham}.`); // therefore, they are both undefined

let check = () => {
  let num = 10;               // let defined here as 10
  let again = () => {
    console.log(10 + num);    // this function is within, the block of the parent function
  }                            // therefore, the variable num will exist here too
  again();
}
check(); // ~20 is printed to the console

var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(function() {console.log(i);}); // each function is given a unique number
}                                         // this is because once the let "i" leaves this block
                                          // its value is then set in stone until changed outside

arr.forEach(function(arr){
  arr(); // prints 0 - 9 in the console
});
