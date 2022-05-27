// 5 kyu Simple Pig Latin

// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  stringArray = str.split(" ");

  var result =[]
  stringArray.map((word) => {
    wordArray = word.split("");
    if( word.toUpperCase() != word.toLowerCase() ) {
        removed = wordArray.splice(0, 1).join();
        wordArray.splice(wordArray.length, 0, `${removed}ay`);
        result.push(wordArray.join(''))
    }
    
  });

  console.log(result.join(' ')); 

  
}

pigIt("Pig latin is cool"); //'igPay atinlay siay oolcay')
pigIt('This is my string') //'hisTay siay ymay tringsay')
