// 5 kyu Human Readable Time

// Write a function, which takes a non-negative 
// integer (seconds) as input and returns the time
//  in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


// solution
function pad(number) {
    return (number < 10 ? '0' : '') + number
}

function humanReadable (seconds) {
    var sec=00
    var min=00
    var hour=00
    for(let i=1; i<= seconds; i++){
        sec ++;
        if(sec > 59){
            sec = 0;
            min++;      
            if(min > 59){
                hour ++;
                min=0;
            }
        }  
    }

    hour = pad(hour);
    min = pad(min); 
    sec = pad(sec);
    return hour +":"+min+":"+sec;
    
  }



humanReadable(0); // '00:00:00
humanReadable(59); // '00:00:59'
humanReadable(60); // '00:01:00'
humanReadable(90); // '00:01:30'
humanReadable(3599); // '00:59:59', 
humanReadable(3600); // '01:00:00', 
humanReadable(45296); // '12:34:56', 
humanReadable(86399); // '23:59:59', 
humanReadable(86400); // '24:00:00', 
humanReadable(359999); // '99:59:59'