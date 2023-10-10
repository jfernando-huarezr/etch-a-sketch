const sliderGridSize = document.querySelector("#myRange")
const showGridSize = document.querySelector(".grid-size")
const workingArea = document.querySelector(".working-area")
const selectColor = document.querySelector(".selected-color")
const toggleGridButton = document.querySelector(".toggle")

let color = selectColor.value

selectColor.addEventListener("change", () => {
    color = selectColor.value
})

sliderGridSize.addEventListener("input", function (){
    showGridSize.textContent= `${sliderGridSize.value}x${sliderGridSize.value}`
})

sliderGridSize.addEventListener("change", function () {
    const gridSize = sliderGridSize.value
    workingArea.removeChild(workingArea.firstElementChild)
    drawing(gridSize)
})

toggleGridButton.addEventListener("click", () => {
    const grid = document.querySelectorAll(".working-area div div")

    grid.forEach( element => {
        element.classList.toggle("grid")
    })
    
})


function drawing (gridSize) {
    
    const workingAreaChild = document.createElement("div")
    workingAreaChild.style.display = "flex"
    workingAreaChild.style.flexWrap = "wrap"

    const workingAreaWidth = workingArea.offsetWidth

    const eraserButton = document.querySelector(".eraser")
    const drawButton = document.querySelector(".draw")
    const multicolorButton = document.querySelector(".multicolor")
    const clearButton = document.querySelector(".clear")

    const sizeSquare = workingAreaWidth/gridSize
    const fragment = document.createDocumentFragment()

    for (let i=0; i<gridSize*gridSize; i++) {    

        const newSquare = document.createElement("div")
        newSquare.style.width = `${sizeSquare}px`
        newSquare.style.height = `${sizeSquare}px`
        newSquare.setAttribute("class", "grid")

        fragment.appendChild(newSquare)
    }


    workingAreaChild.appendChild(fragment)
    workingArea.appendChild(workingAreaChild)

    const square = document.querySelectorAll(".working-area div div")

    drawButton.addEventListener("click", function () {
        square.forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = color
            })
        })
    })


    eraserButton.addEventListener("click", function () {
        square.forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = "white"
            })
        })
    })

    multicolorButton.addEventListener("click", function () {

        square.forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16)
            })
        })
        
    })

    clearButton.addEventListener("click", function () {
        square.forEach(element => {
            element.style.backgroundColor = "white"
        })
    })

}

drawing(16)


