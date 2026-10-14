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
    ];

    for (const dataAboutSquare of pieces) {
        const { row, col, path } = dataAboutSquare;

        const currentSquare = document.querySelector(
            `.square[data-row="${row}"][data-col="${col}"]`,
        );

        const piece = document.createElement("img");
        piece.src = path;
        currentSquare.appendChild(piece);
    }
}

export function setupDragging() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        findPiece(square);
    });
}

function findPiece(square) {
    const piece = square.querySelector("img");

    if (piece) {
        square.addEventListener("mousedown", (event) => {
            console.log("Start dragging");
        });
    }
}

// function draggingPiece(piece) {
//   let isDragging = false
//
//   piece.addEventListener("mousedown", (event) => {
//     isDragging = true
//     console.log("Start dragging")
//   })
//
//   document.addEventListener("mousemove", (event) => {
//     if (!isDragging) {
//       return
//     }
//
//     console.log("Doing something with a document")
//   })
//
//   document.addEventListener("mouseup", (event) => {
//     isDragging = false
//     console.log("Stop dragging")
//   })
// }
