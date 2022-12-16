// Optional Argument

function square(x) {return x * x};
console.log(square(4, true, 'hedgehog'));
// 16

// Yet when we call it with three para, the lang doesn't complain
// - ignores the extra arguments (you pass too many, the extra ones are ignored || you pass too few the missing para get the value undefined)
// - computes the square of the first one  

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10))  
// -10
console.log(minus(10, 5));  
//5

// If you write an = operator after a para, the value of that expression will replace the argument when it is not given
// This is also called default and rest parameters 

// function power(base, exponent = 2) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(power(2));

// CLOSURE //Not yet

// RECURSION

// function power(base, exponent) {
//   if(exponent === 0) {
//     return 1;
//   }else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 3));

// I am not deeply understand this program

// function findSolution(target) {
//   function find(current, history) {
//     if(current == target) { //6 
//       return history;
//     }else if(current > target) {
//       return null;
//     }else {               //false
//       return find(current + 5, `(${history} + 5)`) || // ((1 * 3) + 5) * 3
//              find(current * 3, `(${history} * 3)`)
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(24));
// Note that this program doesn't necessarily find the shortest sequence of operations.

/*function min(a, b) {
  if(a > b) {
    return b;
  }else if(a < b) {
    return a;
  }
}*/

// console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10

// GROWING FUNCTION

// function printFarmInventory(cows, chickens) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//   }
//   console.log(`${cowString} Cows`);

//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// }

// printFarmInventory(7, 11);

// function printZeroPaddedWithLabel(number, label) {
//   let numberString = String(number);
//   while(numberString.length < 3) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, "Cows");
//   printZeroPaddedWithLabel(chickens, "Chickens");
//   printZeroPaddedWithLabel(pigs, "Pigs");
// }

// printFarmInventory(7, 11, 3);

function zeroPad(number, width) {
  let string = String(number);
  while(string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);

// Will never fully understand

// EXERCISE

// Minimum
// function  min(a, b) {
//   if(a < b) {
//     return a;
//   }else if(b < a) {
//     return b;
//   }
// }

// console.log(min(0, 10));  //10
// console.log(min(0, -10)); //-10

// RECURSION  
// function isEven(n) {
//   if (n == 0) return true
//   else if (n == 1) return false
//   else if (n < 0) return isEven(-n)
//   else return isEven(n-2);
// }

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", 'k'));