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

for (var i = 0; i < 10; i++) {
    console.log(computerPlay())
}