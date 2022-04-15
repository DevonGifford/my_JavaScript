// Create an array which contains the object you have made above and name the array "database".

var database = [
    {
    username : "Devon",
    password :  "myPassword"
    }
];

// Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = [
	{
		username: "Devon",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Justin",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Louw",
		timeline: "Javascript is preeetyy cool!"
	}
];


var userNamePrompt = prompt("What is your username?");
var passwordPromt = prompt("What is your password?");

function signIn(username, password) {
	if (username === database[0].username &&
		password === database[0].password) {
		console.log(newsfeed);
		} else {
			alert("Sorry, wrong username or password");
		}
}

signIn(userNamePrompt, passwordPromt);