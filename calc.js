calculator = document.getElementById('calc-container');
prevDisplay = document.getElementById('operation-display').innerHTML;
display = document.getElementById('display').innerHTML;
var currentNumber = "0";
var currentCalculate = [];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

openCalc = () => {
    calculator.style.visibility = 'visible';
}

closeCalc = () =>{
    calculator.style.visibility = 'hidden';
}

function ButtonNumber(number){
    currentNumber += number;
    ChangeCurrentNumber();
    console.log(currentNumber);
}

function Reset(){
    currentNumber = "0";
    document.getElementById('display').innerHTML = currentNumber;
    currentCalculate = [];
}

function ResetAll(){
    currentNumber = "0";
    document.getElementById('operation-display').innerHTML = "";
    document.getElementById('display').innerHTML = currentNumber;
    currentCalculate = [];
}

function Pow(){

}

function Devide(){
    ChangeCurrentCalculate("/");
}

function Multiply(){
    ChangeCurrentCalculate("*");
}

function Substract(){
    ChangeCurrentCalculate("-");
}

function Add(){
    ChangeCurrentCalculate("+");
}

function ChangeShit(){
    if (currentCalculate[0] == "-"){
        arr.shift();
    }
    else
}

function Float(){
    if (currentNumber.includes(".")){
        return;
    }
    if (currentNumber == ""){
        return;
    }

    currentNumber += ".";
    RefreshDisplay();
}

function Calculate(){

}

function ChangeCurrentNumber(){

    if( currentNumber.charAt( 0 ) === '0' && currentNumber.length == 2 && !currentNumber.includes(".")){
        currentNumber = currentNumber.slice( 1 );
    }

    RefreshDisplay();
}

function ChangeCurrentCalculate(action){
    if (action == currentCalculate[currentCalculate.length - 1] && currentNumber == "")
    {
        return;
    }

    if (numbers.includes(currentCalculate[currentCalculate.length - 1]) == false && currentNumber == "")
    {
        currentCalculate[currentCalculate.length - 1] = action;
        RefreshDisplay();
        return;
    }

    currentCalculate.push(currentNumber, action);
    currentNumber = "";
    document.getElementById('display').innerHTML += action;
    console.log(currentCalculate);
    RefreshDisplay();
}

function RefreshDisplay(){
    let displayString = "";

    for (let i = 0; i < currentCalculate.length; i++)
    {
        displayString += currentCalculate[i];
    }
    displayString += currentNumber;
    document.getElementById('display').innerHTML = displayString;
}