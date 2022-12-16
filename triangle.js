// let size = 8;
//         let board = "";

//         for (let x = 0; x <= size; x++) {
//           for (let y = 0; y <= size; y++) {
//             if((x+y)%2 == 0){
//                 board += " ";
//             }else{
//                 board += "#";
//             }
//           }
//           board += "\n";
//         }

//         console.log(board);

let hummus = (factor) => {
  let ingredient = (amount, unit, name) => {
    let ingredientAmount = factor * amount;

    if(ingredientAmount > 1) {
      unit += 1;
    };

    console.log(`${ingredientAmount} ${unit} ${name}`);
  }
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}

console.log(hummus(2));

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result
}

// console.log(power())
power(4)
