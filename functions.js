/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 * 
 * I am going to choose to make the friend list an array because I believe it
 * will be a homogenous list of object or string data types, so will not need the complexity
 * of an object on its own. 
 */

// const { animals } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
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



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}