// task1

function SmallestElement(arr) {
    var minNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < minNum) {
        minNum = arr[i];
      }
    }
    console.log("Ən kiçik ədəd: " + minNum);
  }
  var myArray = [35, 33, 14, 10, 89];
  if (Array.isArray(myArray)) {
    SmallestElement(myArray);
}
// task2


function findDuplicateChars(str) {
    var charArray = str.split("");
    var duplicates = {};
    for (var i = 0; i < charArray.length; i++) {
      if (charArray[i] in duplicates) {
        duplicates[charArray[i]]++;
      } else {
        duplicates[charArray[i]] = 1;
      }
    }
    for (var char in duplicates) {
      if (duplicates[char] > 1) {
        console.log(char + " simvolu " + duplicates[char] + " dəfə təkrarlanır.");
      }
    }
    }
    var myString = "Mehemmed";
    findDuplicateChars(myString);
    
//   task3

function checkPalindrome(str) {
  
  var characters = str.split('');
  var reversedStr = '';
  for (var i = characters.length - 1; i >= 0; i--) {
    reversedStr += characters[i];
  }
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}
if (checkPalindrome("ada")) {
  console.log("Bu söz palindrome'dir.");
} else {
  console.log("Bu söz palindrome deyil.");
}
    
    
    
    
    
    
    
    
    
    
    
    
      
      
      
      
   
  
  

  
  
  
  
        

