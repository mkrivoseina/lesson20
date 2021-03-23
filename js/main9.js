let firstnum = 25;
let secondnum = 15;
let greatestComDivisor = 1;

for(let i = 1; i < 100; i++){
       if(firstnum % i === 0 && secondnum % i === 0){
              greatestComDivisor = i; 
       }      
}
console.log(`The Greatest Common Divisor for numbers ${firstnum} and ${secondnum} is: ${greatestComDivisor}`);
