//  -->  Practice #1 <--
// Go to https://github.com/ricardo-hpe/js-training-hpe and review the content inside the README.md file.*/

// Exercises for lesson 2:
//1.- Using Logical Operators, write 6 comparations, 3 that returns true and 3 others that return false. It can be either a comparation between a length of a String and a number, or just between numbers.

8 === 7;
var z = 7; z > 8;
var y = 9; z > y;

myLastName = "ZARATE"; myLastName.length >= 6;
myFirstName = "JOSE"; myLastName.length > myFirstName.length;
myMiddleName = "LUIS", myLastName.length > myMiddleName.length;

//2.- Using Substrings and this coordinates: (0,2), (2,3), (0,5), (1,3), (5,7), Write 5 different sentences and print out the output.

console.log("Tu nombre es: Jose Luis".substring(5,7));
console.log("ApP: Zarate".substring(1,3));
console.log("ApM: Castañeda".substring(0,5));
console.log("MN: Luis".substring(2,3));
console.log("Nickname: Chelis".substring(0,2));

//3.- Declare 5 Arrays and print only one of the values inside, it can be any of them.
var myArray1 = [3, 2, 1, 0];
console.log(myArray1[0]);
var myNameandAge = ["Jose Luis", "Zarate", "Castañeda", "30"];
console.log(myNameandAge[1]);
var Array2 = [33, 3223, 321123, 32100123];
console.log(Array2[2]);
var myChildsNames = ["Yago", "Sinaína"];
console.log(myChildsNames[1]);
var myArrayPlacestoVisit = ["Mariposas Monarva", "Veracruz", "Huachimontones", "Secrets"];
console.log(myArrayPlacestoVisit[0]);

//var respuesta = prompt("¿How old are you?");

//4.- Write 6 simple if's, where if the condition is true, prints this: "I'm doing it in the right way"
if (z < y) {   console.log("I'm doing it in the right way"); }

if (z <= y) {  console.log("I'm doing it in the right way"); }

if (y < 10) {  console.log("I'm doing it in the right way"); }

if (0 <= 1) {  console.log("I'm doing it in the right way"); }

if (0 === 0) {  console.log("I'm doing it in the right way"); }

if (0 !== 2) {  console.log("I'm doing it in the right way"); }

//5.- Based on Modulo operations, write 6 sentences where 3 of them returns 0 as result and 3 others with 1 as the output. Try to use big numbers ;-)

var sP1 = 15 % 3;
console.log(sP1);

var sP2 = 3 % 3;
console.log(sP2);

var sP3 = 6 % 3;
console.log(sP3);

var sQ1 = 25 % 3;
console.log(sQ1);

var sQ2 = 7 % 3;
console.log(sQ2);

var sQ3 = 10 % 3;
console.log(sQ3);
