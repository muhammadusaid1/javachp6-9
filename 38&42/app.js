//Problem 1
function square(a, b) {
    return a ** b
}
console.log("a raised to the power b is ==> ", square(2, 2));

//Problem 2
function leapYear(year) {
    if (year % 4 == 0) {
        return "Its a leap Year!"
    }
    else return "Its not a leap Year!"
}
console.log(leapYear(1968));

//Problem 3
function areaOfTriangle(a, b, c) {
    let sum = (a + b + c) / 2;
    function area() {
        return sum * (sum - a) * (sum - b) * (sum - c);

    }
    return area()
}
console.log("Area of triangle is ==> ", areaOfTriangle(5, 5, 6));

//Problem 4
function subjects(sub1, sub2, sub3) {
    let totalNumber = 300;
    let obtainedMarks = sub1 + sub2 + sub3
    function average() {
        return (obtainedMarks) / 3
    };
    function percentage() {
        return (obtainedMarks / totalNumber) * 100
    };
    return `The average is ${average()} and the percentage is ${percentage()}%`

}
console.log(subjects(80, 80, 80));



//Problem 6
let para = "i am usaid".toLowerCase();
let paraIntoArray = para.split("");
for (let i = 0; i < paraIntoArray.length; i++) {
    if (paraIntoArray[i] == "a" || paraIntoArray[i] == "e" || paraIntoArray[i] == "i" || paraIntoArray[i] == "o" || paraIntoArray[i] == "u") {
        paraIntoArray.splice(i, 1)
    }
}
console.log(paraIntoArray.join("").trim());

//Problem 7

//Problem 8
function distanceInMeter(km) {
    let meter = km * 1000;
    // return meter
    function distanceInFeet() {
        let feet = meter * 3.28084;
        return feet
    }
    function distanceInInch(params) {
        let inch = meter * 39.37;
        return inch
    }
    function distanceInCm(params) {
        let cm = meter * 100;
        return cm
    }
    return ` The distance is ${km}Km, the distance in meter is ${meter}m, the distance in feet is ${distanceInFeet()}ft ,the distance in inches is ${distanceInInch()}inch and the distance in centimeters is ${distanceInCm()}cm`
}
console.log(distanceInMeter(5));

//Problem 9
function employeeOverTime(workHours) {
    let overTime = 0;
    if (workHours > 40) {
        overTime = workHours - 40;
        return `The overtime is ${overTime}hour and the overtime pay will be ${overTime * 12}Rupees`
    } else return "There is no overtime"
}
console.log(employeeOverTime(41));

//Problem 10
function cashier(amountToWithdraw) {
    if (amountToWithdraw <= 9) {
        return "Amount should be atleast 10rupees"
    } else {
        let fiftyNote = 0
        let hundNote = 0
        let array = amountToWithdraw.toString().split("");
        let lastTwo = [];
        lastTwo.unshift(array[array.length - 1])
        lastTwo.unshift(array[array.length - 2])
        array.pop()
        array.pop()
        hundNote = +array.join("")
        let lastTwoNumber = +lastTwo.join("")
        if (lastTwoNumber >= 50) {
            fiftyNote++;
            lastTwoNumber = lastTwoNumber - 50
        }
        return `Hundred notes are ${hundNote} ,50 notes are ${fiftyNote} ,10 notes are ${lastTwoNumber.toString()[0]} and the remaining amount is ${lastTwoNumber.toString()[1]}rs`
    }

}
console.log(cashier(210910));

//Problem 10 second solution
function cash(amount) {
    let hund=Math.floor(amount/100)
    console.log(hund);
    amount= amount % 100
    let fifty=Math.floor(amount/50)
    amount= amount % 50
    let ten=Math.floor(amount/10)
    amount= amount % 10

    return   `${hund} ${fifty} ${ten}`
}
console.log(cash(570));