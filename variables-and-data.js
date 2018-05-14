/*
Variables, Data Types, and Typing
 */

let wordData = "Word Data";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

/*Objects*/
let obj = {
	key1: "Value 1",
	key2: 3,
	boolean: true,
	obj2: {
		obj2Key1: "Internal Object Value",
	},
};

console.log(obj.key1);
/*Accesses internal object value*/
console.log(obj.obj2.obj2Key1);

/*Typing systems*/
/*Java is a "weakly" type language. Will convert unlike variables to try to match them, in this case
the '5' gets converted to a string
 */
let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

/*Operators*/
let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";