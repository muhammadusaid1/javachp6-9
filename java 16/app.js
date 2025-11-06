console.log("Hello World!")
console.log("<----------------Chap (6-9)-------------->")


//ques 1 //
//ans 1 //
document.writeln("<h1>Ans 1 </h1>Result:")

let x = 5

document.writeln("<br> The value of x is ",x,'<br><br>')


document.writeln("The value of ++x is ",++x)
document.writeln(" <br>Now the value of x is ",x,'<br><br>')

document.writeln(" <br> The value of x++ is ",x++)

document.writeln(" <br>Now the value of x is ",x,'<br><br>')


document.writeln(" <br> The value of --x is ",--x)
document.writeln(" <br>Now the value of x is ",x,'<br><br>')

document.writeln(" <br> The value of x-- is ",x--)

document.writeln(" <br>Now the value of x is ",x,'<br><br>')

//ques 2 //
//ans 2 //
document.writeln("<h1>Ans 2 </h1>")

let a = 2;
let b = 1;
let result = --a
document.writeln("The result of --a is : ",result)

console.log(result)
 a = 2;
 b = 1;
result = --a - --b 
console.log(result)
document.writeln("<br>The result of --a - --b is : ",result)
a = 2;
b = 1;
result = --a - --b + ++b;
console.log(result)
document.writeln("<br>The result of --a - --b + ++b is  : ",result)
a = 2;
b = 1;
result = --a - --b + ++b + b--;
console.log(result)
document.writeln(" <br>The result of --a - --b + ++b + b-- is  : ",result)

//ques 3 //
//ans 3 //
document.writeln("<h1>Ans 3 </h1>")
let userName = prompt("Enter Your Name")
alert("Hello" + ' '+ userName + ` ! `)
document.writeln(" <h2> Hello" + ' '+ userName + ` !  </h2>`)



//ques 5 //
//ans 5 //
document.writeln("<h1>Ans 5 </h1>")
document.writeln("<h1> Table: </h1>")
let table = prompt("Enter your number",9)
document.writeln(table," x ",1,' = ',table*1,'<br>')
document.writeln(table," x ",2,' = ',table*2,'<br>')
document.writeln(table," x ",3,' = ',table*3,'<br>')
document.writeln(table," x ",4,' = ',table*4,'<br>')
document.writeln(table," x ",5,' = ',table*5,'<br>')
document.writeln(table," x ",6,' = ',table*6,'<br>')
document.writeln(table," x ",7,' = ',table*7,'<br>')
document.writeln(table," x ",8,' = ',table*8,'<br>')
document.writeln(table," x ",9,' = ',table*9,'<br>')
document.writeln(table," x ",10,' = ',table*10,'<br>')


//ques 6 //
//ans 6 //
document.writeln(`<h1>Question 6</h1>`);
let subject1 = prompt("Enter First Subject Name");
let subject2 = prompt("Enter Second Subject Name");
let subject3 = prompt("Enter Third Subject Name");
let num1 = prompt("Enter First Subject Number");
num1=Number.parseInt(num1);
let num2 = prompt("Enter Second Subject Number");
num2=Number.parseInt(num2);
let num3 = prompt("Enter Third Subject Number");
num3=Number.parseInt(num3);
let totalmarks = 100;
document.writeln(`   <table border="1px" cellspacing="5px">
        <tr>
            <th style="padding: 8px;">Subject</th>
            <th style="padding: 8px;">Total Marks</th>
            <th style="padding: 8px;">Obtained Marks</th>
            <th style="padding: 8px;">Percentage</th>

        </tr>
        <tr>
            <td style="padding: 8px;">${subject1}</td>
            <td style="padding: 8px;">${totalmarks}</td>
            <td style="padding: 8px;">${num1}</td>
            <td style="padding: 8px;">${(num1/totalmarks)*100}</td>
        </tr>
        <tr>
            <td style="padding: 8px;">${subject2}</td>
            <td style="padding: 8px;">${totalmarks}</td>
            <td style="padding: 8px;">${num2}</td>
            <td style="padding: 8px;">${(num2/totalmarks)*100}</td>
        </tr>
        <tr>
            <td style="padding: 8px;">${subject3}</td>
            <td style="padding: 8px;">${totalmarks}</td>
            <td style="padding: 8px;">${num3}</td>
            <td style="padding: 8px;">${(num3/totalmarks)*100}</td>
        </tr>
        <tr>
            <td style="padding: 8px;">Total</td>
            <td style="padding: 8px;">${totalmarks*3}</td>
            <td style="padding: 8px;">${num1 + num2 + num3}</td>
            <td style="padding: 8px;">${(num1 + num2 + num3) /300 *100}</td>
        </tr>
    </table>`)