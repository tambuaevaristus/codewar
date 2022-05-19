// (6kyu) Dbftbs Djqifs
// *********************


// Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

// Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

// Your task
// Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

// Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

// Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

// Steps
// 0) check if key is between +26 and -26
// 1) convert string to array
// 2) convert string to ascii code
// 3) check if they exist other characters a letter
//    convert character to ascii code
// 4) check if character is uppercase or lowercase
// 5) Add the key to the ascii code of each character
//    check if encryted code exceeds limit
// 6) convert ascii code to character
// 7) convert array to string

// Solution
function encryptor (key, message) {
    var encryptedText = [];

    if(key < 0 || k > 0){

        key= key%26;
        
    }
    
   
        // convert string to array
       message = message.split("");
       for(var i = 0; i < message.length; i++){

        //    convert every charracter to asccii
          message[i] = message[i].charCodeAt();  //convert string to ascii code

    // check if charater is a letter
          if(message[i] >= 65 && message[i] <= 90 || message[i]>=97 && message[i] <= 122){
            encryptedText[i] = message[i]+key;  //add key to character

            // check if its uppercase
            if(message[i]>=65 && message[i]<=90){
                // uppercase

                //if encrypted text is more than range
                if(encryptedText[i]>90){
                    var excessKey = encryptedText[i]-90;
                    encryptedText[i]=64+excessKey;        
                   

                }
                // for negative keys
                else if(encryptedText[i]<65){
                    var excessKey =65-encryptedText[i];
                    encryptedText[i]=91-excessKey;
                    // console.log(encryptedText[i]);
                }
                // console.log(encryptedText[i]);

                // console.log("Up");

            }else{
                // lowercase

                if(encryptedText[i]>122){
                    var excessKey = encryptedText[i]-122;
                    encryptedText[i]=96+excessKey;        

                }

                 // for negative keys
                 else if(encryptedText[i]<97){
                    var excessKey =97-encryptedText[i];
                    encryptedText[i]=123-excessKey;
                    // console.log(encryptedText[i]);
                }
                // console.log("down");

            }

            
          }
          else{
            //if not a letter nothing changes

            encryptedText[i] = message[i];

          }
          encryptedText[i] = String.fromCharCode(encryptedText[[i]]);
        }
        encryptedText = encryptedText.join("");
         console.log(encryptedText);
       }

    // }

    // console.log(encryptedText);	



// Test case

        // encryptor(98, '(JjgdWJT>:Kqo6gSo2L.;BB/ >*keX)JSO"7"');//(DdaxQDN>:Eki6aMi2F.;VV/ >*eyR)DMI"7

		encryptor(0, 'no cypher');// 'no cypher'
		encryptor(13, 'Caesar Cipher'); // 'Pnrfne Pvcure'
		encryptor(-5, 'Hello World!'); //'Czggj Rjmgy!'
		encryptor(27, 'Whoopi Goldberg');// 'Xippqj Hpmecfsh'


        // encryptor(0, 'no cypher');// 'no cypher'
		// encryptor(57, 'Caesar Cipher'); // 'Pnrfne Pvcure'
		// encryptor(98, 'Hello World!'); //'Czggj Rjmgy!'
		// // encryptor(88, 'Whoopi Goldberg');// 'Xippqj Hpmecfsh'

