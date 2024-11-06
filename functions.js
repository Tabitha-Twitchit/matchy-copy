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
 * will be a homogenous list of object data types, so will not need the complexity
 * of an object on its own. 
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];

function getRandom(animals){
    // initialize a variable, assigning it a random number
    // specifically using the "floor" method makes it an int rather than a float
    // let indexedAnimal = Math.floor(Math.random() * animals.length);
    // console.log(indexedAnimal);
    // return indexedAnimal;
    // I'm hazy here. The instructions specifically say to return an index, but 
    // this could be done without declaring the variable, and referencing it,
    // possibly through adding in a return function. Like so:
    return Math.floor(Math.random() * animals.length);
}
// console.log(indexedAnimal);

// friends.push(animals[indexedAnimal]["name"]);
// console.log("my friends array: " + friends);



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