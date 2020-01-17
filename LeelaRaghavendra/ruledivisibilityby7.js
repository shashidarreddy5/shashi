//A Rule Divisibilty by 7
//https://www.codewars.com/kata/55e6f5e58f7817808e00002e
function seven(m) {
var i=0;
 while(m >=100){
  m = Math.floor(m/10) - 2*(m%10)
   i+=1;
     }
     return [m,i]
   }

