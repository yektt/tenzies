/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Dice from "./components/Dice";

function App() {
  return (
    <main css={style}>
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
`;

export default App;
