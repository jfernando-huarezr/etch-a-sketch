//obtain the working area
const workingArea = document.querySelector(".working-area")

//obtain the width of the working area (is the same as the height in this case)
const workingAreaWidth = workingArea.offsetWidth
//for testing, square for drawing = width/16
const sizeSquare = workingAreaWidth/17

for (let i=0; i<17*17; i++) {    

    const newSquare = document.createElement("div")
    newSquare.style.width = `${sizeSquare}px`
    newSquare.style.height = `${sizeSquare}px`
    newSquare.style.border = `1px solid black`

    workingArea.appendChild(newSquare)
}

const square = document.querySelectorAll(".working-area div")
console.log(square)

square.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "red"
    })
})
