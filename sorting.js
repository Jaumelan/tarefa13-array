//get numbers from user
let arrayOfNumbers = [];
function createArray() {
    arrayOfNumbers.length = 0;
    let userFirstNumber = document.querySelector('input[name="firstNumber"]').value;
    let userSecondNumber = document.querySelector('input[name="secondNumber"]').value;
    let userThirdNumber = document.querySelector('input[name="thirdNumber"]').value;
    let userFourthNumber = document.querySelector('input[name="fourthNumber"]').value;
    arrayOfNumbers[0] = userFirstNumber;
    arrayOfNumbers[1] = userSecondNumber;
    arrayOfNumbers[2] = userThirdNumber;
    arrayOfNumbers[3] = userFourthNumber;
    
}
console.log(arrayOfNumbers);

//Reverse order of the array
function reverseOrder() {
  let arrayReversed = [];
  for (let i=0; i<=arrayOfNumbers.length; i++) {
    arrayReversed[3-i] = arrayOfNumbers[i];
  } 
    document.getElementById("firstReverse").innerHTML = arrayReversed[0];
    document.getElementById("secondReverse").innerHTML = arrayReversed[1];
    document.getElementById("thirdReverse").innerHTML = arrayReversed[2];
    document.getElementById("fourthReverse").innerHTML = arrayReversed[3];

}

//increasing order of the array
function increasingOrder() {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        for (let j = 0; j < arrayOfNumbers.length; j++) {
            if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
                let tmp = arrayOfNumbers[j];
                arrayOfNumbers[j] = arrayOfNumbers[j + 1];
                arrayOfNumbers[j + 1] = tmp;
            }
        }
    }

    document.getElementById("firstIncreasing").innerHTML = arrayOfNumbers[0];
    document.getElementById("secondIncreasing").innerHTML = arrayOfNumbers[1];
    document.getElementById("thirdIncreasing").innerHTML = arrayOfNumbers[2];
    document.getElementById("fourthIncreasing").innerHTML = arrayOfNumbers[3];
}