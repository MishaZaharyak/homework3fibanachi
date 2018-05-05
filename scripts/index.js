let userNumber = +prompt('enter your number','');


// function fibonacciLoop(userNumber) {
    
//     let numFib1 = 1;
//     let numFib2 = 1;
//     for (let i = 3; i <= userNumber; i++) {
//         [numFib1, numFib2] = [numFib2, numFib1 + numFib2];
//     }
//     return document.write('Loop method : ' + numFib2 + '<br>');
// }
// fibonacciLoop(userNumber);

function fibonacciRecursion(userNumber) {

    if(userNumber <= 1 || userNumber >= 41) {
      return userNumber;
    } else {
      return fibonacciRecursion(userNumber - 1) + fibonacciRecursion(userNumber - 2);
    }
}
document.write(`Recursion method : ` + fibonacciRecursion(userNumber) + '<br>');

// function fibonacciArrey(userNumber){
    
//     let arrey = [1, 1];
//     let i = 3;
//     let answer;
//     for (i; i <= userNumber; i++) {
//         arrey[2] = arrey[0] + arrey[1];
//         arrey[0] = arrey[1];
//         arrey[1] = arrey[2];
//     }
//     answer = document.write('Arrey method : ' + arrey.pop());
//     return answer;
// }
// fibonacciArrey(userNumber);

