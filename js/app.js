'use strict';

// first line of next prompt
var intro = '';
var score = 0;
var answer = false;
// question list
var questions = ['First question: Does Don contain three letters?', 'Second question: Does Don start with a \'D\'', 'Third question: Does Don end with an \'n\'?', 'Fourth question: Does Don contain a vowel?', 'Fifth question: Is Don a palindrome?'];
// answer key
var answerKey = ['y', 'y', 'y', 'y', 'n'];
var remain = 4;
var summary = '';
var guess = null;
var name;

while (!name) {
  name = prompt('Hi there, welcome to my page!  What is your name?');
}

alert('I\'m glad you finally showed up, ' + name + '. Let\'s play a game to see how well you know Don.');

for (var i = 0; i < 5; i++) {
  guess = null
  while (!guess || ['yes', 'y', 'no', 'n'].indexOf(guess.toLowerCase()) == -1) {
    guess = prompt(intro + questions[i]);
    intro = 'That\'s not a valid response!  Answer "yes" or "no" only.\n\n'
  }
  console.log(questions[i] + ": " + guess);
  if (guess.toLowerCase().slice(0,1) == answerKey[i]){
    score++;
    intro = 'Correct!  Your score is now ' + score + ' points.\n\n'
  } else {
    intro = 'Wrong!  Your score remains at ' + score + ' points.\n\n'
  }
}

while (guess != 28 && remain > 0) {
  guess = NaN;
  while (isNaN(guess)) {
    guess = parseInt(prompt(intro + 'How many teeth does Don currently have? This is now worth ' + (remain + 1) + ' points, with ' + remain + ' guesses remaining.\n\n'));
    intro = 'Invalid response.  Please enter a number. \n\n';
  }
  remain --;
  console.log('Teeth guess #' + (4 - remain) + ': ' + guess);
  if (guess > 28) {
    intro = 'Wrong! Go lower.\n\n';
  } else if (guess < 28) {
    intro = 'Wrong! Go higher.\n\n'
  }
}

if (guess == 28) {
  score = score + remain + 2;
  intro = 'Correct!  Your score is now ' + score + '.\n\n'
} else {
  intro = 'Wrong!  No more guesses!  Your score remains at ' + score + '.\n\n'
}

guess = null;

while (!guess) {
  guess = prompt(intro + 'Final question: Don has lived in 6 different cities.  Can you name one?')
}
console.log('City guess: ' + guess);
if (['newcastle', 'bellevue', 'seattle', 'renton', 'auburn', 'tacoma'].indexOf(guess.toLowerCase()) > -1) {
  score++;
  intro = 'Correct!  Your final tally is ' + score + ' points.\n\n';
} else {
  intro = 'Wrong!  Your final tally is ' + score + ' points.\n\n';
}

if (score == 11) {
  summary = 'Congrats on a perfect score, ' + name + '!';
} else if (score > 7) {
  summary = 'That\'s way above average, ' + name + '!';
} else if (score > 3) {
  summary = 'Better study harder next time, ' + name + '.';
} else if (score > 0) {
  summary = 'You would have been better off with random guessing, ' + name + '.';
} else {
  summary = 'Were you trying to bomb on purpose, ' + name + '?';
}
alert(intro + summary);
