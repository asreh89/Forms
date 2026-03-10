// Retrieve the form element
const form = document.getElementById("myForm");

// Retrieve the input field
const inputField = document.getElementById("inputField");

// Add event listener for form submission
form.addEventListener("submit", function(event) {

    // Regular expression for alphanumeric characters only
    const regex = /^[a-zA-Z0-9]+$/;

    // Get the value from the input field
    const value = inputField.value;

    // Validate the input using regex
    if (!regex.test(value)) {

        // Prevent form submission
        event.preventDefault();

        // Display error message
        alert("Error: Please enter only letters and numbers.");

    } else {

        // Display confirmation message
        alert("Success! Your input is valid.");

    }

});