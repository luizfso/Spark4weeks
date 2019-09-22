/*Explanation
At their core functions are sets of instructions 
that can be called to run by name. In JavaScript they 
are exceptionally powerful. 

We have already been using built in functions. Now 
we will define some of our own. */

/*Example 
Create a named function. */

function sum(a,b){
    return a+b;
}
//This defines a function sum that gives back the sum of the input 
//a and b are simply placeholders for the input 
console.log(sum(1,2));//this calls the function sum and prints the result

/*Your turn 
Create a function called difference. Return the first argument 
minus the second. */
function difference(a,b){
    return a-b;
}
console.log(difference(4,9));

/*Example 
Create an anonymous function- one without a name.*/

//We assign our anonymous function to a variable 
//This variable will allow us to call our function.
let a = function (){
    console.log("Coding is awesome");
}

a();

console.log(a);

/*Your turn 
Create an anonymous function. It should print out 
a fun animal fact to the console. 
It should also execute at least one other instruction of your choosing.
Then call that function. */

function otherinstruction(numb1,numb2){
    result = numb1 - numb2;
    return console.log(result); 

}


function anonymous() {
    console.log("Fun fact of an animal");
    a();
    let number1 = 5
    let number2 = 6
    otherinstruction(number1,number2);
}
anonymous();

console.log(anonymous);


