function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1, str.length).toLowerCase()
}

function getComputerPlay() {
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

function playRound(player, computer) {
    let message = ""
    if (player === computer) {
        message = "Tie!"
    } else if ((player === "Rock" && computer === "Scissors") ||
                (player === "Paper" && computer === "Rock") ||
                (player === "Scissors" && computer === "Paper")) {
        message = `You win! ${player} beats ${computer}`
    } else {
        message = `You lose! ${computer} beats ${player}`
    }
    return message
}

function startGame() {
    while (true) {
        let player = getPlayerInput()
        let computer = getComputerPlay()
        console.log(`You played ${player}. Computer played ${computer}.`)
        console.log(playRound(player, computer))
    }
}