const library = [
    {
        title: "Krypton",
        author: "Superman",
        statuses: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Everybody hates Chris",
        author: "James Brown",
        statuses: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Stranger things",
        author: "Eleven",
        statuses: {
            own: true,
            reading: false,
            read: false,
        },
    }
]

// Step 2
library[0].statuses.read = true;
library[1].statuses.read = true;
library[2].statuses.read = true;

// Step 3
const {title: firstBook} = library[0];
console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON)
