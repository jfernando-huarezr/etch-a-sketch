//obtain the working area
const workingArea = document.querySelector(".working-area")

//obtain the width of the working area (is the same as the height in this case)
const workingAreaWidth = workingArea.offsetWidth
//for testing, square for drawing = width/16

let gridSize = 60
const sizeSquare = workingAreaWidth/gridSize

const eraser = document.querySelector(".borrador")
const draw = document.querySelector(".pintar")
const multicolor = document.querySelector(".multicolor")
const clear = document.querySelector(".clear")


for (let i=0; i<gridSize*gridSize; i++) {    

    const newSquare = document.createElement("div")
    newSquare.style.width = `${sizeSquare}px`
    newSquare.style.height = `${sizeSquare}px`
    newSquare.style.border = `1px solid black`

    workingArea.appendChild(newSquare)
}

const square = document.querySelectorAll(".working-area div")

draw.addEventListener("click", function () {
    square.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "black"
        })
    })
})


eraser.addEventListener("click", function () {
    square.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "white"
        })
    })
})

multicolor.addEventListener("click", function () {

    square.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16)
        })
    })
    
})

clear.addEventListener("click", function () {
    square.forEach(element => {
        element.style.backgroundColor = "white"
    })
})

