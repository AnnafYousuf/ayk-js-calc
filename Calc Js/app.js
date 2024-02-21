var num1 = +prompt("Enter Your 1st Value")
var num2 = +prompt("Enter Your 2nd Value")

var Add = num1 + num2;
var Minus = num1 - num2;
var Multiply = num1 * num2;
var Divide = num1 / num2;

document.write(
"<table border='1'>"
+
"<tr>"
+
"<th>" +"Addition"+ "</th>" 
+"<th>" +"Minus"+ "</th>"
+"<th>" +"Multiply"+ "</th>"
+"<th>" +"Divide"+ "</th>"
+
"</tr>"+
"<tr>"+
"<td>" +Add+ "</td>"
+"<td>" +Minus+ "</td>"
+"<td>" +Multiply+ "</td>"
+"<td>" +Divide+ "</td>"
+"<tr>"
+
"</table>"
)