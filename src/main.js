const board = document.querySelector(".board")

function addSquares() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div")

      square.classList.add("square")

      if (row % 2 === 0 && col % 2 === 0) {
        square.style.backgroundColor = "#F5F5DC"
      } else if (row % 2 !== 0 && col % 2 !== 0) {
        square.style.backgroundColor = "#F5F5DC"
      } else {
        square.style.backgroundColor = "#8B4513"
      }

      board.appendChild(square)
    }
  }
}

function addBoardCoordinates() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]

  const left = document.querySelector(".left-numbers")
  const right = document.querySelector(".right-numbers")
  const top = document.querySelector(".top-letters")
  const bottom = document.querySelector(".bottom-letters")

  for (let i = 0; i < 8; i++) {
    const leftNumber = document.createElement("div")
    leftNumber.classList.add("num")
    leftNumber.textContent = `${numbers[7 - i]}`

    const rightNumber = document.createElement("div")
    rightNumber.classList.add("num")
    rightNumber.textContent = `${numbers[i]}`

    const topLetter = document.createElement("div")
    topLetter.classList.add("let")
    topLetter.textContent = `${letters[7 - i]}`

    const bottomLetter = document.createElement("div")
    bottomLetter.classList.add("let")
    bottomLetter.textContent = `${letters[i]}`

    left.appendChild(leftNumber)
    right.appendChild(rightNumber)
    top.appendChild(topLetter)
    bottom.appendChild(bottomLetter)
  }
}

addSquares()
addBoardCoordinates()
