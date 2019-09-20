/*Explanation 
One of the frequent uses of loops is iterate over 
data structures (collections of information). In other
words, loops are often used to access and then perform 
some operations on each element in a collection. 

In this lab we will explore using loops to access 
each element in an array. 
*/ 

/*Example*/ 
let toDoList = ["grocery shop", "dishes","laundry", "pay bills"];
console.log("To do list:");
for(let index = 0; index<toDoList.length; index++){
    console.log(toDoList[index]);
}

/*Explanation 
We have a variable that stores the current index.
We use let index = 0 to initialize the starting position. 
Every time our loop finishes an iteration, it will 
increase the value of this variable by some 
amount (usually 1), and it will continue until 
the index variable is equal to or greater than 
the size of our array. In other words, it will 
continue as long as the index variable is less 
than the size.*/

/*Your turn 
Create an array called groceries. 
Assign it some grocery items. 
Then create a loop that prints each item out.*/

//Two ways to do:
// First way = 

let groceries = ["apple", "soap","meat", "eggs"];
console.log("The groceries list in a first way:");
// for(let index = 0; index<groceries.length; index++){
//     console.log(groceries[index]);
// }


// Second way = 
console.log("The groceries list in a second way:");
groceries.forEach(function(grocerie){
    console.log(grocerie);
  });


/*Your turn 
Take the below array of integers and iterate
over it. Check if each element is an even number 
and if so, print the index of that element.*/
console.log("\n\nMy turn for Check if each element is an even number");
let numbers = [1, 2, 5, 10, 12, 16, 21, 35, 47, 52];

numbers.forEach(function(number){
    if (number % 2 == 0) {
        console.log("the number in the array is: " + number + "\nthis is a even number and the index is: " + numbers.indexOf(number));
    } else {
        console.log("Next chek.... found a not even number - no index for you!");
    }
    
  });

