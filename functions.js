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
 *
 */
// const { animals } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, animalToSearch){
    console.log(animalToSearch);
    console.log(arr);
    
    for (let i = 0; i < arr.length; i++ ){
        if(arr[i].name === animalToSearch){
            // console.log(animals[i]);
            return arr[i];
        } 
    } 
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    console.log(animals);
    console.log(replacement);
    console.log(name);
    
    for (let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            // animals.splice([i], 1, replacement);
            animals[i] = replacement;
       }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){

    for (let i = 0 ; i < animals.length ; i++){
        if(animals[i].name === name){
            animals.splice([i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    // establish a bool outside the loop to check for later
    // (tried executing logic in the loop, but ofc this repeats for the loop
    // length causing weird outcomes that camouflage in the test conditions
    // you can ofc remember to check the test conditions to see if the number
    //  of errors align with the text cond vs the loop iterations.)
    let isUnique = true;

    // if animal has a name of length greater than 0 && species name same
    if(animal.name.length > 0 && animal.species.length > 0){
        // then loop through the animals array and check that no one else has that name
        for(let i = 0; i < animals.length ; i++ ){
            // if they match...
            if(animal.name ===  animals[i].name){
                // assign our isUnique bool to false.
                isUnique = false;
                // use a BREAK statement to stop looping.
                break;     
            }
        }
        // Then OUTSIDE the for loop but INSIDE the larger IF statement
        // Check that is unique is still true. And if so...
        if(isUnique === true){
            // push the verified unique animal argument onto the animal array 
            animals.push(animal);
        }
    }
}


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