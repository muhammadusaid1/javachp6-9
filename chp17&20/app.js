//Chapter 17-20

//Problem 1
let multidimensionalarray = [
    ["usaid", 87],
    ["Bilal", 78],
    ["hamza", 90]
];

//Problem 2
let multidimensionalarray_matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

//Problem 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
};

//Problem 4
// let tablenum = +prompt("Enter the number of the multiplication table you want!");
// let tablelenght = +prompt("Enter the table lenght");
// console.log(`Multiplication table of ${tablenum} Lenght ${tablelenght}`);
// for (let i = 1; i <= tablelenght; i++) {
//     console.log(`${tablenum} x ${i} = ${tablenum * i}`);
// };

//Problem 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`);
};

//Problem 6
//Part a
for (let i = 0; i <= 15; i++) {
    console.log(`Counting ==> ${i}`);
};

//Part b
for (let i = 10; i >= 1; i--) {
    console.log(`Reverse Counting ==> ${i}`);
};

//Part c
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Even Numbers ==> ${i}`);
    }
};

//Part d
for (let i = 0; i <= 20; i++) {
    if (i % 2 == !0) {
        console.log(`Odd Numbers ==> ${i}`);
    };
};

//Part e
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Series Numbers ==> ${i}k`);
    };
};

//Problem 7
let flag = false;
let bakeryitems = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchuser = prompt("Enter your desired bakery item!");
for (let i = 0; i < bakeryitems.length; i++) {
    if (searchuser == bakeryitems[i]) {
        console.log("Available in the bakery!");
        flag = true;
         
    };
}
if (flag == false) {
    console.log("Not Available in the bakery!");
};

//Problem 8
let numbers=[24,53,78,91,12];
numbers.sort((a,b)=>b-a);
console.log(`Largest number in the array is ${numbers[0]}`);

//Problem 9
numbers.sort((a,b)=>a-b);
console.log(`Smallest number in the array is ${numbers[0]}`);

//Problem 10

for (let i = 1; i <=100; i++) {
  if(i % 5 == 0){
     console.log(`Multiple of 5 ==> ${i}`);
  }

};
