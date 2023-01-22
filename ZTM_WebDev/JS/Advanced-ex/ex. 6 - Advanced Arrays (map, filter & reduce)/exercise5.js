// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];
//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//-----------------------------------------------------------------------------------------------
let forEachArray = []
array.forEach(user => {
  let {username} = user;
  username = username + "!";
  forEachArray.push(username);
})
console.log("the for each array", forEachArray);


//Create an array using map that has all the usernames with a "? to each of the usernames
//-----------------------------------------------------------------------------------------------
const mapArray = array.map(array => {
  let { username } = array;
  return username + '?';
})
console.log("the map array", mapArray);


//Filter the array to only include users who are on team: red
//--------------------------------------------------------------
const filterArray = array.filter(array => {
  return array.team === "red";
})
console.log('the filter array', filterArray);


//Find out the total score of all users using reduce
//---------------------------------------------------------
const reduceArray = array.reduce((total_score, array) => {
    return total_score + array.score
}, 0);
console.log('the reduce array', reduceArray);






//-----------------------------------------------------------------
// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];

const newArray = arrayNum.map(num => num * 2);




//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonus_array = array.map(individuals => {
  individuals.items = individuals.items.map(items => {
    return items + "!";
  });
  return individuals;
})