document.onkeydown = typeGame; //Call the function typeGame () when a key is pressed



//Array to store characters
var alpha = new Array("Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ",
  "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ", "Ｐ", "Ｑ", "Ｒ",
  "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "Ｘ", "Ｙ", "Ｚ");



//Array to store keycodes
var kcode = new Array(65, 66, 67, 68, 69, 70, 71, 72, 73,
  74, 75, 76, 77, 78, 79, 80, 81, 82,
  83, 84, 85, 86, 87, 88, 89, 90);

//An array that stores random numbers from 0 to 25
var rnd = new Array();





//Global variables
var question = ""; //Store the string in question
var cnt = 0; //Store some questions
var typStart, typEnd; //Stores start and end times





//A function that creates 200 random numbers from 0 to 25 and stores them in the array rnd
function rannum() {
  for (var i = 0; i < 50; i++) {
    rnd[i] = Math.floor(Math.random() * 26);
  }
}


//A function that sets a typing game problem
function gameSet() {
  //Clear the question sentence and the count
  question = "";
  cnt = 0;

  //Call the random number creation function
  rannum();

  // Create a question sentence (connect 200 characters randomly from the elements of the array moji)
  // question = "" + alpha [rnd [0]] + moji [rnd [1]] +… + alpha [rnd [199]]
  for (var i = 0; i < 50; i++) {
    question = question + alpha[rnd[i]];
  }

  //Display in the question frame
  document.getElementById("frame").innerHTML = question;
}


//Function that receives keystrokes
function typeGame(evt) {
  var kc; //Variable to store the entered key code

  //Get the key code of the entered key
  if (document.all) {
    kc = event.keyCode;
  } else {
    kc = evt.which;
  }
  //Compare the entered key code with the key code of the question sentence
  if (kc == kcode[rnd[cnt]]) {
    //Below, the processing when the key code matches

    //Record the time when the first character was entered
    if (cnt == 0) {
      typStart = new Date();
    }

    cnt++; //Increase the count number to +1

    //Check if all characters have been entered
    if (cnt < 50) {
      //Cut off the first letter of the question sentence
      question = question.substring(1, question.Length);

      //Display in the question frame
      document.getElementById("frame").innerHTML = question;
    } else {
      //If you have entered all characters, record the end time
      typEnd = new Date();

      //End time Get the milliseconds taken at the start time
      var passed = typEnd - typStart;

      //Get seconds
      var sec = Math.floor(passed / 1000);

      //Get milliseconds
      var msec = passed % 1000;

      //Create a string to signal the end of the problem
      var fin = "AWESOME JOB! You completed the game.　TIME: " + sec + "sec " + msec;

      //Show the end of the game in the question frame
      document.getElementById("frame").innerHTML = fin;
    }
  }
}
