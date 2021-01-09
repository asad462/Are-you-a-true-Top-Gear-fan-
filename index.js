const chalk = require('chalk');
const log = console.log;
log(chalk.yellow.bold.inverse('Are you a true Top Gear fan?'))
var score  = 0;
const readlineSync = require("readline-sync");
var name = readlineSync.question(chalk.yellow.bold.italic('What is your name? '));
log(chalk.bold.inverse("Hi ",chalk.italic.underline(name)," ! "))
log(chalk.bold.yellow.inverse("Welcome to the quiz!"))
function Quiz(question,answer){
  var currentAns = readlineSync.question(question);
  if (currentAns===answer){
    log(chalk.green.inverse('You are right!'));
    score+=1;
  }
  else{
    log(chalk.red.bold.inverse('You are wrong!'));
    log(chalk.yellow.bold.inverse('The correct answer is : ', answer));
  }
  log(chalk.yellow.bold('Your current score is :', score));
}
var quesList = [
  {
    question : "Who started Season 2 of the new Top Gear? ",
    answer : "Jeremy Clarkson"
  },
  {
    question : "Who was the new presenter of this series? ",
    answer : "James May"
  },
  {
    question : "How many seasons did the three presenters host together? ",
    answer : "20"
  },
  {
    question : "In which year did Jeremy Clarkson get sacked by the BBC? ",
    answer : "2015"
  },
  {
    question : "What is the name of their new show on Amazon Prime? ",
    answer : "The Grand Tour"
  },
  {
    question : "When did they start this show? ",
    answer : "2016"
  }
]
for( var i = 0; i<quesList.length; i++){
  currentQues = quesList[i];
  Quiz(currentQues.question,currentQues.answer);
}
log(chalk.yellow.bold.inverse('Your total score is : ', score,' '));
log(chalk.yellow.bold.inverse("Thank You for trying this Quiz! (^_^)"));
