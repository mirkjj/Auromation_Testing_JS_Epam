//Perform addition of various types (string + boolean, string + number, number + boolean)
string = "11";
boolean=true;
number=5;
console.log(string+ " " +boolean);
console.log(string+" "+number);
console.log(number+" " + boolean);

//Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log(string*boolean);
console.log(string*number);
console.log(number*boolean);

//Divide different types (string / boolean, string / number, number / Boolean)
console.log(string/boolean);
console.log(string/number);
console.log(number/boolean);

//Perform explicit conversion (number, string, boolean)
number=String(number);
console.log(typeof(number) + " " + number);

boolean=Number(boolean);
console.log(typeof(boolean)+" " + boolean);

string=Boolean(string);
console.log(typeof(string)+" " + string);


