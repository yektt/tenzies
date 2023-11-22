/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Die(props) {
  return (
    <div css={style}>
      <div
        onClick={props.holdDice}
        className={`${props.isHeld ? "on-hold" : ""}`}
      >
        {props.value}
      </div>
    </div>
  );
}

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    height: 5rem;
    width: 5rem;
    font-size: 2rem;
    background-color: white;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .on-hold {
    background-color: #59e391;
  }
`;

export default Die;
