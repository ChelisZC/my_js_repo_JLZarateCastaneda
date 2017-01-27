/*
Exercises for lesson 3:
1.- Using a For loop, print out numbers from 0 to 100 with a increase of 5 each.
2.- Using a For loop, print all the values of an array by separate. Tip: You will need to use .length ;-)
3.- Using a For loop, print out numbers from 24 to 2 with a decrease of 2 each.
4.- Using an If statement, generate a condition that includes a .length comparation, and print numbers from 10 to 50 using for.
    Include an else that prints the same values but decreasing.
5.-Using an If statement, generate a similar condition as in excercise 2, and print numbers from 9 to 0 using for.
    Include an else that prints the same values but increasing.
*/

//1.- Using a For loop, print out numbers from 0 to 100 with a increase of 5 each.
for (var i = 0; i <= 100; i = i + 5) {
    console.log("P3 E1 @ Number: "+i);
}
//2.- Using a For loop, print all the values of an array by separate. Tip: You will need to use .length ;-)
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
var i2 = ["Men", "X", "Women", "Y"]
for (var ii = 0; i2.length > ii; ii = ii +1) {
    console.log("P3 E2 @ value: "+i2[ii]);
}

//- Using a For loop, print out numbers from 24 to 2 with a decrease of 2 each.
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
for (var i3 = 24; i3 >= 2; i3 = i3 - 2) {
    console.log("P3 E3 @ Number: "+i3);
}

//4.- IF used. .length comparation, and print numbers from 10 to 50 using for.
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
if (i2.length > 0){
  for (var i4 = 10; i4 <= 50; i4 = i4 + 1) {
      console.log("P3 E4 @ Number: "+i4);
     }
}
else {
  for (var i4 = 50; i4 >= 10; i4 = i4 - 1) {
      console.log("P3 E4 @ Number: "+i4);
    }
}

//5  IF used. .length comparation, print numbers from 9 to 0 using for.
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
if (i2.length > 0){
  for (var i5 = 9; i5 >= 0; i5 = i5 - 1) {
      console.log("P3 E5 @ Number: "+i5);
     }
}
else {
  for (var i5 = 0; i5 <= 9; i5 = i5 + 1) {
      console.log("P3 E5 @ Number: "+i5);
     }
}
