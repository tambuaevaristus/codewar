// 7 kyu Two to One
// ******************

// problem

// Take 2 strings s1 and s2 including only letters from ato z.
//  Return a new sorted string, the longest possible, containing 
//  distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Steps






// Solution

function longest(s1, s2) {

    s1 = s1.split("");
    s2 = s2.split("");

    s = s1.concat(s2);
    
    let newArrayWithNoDuplicates = s.reduce(function (previousValue, currentValue) {
        if (previousValue.indexOf(currentValue) === -1) {
          previousValue.push(currentValue)
        }
        return previousValue
      }, [])
 
      var sortedString = newArrayWithNoDuplicates.sort().join("");
      console.log(sortedString);
  
  }







// Test cases

  longest("aretheyhere", "yestheyarehere"); // => "aehrsty")
  longest("loopingisfunbutdangerous", "lessdangerousthancoding"); // => "abcdefghilnoprstu")
  longest("inmanylanguages", "theresapairoffunctions"); // =>"acefghilmnoprstuy")