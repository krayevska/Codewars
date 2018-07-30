/*Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
 */
 
function findMissingLetter(array) {
 var str = array.join('');
 var mis = "";
  for (i=1; i<str.length; i++) {
  var uni = str.charCodeAt(i);
  var unii = str.charCodeAt((i-1));
    if (uni!== (unii+1)) {mis = uni-1;}
     } 
  return String.fromCharCode(mis);
  }