let count = 0;
function increaseCount(){
    count++;
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function checkCountValue(){
    if (count === 10){
        alert("Your instagram post gained 10 follwers! Congratulations");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
      }
}