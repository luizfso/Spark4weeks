// The following code calculates the total cost of an order of widgets.
		
let quantity = Number(prompt("How many would you like?-digits only please"));
let pricePerUnit = 10.0;
let totalCost;
let discount;

// Calculate the total cost of the purchase. 
//If the number of units ordered is greater than 100, a 10% discount should be applied.

if (quantity > 100) {

  totalCost = pricePerUnit * quantity;
  discount = (pricePerUnit * quantity) * 0.10; 

  console.log("You ordered " + quantity + " units at a base price of $" + pricePerUnit + " per unit");
  console.log("You got a nice promotion because your ordered more than 100 itens!\nYour total cost was $" + totalCost);
  console.log("You got 10% off !!!!!  $" + discount);
  console.log("With the discount applied you will pay only $" + (totalCost - discount));

} else{

  totalCost = pricePerUnit * quantity;

  console.log("You ordered " + quantity + " units at a base price of $" + pricePerUnit + " per unit");
  console.log("Your total cost is $" + totalCost);
}


// This program was so hard the programmer gave up. "Debugging" it will mean finishing it.
		
/* Write a program that prints the numbers from 1 to 100. 
 * But for multiples of three print "Fizz" instead of the number 
 * and for the multiples of five print "Buzz". 
 * For numbers which are multiples of both three and five print "FizzBuzz"
 */
		
// Hint: How do you know one number X is a multiple of Y? If dividing X by Y produces no remainder.

var number = 0;

for(var i=1; i<=100; i++) {

  number = i;

  if(i%5 === 0 && i%3 === 0){
    console.log('FizzBuzz');
  } else if(i%3 === 0){
    console.log('Fizz');
  } else if(i%5 === 0){
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
console.log('Number was verify: %d', number);

// The following code should print the following pattern:
		
// *****
// ****
// ***
// **
// *
		
// debug the code so it prints correctly.
		
for (var i = 5; i >= 1; --i) {
  var s = "";
  for (var j = 1; j <= i; ++j){
    s += "*";
  }
    console.log(s); 
}	
// hint: There are several logical errors here.