'use strict';

// get user name and greeting

var userName = prompt('Hello! What is your name?');

// console.log('the user name is ' + userName);

alert('Hello ' + userName + '! Welcome to the site. Please take a moment to answer a few important questions. Please answer yes or no only.');

// question 1 Is cheese delicious?

var cheese = prompt('Is cheese delicious');

if(cheese.toLowerCase() === 'yes'){
  alert('You\'ve probably enjoyed some of the best cheeses!');
} else if(cheese.toLowerCase() === 'no'){
  alert('That\'s too bad. My guess is that you must have had a bad experience with cheese.');
} else {
  alert('Please answer with a yes or no');
}

// question 2 Do you like hiking?

var hiker = prompt('Do you enjoy hiking?');

if(hiker.toLowerCase() === 'yes'){
  alert('Me too! I\'ve been to all sorts of cool places in the Seattle area.');
} else if(hiker.toLowerCase() === 'no'){
  alert('Its a great hobby and spending time in nature has so many benefits. You should try it sometime!');
} else {
  alert('Please answer with a yes or no');
}

// question 3 cat person?

var catPerson = prompt('Are you a cat person?');

if(catPerson.toLowerCase() === 'yes'){
  alert('Nice! So am I, but I don\'t have one yet.');
} else if(catPerson.toLowerCase() === 'no'){
  alert('Thats fine. Lots of dog fans out there.');
} else {
  prompt('Please answer with a yes or no');
}

// question 4 meaning of life?

var philosphy = prompt('Does life have a higher meaning?');

if(philosphy.toLowerCase() === 'yes'){
  alert('Nice to meet a fellow Philosopher!');
} else if(philosphy.toLowerCase() === 'no'){
  alert('Monty Python addresses all of this in The Meaning of Life (1983)');
} else {
  prompt('Please answer with a yes or no');
}

// question 5 Play an Instrument?

var playInstrument = prompt('Do you play any musical instruments?');

if(playInstrument.toLowerCase() === 'yes'){
  alert('That\'s so cool! I\'ve played the piano for 25 years.');
} else if(playInstrument.toLowerCase() === 'no'){
  alert('You\'re never too old to start learning!');
} else {
  prompt('Please answer with a yes or no');
}


// question 6 Number guessing game
// Guess a number between 1 and 20 (answer is 12)

var correctAnswer = 12
for(var i = 0; i < 4; i = i + 1){
  var numberGuess = prompt('Now I would like to play a little number game. Please guess a number between 1 and 20. You have four guesses!')
  if (numberGuess == correctAnswer) {
    alert('That is correct! Great Work!');
    break;
  } else if(numberGuess < correctAnswer) {
    alert('Sorry! That number is too low. Try a higher number.');
  } else if(numberGuess > correctAnswer) {
    alert('Sorry! That number is too high. Try a lower number.');
  }
  if (i == '3') {
    alert('I\'m sorry but that\'s the final guess. The correct answer was 12.');
  }
}

//question 7 Pokemon question. Name one of the Kanto Starters (one of the original starter Pokemon from the original Pokemon Red, Green, Blue, Yellow games)

var kantoStarter = ['bulbasaur', 'charmander', 'squirtle', 'pikachu'];

for(var i = 0; i < 6; i++){
  var starterGuess = prompt('Now let\'s play one more game! Can you tell me the name of one of the original starter Pokemon from the original Red, Green, Blue, or Yellow Version Pokemon games? You have six tries to get the right answer.');
if (starterGuess.toLowerCase() === 'bulbasaur') {
  alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  break;
} else if (starterGuess.toLowerCase() === 'charmander') {
  alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  break;
} else if (starterGuess.toLowerCase() === 'squirtle') {
  alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  break;
} else if (starterGuess.toLowerCase() === 'pikachu') {
  alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  break;
} else {
  alert('Sorry, please try again! Remember starter Pokemon always are either Grass, Fire or Water types.');
} if (i == '5') {
  alert('Sorry! The correct answers were Bulbasaur, Charmander and Squirtle, but Pikachu is also accemptable because it was the starter Pokemon from Yellow Version.')
}
}

alert('Thank you so much for answering the questions ' + userName + '! It was nice to meet you. Continue now to learn a little bit about me on the rest of the site.');