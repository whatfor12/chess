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

            const pieceRect = selectedPiece.getBoundingClientRect();

            const newLeft = event.clientX - pieceRect.width / 2;
            const newTop = event.clientY - pieceRect.width / 2;

            setPiecePosition(newLeft, newTop);

            startDragging(event);
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
    preparePieceForDragging();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
}

function preparePieceForDragging() {
    const pieceRect = selectedPiece.getBoundingClientRect();

    selectedPiece.style.position = "fixed";
    selectedPiece.style.zIndex = "1000";
    selectedPiece.style.width = `${pieceRect.width}px`;
    selectedPiece.style.height = `${pieceRect.height}px`;
    selectedPiece.style.left = `${pieceRect.left}px`;
    selectedPiece.style.top = `${pieceRect.top}px`;
}

function setPiecePosition(left, top) {
    selectedPiece.style.left = `${left}px`;
    selectedPiece.style.top = `${top}px`;
}

function handleMouseMove(event) {
    enableHover();

    const pieceRect = selectedPiece.getBoundingClientRect();

    const newLeft = event.clientX - pieceRect.width / 2;
    const newTop = event.clientY - pieceRect.height / 2;

    setPiecePosition(newLeft, newTop);
}

function handleMouseUp() {
    disableHover();
    disableHightlightSquare();

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
}
