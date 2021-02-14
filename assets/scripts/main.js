
let state={
    startNumber:0,
    number:4,
    lengtArray:20,
    currentArray:[],
    n:1,
    currentNum:0,
    score:0
}

// elements
let startScreen=document.querySelector('.startScreen')
let gameBoard=document.querySelector('.gameBoard')
let endScreen=document.querySelector('.endScreen')
let startCard=document.getElementById('startCard')
let startButton=document.getElementById('startButton')
let currentCard=document.getElementById('currentCard')
let yesButton=document.getElementById('yesButton')
let noButton=document.getElementById('noButton')

let scoreTable=document.getElementById('scoreTable')
let alertBlock = document.querySelector(".gameBoard__alert")
let symbolsTable=['fas fa-flag','fas fa-star','fas fa-bell','fas fa-gem','fas fa-square-full']
// events
startButton.addEventListener("click",startGame)
yesButton.addEventListener("click",()=>{
    check(true)
})
noButton.addEventListener("click",()=>{
    check(false)
})
// function spec
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function loader(){

    for (let index = 0; index < state.lengtArray; index++) {
state.currentArray.push(RandomNumber(0,state.number))
    }

    startCard.innerHTML=`<i class="${symbolsTable[state.currentArray[state.currentNum]]}"></i>`

}

function startGame(){
    state.startNumber=state.n
    state.currentNum=state.n
    startScreen.classList.add('hide')
    gameBoard.classList.remove('hide')
    currentCard.innerHTML=`<i class="${symbolsTable[state.currentArray[state.currentNum]]}"></i>`
}

function startRound(){
    if(state.currentNum<state.currentArray.length-2){
        state.currentNum+=1
        currentCard.innerHTML=`<i class="${symbolsTable[state.currentArray[state.currentNum]]}"></i>`
        //state.currentArray[state.currentNum]

    }
else{
    endGame()
}
}


function check(answer){
if(answer){
    if(state.currentArray[state.currentNum]===state.currentArray[state.currentNum-state.n]){
        updateScore(true)

    }
    else{
        updateScore(false)
    }
}
else{
    if(state.currentArray[state.currentNum]!==state.currentArray[state.currentNum-state.n]){
        updateScore(true)
}
else{
    updateScore(false)
}
}

startRound()
}

function updateScore(answer){
    state.score+=answer?1:-1
    alert(answer)
    console.log(state.score)
}
function endGame(){
    gameBoard.classList.add('hide')
    endScreen.classList.remove('hide')
    scoreTable.innerText=state.score
}

loader()


let switchDifButtons=document.querySelectorAll('.switchDifficulty__btn')
console.log(switchDifButtons)
switchDifButtons.forEach((x) => {
    x.addEventListener('click',switchDif)
  })


function switchDif(e){

    e.preventDefault()
    document.querySelector('.currentDiff').classList.remove('currentDiff')
    e.target.classList.add('currentDiff')
state.n=parseInt(e.target.value,10);
startCard.innerText=''
for (let index = 0; index < state.n; index++) {

    startCard.innerHTML=` ${startCard.innerHTML} <i class="${symbolsTable[state.currentArray[state.currentNum]]}"></i>`
    //startCard.innerText=startCard.innerText+" "+state.currentArray[index]
}


}

// alert

function alert(y){

    alertBlock.innerHTML=y?'<i class="far fa-thumbs-up"></i>':'<i class="far fa-thumbs-down"></i>'
    alertBlock.style.color=y?'green':'red'
    alertBlock.style.opacity=1
    setTimeout(()=>{
      alertBlock.style.opacity=0
    },800)
  }