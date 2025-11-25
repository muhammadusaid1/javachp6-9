//Problem 1
let todayDate = new Date();
console.log("Current Date is ==> ", todayDate);

//Problem 2
let todayMonth = new Date().getMonth();
let months = ["January", "Feburary", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
console.log("Current Month is ==> ", months[todayMonth]);

//Problem 3
console.log("Current Month first three letter are ==>", months[todayMonth].toString().slice(0, 3));

// Problem 4
let todayDay = new Date().getDay();
console.log(todayDay);
if (todayDay == 5 || todayDay == 6) {
    console.log("Its a Fun day");
};

//Problem 5
let monthDate = new Date().getDate();
if (monthDate < 19) {
    console.log("First fifteen days of the month");
} else console.log("Last days of the month");

//Problem 6
console.log("Milli-Seconds since 1 Jan 1970 till now", todayDate.getTime());
console.log("Minutes since 1 Jan 1970 till now", todayDate.getTime() / 1000 / 60);

//Problem 7
let todayTime = todayDate.getHours();
if (todayTime >= 12) {
    console.log("Its PM");
} else console.log("Its AM");

//Problem 8
let laterdate = new Date("December 31, 2025");
console.log(laterdate);

//Problem 9
let startRamzan = new Date("June 18, 2015");
let upcomingRamzan = new Date("Feburary 17, 2026");
console.log(Math.round(upcomingRamzan.getTime() / 1000 / 60 / 60 / 24) - Math.round(startRamzan.getTime() / 1000 / 60 / 60 / 24) + " days have passed since 1st Ramadan,2015");

//Problem 10
let referenceDate = new Date("Dec 05, 2015");
let start2025 = new Date("Jan 01, 2015");
console.log((referenceDate.getTime() - start2025.getTime()) / 1000);

//Problem 11
let todayDateString = todayDate.toString();
let changedVal = todayDate.toString().slice(16, 18) - 1;
if ((todayDate.toString().slice(16, 18) - 1).length == 1) {
    changedVal = "0" + changedVal;
}
console.log("Current Date ==>", todayDate);
console.log("1 hour ago ==>", todayDateString.slice(0, 16) + changedVal + todayDateString.slice(18));


//Problem 12
 console.log("Current Date ==>>", todayDate);
let oneHundredYearAgo = new Date(todayDate);
oneHundredYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
console.log("1 years ago ==>", oneHundredYearAgo);

//Problem 13
let age=19;
let birthYear = new Date(todayDate);
birthYear.setFullYear(birthYear.getFullYear() - age);
console.log("Birth Year ==>", birthYear.getFullYear());

//Problem 14
let customerName="usaid anis";
let billingMonth=new Date().getMonth();
let numberOfUnitCharged=390;
let chargesPerUnit=19;

let netAmountWithin= numberOfUnitCharged * chargesPerUnit;
let lateFee= 350;
let grossAmountAfter= numberOfUnitCharged * chargesPerUnit + lateFee;

console.log("K-Electric Bill");
console.log(`Customer Name: ${customerName}`);
console.log(`Month: ${months[billingMonth]}`);
console.log(`Number of units: ${numberOfUnitCharged}`);
console.log(`Charges per unit: ${chargesPerUnit}`);
console.log(` `);
console.log(`Net Amount payable(within Due Date): ${netAmountWithin}`);
console.log(`Late payment surcharge: ${lateFee}`);
console.log(`Gross Amount payable(after Due Date): ${grossAmountAfter}`);