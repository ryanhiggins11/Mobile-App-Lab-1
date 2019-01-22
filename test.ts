function addition(value: string) {
    console.log("Value is: " + value);
    }
    let firstVal: number = 42;
    let secondVal: number = 1;
    let sumOfVals: string = (firstVal + secondVal).toLocaleString();
    addition(sumOfVals);
    //Boolean
    let flag: boolean = true;
    console.log("Value assigned to flag is: " + flag);
    //Number
    let decimal: number = 6;
    console.log("Value assigned to number is: " + decimal);

    let hex: number = 0xf00d;
    console.log("Value assigned to number is: " + hex);

    let binary: number = 0b1010;
    console.log("Value assigned to number is: " + binary);

    let octal: number = 0o744;
    console.log("Value assigned to number is: " + octal);

    let color: string = "blue";
    color = 'red';
    console.log("Colour is: " + color);

    //Array
    let list: number[] = [1, 2, 3];
    console.log("Array: " + list);

    //array
let list: number[] = [1, 2, 3];
for(let i = 0; i < list.length;i++){
console.log("Number "+(i+1)+" is: "+list[i]+".");
}
//tuple
let x: [string, number];
x = ["hello", 10];
console.log("Tuple example: "+x[0].substr(1));
//enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log("Enum: Value of colorName is: "+colorName);
console.log("Enum: Value of c is: "+c);
console.log("Enum: Name of c is: " + Color[c]);
//any
let notSure: any = 4;
notSure = "maybe a string instead";
console.log("Value is a string: "+notSure+".");
notSure = false;
console.log("Now value is a boolean: "+notSure+".");
//any array
let listany: any[] = [1, true, "free"];
for(let i = 0; i < listany.length;i++){
console.log("Before: Entry "+(i+1)+" is: "+listany[i]+".");
}
listany[1] = 100;
for(let i = 0; i < listany.length;i++){
console.log("After: Entry "+(i+1)+" is: "+listany[i]+".");

let num1: number = 6;
console.log("Value assigned to num1 is: "+num1);