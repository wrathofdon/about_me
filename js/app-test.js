'use strict';

// first line of next prompt
var intro = '';
var score = 0;
var answer = false;
// question list
var questions = ['First question: Does Don contain three letters?', 'Second question: Does Don start with a \'D\'', 'Third question: Does Don end with an \'n\'?', 'Fourth question: Does Don contain a vowel?', 'Fifth question: Is Don a palindrome?'];
// answer key
var correct = ['y', 'y', 'y', 'y', 'n'];

function checkAnswer(guess) {
  // returns first letter if code is valid, false if not
  var temp = guess.toLowerCase();
  if (temp && (temp == 'yes' || temp == 'y' || temp == 'no' || temp == 'n')) {
    temp = guess.slice(0, 1);
  } else {
    temp = false;
  }
  return(temp);
}

function checkScore(guess, solution) {
  // verifies if score is correct, updates score and first line of next prompt
  var message = '';
  if (guess == solution) {
    score ++;
    message = 'Correct, your score is now ' + score + '.\n\n';
  } else {
    score --;
    message = 'Wrong, your score is now ' + score + '.\n\n';
  }
  return(message);
};

for (var i = 0; i < 5; i++) {
  answer = false;
  while (!answer) {
    var question = questions[i];
    answer = checkAnswer(prompt(intro + question));
    console.log(question + ' ' + answer);
    if (answer) {
      intro = checkScore(answer, correct[i]);
    } else {
      intro = 'That\'s not a valid response!\n\n';
    }
  };
}

alert(intro + 'You should be very proud of yourself.');
