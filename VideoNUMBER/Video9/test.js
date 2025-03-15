//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Lochan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);  


// There are 2 types of datatype
// 1. Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (iska matlab hai empty or zero nahi hai)
//     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
//     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
//     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

// 2. Preference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )