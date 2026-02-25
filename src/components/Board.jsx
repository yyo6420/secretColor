import { useState } from "react";
import Block from "./Block";

const randomNumber = Math.floor(Math.random() * 100);
function Board({ setCounter }) {
  const [isWon, setIsWon] = useState(false);
  const [blocksArray, setBlockArray] = useState(new Array(100).fill(""));

  const playAgain = () => {
    setIsWon(false);
    randomNumber = Math.floor(Math.random() * 100);
    setBlockArray(new Array(100).fill(""));
    setCounter(0);
  };

  return (
    <>
      {isWon && (
        <div className="winBlock">
          <div className="winDiv">
            <h1 className="winTitleText">כל הכבוד!!🏆</h1>
            <button onClick={playAgain} className="winButton">
              שחק שוב
            </button>
          </div>
        </div>
      )}
      <div className="gameBoard">
        {blocksArray.map((_, index) => (
          <Block
            isWon={isWon}
            setIsWon={setIsWon}
            key={index}
            randomBlock={randomNumber}
            index={index}
            setCounter={setCounter}
          />
        ))}
      </div>
    </>
  );
}

export default Board;
