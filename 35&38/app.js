//Problem 1
function todayDate() {
    return new Date();
}
console.log(todayDate());

//Problem 2
function name(firstname, lastname) {
    return firstname + lastname
}
console.log(name("usaid", "anees"));

//Problem 3
function addition(a, b) {
    return a + b
}
console.log(addition(1, 2));

//Problem 4
function calculator(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2
    } else if (operator == "-") {
        return num1 - num2
    } else if (operator == "*") {
        return num1 * num2
    } else if (operator == "/") {
        return num1 / num2
    } else if (operator == "%") {
        return num1 % num2
    } else return "Please enter a valid operator!";

}
console.log("Calculation will be ==> ", calculator(2, 3));

//Problem 5
function square(a) {
    return a ** 2
}
console.log("Square of the Argument ==> ", square(2));

//Problem 6
function factorial(a) {
    let result = a;
    for (let i = result - 1; i > 1; i--) {
        result = (result * i)
    }
    console.log("Factorial ==> ", result);

}
factorial(6)

//Problem 7
function counting(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}
counting(2, 10)

//Problem 8
function calculateHypotenuse(base, perp) {
    let hyp = base ** 2 + perp ** 2;
    function calculateSquare() {
        let square = Math.sqrt(hyp);
        return square
    }
    return calculateSquare()
}
console.log("Hypotenuse ==> ", calculateHypotenuse(5, 5));

//Problem 9
let width = 5;
let height = 5;
function areaOfTriangle(width, height) {
    return width * height;
}
console.log("Area of Triangle  with arguments as variables ==>", areaOfTriangle(width, height));
console.log("Area of Triangle with arguments as values ==>", areaOfTriangle(5, 5));

//Problem 10
function checkPalindrome(word) {
    let palindrome = word.split("").reverse().join("");
    if (word == palindrome) {
        return "This is a Palindrome Word!";
    } else {
        return "This is a not Palindrome Word!";
    }
}
console.log(checkPalindrome("madam"));
  
//Problem 11
function capitalize(input) {
    let value=input.split("")    
     let result;
    for (let i = 0; i <value.length ; i++) {        
         if (value[i] == " ") {
         value[i+1]=value[i+1].toUpperCase();
         }
    }
    value[0]=value[0].toUpperCase();
     result=value.join("");
     console.log("Title case value will be ==>",result);
}
capitalize("the quick brown fox");

//Problem 12
let para="Web development tutorial";
let paraLength=para.split(" ");
let lengths=[]
for (let i =0; i <paraLength.length; i++) {
   lengths[i]=paraLength[i].length
}
lengths.sort((a,b) => b-a);
for (let i=0; i<paraLength.length; i++){
    if (lengths[0] == paraLength[i].length) {
        console.log("The longest word is ==>",paraLength[i]);
    }
}   

//Problem 13
function countLetter(string,letter) {
    let score=0;
    for (let i=0; i<string.length; i++) {
        if(string[i] == letter) {
          score++
        }
    }
    return score;
}
console.log("The occurence of the given letter in the word is ==>",countLetter("JSResourceS.com","o"));

//Problem 14
function calcCircumference(radius) {
   let pie=3.14;
   return (2 * pie * radius).toFixed(2)
}
console.log("The circumference of the circle is ==> ",calcCircumference(5));
function calcArea(radius) {
   let pie=3.14;
   return (pie * radius **2).toFixed(2)
}
console.log("The Area of the circle is ==> ",calcArea(5));