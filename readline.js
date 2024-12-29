var readline = require('readline')

var rl = readline.createInterface(process.stdin, process.stdout)

var questions = [
    "Comment t'appelles-tu?",
    "Que fais tu dans la vie?",
    "Quel est ton language de programmation préféré?"
]

var person = {
    name: 'tom',
    job: 'dev',
    lg: 'java'
}

var actualIndex = 0

function getQuestion() {
    return questions[actualIndex]
}

rl.question(getQuestion(), function (answer) {
    // person.name = answer
    person[0] = "totozy"
    console.log(`Votre nom est ${person.name}`);


    actualIndex++

    rl.setPrompt(getQuestion())
    rl.prompt()
    // rl.close()
    
})