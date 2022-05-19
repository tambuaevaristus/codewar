// (7 kyu) Valid number to 2 decimal places
// ******************************************

// Problem

// Check that a number is a valid number that has been given to 2
// decimal places. The number passed to the function will be given as a string.
// If the number satisfies the criteria below, the function should return true,
// else it should return false.

// Please check the criteria for a valid number:

// optional + or - symbol in front

// optional digits before a decimal point (digits are characters ranging from '0' to '9')

// a decimal point

// exactly two digits after the point

// nothing else

// Examples of valid and non-valid numbers

// List of valid numbers: [ "0.00" "3.90" "1000.00" ".00" "-2.55" "+2.10" "-.55"]

// List of non-valid numbers: ["hellow 11.99" "11.9" "11" "11." ".9"]

// Steps

// Solution

function validNumber(num) {
  //   num = num.split("");
  if (isNaN(+num)) {
    console.log("false1");
    return false;
  }
  let slicedArray = [];

  let newsplitArray =num.split("");
  console.log(newsplitArray);

  if(newsplitArray.indexOf(".") == -1){
    return false;

}

  
  for (var i = 0; i <= num.length; i++) {
    //     // Slice array from decimal position and check
   
    if (num[i] == ".") {
      slicedArray = num.slice(i);
    //   console.log(slicedArray);

      
      if (slicedArray.length != 3) {
        console.log("false2");
        return false;
      } else if (isNaN(slicedArray[1]) || isNaN(slicedArray[2])) {
        console.log("false3");
        return false;
      } else if (
        num[0] != "-" &&
        num[0] != "+" &&
        isNaN(num[0]) &&
        num[0] != "."
      ) {
        console.log("false4");
        return false;
      } else {
        console.log("true");
        return true;
      }
    }
  }
}
//   console.log("false3");
//   console.log(num);
// console.log(sl);
// }

//   Test Cases

validNumber("w.00"); //  => false
validNumber("..00"); //  => false
validNumber("669"); // =>true)
validNumber(".00");  // =>true)
validNumber("-.00");  // =>true)
validNumber(".30");  // =>true)
validNumber("0.40");  // =>true)
validNumber("34443.33");  // =>true)

validNumber(".0a"); //  => false
validNumber("1.00."); //  => false
validNumber(".+00"); //  => false
validNumber("w.00"); //  => false
validNumber("..00"); //  => false
validNumber("1,00"); //  => false
