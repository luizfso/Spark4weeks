/*Example 
*/ 
console.log(myVariable);
if(true){
    var myVariable = 12;
}
console.log(myVariable);

/*Explanation
myVariable is accessible outside of the block 
in which it was created. Also, note it's declaration
was hoisted. Thus, we can access myVariable
outside of the block and before we defined it.*/

/*Example*/
const myOtherVariable = 1;

if(true){
    const myOtherVariable = 20;
}

// console.log(myOtherVariable);
//This produces an error because it's 
//outside of the block in which it was defined


/*Your turn
Comment out line 21. 

Create a variable using const in
the if statement above. Try to access
it outside of the if statement*/ 

//this throw an error
// it's impossible to access the variable inside the if


console.log(myOtherVariable);
//Error

/*Note that the parentheses of 
a for loop are considered part of that
for loop's block.*/