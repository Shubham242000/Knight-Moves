import React from "react";

import "./Chessboard.css";

export default function Chessboard({ setKnight, setClick, possibleMoves }) {
  let board = [];
  console.log(possibleMoves);
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      const number = j + i + 2;

      if (number % 2 !== 0) {
        board.push(
          <div
            key={[i, j]}
            onClick={() => {
              setKnight([i, j]);
              setClick(true);
            }}
            className="tile black-tile"
          ></div>
        );
      } else {
        board.push(
          <div
            key={[i, j]}
            onClick={() => {
              setKnight([i, j]);
              setClick(true);
            }}
            className="tile white-tile"
          ></div>
        );
      }
    }
  }

  return <div id="chessboard">{board}</div>;
}
