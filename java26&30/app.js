//Chapter 26-30

//Problem 1
let userPositiveIntegar = 4.43;
console.log("Number ==>", userPositiveIntegar);
console.log("Round off Value ==>", Math.round(userPositiveIntegar));
console.log("Floor Value ==>", Math.floor(userPositiveIntegar));
console.log("Ceil Value ==>", Math.ceil(userPositiveIntegar));

//Problem 2
let userNegativeIntegar = -2.67;
console.log("Number ==>", userNegativeIntegar);
console.log("Round off Value ==>", Math.round(userNegativeIntegar));
console.log("Floor Value ==>", Math.floor(userNegativeIntegar));
console.log("Ceil Value ==>", Math.ceil(userNegativeIntegar));

//Problem 3
let value = -4;
console.log(`The absolute value of ${value} is ${Math.abs(value)}`);

//Problem 4
console.log(`Random dice number is ==> ${Math.floor(Math.random() * 7)}`);

//Problem 5
let generateCoinNumber = Math.ceil(Math.random() * 2);
if (generateCoinNumber == 1) {
    console.log("Its a Tails");

} else {
    console.log("Its a Heads");
};

//Problem 6
console.log(`Random number between 1-100 is ==> ${Math.ceil(Math.random() * 100)}`);

//Problem 7
let userWeight = prompt("Enter your weight in kg");
let userWeightNumber=""
for (let i = 0; i < userWeight.length; i++) {
if (userWeight[i]>=0 && userWeight[i] <= 9) {
  userWeightNumber+=userWeight[i]; 
}
 } if(userWeightNumber == 0) console.log("Enter weight correctly!");
 
 else if(userWeightNumber  == userWeight || userWeightNumber + "kg" == userWeight || userWeightNumber + "kgs" == userWeight || userWeightNumber + "kilogram" == userWeight || userWeightNumber + "kilograms" == userWeight ){
    console.log(`Your weight is ${userWeightNumber} Kilograms`);  
 } else console.log("Enter your weight in kilograms");
 


//Problem 8
let randomNumber = Math.ceil(Math.random() * 10);
let userGuess = +prompt("Guess the number between 1-10");
if (randomNumber == userGuess) {
    console.log("Congratulations you guessed it!");
} else console.log("Try again")