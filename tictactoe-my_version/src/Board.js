import React from "react";
import Square from "./Square";

const Board = () => {
  const renderSqaure = (i) => {
    <Square value={i} />;
  };

  return (
    <div>
      <div className='board-row'>
        {renderSqaure(0)}
        {renderSqaure(1)}
        {renderSqaure(2)}
      </div>
    </div>
  );
};

export default Board;
