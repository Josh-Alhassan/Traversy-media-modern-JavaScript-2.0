let x;

// creating an object
const person = {
    name: 'Joshua Abel',
    age: 24,
    isAdmin: true,
    address: {
        street: 'Area 3 no 7',
        city: 'Lokoja',
        state: 'Kogi State',
    },
    hobbies: ['music', 'sports'],

};

// Accessing Object Properties
x = person.name; // dot notation
x = person['age']; // square bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updateing properties
person.name = "John Doe";
person['age'] = "25";

// Deleting properties
delete person.age

// Create a new property
person.hasChildren = false;

// Add function
person.greet = function() {
    console.log(`Hello my name is ${this.name}`);
}

person.greet();

// Keys with multiple words
const person2 = {
    'first name': 'Joshua Codescript',
    'last name': 'Alhassan Vitafoam',
};

x = person2['first name']

x = person2;

console.log(x)