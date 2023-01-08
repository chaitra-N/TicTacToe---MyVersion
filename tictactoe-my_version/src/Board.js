import React from "react";
import "./index.css";
import Square from "./Square";

const Board = ({ board, clickSquare }) => {
  return (
    <div>
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
    </div>
  );
};

export default Board;
