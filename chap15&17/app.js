// chapter 15 to 17
//Chapter 14-16

//Problem 1
let students = [];

//Problem 2

//Problem 3
let strings = ["Hello", "World"];
//Problem 4
let numbers = [1, 2, 3, 4, 5];
//Problem 5
let boolean = [true, false];

//Problem 6
let mixarray = ["hello", 2, null, undefined, true,];

//Problem 7
let educationinpakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.", "PHIL.", "PHD"];
document.writeln(`<h1>Qualifications:</h1>`);
document.writeln(`<p>1:${educationinpakistan[0]}</p>`);
document.writeln(`<p>2:${educationinpakistan[1]}</p>`);
document.writeln(`<p>3:${educationinpakistan[2]}</p>`);
document.writeln(`<p>4:${educationinpakistan[3]}</p>`);
document.writeln(`<p>5:${educationinpakistan[4]}</p>`);
document.writeln(`<p>6:${educationinpakistan[5]}</p>`);
document.writeln(`<p>7:${educationinpakistan[6]}</p>`);
document.writeln(`<p>8:${educationinpakistan[7]}</p>`);
document.writeln(`<p>9:${educationinpakistan[8]}</p>`);

//Problem 8
let studentsname = ["usaid", "Bilal", "kashif"];
let studentscore = [280, 380, 430];
let totalmarks = 500;
document.writeln(`<h1>Students Score</h1>`);
document.writeln(`<p>Score of ${studentsname[0]} is ${studentscore[0]}.Percentage: ${(studentscore[0] / totalmarks) * 100}%</p>`);
document.writeln(`<p>Score of ${studentsname[1]} is ${studentscore[1]}.Percentage: ${(studentscore[1] / totalmarks) * 100}%</p>`);
document.writeln(`<p>Score of ${studentsname[2]} is ${studentscore[2]}.Percentage: ${(studentscore[2] / totalmarks) * 100}%</p>`);

//Problem 9
let colors = ["Violet", "blue", "yellow", "pink"];
document.writeln(`<h1>Colors</h1>`);
document.writeln(`<p>${colors[0]}</p>`);
document.writeln(`<p>${colors[1]}</p>`);
document.writeln(`<p>${colors[2]}</p>`);
document.writeln(`<p>${colors[3]}</p>`);
//Part a
let userbeginningcolor = prompt("What color you want in the beginning?");
if (userbeginningcolor == "" || userbeginningcolor == null) {
    console.log("Please enter a color name");
} else {
    colors.unshift(userbeginningcolor);
    document.writeln(`<h1>Updated Colors</h1>`);
    document.writeln(`<p>${colors[0]}</p>`);
    document.writeln(`<p>${colors[1]}</p>`);
    document.writeln(`<p>${colors[2]}</p>`);
    document.writeln(`<p>${colors[3]}</p>`);
    document.writeln(`<p>${colors[4]}</p>`);
}
//Part b
let userendingcolor = prompt("What color you want in the end?");
if (userendingcolor == "" || userendingcolor == null) {
    console.log("Please enter a color name");
} else {
    colors.push(userendingcolor);
    document.writeln(`<p>Added color ${colors[4]}</p>`)
};
//Part c
colors.unshift("Dark Brown", "Maroon");
document.writeln(`<h1>Part c Colors</h1>`);
for (let index = 0; index < colors.length; index++) {
    document.writeln(`<p>${colors[index]}</p>`);
}
// Part d
colors.shift();
document.writeln(`<h1>Part d Colors</h1>`);
for (let index = 0; index < colors.length; index++) {
    document.writeln(`<p>${colors[index]}</p>`);
};
//Part e
colors.pop();
document.writeln(`<h1>Part e Colors</h1>`);
for (let index = 0; index < colors.length; index++) {
    document.writeln(`<p>${colors[index]}</p>`);
};
//Part f
let userindex = +prompt("At what index you want to add the color");
let usercolor = prompt("Please tell the color name");
if (userindex == "" || usercolor == "" || userindex == null || usercolor == null) {
    console.log("Enter a valid index and color");
} else {
    colors.splice(userindex, 0, usercolor);
    document.writeln(`<h1>Part f Colors</h1>`);
    for (let index = 0; index < colors.length; index++) {
        document.writeln(`<p>${colors[index]}</p>`);
    };
};
//Part g
let userindex2 = +prompt("At what index you want to delete the color");
let howmanycolors = +prompt("How much colors you want to delete");
colors.splice(userindex2, howmanycolors);
console.log(colors);

//Problem 10
let scoreofstudents = [320, 230, 480, 120];
scoreofstudents.sort((a, b) => a - b);
console.log(scoreofstudents);

//Problem 11
let cities = ["Karachi", "Lahore", "Faislabad", "Islamabad", "Sialkot", "Quetta"];
let selectedcities = cities.slice(1, 6);
console.log(selectedcities);

//Problem 12
let broken = ["This", "is", "my", "cat"];
console.log(broken.join("-"));

//Problem 13
let fifoarray = [];
//Pushing the elements in the array using unshift which adds from start
fifoarray.unshift("Apple");
fifoarray.unshift("Banana");
fifoarray.unshift("Orange");
fifoarray.unshift("Mango");
//Taking out the elements from the array using pop  
console.log(fifoarray.pop());
console.log(fifoarray.pop());
console.log(fifoarray.pop());
console.log(fifoarray.pop());

//Problem 14
let lifoarray = [];
//Pushing the elements in the array using unshift which adds from start
lifoarray.unshift("Apple");
lifoarray.unshift("Banana");
lifoarray.unshift("Orange");
lifoarray.unshift("Mango");
//Taking out the elements from the array using pop  
console.log(lifoarray.shift());
console.log(lifoarray.shift());
console.log(lifoarray.shift());
console.log(lifoarray.shift());

//Problem 15
document.writeln(`<h1>Question 15</h1>`)
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeln(`
     <select name="" id="">
        <option hidden>Manufacturers</option>
        <option>${manufacturers[0]}</option>
        <option>${manufacturers[1]}</option>
        <option>${manufacturers[2]}</option>
        <option>${manufacturers[3]}</option>
        <option>${manufacturers[4]}</option>
        <option>${manufacturers[5]}</option>
      </select> `)