/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Die from "./Die";

function Dice() {
  const [dice, setDice] = useState(newDice());

  function generateNewDie() {
    return Math.ceil(Math.random() * 6);
  }

  function newDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: i,
        isHeld: false,
        value: generateNewDie(),
      });
    }
    return newDice;
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : {
              ...die,
              value: generateNewDie(),
            };
      })
    );
  }

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div css={style}>
      <div className="dice">{diceElement}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
}

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 70%;

  .dice {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(5, calc((100% - 8rem) / 5));
  }

  .roll-dice {
    height: 3.5rem;
    width: 10rem;
    border: none;
    border-radius: 0.6rem;
    background-color: #5035ff;
    color: white;
    font-size: 1.2rem;
    font-family: "Karla", sans-serif;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Dice;
