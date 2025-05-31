// Primitive datatype(Refrence can't be directly allocated , you'll get a copy)

// 7 types : String, Number, Boolean , null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 636123612939222222n




// Reference (Non Primitive) (Reference can be directly allocated)

// Array , Objects, Functions

const heros = ["batman" , "superman", "flash"]
let myObj ={
    name: "Deep",
    age: 22
}

const myFunction = function() {
    console.log("Hello world");
    
}

console.log(typeof id)