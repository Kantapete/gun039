
let x = 10;
var y = "Hello"
const z = 20.2;

//arr
const arr = [1, "Test", 3, 4, 5,];
const car = []
car[0] = "BMW";
car[1] = "Audi";
const fruit = new Array("Apple", "Banana", "Orange");
const profile = [[1, 2, 3], "name", "age"];

console.log(profile[0][1]);
console.log(fruit);

fruit.push("mango");
fruit.shift();
console.log(fruit);

arr.map((item) => {
    console.log(item);
});

const person = {
    firstname: "gun",
    lastname: "kann",
    age: 50,
    eyeColor: ["blue", "black"],
    fullname: function () {
        return this.firstname + " " + this.lastname
    }
};



person.adress = {
    street: "5th Avenue",
    city: "New York"
};

console.log(person.fullname());


//function    
function sub(a, b) {
    console.log(a - b);
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => a / b;

const result = mul(10, 20);
console.log(result);

document.getElementById("message1").innerHTML = "Hello World";