import React from "react";
import "./index.css";

const Square = ({ val, clickSquare }) => {
  return (
    <div className='square' onClick={clickSquare}>
      {val}
    </div>
  );
};

export default Square;
