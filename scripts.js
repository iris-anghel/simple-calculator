var num1 = document.getElementById("firstInput");
var num2 = document.getElementById("secondInput");
var output = document.getElementById("result");

var addButton = document.getElementById('addButton');
var subButton = document.getElementById('subtractButton');
var timButton = document.getElementById('timesButton');
var divButton = document.getElementById('divideButton');

addButton.addEventListener('click', add);
subButton.addEventListener('click', subtract);
timButton.addEventListener('click', times);
divButton.addEventListener('click', divide);
clearButton.addEventListener('click', clear);

function add() {
    var a =  parseInt(num1.value);
    var b = parseInt(num2.value);
    var result = a + b;
    output.innerHTML = result;
    }
        
function subtract() {
    var a =  parseInt(num1.value);
    var b = parseInt(num2.value);
    var result = a - b;
    output.innerHTML = result;
    }
        
function times() {
    var a = parseInt(num1.value);
    var b = parseInt(num2.value);
    var result = a * b;
    output.innerHTML = result;
    }
        
function divide() {
    var a =  parseInt(num1.value);
    var b = parseInt(num2.value);
    var result = (a / b).toFixed(1);
    output.innerHTML = result;
    }
        
function clear() {
    output.innerHTML = "";
    }

