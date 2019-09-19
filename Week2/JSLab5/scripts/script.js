//Your work goes here.

/*Explanation 
JavaScript has a number of mathematical operators built
in. 
+ , - , * , / , %
*/ 

/*Example 
addition*/
let a = 4;
let b = 2;
let result = a+b; 
console.log("Addition result equals", result);

/*Your turn 
Assign result the difference between a and b*/
result = a-b; 

console.log("Subtraction result equals", result);

/*Example
Multiplication*/
result = a*b;
console.log("Multiplication result equals",result);

/*Your turn 
Assign a the result of b divided by a.*/
result = b/a;

console.log("Division result equals", result); 

/*Example
% is the modulus operator- it returns 
the remainder of a division operation*/
result =  5%2;
console.log("5 % 2:",result);
/*Explanation 
5 divided by 2 gives 2 remainder 1. Any integer mod
two wll result in 0 or 1. Depending on whether the number
is even or odd. */

/*Your turn
Given the number below write out an operation that 
will return 0 if it divisible by 3. */ 
let number = 89673;
number = number%3;
console.log("Number is:",number);

/*Example
Increment operator - add one to the variable*/
result = 1;
//Preincrement
console.log("Increment result", ++result);
//Postincrement
console.log("Postincrement result", result++);
console.log("Now result holds the appropriate value:", result);

/*Your turn
You can use -- in the same way as ++, but to subtract 1.
This is called decrementing the variable. 
Use -- to subtract one and print the updated result in the same line.
Then use -- so that it will print out the value before subtracting 1.*/
decrem = 1;
//Preincrement
console.log("Decrement result", --decrem);
//Postincrement
console.log("PostDecrement result", decrem--);
console.log("Now result holds the appropriate Decremented value:", decrem);

/*Example
Let's try multiplying a string and a number*/
result = "hi"*3;
console.log("Hi * 3:",result);

/*Explanation 
Typically if you try to perform mathematical operations
on variables that aren't numbers you will end up with NaN
which mean Not a Number. 
Once you have NaN in a calculation the whole calculation will
result in NaN. */ 

/*Your turn
Create a calculation that you assign to your result 
variable that will produce NaN. 
Remember that the + operator can be used with strings*/
result = "another nonsense"*5;
console.log("This is a nonsense test * 5:",result);


/*Example
Let's check out how JavaScript applies the order 
of operations*/
result = 5 - 2 * 2; 
/*If it goes left to right it would be 
5-2 = 3, 3*2 =6
If it applies PEMDAS
2*2 = 4 
5-4 = 1....*/
console.log("5 - 2 * 2 =", result); 

//We can add parentheses to change this
result=(5-2)*2;
console.log("(5 - 2) * 2 =", result); 

/*Your turn 
Add parentheses to the following code 
to get the result 3*/

result = (6 *(4+4) /2) - (3*7) ;
console.log("Added parentheses:",result);

/*Example
Divide by 0*/
console.log("Divide by 0 ", (-8/0)); 

/*Your turn
Create an expression and print the result of an 
operation that mathematically might not work as expected. 
Hint: You can use the number value Infinity*/
result = (6 *(Infinity) /2) /0 ;
console.log("not work as expected:",result);



