const board = document.querySelector(".board")

function adjustSquares() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div")

      square.classList.add = "square"

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

adjustSquares()
