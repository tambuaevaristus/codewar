// (7kyu)Sum of integers in string//
// *********************************

// Problem

// Your task in this kata is to implement a function that
//  calculates the sum of the integers inside a string. 
//  For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 
//  the sum of the integers is 3635.

// Note: only positive integers will be tested.


// Steps

// create a variable sum to hold the sum initialise it to 0
// convert string to array
// loop over array
// check if any given charater is an interger
// convert character to integer
//  add it to sum....
// return sum.



// Solutions

function sumOfIntegersInString(s){
    // var s = "hel4lo3"
    var sum = 0
    // s = s.split("");
    // console.log(s);

    for(var i = 0; i < s.length; i++){


        if(!isNaN(s[i])){
          
            if(!isNaN(s[i+1])){
                var j=0;
                var num = ""
               while(isNaN(s[j])){
                   num=num+s[i];
                   j++;
               }
               console.log(num);
            }
            
        }
        
    }
    // console.log(numb);
    // console.log(s);
    // console.log(sum);
}


// linkNumbers('3','5'); 

  sumOfIntegersInString("h 344 ll0w0rld");
//   sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.");
//   sumOfIntegersInString("Dogs are9 our best45 friends.");
//   sumOfIntegersInString("C4t5 are 4m4z1ng.");
//   sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog");