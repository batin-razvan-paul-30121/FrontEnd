// javascript
let player={
    name : "Paul",
    chips: "200"
}
let cards= []
let sum = 0
let hasBlackJack=false
let isAlive=false
let message= ""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector(".sum-el")//se puate si asa
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name + ": $" + player.chips

function getRandomNumber(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if( randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 1
    }else{
        return randomNumber
    }


}

function startGame(){
    isAlive=true
    let firstCard=getRandomNumber()
    let secondCard=getRandomNumber()
    cards = [firstCard,  secondCard]
    sum= firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent="Sum: "+ sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    cardsEl.textContent += cards[i] + " "
    if(sum <= 20)
    {
    message="Do you want another card?"
    }else if(sum === 21){
    hasBlackJack=true
    message="Woow! You've got a black-jack!"
    }else{
    isAlive=false
    message="You're out of the game!"
    }
    messageEl.textContent=message
}
function newCard(){
    if(isAlive==true && hasBlackJack==false)
    {let card =getRandomNumber()
    cards.push(card)
    sum += card
    renderGame()}
}
