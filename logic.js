 
 let getComputerChoice = ()=>{
    let array = ['Rock','Paper','cessor'];
    return(array[Math.floor(Math.random() * array.length)]);

}


let result = ()=>{
    let computerChoice= getComputerChoice();
    let playerChoice = prompt('Enter your choice'); 
    console.log(playerChoice.toUpperCase())
    console.log(computerChoice.toUpperCase())

   if ( playerChoice.toUpperCase() === computerChoice.toUpperCase()){
        console.log(`you choice is ${playerChoice} computer choice is ${computerChoice} result :ta3adol`)
    }
    else if (playerChoice.toUpperCase() ==="ROCk" && computerChoice.toUpperCase()== "CESSOR" ){
        console.log(`you choice is ${playerChoice} computer choice is ${computerChoice} result :You win`)
    }
    else if (playerChoice.toUpperCase()===`CESSOR` && computerChoice.toUpperCase()== `PAPER` ){
        console.log(`you choice is ${playerChoice} computer choice is ${computerChoice} result : You win`)
    }
    else if (playerChoice.toUpperCase() ===`PAPER` && computerChoice.toUpperCase()== `ROCK` ){
        console.log(`you choice is ${playerChoice} computer choice is ${computerChoice} result : You win`)
    }
    else {
        console.log(`you choice is ${playerChoice}  computer choice is ${computerChoice} result : You lose`)
    }
}


result();

