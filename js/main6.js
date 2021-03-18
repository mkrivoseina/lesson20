
console.log('The prime numbers between 1 and 100 are:')
for (num = 0; num < 101; num++){
let prime = true; 
    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
}
    if (prime === true) {
        console.log(num)
    }
    }
}