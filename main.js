function printToPage(words) {
    const main = document.getElementById("main")
    let newText = document.createTextNode(words)
    let newBreak = document.createElement("br")
    main.appendChild(newText)
    main.appendChild(newBreak)

}


function sportsQuestion() {

    fetch("http://jservice.io/api/category?id=42")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('The category is ' + newTitle)


        })

}

function americanHistory() {
    fetch("http://jservice.io/api/category?id=780")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('You chose ' + newTitle)

        })
}

function fiveLetters() {
    fetch("http://jservice.io/api/category?id=139")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('You chose' + newTitle)

        })
}

function aroundTheWorldQuestion() {
    fetch("http://jservice.io/api/category?id=1079")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('You chose ' + newTitle)

        })
}

function fruitsAndVegetablesQuestion() {
    fetch("http://jservice.io/api/category?id=777")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('You chose ' + newTitle)

        })
}

function museumQuestion() {
    fetch("http://jservice.io/api/category?id=539")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('You chose ' + newTitle)

        })
}
class jeopardyGrid {
    constructor(options) {
        this.gridArray = []
        this.numberOfRows = options.numberOfRows || 6
        this.numberOfColumns = options.numberOfColumns || 6
        this.gridContainer = document.getElementById("main")
        this.elementId = options.elementId
        this.newRows()

    }


    newRows() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            this.rowIndex = rowIndex
            this.rowArray = []
            this.gridArray.push(this.rowArray)
            this.rowElement = document.createElement("div")
            this.rowElement.classList.add("newDiv")
            this.gridContainer.appendChild(this.rowElement)
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = new jeopardyCell(rowIndex, columnIndex, this.rowElement)
                this.rowArray.push(cell)


            }
        }
    }
}

class jeopardyCell {
    constructor(rowIndex, columnIndex, rowParent) {
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.rowParent = rowParent
        this.cellClasses = this.cellClasses
        this.createCell()
    }
    createCell() {
        this.cell = document.createElement("span")
        this.rowParent.appendChild(this.cell)
        this.cell.id = "cell" + (String(this.columnIndex))
        this.cell.classList.add("row" + (String(this.rowIndex)))
    }
}

const grid = new jeopardyGrid({

})

let categoryOne = document.getElementById("cell0")
categoryOne.innerText = "American history"
categoryOne.addEventListener("click", nursuryQuestion)


let categoryTwo = document.getElementById("cell1")
categoryTwo.innerText = "Sports"
categoryTwo.addEventListener("click", sportsQuestion)


let categoryThree = document.getElementById("cell2")
categoryThree.innerText = "Around the World"
categoryThree.addEventListener("click", aroundTheWorldQuestion)

let categoryFour = document.getElementById("cell3")
categoryFour.innerText = "5-letter Words"
categoryFour.addEventListener("click", fiveLetterQuestion)

let categoryFive = document.getElementById("cell4")
categoryFive.innerText = "Fruits and Vegetables"
categoryFive.addEventListener("click", fruitsAndVegetablesQuestion)


let categorySix = document.getElementById("cell5")
categorySix.innerText = "Museums"
categorySix.addEventListener("click", museumQuestion)