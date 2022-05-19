// Create a function that takes a Roman numeral as its argument
//  and returns its value as a numeric decimal integer. 
//  You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing 
// each decimal digit of the number to be encoded
//  separately, starting with the leftmost digit and 
//  skipping any 0s. So 1990 is 
//  rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered 
//  "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI",
//   uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21


// Steps
// check if string is not null
// convert each character to numerical equivalents
// Add the different  numbers together


function solution (roman) {
    
  if(roman == null) return -1;
  var num = convert(roman.charAt(0));
  var pre, curr;
  
  for(var i = 1; i < roman.length; i++){
  curr = convert(roman.charAt(i));
  pre = convert(roman.charAt(i-1));
  if(curr <= pre){
  num += curr;
  } else {
  num = num - pre*2 + curr;
  }
  }
  
  console.log(num);

  }
  
  function convert(c){
  switch (c){
  case 'I': return 1;
  case 'V': return 5;
  case 'X': return 10;
  case 'L': return 50;
  case 'C': return 100;
  case 'D': return 500;
  case 'M': return 1000;
  default: return -1;
  }
      return 0;
  }


	   solution('XXI') //21
	   solution('I')// 1
	   solution('IV')//4
	   solution('MMVIII')// 2008
	   solution('MDCLXVI') //1666
