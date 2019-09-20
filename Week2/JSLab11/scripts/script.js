/*Explanation
Loops allow us to repeat a block of code so long as 
a particular condition is true. 

We have three types of loops.
while(somecondition){
    instructions
} 

do{

}while(somecondition);

for(initialization statement; condition; update){

}
*/ 

/*Example
We're really excited to be coding JavaScript, so 
the following loops will print YAY! to the console 
3 times each. */ 
console.log("While loop:");
let i = 0;
while(i<3){
    console.log("YAY!");
    i++;
}

console.log("Do while loop:");
do{
    console.log("YAY!");
    i--;
}while(i>0);

console.log("For loop:");
for(i =0; i<3; i ++){
    console.log("YAY!");
}

/*Your turn
Take the following for loop
that prints out the numbers 1-5. 
Write equivalent versions of the loop using 
while and do while loops. 
*/ 
console.log("While loop:");
let num = 1;
while(num<=5){
    console.log("while loop " + num);
    num++;
}

console.log("Do while loop:");
num = num -1;
do{
    console.log("Do while " +  num);
    num--;
}while(num>0);

for(let num = 1; num<=5; num++){
    console.log(num);
}

/*Example 
We can combine conditional statements 
and loops to make more complex programs.*/ 
//Print every whole number except those divisible by 3
//up to 9.
console.log("\n\nMore complex program");
for (let j = 1; j<9; j++){
    if(j % 3 === 0){
        console.log("Divisble by 3");
    }else{
        console.log(j);
    }
}

/*Your turn
Uses a do-while loop to print only the odd number between
1 and 9, inclusive. */

console.log("\n\nTop complex dev program");
for (let numb = 1; numb<=9; numb++){
    if(numb % 2 == 1){
        console.log(numb + " = It's a Odd number!");
    }else{
        console.log("Skip this Even Number");
    }
}