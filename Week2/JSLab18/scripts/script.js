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