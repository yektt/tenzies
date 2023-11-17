/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Die(props) {
  return <div css={style}>{props.value}</div>;
}

const style = css`
  min-height: calc((80vh - 2rem) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Die;
