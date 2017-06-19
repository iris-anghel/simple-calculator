var num1 = document.getElementById("firstInput");
var num2 = document.getElementById("secondInput");
var output = document.getElementById("result");
var pDescription = document.getElementById("description");

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
    pDescription.innerHTML = ("You must add " + a + " and " + b + ". " + "You start counting from the largest number, which is " + Math.max(a, b) + ". " + "Then you add the smallest number, which is " + Math.min(a, b) + ". " + "The result is " + result + ".");
    }
        
function subtract() {
    var a =  parseInt(num1.value);
    var b = parseInt(num2.value);
    var result = a - b;
            
    output.innerHTML = result;
    pDescription.innerHTML = ("You must subtract " + b + " from " + a + ". " + "Assuming you entered positive integers, you must subtract the smallest number, which is " + Math.min(a, b) + ", from the largest number, which is " + Math.max(a, b) + ". " + "The result is " + result + ".");
    }
        
function times() {
    var a = parseInt(num1.value);
    var b = parseInt(num2.value);
    var result = a * b;
            
    output.innerHTML = result;
    pDescription.innerHTML = ("You multiplied " + a + " by " + b + ". " + "The result is " + result + ".");
    }
        
function divide() {
    var a =  parseInt(num1.value);
    var b = parseInt(num2.value);
    var result = (a / b).toFixed(1);
            
    output.innerHTML = result;
    pDescription.innerHTML = ("You divided " + a + " by " + b + ". " + "The result is " + result + ".");
    }
        
function clear() {
    document.getElementById("calcForm").reset();
    }