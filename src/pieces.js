export function setupInitialPieces() {
  const pieces = [
    // Black pieces
    { row: 0, col: 0, path: "src/assets/chess-pieces/black-rook.svg" },
    { row: 0, col: 1, path: "src/assets/chess-pieces/black-knight.svg" },
    { row: 0, col: 2, path: "src/assets/chess-pieces/black-bishop.svg" },
    { row: 0, col: 3, path: "src/assets/chess-pieces/black-queen.svg" },
    { row: 0, col: 4, path: "src/assets/chess-pieces/black-king.svg" },
    { row: 0, col: 5, path: "src/assets/chess-pieces/black-bishop.svg" },
    { row: 0, col: 6, path: "src/assets/chess-pieces/black-knight.svg" },
    { row: 0, col: 7, path: "src/assets/chess-pieces/black-rook.svg" },
    { row: 1, col: 0, path: "src/assets/chess-pieces/black-pawn.svg" },
    { row: 1, col: 1, path: "src/assets/chess-pieces/black-pawn.svg" },
    { row: 1, col: 2, path: "src/assets/chess-pieces/black-pawn.svg" },
    { row: 1, col: 3, path: "src/assets/chess-pieces/black-pawn.svg" },
    { row: 1, col: 4, path: "src/assets/chess-pieces/black-pawn.svg" },
    { row: 1, col: 5, path: "src/assets/chess-pieces/black-pawn.svg" },
    { row: 1, col: 6, path: "src/assets/chess-pieces/black-pawn.svg" },
    { row: 1, col: 7, path: "src/assets/chess-pieces/black-pawn.svg" },

    // White pieces
    { row: 6, col: 0, path: "src/assets/chess-pieces/white-pawn.svg" },
    { row: 6, col: 1, path: "src/assets/chess-pieces/white-pawn.svg" },
    { row: 6, col: 2, path: "src/assets/chess-pieces/white-pawn.svg" },
    { row: 6, col: 3, path: "src/assets/chess-pieces/white-pawn.svg" },
    { row: 6, col: 4, path: "src/assets/chess-pieces/white-pawn.svg" },
    { row: 6, col: 5, path: "src/assets/chess-pieces/white-pawn.svg" },
    { row: 6, col: 6, path: "src/assets/chess-pieces/white-pawn.svg" },
    { row: 6, col: 7, path: "src/assets/chess-pieces/white-pawn.svg" },
    { row: 7, col: 0, path: "src/assets/chess-pieces/white-rook.svg" },
    { row: 7, col: 1, path: "src/assets/chess-pieces/white-knight.svg" },
    { row: 7, col: 2, path: "src/assets/chess-pieces/white-bishop.svg" },
    { row: 7, col: 3, path: "src/assets/chess-pieces/white-queen.svg" },
    { row: 7, col: 4, path: "src/assets/chess-pieces/white-king.svg" },
    { row: 7, col: 5, path: "src/assets/chess-pieces/white-bishop.svg" },
    { row: 7, col: 6, path: "src/assets/chess-pieces/white-knight.svg" },
    { row: 7, col: 7, path: "src/assets/chess-pieces/white-rook.svg" },
  ]

  for (const dataAboutSquare of pieces) {
    const { row, col, path } = dataAboutSquare

    const currentSquare = document.querySelector(
      `.square[data-row="${row}"][data-col="${col}"]`
    )

    const piece = document.createElement("img")
    piece.src = path
    currentSquare.appendChild(piece)
  }
}

export function movePiece() {
  let moveFrom = []
  let moveTo = []
  let pieceImage = null

  const squares = document.querySelectorAll(".square")

  squares.forEach((square) => {
    square.addEventListener("click", () => {
      const row = square.dataset.row
      const col = square.dataset.col

      const piece = square.querySelector("img")

      if (piece) {
        if (!moveFrom.length) {
          // First click to a piece

          // Set state for current piece
          moveFrom.push(row, col)
          pieceImage = piece
        } else {
          // Second click to another piece

          // Clean state of previous piece
          moveFrom = []
          pieceImage = null

          // Set state to a new piece
          moveFrom.push(row, col)
          pieceImage = piece
        }
      } else {
        if (!moveTo.length) {
          // First click to a free square

          // Move piece if there's coordinates to move
          if (moveFrom.length) {
            // Set state for current target square
            moveTo.push(row, col)

            // Move piece to moveTo coordinates
            const squareToMove = document.querySelector(
              `.square[data-row="${moveTo[0]}"][data-col="${moveTo[1]}"`
            )
            squareToMove.appendChild(pieceImage)
          }

          // Reset state
          moveFrom = []
          moveTo = []
          pieceImage = null
        } else {
          // Second click to another free square

          // Clean state of previous target square
          moveTo = []
          moveTo.push(row, col)
        }
      }
    })
  })
}
