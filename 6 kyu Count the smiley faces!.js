// 6 kyu Count the smiley faces!

// problem

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// steps
// initialise a count variable
// loop over array
// check if any is equal to valid smiley face
// then increment count
//

// solution

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;
  for (i = 0; i <= arr.length+3; i++) {
    if (
      arr[i] == ":)" ||
      arr[i] == ":-)" ||
      arr[i] == ":~)" ||
      arr[i] == ";)" ||
      arr[i] == ";~)" ||
      arr[i] == ";-)" ||
      arr[i] == ":D" ||
      arr[i] == ";D" ||
      arr[i] == ":-D" ||
      arr[i] == ";-D" ||
      arr[i] == ":~D" ||
      arr[i] == ";~D"
    ) {
      count++;
    }
  }

  console.log(count);
}

// Test cases

countSmileys([]); // 0

countSmileys([':D',':~)',';~D',':)']); // 4);

countSmileys([":)", ":(", ":D", ":O", ":;"]); // 2
countSmileys([";]", ":[", ";*", ":$", ";-D"]); // 1
