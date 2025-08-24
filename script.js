let num=document.getElementById("level").textContent;
num = parseInt(num.split(" ")[1], 10);
alert("The level of the element is: "+(num-1));