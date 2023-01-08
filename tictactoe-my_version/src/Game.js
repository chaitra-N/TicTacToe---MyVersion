import React from "react";
import Square from "./Square";
import { Patterns } from "./Patterns";
import { useState, useEffect } from "react";

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWinner();
    checkIfTie();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game finished! Winner: ${result.winner}`);
      restartGame();
    }
  }, [result]);

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

  const checkWinner = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === "") {
        return;
      }
      let foundWinnerPattern = true;
      currentPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinnerPattern = false;
        }
      });
      if (foundWinnerPattern) {
        setResult({
          winner: player,
          state: "Won",
        });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
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
        <div className='row'>
          <Square
            val={board[3]}
            clickSquare={() => {
              clickSquare(3);
            }}
          />
          <Square
            val={board[4]}
            clickSquare={() => {
              clickSquare(4);
            }}
          />
          <Square
            val={board[5]}
            clickSquare={() => {
              clickSquare(5);
            }}
          />
        </div>
        <div className='row'>
          <Square
            val={board[6]}
            clickSquare={() => {
              clickSquare(6);
            }}
          />
          <Square
            val={board[7]}
            clickSquare={() => {
              clickSquare(7);
            }}
          />
          <Square
            val={board[8]}
            clickSquare={() => {
              clickSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
