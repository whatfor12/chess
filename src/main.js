import { createBoard } from "./board.js"
import { setupInitialPieces, movePiece } from "./pieces.js"

function main() {
  createBoard()
  setupInitialPieces()
  movePiece()
}

main()
