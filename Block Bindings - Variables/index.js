var buying = true;
var money = 10;

if (buying) {
  let money = 5;
  console.log(`let money: ${money}`);
  money = checkMoney(money);
  console.log(`let money after buying: ${money}`);
}
console.log("")
console.log(`var money: ${money}`);
money = checkMoney(money);
console.log(`var money after buying: ${money}`);

function checkMoney(money) {
  if (money >= 5) {
    console.log("Cost: 5");
    return money - 5;
  } else {
    console.log("Can't Buy!");
  }
}

console.log("Const and Let are the same except Const variables cannot be changed once initialised.");
