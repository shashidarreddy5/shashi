// Square every digit
//https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}