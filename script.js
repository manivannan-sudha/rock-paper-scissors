let userPs = 0;
let computerPs = 0;
function battle(userChoice){

    const choices = ['rock', 'paper' ,'scissors'];

    const userPoints = document.getElementById('user-points');
    const computerPoints = document.getElementById('computer-points');
    let res = document.getElementById('res');
    let desc = document.querySelector('#desc');
    let modal = document.getElementById('modal');
    let closeModal = document.querySelector('.closemodal');
    let finalRes = document.getElementById('final-res');
    let computerChoice = choices[Math.floor(Math.random()*3)];

    let uChoice = document.getElementById('user-choice');
    let cChoice = document.getElementById('computer-choice');
    
    

    if(userChoice == computerChoice)
    {
        res = "Tie";
        console.log("its a tie");
        switch(userChoice){
            case 'rock' :
                uChoice.innerHTML = '✊';
                cChoice.innerHTML = '✊';
                break;
            case 'paper' :
                uChoice.innerHTML = '✋';
                cChoice.innerHTML = '✋';
                break;
            case 'scissors' :
                uChoice.innerHTML = '✌';
                cChoice.innerHTML = '✌';
                break;
            
                            
        }
    }

    else{

        switch (userChoice) {
            case "rock":
                res = (computerChoice === "scissors") ? "You Win!" : "You Lose";
                if (res === "You Win!") {
                    userPs++;
                    uChoice.innerHTML = '✊';
                    cChoice.innerHTML = '✌';
                } else if (res === "You Lose") {
                    computerPs++;
                    uChoice.innerHTML = '✊';
                    cChoice.innerHTML = '✋';
                }
                break;
            
            case "paper":
                res = (computerChoice === "rock") ? "You Win!" : "You Lose";
                if (res === "You Win!") {
                    userPs++;
                    uChoice.innerHTML = '✋';
                    cChoice.innerHTML = '✊';
                } else if (res === "You Lose") {
                    computerPs++;
                    uChoice.innerHTML = '✋';
                    cChoice.innerHTML = '✌';
                }
                break;
            
            case "scissors":
                res = (computerChoice === "rock") ? "You Lose" : "You Win!";
                if (res === "You Win!") {
                    userPs++;
                    uChoice.innerHTML = '✌';
                    cChoice.innerHTML = '✋';
                } else if (res === "You Lose") {
                    computerPs++;
                    uChoice.innerHTML = '✌';
                    cChoice.innerHTML = '✊';
                }
                break;
        }
        

    }

    userPoints.innerHTML = userPs;
    computerPoints.innerHTML = computerPs;
    desc.innerHTML = res;
    console.log(userChoice);
    console.log(computerChoice);
    console.log(res);
    console.log(userPs);
    console.log(computerPs);

    if( userPs === 5)
    {
        console.log("gameover");
        res = 'First to score 5 points wins the game';
        userPs=0;
        computerPs=0;
        desc.innerHTML = res;
        userPoints.innerHTML = userPs;
        computerPoints.innerHTML = computerPs;
        finalRes.innerHTML = 'You Win!';
        console.log(finalRes);
        uChoice.innerHTML = '❓';
        cChoice.innerHTML = '❓';
        
        modal.showModal();
        closeModal.addEventListener('click',()=>{
            modal.close();
        })
    }
    else if(computerPs ===5)
    {
        console.log("gameover");
        res = 'First to score 5 points wins the game';
        userPs=0;
        computerPs=0;
        desc.innerHTML = res;
        userPoints.innerHTML = userPs;
        computerPoints.innerHTML = computerPs;
        finalRes.innerHTML = 'You Lost';
        console.log(finalRes);
        uChoice.innerHTML = '❓';
        cChoice.innerHTML = '❓';
        
        modal.showModal();
        closeModal.addEventListener('click',()=>{
            modal.close();
        })
    }
}