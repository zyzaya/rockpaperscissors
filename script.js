function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1, str.length).toLowerCase()
}

function computerPlay() {
    let i = Math.floor(Math.random() * 3)
    switch(i) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
    }
}

function getPlayerInput() {
    let input = ""
    let validInput = false
    do {
        input = prompt("What will you play?")
        if (input) {
            input = input.toLowerCase()
            if (input.toLowerCase() === "rock" || input === "paper" || input == "scissors") {
                validInput = true
            }
        }
        if (!validInput) {
            console.log("Invalid input, please enter 'Rock', 'Paper', or 'Scissors'")
        }

    } while (!validInput)
    return capitalize(input)
}
var i = 0;
// for (i = 0; i < 3; i++) {
//     console.log(computerPlay())
//     console.log(getPlayerInput())
// }