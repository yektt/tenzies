/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Dice from "./components/Dice";

function App() {
  return (
    <main css={style}>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <Dice />
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
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;

  .title {
    font-size: 40px;
    margin: 0;
  }

  .instructions {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    margin-top: 0;
    text-align: center;
  }
`;

export default App;
