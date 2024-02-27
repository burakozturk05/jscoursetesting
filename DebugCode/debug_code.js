function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
                let result = multiply(num1, num2);
                let result1 = abstract(num1,num2);
                let result2 = addition(num1,num2);
                let result3 = dividing(num1,num2);
                let sonuc = `Sonuclar toplama : ${result2} + Cıkarma : ${result1} + Bolme : ${result3} + Carpma : ${result}`;

                // Display the result
                displayResults(sonuc);
            } else {
                displayResults('Please enter valid numbers');
            }
        }

        function multiply(a, b) {
            // Introduce a debugger statement to pause execution
            debugger;

            // Multiply the numbers
            return a * b;
        }
        function abstract(a, b){
            debugger;
            return a - b;
        }
        function addition(a, b){
            debugger;
            return a + b;
        }
        function dividing(a ,b){
            debugger;
            return a / b;
        }

        function displayResults(sonuc) {
            // Display the result in the paragraph element
            const resultElement = document.getElementById('sonuc');
            resultElement.textContent = sonuc;
        }