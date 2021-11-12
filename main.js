//FIRST, DECLARE VARIABLES

const numberBtns = document.querySelectorAll(".button");
const displayScreen = document.querySelector(".display");
const operatorsBtns = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const equal = document.querySelector(".equal");

//MAKE THE NUMBERS PRESSED APPEAR ON THE SCREEN

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (event) => {
    let numberCurrent = event.target.value;
    displayScreen.innerHTML += numberCurrent;
    console.log(displayScreen);
  })
});

// CLEAR THE SCREEN FUNCTION

const clearScreen = () => {
  displayScreen.innerHTML = "";
};
clear.addEventListener("click", clearScreen);

//  STORE THE FIRST INPUTED NUMBER  AND TRANSFORM IT INTO A NUMBER

//DEFINE THE FUNCTIONS FOR THE MAIN OPERATIONS

const addNumbers = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber
};

const substractNumbers = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber
};

const multiplyNumbers = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber
};

const divideNumbers = (firstNumber, secondNumber) => {
  return firstNumber / secondNumber
};

//LOOP THROUGH THE OPERATORS

//HOW DO I GET A VALUE FROM THE OPERATOR BUTTON

//HOW DO I GET AND STORE A VALUE FROM THE OPERATOR BUTTON
let numberOne;
let operator;
operatorsBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    numberOne = parseInt(displayScreen.innerHTML);
    console.log(numberOne);
    clearScreen();
    operator = operatorBtn.value;
    console.log(operator);

  });
})

//HOW DO I STORE THE SECOND NUMBER

//WHEN DO I NEED TO STORE THE SECOND NUMBER (NOTE--ONCE THE "EQUAL BUTTON" WAS PRESSED --)

//HOW DO I ACTUALLY IMPLEMENT THE MATH (--CALL FUNCTION FOR EVERY OPERATION--)

//HOW DO I DISPLAY THE RESULT ON THE SCREEN

let numberTwo;
let result;
equal.addEventListener(("click"), () => {
  numberTwo = parseInt(displayScreen.innerHTML)
  console.log(numberTwo);
  if (operator == "+") {
    result = addNumbers(numberOne, numberTwo);
    console.log(result);
    displayScreen.innerHTML = result;
  } else if (operator == "-") {
    result = substractNumbers(numberOne, numberTwo);
    console.log(result);
    displayScreen.innerHTML = result;
  } else if (operator == "*") {
    result = multiplyNumbers(numberOne, numberTwo);
    console.log(result);
    displayScreen.innerHTML = result;
  } else if (operator == "/") {
    result = divideNumbers(numberOne, numberTwo);
    console.log(result);
    displayScreen.innerHTML = result;
  }
});

//TRY TO IMPROVE IT IF YOU HAVE TIME
