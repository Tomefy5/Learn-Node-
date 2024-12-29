var questions = [
    "Comment t'appelles-tu?",
    "Que fais tu dans la vie?",
    "Quel est ton language de programmation préféré?"
]

var answers = []

function ask(index) {
    process.stdout.write(`\n${questions[index]}\n`)
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