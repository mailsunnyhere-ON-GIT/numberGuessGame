let randomNumber=parseInt(Math.random()*100+1)
console.log(randomNumber)
let submit=document.getElementById("butt")
let prevGuess=document.getElementById("prevguess")
let remGuess=document.getElementById("lastres")
let submission=document.getElementById("guess")
let adding=document.getElementById("loworhigh")

let start=true;
let guessnum=1;


if(true)
{
    submit.addEventListener("click",(e)=>{
        e.preventDefault()

        let guess=parseInt(submission.value)
        validateInput(guess)
       
    })

}
function validateInput(guess)
{
    if(isNaN(guess))
    {
        display("not a number")
    }
    else if(guess<1)
    {
        display("Enter greater number")
    }
    else if(100<guess)
    {
        display("Enter smaller number")
    }
    else{
        displayArray(guess)
        if(guessnum===11){
        display(`game over , number was ${randomNumber}`)
        endgame()    
    }
        else{
           checkguess(guess)
        }
    }
}
function checkguess(guess)
{
    if(randomNumber==guess)
    {
        display("u won")
        endgame()
    }
    else if(randomNumber<guess)
    {
        display("guess low")
    }
    else{
        display("guess high")
    }

}
function display(msg)
{
    adding.innerHTML=`${msg}`
}
function displayArray(guess)
{
    submit.innerHTML=""
    prevGuess.innerHTML+=`${guess} `
    guessnum++
    remGuess.innerHTML=`${11-guessnum}`
}