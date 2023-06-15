// Get the joke element and joke button from the HTML
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

// Function to generate a Chuck Norris joke
const generateJoke = () => {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set up the request with the Chuck Norris API
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    // Define the callback function to handle the response
    xhr.onreadystatechange = function () {
        // Check if the request has been completed
        if (this.readyState === 4) {
            // Check if the response status is successful
            if (this.status === 200) {
                // Parse the response as JSON and update the joke element with the joke value
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
            } else {
                // Display an error message if the request was not successful
                jokeEl.innerHTML = 'Something went wrong (Not Funny)';
            }
        }
    };

    // Send the request to retrieve a Chuck Norris joke
    xhr.send();
};

// Add an event listener to the joke button to generate a joke when clicked
jokeBtn.addEventListener('click', generateJoke);

// Generate a joke when the DOM content has finished loading
document.addEventListener('DOMContentLoaded', generateJoke);
