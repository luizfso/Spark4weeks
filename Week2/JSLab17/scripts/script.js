/*Explanation
JavaScript Objects are collections of key
and value pairs. Allowing you to group
related state and behavior. 

JavaScript has a number of built in objects.
In fact each primitive type we talked about in
JSLab2 has a corresponding object type. */

/*Example
We'll begin with creating a general 
kind of object and setting its 
properties. 
*/ 
let obj = new Object();

obj.stringProp = "Objects can have all different values.";
obj.numProp = 10_000.00;
obj.undefinedProp ;
obj.booleanProp = true;
obj.randomProp = "random";
obj.functionProp = function(){
    obj.numProp ++; //we can modify object properties 
    //but we have to use the object's name and the dot operator
    console.log("Functions can be properties too");
}
console.log("Initial object with dot notation",obj); 

obj.functionProp();
obj.randomProp = true;
console.log("Modify object with dot notation",obj);

/*Explanation 
We use the new key word and something referred 
to as a constructor, Object(), to create our object.

We use the dot notation to define properties 
and assign them values. 

We can also use dot notation to modify existing properties.
*/

/*Your turn
Create an object and assign it properties 
and values using dot notation. 
Print it out.*/

function House(opt3, opt4, opt5, opt6, opt7){
    
    this.room = opt3;
    this.bath = opt4;
    this.garage = opt5;
    this.alarmSystem = opt6;
    this.valueAmount = opt7;
    this.hasAlarm = function (increaseValue) {
        if (!this.alarmSystem){
            this.valueAmount = this.valueAmount + 50; //Add 50k'cause alarm 
            console.log("Increase price if install alarm, increased $" + this.valueAmount + "K");    
        }
        return this.alarmSystem = increaseValue;
    }
}

var buyHouse = new House(5, 2, true, false, 300);
console.log(buyHouse.valueAmount);

buyHouse.hasAlarm(true);
console.log(buyHouse.valueAmount);

// var casaCalarm = new Casa(5, 2, true, true, 300);

// console.log(casaSalarm);



// let casa = new Object();

// casa.windowView = true;
// casa.doorEntrance = 2;
// casa.room = 3;
// casa.bath = 2;
// casa.garage = true;
// casa.alarmSystem = false;
// casa.valueAmount = 300;
// casa.functionCasa = function(){
//     hasAlarm = casa.alarmSystem;
//     if (hasAlarm){
//         casa.valueAmount = casa.valueAmount + 50; //Add 50k'cause alarm 
//         console.log("Increase price if install alarm, increased $" + casa.valueAmount + "K");    
//     }
//     console.log(casa.alarmSystem);
// }
// console.log("House without alarm", casa); 

// casa.alarmSystem = false;
// casa.functionCasa();
// console.log("House without alarm", casa); 

// casa.alarmSystem = true;
// casa.functionCasa();

// console.log("House with alarm", casa); 



/*Example
We can also use bracket notation 
to define and assign values to our properties.
Note we must use quotes around our property names.*/

obj["numProp"] = 23;
console.log("Use bracket notation",obj);

obj["newProperty"] ="new property";
console.log("New property using bracket notation", obj);

/*Your turn
Add a new property to your object using brackets.*/

buyHouse["room"] = 6;
console.log("Added/Change Room",buyHouse);
console.log("Number of room now is:",buyHouse.room);

/*Example
Defining objects using curly braces. 
*/
let importantDates= {
    laborDay:"2019-09-02",
    halloween:"2019-10-31"
}

console.log(importantDates);

/*Your turn 
Add thanksgiving and the date in the format above
to the importantDates object.*/
importantDates["thanksgiving"] = "2019-11-28"

console.log(importantDates);