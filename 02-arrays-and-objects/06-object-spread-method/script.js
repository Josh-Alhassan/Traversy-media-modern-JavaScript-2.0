let x;

// Create objct using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

// Objet Nesting
const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};

x = person.address.coords.lat

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// Spread Operator
const obj3 = {...obj1, ...obj2};
x = obj3

// Samw as using ... is the assign()
const obj4 = Object.assign({}, obj1, obj2)
x= obj4

// Arrays of objects
const todos = [
    {id: 1, name: "Buy milk"},
    {id: 2, name: "Pickup kids from school"},
    {id: 3, name: "Take out trash"},
]

x = todos[0].name

// Get array of object keys
x = Object.keys(todo);

// Get length of an Object
x = Object.keys(todo).length;

// Get arrays of object values
x = Object.values(todo);

// Get array of object key/value pairs
x = Object.entries(todo);

// Check if object has a property
x = todo.hasOwnProperty("age")
console.log(x)