var qh = require('./questionHandler')

var questions = [
    "Comment t'appelles-tu? ",
    "Que fais tu dans la vie? ",
    "Quel est ton language de programmation préféré? ",
];

var attributes = ['nom' , 'job', 'lg']

qh
.setQuestions(questions)
.setAttributes(attributes)
.ask()