'use strict';

var intro = '';
var score = 0;
var answer = false;
var correct = ['y', 'y', 'y', 'y', 'n'];

var questions = ['First question: Does Don contain three letters?', 'Second question: Does Don start with a \D\'', 'Third question: Does Don end with an \'n\'?', 'Fourth question: Does Don contain a vowel?', 'Fifth question: Is Don a palindrome?']

function checkAnswer(guess) {
  var temp = guess.toLowerCase();
  if (temp && (temp == 'yes' || temp == 'y' || temp == 'no' || temp == 'n')) {
    temp = guess.slice(0, 1);
  } else {
    temp = false;
  }
  return(temp);
}

function checkScore(guess, solution) {
  var message = '';
  if (guess == solution) {
    score ++;
    message = 'Correct, your score is now ' + score + '. ';
  } else {
    score --;
    message = 'Wrong, your score is now ' + score + '. ';
  }
  return(message);
};

for (var i = 0; i < 5; i++) {
  answer = false;
  while (!answer) {
    var question = questions.slice(i, i + 1);
    answer = checkAnswer(prompt(intro + question));
    console.log(question + " " + answer);
    if (answer) {
      intro = checkScore(answer, correct.slice(i, i + 1));
    } else {
      intro = 'That\'s not a valid response! ';
    }
  };
}

alert(intro + "You should be very proud of yourself.");
