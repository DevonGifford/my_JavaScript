
/**************************************************************************************************************************
Very basic practice stuff - getting familiar with EventListener
*************************************************************************************************************************/

// //if we hover over it we get the console.log
// button.addEventListener("mouseenter", function() {
//     console.log("Clicky go hiyaaa!!");
// })

// //if we click it we get the response
// button.addEventListener("click", function() {
//     console.log("Clicky clicky!");
// })

// //if our mouse goes away
// button.addEventListener("mouseleave", function() {
//     console.log("Clicky go bye bye!");
// })

// button.addEventListener("click", function() {
//     console.log("Clicky clicky!");
// })

// input.addEventListener("click", function() {
//     console.log("texty texty!");
// })




/**************************************************************************************************************************
Lets create some function below 
**************************************************************************************************************************
var button = document.getElementById("user_click");
var input = document.getElementById("user_input");
var myList = document.getElementById("skill_list");


button.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        myList.appendChild(li);
    }
})

input.addEventListener("keydown", function(event) {
    if (input.value.length > 0 && event.which === 13 ) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        myList.appendChild(li);
    }
});

/*
I struggled here for a long while - pressing enter added it to our list.
-------------------------------------------------------------------------
input.addEventListener("keydown", function(event) {
    if (input.value.length > 0 && event.key === "Enter" ) 
//above line or below line work
    if (input.value.length > 0 && event.which === 13 )
    
- even though these say they are depricated, they do seem to actually work.  great.  just great.
*/


   

/**************************************************************************************************************************
Lets clean up our code here 
*************************************************************************************************************************/
var button = document.getElementById("user_click");
var input = document.getElementById("user_input");
var myList = document.getElementById("skill_list");


function inputCheck() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    myList.appendChild(li);
    input.value = "";                                       //this line here prevents it from creating a duplicate, returns value to empty
}

//---------------------------------------------------------

function addListAfterClick() {
    if (inputCheck() > 0) {
        createListElement()
    }
}

button.addEventListener("click", addListAfterClick);
//---------------------------------------------------------

function addListAfterKeypress(event) {
    if (inputCheck() > 0 && event.which === 13 ) {
        createListElement()
    }
}

input.addEventListener("keydown", addListAfterKeypress);
//---------------------------------------------------------


/**********************************************************************************************************************
FINAL LITTLE NOTE
***********************************************************************************************************************
Event listener syntax : 
    button.addEventListener("click", addListAfterClick);
    input.addEventListener("keypress", addListAfterKeypress);

You didn't see the function being called like this as you may have expected: 
    button.addEventListener("click", addListAfterClick());
    input.addEventListener("keypress", addListAfterKeypress(event));

This is something called a callback function. When that line of javascript runs, we don't want the addListAfterClick function to run 
because we are just adding the event listener now to wait for click or keypress.
We want to let it know though that we want this action to happen when a click happens.
So the function now automatically gets run (gets added the ()) every time the click happens. 
So we are passing a reference to the function without running it.

A callback function is like "hey this is my number ,you can call me with this but not immediattely, call me only when the user needs me ". 
Kinda confusing but makes sense.
************************************************************************************************************************/

/**************************************************************************************************************************
Gradient selector stuff
*************************************************************************************************************************/

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";  //this lets us know what colours we have selected.
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

