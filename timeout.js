var questions = [
    "Comment t'appelles-tu?",
    "Que fais tu dans la vie?",
    "Quel est ton language de programmation préféré?"
]

var reactions = [
    "Tu es là",
    "Allooo!", 
    "Bon...ok"
]

var answers = []
var actualIndex

function createTimeout() {
    setTimeout(function() {
        askWithReaction()
    }, 2000)
}

function ask(index) {
    actualIndex = index
    process.stdout.write(`\n${questions[index]}\n`)
    createTimeout()
}

function askWithReaction() {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(`\n ${reactions[actualIndex]} > ${questions[actualIndex]} \n`)
}

process.stdin.on('data', function (data) {
    answers.push(data.toString().trim())

    if(answers.length === questions.length) {
        process.exit()
    }

    ask(answers.length)
})

process.on('exit', function () {
    process.stdout.write(`\n Vous êtes  ${answers[0]} un(e) ${answers[1]} et vous aimé le/la ${answers[2]}} \n`)
})

ask(0)
