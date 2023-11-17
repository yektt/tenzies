/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Die from "./Die";

function Dice(props) {
  return (
    <div css={style}>
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
    </div>
  );
}

const style = css`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(5, calc((100% - 8rem) / 5));
`;

export default Dice;
