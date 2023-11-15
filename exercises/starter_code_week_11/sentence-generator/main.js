console.log ('this works')

// let noun = "heart";
// let verb = "run";
// let adjective = "possible";

// let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`
// console.log (sentence)

/*
use back dot " ` "
*/



let nouns = ["heart","ocean","mountain"]; // array
let verbs = ["run","look","make"];
let adjectives = ["possible","good","different"];

/*

Hint: Formula for selecting a random element from an array
let item = arrayName[Math.floor(Math.random()*arrayName.length)];

*/

let noun = nouns [Math.floor(Math.random()*nouns.length)]
let verb = verbs [Math.floor(Math.random()*verbs.length)]
let adjective = adjectives [Math.floor(Math.random()*adjectives.length)]

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`
console.log (sentence)