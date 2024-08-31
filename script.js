let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    const choices = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
console.log(getComputerChoice());

function getHumanChoice()
{
    let choice = prompt("Choose rock, paper or scissors: ").toLowerCase();
    while(!["rock","paper","scissors"].includes(choice))
    {
        choice = prompt("Invalid choice. Please enter rock, paper or scissors: ");
    }
    return choice;
}

function playRound(humanChoice,computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice)
    {
        console.log("It's a tie!!");
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )
    {
        humanScore++;
        console.log(`You win :) ${humanChoice} beats ${computerChoice}`);
    }
    else{
        console.log(`You lose :( ${computerChoice} beats ${humanChoice}`)
    }
}

function playGame()
{
    humanScore = 0;
    computerScore = 0;

    for(i=0; i<5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    if(humanScore > computerScore)
    {
        console.log("You win this game!!!");
    }
    else if(computerScore > humanScore)
    {
        console.log("You lose this game :(");
    }
    else{
        console.log("The game is a tie!!");
    }
}

playGame();