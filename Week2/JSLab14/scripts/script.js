// The following code calculates the total cost of an order of widgets.
		
let quantity = Number(prompt("How many would you like?-digits only please"));
let pricePerUnit = 10.0;
let totalCost;

// Calculate the total cost of the purchase. 
//If the number of units ordered is greater than 100, a 10% discount should be applied.


console.log("You ordered " + quantity + " units at a base price of $" + pricePerUnit + " per unit");
console.log("Your total cost is $" + totalCost);

// This program was so hard the programmer gave up. "Debugging" it will mean finishing it.
		
/* Write a program that prints the numbers from 1 to 100. 
 * But for multiples of three print "Fizz" instead of the number 
 * and for the multiples of five print "Buzz". 
 * For numbers which are multiples of both three and five print "FizzBuzz"
 */
		
// Hint: How do you know one number X is a multiple of Y? If dividing X by Y produces no remainder.



// The following code should print the following pattern:
		
// *****
// ****
// ***
// **
// *
		
// debug the code so it prints correctly.
		
for (let i = 5; i > 1; i++) {
    let s="";
    for (let j = i; j >= 1; j--){
		s+="*";
    }
    console.log(s); 
}	
// hint: There are several logical errors here.