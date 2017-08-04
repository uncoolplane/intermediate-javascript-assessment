// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 1

// *************
// * PROBLEM 1 *
// *************

// Given the following nested functions:

function daBears(){
  var isFurry = true;

  function papaBear (){
    var porridge = "Too Hot!";
    var chair = "Too Big!";
    var bed = "Too Hard!";
    var feeling = "Angry";

    function mamaBear(){
      var porridge = "Too Cold!";
      var bed = "Too Soft!";

      function babyBear(){
        var porridge = "Just right!";
        var chair = "Just right!";
        var bed = "Just right!";
        var feeling = "Whiny";
        var sleepy = "Very yes";
      }
    }
  }

  function goldilocks(){
    var feeling = "Hungry";
    var isFurry = false;
    var isDinner = true;
  }
}

// Remove entries from the following arrays until only correct answers remain.
// A correct answer will be an array of strings that are function names.

// Which function(s) access the "chair" variable and get "Too Big!"
// (Delete wrong answers, leave correct ones)

var fairyTale1 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];
//mamabear ... inherit from papaBear
//babyBear ... overrides
//goldilocks ... not accessible
fairyTale1 = new Array();
fairyTale1.push('papaBear');
fairyTale1.push('mamaBear');

// Which function(s) access the "feeling" variable and get "Hungry"
// (Delete wrong answers, leave correct ones)

var fairyTale2 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];
//only goldilocks has this local variables, others undefined
fairyTale2 = new Array();
fairyTale2.push('goldilocks');

// Which function(s) access the "porridge" variable and get "Too Cold!"
// (Delete wrong answers, leave correct ones)

var fairyTale3 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];
//all have the variable .. papaBear defines
//mamabear overwrites with 'Too Cold' ... correct value
//babyBear overwrite the same variable
//doesn't exist with goldilocks
fairyTale3 = new Array();
fairyTale3.push('mamaBear');

// Which function(s) access the "sleepy" variable and get undefined
// (Delete wrong answers, leave correct ones)

var fairyTale4 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];
//sleepy is a private variable accessible only to babyBear
fairyTale4 = new Array();
fairyTale4.push('papaBear');
fairyTale4.push('mamaBear');
fairyTale4.push('goldilocks');
fairyTale4.push('daBears');

// Which function(s) access the isFurry variable and get true
// (Delete wrong answers, leave correct ones)

var fairyTale5 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];
//isFurry is private variable for papaBear but accessible to functions contained within
fairyTale5 = new Array();
fairyTale5.push('papaBear');
fairyTale5.push('mamaBear');
fairyTale5.push('babyBear');
fairyTale5.push('daBears');


// *************
// * PROBLEM 2 *
// *************

// Write a constructor function called Vehicle.  Vehicle should have a property
// called gasRemaining that is equal to 100.

// Next, assign a function called drive to the Vehicle prototype.  When invoked,
// drive should subtract 25 from the gasRemaining property of any Vehicle your constructor
// function creates.

// Create 2 new Vehicles with the constructor function you made: one called "charger",
// the other called "mustang".  Using implicit context, invoke the drive method on
// "charger" once, and invoke it twice on "mustang".

// CODE HERE...

function Vehicle(name) {
  this.name = name;
  this.gasRemaining = 100;
}
Vehicle.prototype.drive = function () {
  this.gasRemaining -= 25;
  console.log('driving ', this.name, this.gasRemaining);
}
var charger = new Vehicle('charger')
var mustang = new Vehicle('mustang');

charger.drive();
mustang.drive();
mustang.drive();

// -----------------------------------------------------------------------------

// *************
// * PROBLEM 3 *
// *************

// For this problem, you will need to add a method to the String prototype named
// "grammarPolice".  When called on a string, "grammarPolice" will return a new string
//  where the first letter of every word is capitalized, while reverting the remainder
// of each word to lowercase.

// For example: "OH HELLO THERE" becomes "Oh Hello There"

// Your method may be passed punctuation, numbers or other non-letter characters
// and should neither modify them nor break when encountering them.

// CODE HERE...
function grammarPolice() {
   return this.replace(/\w\S*/g,
     function(txt){
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
     });
}

String.prototype.grammarPolice = grammarPolice;


// *************
// * PROBLEM 4 *
//*************

// Write a function called valueType that has two parameters. Jasmine will pass
// arguments into your function through the parameters.  Your function will need
// to compare the passed-in values and return a string based on that comparison, as follows:

// If the arguments are of the same type and have the same value, return "Exactly the same"

// If the arguments have the same value but are of different types, return "Same value, different types"

// In all other cases, return "Different values"

// CODE HERE...
function valueType(p1, p2) {
  var sameValue = false;
  var sameType = false;

  if(p1 == p2) {
    sameValue = true;
  }
  if(typeof p1 == typeof p2) {
    sameType = true;
  }

  if(sameValue && sameType) {
    return 'Exactly the same';
  } else if (sameValue==true && sameType == false) {
    return 'Same value, different types';
  } else {
    return 'Different values'
  }
}

console.log(valueType(2, 2));
console.log(valueType(5, "5"));
console.log(valueType(7, "Strawberry"));

// *************
// * PROBLEM 5 *
// *************

// Write a function called "promiseCatcher" with a single parameter.
// Jasmine will pass a promise into your function through that parameter.
// Your function will need to handle that promise.
// When your promise receives its results, set variable 'theAnswer' (seen below) equal to the result.

var theAnswer = "Unknown";

// CODE HERE...
// promiseCatcher = function(p1) {
//   p1().then(function (result) {
//     theAnswer = result;
//   }).catch(function (e) {
//     theAnswer = 'theAnswer';
//   })
// }

promiseCatcher= function(p1) {
    p1.then(function(value) {
    theAnswer = value;
  }).catch(function(e) {
    theAnswer = e;
  })
}
