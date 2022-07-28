var number=prompt("Enter a number:")
console.log(number);
var lastDigit;
var sum=0;
while(number!=0){
    lastDigit=number%10;
    sum+=lastDigit;
    number=(number-lastDigit)/10
}
console.log(sum);
  


