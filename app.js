'use strict';
//greeting--------------------------------------------------------
var user = prompt('Hello there!  Before we get started, please tell me your name.');

alert('Welcome ' + user + '!')

var ready = confirm('Now, we will play a quick game.  I will ask you five questions about myself and you will guess \'yes\' or \'no\' for whether you believe they are true or not.  Are you ready?')

if(ready === true){
  console.log('user is ready');
} else {
  console.log('user is not ready.  too bad');
}

//questions-------------------------------------------------------------

var question1 = prompt('Am I a native to Seattle?').toLowerCase();

if(question1 === 'yes'){
  console.log('user has input yes for question 1');
} else if(question1 === 'no'){
  console.log('user has input no for question 1');
} else {
  alert('That is not a valid response.  \'yes\' or \'no\' only please!')
  console.log('user has input not input a valid answer for question 1');
  var question1 = prompt('Am I a native to Seattle?');
  if(question1 === 'yes'){
    console.log('user has input yes for question 1');
  } else if(question1 === 'no'){
    console.log('user has input no for question 1')
  } else {
    alert('Again, that is invalid.  Okay, I\'m putting your answer as \'no\'.');
    console.log('user has again input an invalid answer for question 1.  answer is now no');
  }
}

var question2 = prompt('Have I served in the military?').toLowerCase();
var question3 = prompt('Do I have pets?').toLowerCase();
var question4 = prompt('Is my favorite color green?').toLowerCase();
var question5 = prompt('Can I play an instrument?').toLowerCase();
