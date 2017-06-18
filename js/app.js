'use strict';

// first line of next prompt
var intro = '';
var score = 0;
// question list
var questions = ['First question: Does Don contain three letters?', 'Second question: Does Don start with a \'D\'', 'Third question: Does Don end with an \'n\'?', 'Fourth question: Does Don contain a vowel?', 'Fifth question: Is Don a palindrome?'];
// answer key
var answerKey = ['y', 'y', 'y', 'y', 'n'];
var remain = 4;
var summary = '';
var guess = null;
var myName;
var cities = ['newcastle', 'bellevue', 'seattle', 'renton', 'auburn', 'tacoma'];
var teeth = 28;
var correct = 0;

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
  intro = checkAnswer(answerKey[i], guess);
  // if (guess.toLowerCase().slice(0,1) == answerKey[i]){
  //   score++;
  //   intro = 'Correct!  Your score is now ' + score + ' points.\n\n';
  // } else {
  //   intro = 'Wrong!  Your score remains at ' + score + ' points.\n\n';
  // }
}
function checkAnswer(answer, guess) {
  if (guess.slice(0,1) == answer){
    score++;
    correct++;
    return('Correct!  Your score is now ' + score + ' points.\n\n');
  } else {
    return('Wrong!  Your score remains at ' + score + ' points.\n\n');
  }
}
// since guess from previous question is 'y' or 'n', while loop starts automatically

while (guess != teeth && remain > 0) {
  guess = NaN;
  // only numbers are valid
  while (isNaN(guess)) {
    guess = parseInt(prompt(intro + 'How many teeth does Don currently have?\n\n' + remain + ' guesses remaining.\n\n'));
    intro = 'Invalid response.  Please enter a number. \n\n';
  }
  remain --;
  console.log('Teeth guess #' + (4 - remain) + ': ' + guess);
  intro = checkTeeth(guess);
}
function checkTeeth(guess){
  if (guess > teeth) {
    return('Wrong! Go lower.\n\n');
  } else if (guess < teeth) {
    return('Wrong! Go higher.\n\n');
  } else {
    return('');
  }
}

if (guess == 28) {
  score += 3;
  correct++;
  intro = 'Correct!  Your score is now ' + score + '.\n\n';
} else {
  intro = 'Wrong!  No more guesses!  Your score remains at ' + score + '.\n\n';
}

guess = 'bad';
remain = 6;

function checkCities(guess){
  return(cities.indexOf(guess.toLowerCase()) > -1);
}
while (!checkCities(guess) && remain > 0) {
  guess = null;
  while (!guess) {
    guess = prompt(intro + 'Final question: Don has lived in 6 different cities.  Can you name one?\n\n' + remain + ' guesses remaining.');
    intro = 'Don\'t give up that easily! \n\n';
    console.log('City Guess #' + (6 - remain) + ': ' + guess);
  }
  remain --;
  intro = 'Wrong!\n\n';
}

if (checkCities(guess)) {
  score += 3;
  correct++;
  intro = 'Correct!  You scored a total of ' + score + ' points.\n\n';
} else {
  intro = 'Wrong!  You scored a total of ' + score + ' points.\n\n';
}

summary = 'You got ' + correct + ' out of 7 questions right.\n\n';

if (score == 11) {
  summary = summary + 'Congrats on a perfect score, ' + myName + '!';
} else if (score > 7) {
  summary = summary + 'That\'s still way above average, ' + myName + '!';
} else if (score > 3) {
  summary = summary + 'Better study harder next time, ' + myName + '.';
} else if (score > 0) {
  summary = summary + 'You would have been better off with random guessing, ' + myName + '.';
} else {
  summary = summary + 'Were you trying to bomb on purpose, ' + myName + '?';
}
alert(intro + summary);
