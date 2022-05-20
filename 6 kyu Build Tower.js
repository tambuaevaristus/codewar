// 6 kyu Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. 
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]


// Steps


// solution

function towerBuilder(nFloors){
    let space,star, tower = [];
    for(i = 1; i <= nFloors; i++){
      space = " ".repeat(nFloors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }

    console.log(tower);
    return tower;
}



  towerBuilder(5);  // "*"
// towerBuilder(2);  // " * ","***"
// towerBuilder(3);  // "  *  "," *** ","*****"
