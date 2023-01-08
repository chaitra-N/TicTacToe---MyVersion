import React from "react";
import Square from "./Square";
import Board from "./Board";
import { useState } from "react";

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const clickSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };
  return (
    <div className='game'>
      <div className='board'>
        <div className='row'>
          <Square
            val={board[0]}
            clickSquare={() => {
              clickSquare(0);
            }}
          />
          <Square
            val={board[1]}
            clickSquare={() => {
              clickSquare(1);
            }}
          />
          <Square
            val={board[2]}
            clickSquare={() => {
              clickSquare(2);
            }}
          />
        </div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
};

export default Game;
