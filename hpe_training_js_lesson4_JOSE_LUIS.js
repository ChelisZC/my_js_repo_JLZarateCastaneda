/*
Exercises for lesson 4:

1. Create a simple function that prints out this line: "My name is: <yourName> and guess what?
I'm indeed learning js" and call it sending your name as a parameter.

2. Create a simple While loop that prints true until the condition becomes false.
3. Create a While loop that prints all the statements inside an array of at least 10 words/sentences.
4. Combine a While and For, the For loop is gonna be inside the While loop. Tip: take care of the infinite loops ;)
5. Ask a user for a number between 1-100 and create an If, elsif, else statement where you can print something different
depending on his/her choice. make sure you are making all this inside a function and the parameter that is gonna be sent, is the
user's answer. Tip: prompt is gonna help you out with this.
*/

// HotTip: Wanna actually see console.log results? Then go to https://jsbin.com/metozelize/edit?js,console,output

//P4 E1
var myName = "José Luis";
console.log("My name is: "+ myName +"and guess what? I'm indeed learning js");

//P4 E2

var count=0;
while (count<5){
  console.log("Contador: "+count);
  count++;
}

//P4 E3
var myArray = ["Respeto","al","derecho","ajeno","es","la","Paz","Benito","Juárez","15 de julio de 1867",];
var inc = 0;
while (inc<myArray.length){
  console.log(""+myArray[inc]);
  inc++;
}

//P4 E4
var num = 0;
  while (num < 1){
    for (var letr = 32; letr<127;letr++){
      console.log(String.fromCharCode(letr));
          }
  num++;
}

//P4 E5

var numfromUser = prompt("Teclea un numero y luego presionar Enter:");
if (numfromUser < 7){
  console.log("Tu número es menor a 7, tu número es:"+numfromUser);
}
else if(numfromUser==7) {
  console.log("Atinaste mi numero favorito");
}
  else {
    console.log("Tu número es mayor a 7, tu número es:"+numfromUser);
  }
