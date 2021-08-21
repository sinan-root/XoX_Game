const X_CLASS = 'cross'
const O_CLASS = 'circle'
const  COMBINATIONS = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
   
]

const board = document.getElementById('board')
const cells = document.querySelectorAll('.cell')
const result = document.getElementById('result')
const resultText = document.querySelector('.result-text')
const restartButton = document.getElementById('restartButton')

let turn

const swapTurn = () => { turn = !turn }
const placeMark = (cell,currentClass) => {cell.classList.add(currentClass) }
const placeHover = () => {

board.classList.remove(X_CLASS)
board.classList.remove(X_CLASS)

if(turn) board.classList.add(O_CLASS)
else board.classList.add(X_CLASS)

}

const endGame = (draw) => {
    if(draw) resultText.innerText = 'Berabere'
    else resultText.innerText = `${turn ? 'O' : 'X'} Kazandı...!`

    result.classList.add('show')
}

const isDraw = () => {
    return [...cells].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    }) 
}

const checkwin = (currentClass) => {
    return COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass)
        })
    })
}

const handleClick = (e) => {
    const cell = e.target
    const currentClass = turn ? O_CLASS : X_CLASS
    placeMark(cell,currentClass)
    if(checkwin(currentClass)){
        endGame(false)        
    }else if(isDraw()){
        endGame(true)
    }else{
        swapTurn()
        placeHover()
    }
}

const resetGame = () => {
    cells.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('', handleClick, {once: true})
    })
}

const startGame = () => {
    turn = false
    placeHover()
    resetGame()
    result.classList.remove('show')
    
}

startGame()
restartButton.addEventListener('click', startGame)







































/* end */