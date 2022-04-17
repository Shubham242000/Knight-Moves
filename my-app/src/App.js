import React, { useEffect, useState } from "react";
import Chessboard from "./Chessboard/Chessboard";
import "./App.css";
import Logic from "./Logic/Logic";
function App() {
  const [knight, setKnight] = useState([]);
  const [click, setClick] = useState(false);
  const [possibleMoves, setPossibleMoves] = useState();
  useEffect(() => {
    setPossibleMoves(Logic(knight[0], knight[1]));
  }, [knight, click]);

  return (
    <div className="App">
      <Chessboard
        setKnight={setKnight}
        setClick={setClick}
        possibleMoves={possibleMoves}
      />
      <ul id="Moves">
        <strong>
          Click anywhere on the Chessboard to set the position of the Knight and
          get its Possible Moves
        </strong>
        {possibleMoves
          ? possibleMoves.map((moves) => (
              <li> {moves[0] + ", " + moves[1]} </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default App;
