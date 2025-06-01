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


const num = Number(456)
const anotherNum = Number(456)

console.log( num == anotherNum);

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

console.log(typeof anotherId)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (used in Primitive) , Heap (used in Non-Primitive)

let myName = "DeepKhanal"

let anothername = myName
anothername = "KhanalDeep"

console.log(myName);
console.log(anothername);



let userOne = {
    email: "deep@gmail.com",
    age: 22

}

let userTwo = userOne

userTwo.email = "flllas@google.com"

console.log(userOne.email);
console.log(userTwo.email);


