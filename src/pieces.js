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

let selectedSquare = null;
let selectedPiece = null;

export function setupDragging() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mousedown", (event) => {
            const piece = square.querySelector("img");

            if (!piece) return;

            selectedSquare = square;
            selectedPiece = piece;
            startDragging(event);

            console.log("Current piece is", selectedPiece);
        });
    });
}

function hightlightSquare() {
    selectedSquare.style.backgroundColor = "darkgreen";
}

function disableHightlightSquare() {
    const row = selectedSquare.dataset.row;
    const col = selectedSquare.dataset.col;

    if (row % 2 === col % 2) {
        selectedSquare.style.backgroundColor = "#F0D9B5";
    } else {
        selectedSquare.style.backgroundColor = "#B58863";
    }
}

function enableHover() {
    const board = document.querySelector(".board");
    board.dataset.hoverEnabled = true;
}

function disableHover() {
    const board = document.querySelector(".board");
    board.dataset.hoverEnabled = false;
}

function startDragging(event) {
    event.preventDefault();

    hightlightSquare();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
}

function handleMouseMove(event) {
    enableHover();

    console.log(event.clientX, event.clientY);
}

function handleMouseUp() {
    disableHover();
    disableHightlightSquare();

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
}
