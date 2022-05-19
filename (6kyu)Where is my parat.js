// Problem: (6kyu)Where is my parent!?(cry)

// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".


// Steps: 

// 

// input contains only letters, uppercase letters are unique

//

// My Solution:
// convert string to array
// sort the array
// convert all letters to lowercase and sort again
// recombine the array to form a string

function compare(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}

const compare1 = (a,b)=> a.toLowerCase().localeCompare(b.toLowerCase());

function findChildren(dancingBrigade){

 
console.log(dancingBrigade.split("").sort().sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase())).join(""));
// string = string.split("");
// string = string.sort();
// string = string.sort( compare)
// string = string.join("");

}


// Test


    findChildren("beeeEBb");// => "BbbEeee"
    findChildren("uwwWUueEe"); // => "EeeUuuWww"
    findChildren("abBA"); // => "AaBb"
    findChildren("AaaaaZazzz"); // => "AaaaaaZzzz"
    findChildren("CbcBcbaA"); // =>  "AaBbbCcc"