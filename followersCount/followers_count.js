let count = 0;

function increaseCount() {
    count++; // Increment the count by 1
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function checkCountValue(){
    if(count == 10){
        alert("Your followers count is 10");
    } else if(count == 20){
        alert("Your followers count is 20");
    }
}

