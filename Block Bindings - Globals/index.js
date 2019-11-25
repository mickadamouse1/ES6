var ham = "ham";
let beef = "beef"; // let is a variable that is of block level,
                    // therefore if it is global then it will be useable everywhere
                    // block = {...} (anything within two curley brackets)

if (ham = "ham") {
  console.log(ham, beef); // beef can be seen here

  let sauce = "spicy";
}

const check = () => {
  console.log(ham, beef); // even here

  console.log(sauce); // however, sauce cannot be seen
                      // because it is only defined in the "if" block
}

check();
