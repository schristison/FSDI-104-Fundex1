var num1=parseInt(prompt("Number 1: "));
var num2=parseInt(prompt("Number 2: "));
var num3=parseInt(prompt("Number 3: "));
var num4=parseInt(prompt("Number 4: "));
var average = (num1+num2+num3+num4)/4; 

function ave(num1, num2, num3, num4){
   return(num1+num2+num3+num4)/4;  
}

alert(ave(num1, num2, num3, num4));

document.getElementById('division').innerHTML=`<h2> Using an array, calculate the average </h2 <br><br>
Num1: ${num1} <br> Num2: ${num2} <br> Num3: ${num3} <br> Num4: ${num4} <br> <h3>Average: ${average}<h3> `;