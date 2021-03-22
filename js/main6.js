let array = [];

console.log('The prime numbers between 1 and 100 are:')
for (num = 2; num < 101; num++){
let prime = true; 
    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
}
    }
    if (prime === true) {
        console.log(num);
        console.log(array.push(num));
    }
}

//not finished, we still need to count the prime numbers (digits)


console.log('The prime numbers between 1 and 100 are:');
for (let i = 2; i <= 100; i++) {
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
       }
   }