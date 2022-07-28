var number=prompt("Please enter a number")
console.log(number)
var count=0;
for(var i=0;i<number;i++){
    if(number<50){
        if(i%3==0){
            count++
        }
    }

   if (num>50 && num<100){
        if(i%5==0){
            count++;
        }
    }

    if (num>100){
        if(i%8==0){
            count++;
        }
    }
}
console.log(count);