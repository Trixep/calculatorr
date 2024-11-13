calculator = document.getElementById('calc-container');
prevDisplay = document.getElementById('operation-display').innerHTML;
display = document.getElementById('display').innerHTML;
var currentNumber = "0";
var currentCalculate = [];

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
}

function ResetAll(){
    prevDisplay = "";
    currentNumber = "0";
    document.getElementById('display').innerHTML = currentNumber;
}

function Pow(){

}

function Devide(){

}

function Multiply(){

}

function Substract(){
    ChangeCurrentCalculate("-");
}

function Add(){

}

function ChangeShit(){

}

function Float(){
    
}

function Calculate(){

}

function ChangeCurrentNumber(){

    if( currentNumber.charAt( 0 ) === '0' )
        currentNumber = currentNumber.slice( 1 );

    document.getElementById('display').innerHTML = currentNumber;
}

function ChangeCurrentCalculate(action){
    currentCalculate += currentNumber;
    currentCalculate += action;
    currentNumber = "0";
    document.getElementById('display').innerHTML += action;
    console.log(currentCalculate);
}