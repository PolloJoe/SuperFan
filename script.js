// https://www.w3schools.com/js/js_variables.asp

// print a message to as soon as your page loads
console.log("Welcome to the Console...");
console.log("I am a helpful tool for troubleshooting!");

// declare that your variables exist
var a;
var b;
var x;

// assign initial values to your variables
// x is only used when the page loads; a & b are used inside of the function
a = 1;
b = 5;
x = 99;

// print the initial value of x
console.log("x =", x);

// this function is called whenever the user clicks
function doStuff(){
	a++;
	b++;
	a=0;
	b=99;
	checkEquivalence();
	printAnything("ANYTHING");
	console.log(a); // check the value of 'a' before the function finishes
	console.log(b);	// check the value of 'b' before the function finishes
}

// write functions that have one job and call them from inside another function if you need them!
function checkEquivalence(){
	if (a == b){
		console.log("a = b, this is blowing my mind...");
	} else {
		// do nothing
	}
}

// this function will print anything that you put in parenthesis
// NOTE: The 'stuff' is the input to the function
function printAnything(stuff){
	console.log(stuff);
}