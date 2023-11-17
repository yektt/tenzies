/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Dice from "./components/Dice";
import { useState } from "react";

function App() {
  const [dice, setDice] = useState(newDice());

  function newDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  return (
    <main css={style}>
      <Dice dice={dice} />
      <button
        onClick={() => {
          setDice(newDice());
        }}
      >
        Roll dice
      </button>
    </main>
  );
}

const style = css`
  background-color: #f5f5f5;
  height: 80vh;
  max-width: 80%;
  margin: 10vh auto;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export default App;
