/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = "cat";
animal["name"] = "Steve"; 
animal["noises"] = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = "mew mew";
noises.unshift("new noise at the front");
noises.push("prrr");
noises.push("a noise that should be at the back")

console.log(noises.length);
console.log(noises[length-1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
animal["noises"].push("sqwuaaaak!");

console.log(animal);
console.log(animal["noises"]);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    Dot notation to access literal keys (vs keys as parameters) or bracket
 *    notation to access them more abstractly. 
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * through length or hard coding. 
 * 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);

console.log(animals);

var duck = {
  species: "duck",
  name: "jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
}

var squid = {
  species: "squid",
  name: "Bill",
  noises: ["squish", "slurp", "sneeze", "clack"]
}

var squirrel = {
  species: "squirrel",
  name: "P-Nut",
  noises: ["chirp", "skutter", "scramble", "sneeze"]
}

animals.push(duck);
animals.push(squid);
animals.push(squirrel);

console.log(animals);
console.log(animals.length)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I am going to choose to make the friend list an array because I believe it
// * will be a homogenous list of object or string data types, so will not need the complexity
// * of an object on its own. 
// I
// O
// C A big constraint seems to be that we can't do everying in one function
//  They want getRandom to return an index. This makes sense to have a 
//  reusable random animal index

var friends = [];

function getRandom(animals){
    let randomIndex = Math.floor(Math.random() * animals.length);
    
    return randomIndex;
}

// once we have this index, we have to take the name value from the object at 
// the index in animals (iirc, this was put together in prev steps...)
// and add that to friends.
function friendsListNamePlace(script){
    let animalIndex = script(animals);
    console.log("My animal Index: " + animalIndex);
    friends.push(animals[animalIndex].name);
}
friendsListNamePlace(getRandom);
console.log("my friends array: " + friends);

function friendsListArrPlace(script){
    let animalIndex = script(animals);
    Object.defineProperty(animals[animalIndex], "friends",{value: friends});
    console.log(animals[animalIndex]); 
}
friendsListArrPlace(getRandom);
// friends.push(animals[indexedAnimal]["name"]);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}