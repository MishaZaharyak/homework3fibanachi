let userNumber = +prompt('enter your number','');

let numFib1 = 1;
let numFib2 = 1;
let numFib3;

function getFibanacciNum(userNumber) {
    
for (let i = 3; i <= userNumber; i++) {
    numFib3 = numFib1 + numFib2;
    numFib1 = numFib2;
    numFib2 = numFib3;
   
}
    return numFib2;
}

document.write('Under number ' + '<b>' + userNumber + '</b>' + 
' the number of Fibonacci will be : ' + getFibanacciNum(userNumber) + `<br>`);


function fibNumber(userNumber) {

    if(userNumber <= 1 || userNumber >= 40) {
      return userNumber;
    } else {
      return fibNumber(userNumber - 1) + fibNumber(userNumber - 2);        
    }
}

document.write(`recurcia method : ` + fibNumber(userNumber));




// function fibonacciNum(userNumber) {
//     let fibo = [1, 1];
    
//     for (let i = 0; i < userNumber; i++) {
//         fibo.push(fibo[i - 1] + fibo[i - 2]);
        
//     }
//     return fibo.pop();
// }

// document.write(fibonacciNum());




//  function fibonacci(n) {
//      let array = [1, 1, 2];

//      for (let i = 3; i < n; i++) {
       
//          array[0] = array[1];
//          array[1] = array[2];
//          array[2] = array[0] + array[1];
        
//      }

//      return array[2];
//  }

//  document.write(fibonacci(n));

