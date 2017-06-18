'use strict';

// first line of next prompt
var intro = '';
var score = 0;
// question list
var questions = ['First question: Does Don contain three letters?', 'Second question: Does Don start with a \'D\'', 'Third question: Does Don end with an \'n\'?', 'Fourth question: Does Don contain a vowel?', 'Fifth question: Is Don a palindrome?'];
// answer key
var answerKey = ['y', 'y', 'y', 'y', 'n'];
var summary = '';
var guess = null;
var myName;

while (!myName) {
  myName = prompt('Hi there, welcome to my page!  What is your name?');
  console.log('Name: ' + myName);
}

intro = 'I\'m glad you finally showed up, ' + myName + '. Let\'s play a game to see how well you know Don.\n\n';

for (var i = 0; i < 5; i++) {
  guess = null;
  // code only escapes loop if you have an answer that can be found in the array)
  while (!guess || ['yes', 'y', 'no', 'n'].indexOf(guess.toLowerCase()) == -1) {
    guess = prompt(intro + questions[i]);
    intro = 'That\'s not a valid response!  Answer "yes" or "no" only.\n\n';
    console.log(questions[i] + ': ' + guess);
  }
  // valid answers are reduced to one letter and then compared to key
  if (guess.toLowerCase().slice(0,1) == answerKey[i]){
    score++;
    intro = 'Correct!\n\n';
  } else {
    intro = 'Wrong!\n\n';
  }
}

// since guess from previous question is 'y' or 'n', while loop starts automatically

summary = myName + ', you scored ' + score + ' points total.  You should feel very proud of yourself.';
alert(intro + summary);
