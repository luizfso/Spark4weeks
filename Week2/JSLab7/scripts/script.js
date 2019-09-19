//Your work goes here.

/*Explanation 
An array is a collection of values in JavaScript. 
We will explore a couple different ways to define them.
We will look at what can be held within an array.
Then we will look at how to access elements in an
array.*/

/*Example*/
console.log("Create an array: ");
let array = [1,2,3,4];
console.log(array);


/*Example*/
console.log(typeof(array)); 
/*Explanation
This is the first dataype that we have used that is
an object. As you dive deeper into JavaScript you will
find that in fact most things are objects. 

For now you can consider objects simple not primitives. 

In actuality they are reference data types and will typically
consist of some key value pairs, but that's getting a bit
ahead of ourselves.*/


/*Your turn
Create a variable oddArray that holds an array
with the values
3 5 7 13
*/
var oddArray = [3,5,7,13];


/*Example 
Now we will access the values
in array*/
console.log("\nAccess specific elements");
//First value 
console.log("Position 0: "+array[0]);
//Last value
console.log("Last element (position 3): "+array[3])

/*Explanation
This is called indexing into our array. We use 
the name of the variable and then square brackets with 
the index or position of the element we seek. Note array indexes 
begin at 0.*/

/*Your turn
Print the second element, item, in your oddArray.
*/
console.log(oddArray[1]);

/*Note we get undefined if we choose an index that is out 
of bounds of the array.*/ 

/*Example
We can also use indexing to assign our array new values.*/
console.log("\nUpdate array: ");
array[0] = 100;
console.log("Now at position 0: "+array[0]);

/*Your turn
Update your oddArray to hold 9 instead of 13. 
Print the result*/
console.log(oddArray) //the original one
oddArray[3] = 9;
console.log(oddArray[3]);
console.log(oddArray) //the Modify Array


/*Example
Get the length of an array*/
console.log("The length of the array is "+array.length);

/*Example 
Create an array differently*/
let array2 = new Array(5); // creates an array of length 5
array2[0] = 10; //populates position 0
console.log(array2);

/*Example
Add on to the end of array.*/ 

array.push("hi");
console.log(array);

/*Explanation 
push is a built in function that let's us add to the end of
an array. Arrays are mutable or changable so we can add to 
the end of them. */

/*Your turn
Add 13 and 15 on to the end of oddArray. 
Print out the length of oddArray. */ 
oddArray.push(13);
oddArray.push(15);
console.log(oddArray);

/*Example
Create a string from a given array*/
var result = array.join(" ");
console.log(result);

/*Your turn 
Create a string from your oddArray,
but ensure the numbers are seperated by commas.
Print the result.*/
var myArray = oddArray.join(",");
console.log(myArray);

/*Bonus: Look up another function to interact with arrays
and use it below. */

var positiveOrMinus;
for (let i = 0; i < 5; i++) {
    positiveOrMinus = Math.floor(Math.random()*2) == 1 ? 2 : -1;
    oddArray.push(positiveOrMinus);
}
console.log(oddArray);


function isPositive(value) {
    return value > 0;
  }
var myArray = oddArray.filter(isPositive);
console.log(myArray);