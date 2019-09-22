/*Explanation 
Technically functions are objects in JavaScript 
so they can be passed in as arguments to other functions. 

In fact they can do a whole lot more than that, but that
will start. */

/*Example*/

function runFunctions(a){
    console.log("I run functions.");
    a(); 
}

runFunctions(function(){
    console.log("Run me!");
});

/*Explanation
We just passed an anonymous function that prints out Run me!
into our runFunctions function. */

/*Your turn 
Create a function that takes in two inputs. 
One should be a function and the other should be 
the arguement to call the input function with. 

Then in the function you define call the passed in function
with the input argument. */ 

function myOtherrunFunctions(b,c){
    console.log("I'm another function that will run two other functions.");
    b();
    c(); 
}

myOtherrunFunctions(
    function()
    {
        console.log("That was the internal function running B!");
    },
    function(){
        console.log("That is C");
    });


/*Example 
Constructor functions.*/

function Player(name, skill){
    this.name = name;
    this.skill = skill;
    this.health = 10; 
    this.strength = 1;
    this.getStronger= function(){
        this.strength++;
    }
    this.defend = function(damage){
        
        let hp = damage/this.strength;
        this.health -= hp;
        this.damagetaken = hp;
        
    }
}

let player1 = new Player("Bryn", "Sleeping");

player1.getStronger();

console.log(player1);

/*Explanation
Constructor functions outline a new kind of object. 
Every player will have a name, skill, and health. 
They will also have some behaviors associated with them.

Constructor functions are called using the new keyword. 
They create a new object of that specific type. 

Constructor functions are always named with a capital letter. 
*/ 

/*Your turn
Create a player2 variable. Assign it the value of a new Player
object by calling the constructor defined above. 
You can give your player whatever name and skill you would like.
*/

let player2 = new Player("Luiz", "Coding");

player2.getStronger();

player2.strength = 5;
player2.health = 500;
console.log("Luiz drink coffee, health increased to: " + player2.health + "hp")

for(var i = 0; i <= 15; i++){
    player2.defend(Math.floor(Math.random() * 200));
    console.log("after do a lab, life drawn by:" + player2.damagetaken);
    console.log("Healh remain:" + player2.health);
    
}

console.log(player2);


// Tests
// var setPlayer3 = {
//     "name" : "Test Guy",
//     "skill" : "testing"
// }
// let player3 = new Player(JSON.stringify(setPlayer3));


// player3.getStronger();

// console.log(player3);
