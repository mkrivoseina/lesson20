const num5 = 13;
let prime = true;
for (let i = 2; i < num5; i++) {
       
       if (num5 % i === 0) {
               prime = false;
               break;
       }
}
if (prime) {
              console.log(num5, " is prime");
} else{
       console.log(num5, " is NOT prime"); 
}