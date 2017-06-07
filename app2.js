'use strict';
//greeting---------------------------------------------------------------------

var user = prompt('Hello there!  Before we begin, please tell me your name.');

alert('Welcome ' + user + '!');

var ready = confirm('Now, we are going to play a quick game.  I am going to ask you 7 questions about myself and you will make a guess as to the answers. The first 5 will be yes or no questions.  If you think it is true, type \'yes\' or \'y\' and if you think it is false type \'no\' or \'n\'.  Question 6 will have you guess a number and question 7 a place.  Ready to play?');

if(ready === true){
  alert('Alright, here we go!');
  console.log('user is ready');
} else {
  alert('Too bad.  We are playing anyway');
  console.log('user said not ready.  lol');
}

//questions, answers, arrays, counters-----------------------------------------

var question1 = 'Am I a native to Seattle?';
var question2 = 'Have I served in the military?';
var question3 = 'Do I have pets?';
var question4 = 'Is my favorite color green?';
var question5 = 'Can I play an instrument?';
var question6 = 'How old am I?';
var question7 = 'I have lived in 9 states besides Washington.  Can you guess one of them?';

var question1Correct = 'Correct!  I moved here 7 years ago.';
var question2Correct = 'Correct!  I served 4 years in the Air Force.';
var question3Correct = 'Correct!  I have two cats.  Well technically they are my roommate\'s cats, but since I take care of them and they love me more they are kind of mine.';
var question4Correct = 'Correct!  My favorite color is white.';
var question5Correct = 'Correct!  I can play the guitar.';

var question1Incorrect = 'Incorrect!  I moved here 7 years ago.';
var question2Incorrect = 'Incorrect!  I served 4 years in the Air Force.';
var question3Incorrect = 'Incorrect!  I have 2 cats';
var question4Incorrect = 'Incorrect!  My favorite color is white.';
var question5Incorrect = 'Incorrect!  I can play the guitar.';

var invalid1 = 'That is an invalid answer.  Please only type \'yes\', \'y\', \'no\' or \'n\'.';
var invalid2 = 'Again, that is invalid.  \'Yes\', \'y\', \'no\' or \'n\'.';
var invalid3 = 'Okay, you don\'t seem to understand this really simple concept.  Literally the only thing you should be typing is \'YES\', \'Y\', \'NO\' or \'N\'.  I\'m giving you one more chance to get it right then I am ending the game with all unanswered questions marked as wrong.';
var invalid4 = 'That\'s it.  Game over man.  Game over.';

var correct = 0;
var incorrect = 0;
var invalid = 0;
var invalidLeft = 5;
var ageCountdown = 4;
var placeGuesses = 6;
var placeGuessed = false;


var allQuestions = [question1, question2, question3, question4, question5];
var allAnswers = ['no', 'yes', 'yes', 'no', 'yes'];
var allAnswersAlt = ['n', 'y', 'y', 'n', 'y'];
var incorrectAnswers = ['yes', 'no', 'no', 'yes', 'no'];
var incorrectAnswersAlt = ['y', 'n', 'n', 'y', 'n'];
var correctResponse = [question1Correct, question2Correct, question3Correct, question4Correct, question5Correct];
var incorrectResponse = [question1Incorrect, question2Incorrect, question3Incorrect, question4Incorrect, question5Incorrect];
var invalidResponse = [invalid1, invalid2, invalid3, invalid4];
var reviewAnswers = [];
var allResponse = [];
var placesLived = ['alaska', 'montana', 'connecticut', 'maine', 'arizona', 'texas', 'florida', 'nevada', 'idaho'];

//for loop questions 1-5 (the machine)-------------------------------------------------------
function questionSet1(){
  for(var i = 0; i < allQuestions.length; i++){
    var response = prompt(allQuestions[i]);
    allResponse.push(response);
    if(allResponse[i].toLowerCase() === allAnswers[i] || allResponse[i].toLowerCase() === allAnswersAlt[i]){
      correct++;
      console.log('Question ' + [i + 1] + ' answer correct');
      reviewAnswers.push('correct');
      alert(correctResponse[i]);
      invalidLeft--;
    } else if(allResponse[i].toLowerCase() === incorrectAnswers[i] || allResponse[i].toLowerCase() === incorrectAnswersAlt[i]){
        incorrect++;
        console.log('Question ' + [i + 1] + ' answer incorrect');
        reviewAnswers.push('incorrect');
        alert(incorrectResponse[i]);
        invalidLeft--;
      } else {
        console.log('answer invalid');
        alert(invalidResponse[invalid]);
        invalid++;
        allResponse.pop();
        if(invalid < 4){
          i--;
        } else {
          i+= 10;
          for(var x = 0; x < invalidLeft; x++){
            reviewAnswers.push('incorrect');
          }
        }
      }
    }
}
//for loop question 6 ---------------------------------------------------------

function questionSet2(){
  for(var i = 0; i < 4; i++){
    var ageGuess = prompt(question6 + '  ' + ageCountdown + ' guess(es) left!');
    console.log('Question 6 guessed: ' + ageGuess);
    if(ageGuess == 35){
      alert('Good job!  You got it right!');
      reviewAnswers.push('correct');
      correct++;
      i+=5;
    } else if(ageGuess < 35){
        alert('Higher!  I\'m kinda old.');
        ageCountdown--;
      } else if(ageGuess > 35){
        alert('Hey!  I aint that old.  I still consider myself young.  Guess lower.');
        ageCountdown--;
      } else {
        alert('That is not a number.  That takes away one of your guesses.');
        ageCountdown--;
      }
    }

    if(ageCountdown === 0){
      alert('Sorry, out of guesses.');
      reviewAnswers.push('incorrect');
    }
}
//question 7--------------------------------------------------------------------

function questionSet3(){
  while(placeGuesses > 0){
    var placeResponse = prompt(question7 + '  You have ' + placeGuesses + ' guess(es) left!');
    console.log('Question 7 guessed: ' + placeResponse);
    for(var i = 0; i < placesLived.length; i++){
      if(placeResponse.toLowerCase() === placesLived[i]){
        alert('Correct!  I have lived there!');
        i+=10;
        placeGuesses = -10;
        reviewAnswers.push('correct');
        correct++;
        placeGuessed = true;
      }
    }
    if(placeGuessed === false && placeGuesses !== 0) {
      alert('Guess again!');
      placeGuesses--;
    }
    if(placeGuesses === 0){
      alert('Sorry!  Out of guesses!');
      reviewAnswers.push('incorrect');
    }
  }
}

//function calls===============================================================

questionSet1();
questionSet2();
questionSet3();

//debugging loops--------------------------------------------------------------

for(var i = 0; i < allResponse.length; i++){
  console.log('Response ' + (i + 1) + ': ' + allResponse[i]);
}

//review-----------------------------------------------------------------------

alert('Okay ' + user + '. Let\'s see how you did.  Your answers are at the bottom of the page.');

document.write('You got ' + correct + ' out of 7 correct ' + user + '! <br>');

for(var i = 0; i < reviewAnswers.length; i++){
  document.write('Question ' + (i + 1) +': ' + reviewAnswers[i] + '<br>');
}
