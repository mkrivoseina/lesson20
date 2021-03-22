let number10 = 1234;
let stringNumber = number10.toString();
let array10 = [];
let sum = 0;
for (let i = 0; i < stringNumber.length; i ++) {
       array10.push(+stringNumber.charAt(i));
       sum += array10[i];
}
console.log("The sum of digits of", number10, "is:", sum);
