// using this array,

var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// array.pop(0);  This does not work
array.shift()     //removes the first item 

// 2. Sort the array in order.

array.sort();

// 3. Put "Kiwi" at the end of the array.

array.push("Kiwi");
array.splice(6,0,"Kiwi") //this is possible just FYI

// 4. Remove "Apples" from the array.

array.pop("Apples");    //DOES NOT work 
array.pop(1);           //DOES NOT work
array.shift("Apples");  //DOES NOT work

array.splice(0, 1);


// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

array.sort(-1);         //DOES NOT work

array.reverse();

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

array2[1][1][0];