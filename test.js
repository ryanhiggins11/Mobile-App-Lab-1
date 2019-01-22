function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
//Boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//Number
var decimal = 6;
console.log("Value assigned to number is: " + decimal);
var hex = 0xf00d;
console.log("Value assigned to number is: " + hex);
var binary = 10;
console.log("Value assigned to number is: " + binary);
var octal = 484;
console.log("Value assigned to number is: " + octal);
var color = "blue";
color = 'red';
console.log("Colour is: " + color);
//Array
var list = [1, 2, 3];
console.log("Array: " + list);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Number " + (i + 1) + " is: " + list[i] + ".");
}
//tuple
var x;
x = ["hello", 10];
console.log("Tuple example: " + x[0].substr(1));
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log("Enum: Value of colorName is: " + colorName);
console.log("Enum: Value of c is: " + c);
console.log("Enum: Name of c is: " + Color[c]);
//any
var notSure = 4;
notSure = "maybe a string instead";
console.log("Value is a string: " + notSure + ".");
notSure = false;
console.log("Now value is a boolean: " + notSure + ".");
//any array
var listany = [1, true, "free"];
for (var i = 0; i < listany.length; i++) {
    console.log("Before: Entry " + (i + 1) + " is: " + listany[i] + ".");
}
listany[1] = 100;
for (var i = 0; i < listany.length; i++) {
    console.log("After: Entry " + (i + 1) + " is: " + listany[i] + ".");
    var num1 = 6;
    console.log("Value assigned to num1 is: " + num1);
}
