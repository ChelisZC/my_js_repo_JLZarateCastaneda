//  -->  Practice #1 <--
// Go to https://github.com/ricardo-hpe/js-training-hpe and review the content inside the README.md file.*/

// Exercises for lesson 2:
//1.- Using Logical Operators, write 6 comparations, 3 that returns true and 3 others that return false. It can be either a comparation between a length of a String and a number, or just between numbers.

8 == 7;
z = 7; z > 8;
y = 9; z > y;

myLastName = "ZARATE"; myLastName.length >= 6;
myFirstName = "JOSE"; myLastName.length > myFirstName.length;
myMiddleName = "LUIS", myLastName.length > myMiddleName.length;

//2.- Using Substrings and this coordinates: (0,2), (2,3), (0,5), (1,3), (5,7), Write 5 different sentences and print out the output.

console.log("Tu nombre es: Jose Luis".substring(5,7));
console.log("ApP: Zarate".substring(1,3));
console.log("ApM: Castañeda".substring(0,5));
console.log("MN: Luis".substring(2,3));
console.log("nN: Chelis".substring(0,2));
