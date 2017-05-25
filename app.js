'use strict';

var confirmed = confirm('Are you ready to rock and roll!?');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready... but were going to start anyway.');
}
