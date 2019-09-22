/*Example 
Get an element by its id and change the innerHTML*/
let activitiesListHeader = document.getElementById("modifyMe");
activitiesListHeader.innerHTML = "Lab Activities";

/*Explanation
The header of the list original said Activities. 
We accessed its inner HTML content and modified it
so that it now reads Lab Activities.

Note in line 2 we call getElementById on our document. 
We give as an argument "activityListHeader"*/ 

/*Your turn
Get the element with the id, "modifyMe". 
Change its html content from Modify me! to 
a fun animal fact of your choice. */

let myFavAnimal = document.getElementById("modifyMe");
myFavAnimal.innerHTML = "tiger";

/*Example 
Get an array of elements by getting them 
with their tag name. 
Then we will change one of their attributes so
they all have a different text color.
*/

let listItems = document.getElementsByTagName("li");

// for (let i = 0; i<listItems.length; i++){
//     let item = listItems[i];
//     console.log(item);
//     item.setAttribute("class", "greyText");
// }

/*Explanation
listItems is an array that holds all of the 
items with the tag name li. 
Then we loop through the items printint them to the 
console and adding a class attribute to them with the 
value greyText. 
This makes it so that a CSS rule now applies to them
making their text grey. 
*/ 

/*Your turn
Comment out the for loop in the above example. 
Now you will see the difference. The text should be 
white. 
Then uncomment the loop. 
Now edit the loop set the class attribute to have
"boldText" as its value.
This will apply CSS rules making the font larger. */

for (let i = 0; i<listItems.length; i++){
    let item = listItems[i];
    console.log(item);
    item.setAttribute("class", "boldText");
}


/*Example
Now we'll create a few nested elements, setting 
their attributes to appropriate values. 
*/ 
let row = document.createElement("div");//create a div
row.setAttribute("class", "row");//make it a row div

let col = document.createElement("div");//create another div
col.setAttribute("class", "col-12");//add the appropriate styling
row.appendChild(col);//nest it inside of the next row

let p = document.createElement("p");//create a paragraph element
p.innerHTML = "Another element";//Set its text 
col.appendChild(p);//put it inside the div that makes it wide enough

document.body.appendChild(row);//add this row to the body 

/*Your turn 
Create a paragraph element. 
Set its text to say another fun animal fact. 
Add it to the div referenced by the col variable. */

let p2 = document.createElement("p");//create a paragraph element
p2.innerHTML = "Tiger is not the Tiger Woods";//Set its text 
col.appendChild(p2);//put it inside the div that makes it wide enough

document.body.appendChild(row);//add this row to the body 


/*Your turn 
Below we get the list of activities and the final li element
that says Remove Me!. 
Call removeChild(...) on activityList giving it as
an argument the variable removeMe. 
This should remove 4.Remove Me! from the html page. 
*/ 

let activityList = document.getElementById("activityList");
let removeMe = document.getElementById("removeMe");

activityList.removeChild(removeMe);

//Hint: for the phrases call on and pass as an argument
//Read the first explanation again. 


//Great work! Now zip up the JSLab16 folder and submit it. 

