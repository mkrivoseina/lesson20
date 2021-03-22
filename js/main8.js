console.log("---Task 8---");
let num8 = 50;
let lastprime = 0;
for (let i = 2; i < num8; i++) {
       let prime = true;
       for (let j = 2; j < i; j++) {
           if (i % j === 0) {
               prime = false;
               continue;
           }
       }
       // if number greater than 1 and not divisible by other numbers
       if (i > 1 && prime === true) {
              lastprime = i;
       }
   }

console.log(lastprime, "is the last prime number before", num8);
