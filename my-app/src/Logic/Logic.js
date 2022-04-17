import React from "react";
function findPossibleMoves(p, q) {
  // All possible moves of a knight

  let X = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y = [1, 2, 2, 1, -1, -2, -2, -1];

  let list = [];
  // Check if each possible move is valid or not
  for (let i = 0; i < 8; i++) {
    // Position of knight after move
    let x = p + X[i];
    let y = q + Y[i];

    // count valid moves
    if (x > 0 && y > 0 && x < 8 && y < 8) {
      list.push([x, y]);
    }
  }

  // Return number of possible moves
  return list;
}
export default findPossibleMoves;
