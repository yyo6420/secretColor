import { useEffect, useState } from "react";
import SecretBlock from "./SecretBlock";
import NotSecretBlock from "./NotSecretBlock";

function Block({ index, randomBlock, setCounter, setIsWon, isWon }) {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    if (isWon) return;
    setPressed(true);
    setIsWon(+index === randomBlock);
    setCounter((prev) => prev + 1);
  };

  function getFar() {
    const indexRow = index % 10;
    const randomBlockRow = randomBlock % 10;
    const diffRow = Math.abs(indexRow - randomBlockRow);

    const indexCol = Math.floor(index / 10);
    const randomBlockCol = Math.floor(randomBlock / 10);
    let diffCol = Math.abs(indexCol - randomBlockCol);

    return diffRow + diffCol;
  }

  useEffect(() => {
    if (!isWon) setPressed(false);
  }, [isWon]);

  if (pressed && index === randomBlock) return <SecretBlock />;
  if (pressed) return <NotSecretBlock far={getFar()} />;
  return <div onClick={handleClick} className={`block default`}></div>;
}

export default Block;
