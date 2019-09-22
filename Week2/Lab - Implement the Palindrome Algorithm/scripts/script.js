let input = prompt("Enter a phrase:");

isPalindrome(input);

function isPalindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    if (len === 0){
        console.log("Empty String");
    } else {
        for (var i = 0; i < len/2; i++) {
            if (str[i] !== str[len - 1 - i]) {
              console.log("false");  
              return false;
            }
          }
          console.log("true");
          return true;
         }
      
    }
   