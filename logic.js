const content = document.createElement('div');
content.textContent='this is a paragraphe'

const container = document.querySelector('body');
container.appendChild(content);



var para = document.querySelector('.p');
para.textContent='this is a paragraph'




let getComputerChoice = ()=>{
    let array = ['Rock','Paper','cessor'];
    return(array[Math.floor(Math.random() * array.length)]);

}


let result = (playerChoice)=>{
    let computerChoice= getComputerChoice();
    
    console.log(playerChoice.toUpperCase())
    console.log(computerChoice.toUpperCase())

   if ( playerChoice.toUpperCase() === computerChoice.toUpperCase()){
        content.textContent = 'ta3adol';
        console.log(`you choice is ${playerChoice} computer choice is ${computerChoice} result :ta3adol`)
    }
    else if (playerChoice.toUpperCase() ==="ROCk" && computerChoice.toUpperCase()== "CESSOR" ){
        content.textContent = 'You win';
        console.log(`you choice is ${playerChoice} computer choice is ${computerChoice} result :You win`)
    }
    else if (playerChoice.toUpperCase()===`CESSOR` && computerChoice.toUpperCase()== `PAPER` ){
        content.textContent = 'You win';
        console.log(`you choice is ${playerChoice} computer choice is ${computerChoice} result : You win`)
    }
    else if (playerChoice.toUpperCase() ===`PAPER` && computerChoice.toUpperCase()== `ROCK` ){
        content.textContent = 'You win';
        console.log(`you choice is ${playerChoice} computer choice is ${computerChoice} result : You win`)
    }
    else {
        content.textContent = 'You lose';
        console.log(`you choice is ${playerChoice}  computer choice is ${computerChoice} result : You lose`)
    }
}






const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      result(button.id);
    });
  });