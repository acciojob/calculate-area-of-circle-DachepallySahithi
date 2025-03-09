 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius =parseFloat(prompt("Enter the radius of the circle:"));
	 if (isNan(radius) || radius <= 0) {
		 alert("Please enter a valid positive number for the radius.");
        return; 
	 	
	 }
	 let area = Math.PI * Math.pow(radius, 2);
	 let roundedArea = area.toFixed(2);

    // Display the result to the user
    alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
}
	
            // write you code here and display the result to the user
           
calculateArea();
