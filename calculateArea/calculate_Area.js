let length1;
let width;

function calculateArea() {
    length1 = parseFloat(document.getElementById('length1').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length1 * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;   
}
   
