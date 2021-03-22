console.log('The prime numbers between 1 and 100 are:');
let array6 = [];
for (let i = 1; i <= 100; i++) {
       let prime = true;
       for (let j = 2; j < i; j++) {
           if (i % j === 0) {
               prime = false;
               continue;
           }
       }
       // if number greater than 1 and not divisible by other numbers
       if (i > 1 && prime === true) {
           console.log(i);
           array6.push(i);
       }
   }
console.log("The total number of prime numbers between 1 and 100 is:", array6.length);