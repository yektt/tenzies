/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Die from "./Die";

function Dice() {
  const [dice, setDice] = useState(newDice());

  function newDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  console.log(dice);

  const diceElement = dice.map((die) => <Die value={die} />);

  return <div css={style}>{diceElement}</div>;
}

const style = css`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(5, calc((100% - 8rem) / 5));
`;

export default Dice;
