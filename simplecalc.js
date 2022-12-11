alert("Hello! Please enter two numbers.");


let a = Number(prompt("Please enter first number:"));
let b = Number(prompt("Please enter second number")); 
let operator; 
let operation; 
let result;
do {
    operator = prompt("Please select operation:\n + \n - \n * \n /");


switch(operator) {
    case "+":
        function add(a, b) {
            return a + b;  
        }
        operation = "addition";
        result = add(a,b);
        break;
    case "-":
        function subtract(a, b) {
            return a - b;  
        }
        operation = "subtraction"; 
        result = subtract(a, b)
        break;
    case "*":
        function multiply(a, b) {
            return a * b;  
        }
        operation = "multiplication";  
        result = multiply(a, b);
        break;
    case "/":
        function divide(a, b) {
            return a / b;  
        }
        operation = "division";;  
        result = divide(a, b);
        break;
    default:
        alert("Please select only the given operations");
        break;
}

} while (operator !== "+" && operator !== "-" &&  operator !== "*" &&  operator !== "/")


alert(`You inputted:\n ${a} as the first number,\n ${b} as the second number,\n and ${operation} for the operation.\n\n The result is ${result}.`);