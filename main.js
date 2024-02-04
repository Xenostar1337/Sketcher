
let sizeCheck = 10;
//make a grid function
function createGrid(sizeCheck) {
    var grid = document.querySelector(".gridContainer");// Get gridContainer by its class
    grid.innerHTML = ''; // Clear content inside gridContainer
    for (var i = 0; i < sizeCheck * sizeCheck; i++) { //loop squared     
        var newDiv = document.createElement('div');  // Create a new div element 
        newDiv.classList.add('gridItem');  // Give new div a class
        newDiv.style.width = (960 / sizeCheck) + 'px';//set size of pixel based on how many requested
        newDiv.style.height = (960 / sizeCheck) + 'px';
       
        grid.appendChild(newDiv); // Put new div into the gridContainer
    }

    // Add mouseover listener to divs with the class 'gridItem'
    var gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            //set random colors from predefined array
            let colors = ["red", "blue", "pink", "purple", "yellow", "orange", "lightgreen", "lightblue", "lime", "magenta"];
            let randoNum = Math.floor(Math.random() * colors.length);
            let colorChange = colors[randoNum];
            //set random colors extensively
            var randomColor = 'rgb(' +
              Math.floor(Math.random() * 256) + ',' +
              Math.floor(Math.random() * 256) + ',' +
              Math.floor(Math.random() * 256) + ')';

            item.style.backgroundColor = randomColor;
        });
    });
}

// Add event listener for button click
const restartButton = document.querySelector('#sizeChange');
restartButton.addEventListener('click', function() {   
    var userInput = prompt("Enter a new size: 2-100"); // ask for new size
    if (userInput !== null && userInput < 100 && userInput > 2) {
        sizeCheck = userInput;
    } else {
        alert("Please enter a valid positive number for the size."); // Show an error message if the input is not a valid number
    }    
    createGrid(sizeCheck);// Recreate the grid after getting the new size
});

//call make a grid function on DOM load
document.addEventListener('DOMContentLoaded', function() {
    createGrid(sizeCheck);
});
