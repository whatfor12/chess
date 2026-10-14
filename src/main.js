import { createBoard } from "./board.js";
import { setupInitialPieces, setupDragging } from "./pieces.js";

function main() {
    createBoard();
    setupInitialPieces();
    setupDragging();
}

main();
