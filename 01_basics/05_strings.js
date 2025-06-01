const name = "Deep"
const repoCount = 10

//console.log(name + repoCount + "Value"); outdated ,dont use

console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `)

const gameName = new String("Dkdkdk-dk")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 6)
console.log(anotherString);

const newStringOne = "   Deep   "
console.log(newStringOne);
console.log(newStringOne.trim()); ///Remove the space


const url = "https://deep.com/deep%20khanal"

console.log(url.replace('%20','-'));

console.log(url.includes('deep'))
console.log(url.includes('pppp'))

console.log(gameName.split('-'));



