function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    
    // Check if the radius is a valid number and greater than zero
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return; 
    }

    let area = Math.PI * Math.pow(radius, 2);

    let roundedArea = area.toFixed(2);

    alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
}

// Call the function to execute
calculateArea();
