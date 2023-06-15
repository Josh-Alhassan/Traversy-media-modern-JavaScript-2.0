// Function to retrieve data from an endpoint using XMLHttpRequest
function getData(endpoint, cb) {
    const xhr = new XMLHttpRequest();

    // Set up a GET request to the specified endpoint
    xhr.open('GET', endpoint);

    // Define the callback function to handle the response
    xhr.onreadystatechange = function () {
        // Check if the request has been completed and the response status is successful
        if (this.readyState === 4 && this.status === 200) {
            // Parse the response as JSON and pass it to the callback function
            cb(JSON.parse(this.responseText));
        }
    }

    // Delay the request by a random time between 1 to 4 seconds
    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
}

// Example usage of the getData function to retrieve movie, actor, and director data
getData('./movies.json', (data) => {
    console.log(data);
    getData('./actors.json', (data) => {
        console.log(data);
        getData('./directors.json', (data) => {
            console.log(data);
        });
    });
});
