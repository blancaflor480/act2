const pick = ["rock", "paper", "scissors"];
    const playerdisplay = document.getElementById("playerdisplay");
    const computerdisplay = document.getElementById("computerdisplay");
    const resultDisplay = document.getElementById("result");
    const playerscoredisplay = document.getElementById("playerscore");
    const computerscoredisplay = document.getElementById("computerscore");
    let playerscore = 0;
    let computerscore = 0;

    function winner(playerpick, computerpick) {
         if (playerpick === computerpick){
             return "It's A tie"
         } else if (
            (playerpick === "rock" && computerpick === "scissors") ||
            (playerpick === "paper" && computerpick === "rock") ||
            (playerpick === "scissors" && computerpick === "paper")
         ) {
            return "You Win!";

        } else {
            return "You Lose!";
        }
    } 

    function play(playerpick) {
        const computerpick = pick[Math.floor(Math.random() * 3)];
        const result = winner(playerpick, computerpick);

        playerdisplay.textContent = playerpick;
        computerdisplay.textContent = computerpick;
        resultDisplay.textContent = result;

        switch(result){
        case "You Win!":  
            resultDisplay.classList.add("greenText");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "You Lose!":  
            resultDisplay.classList.add("redText");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;
        default:
            resultDisplay.classList.remove("greenText", "redText");
        }
    }