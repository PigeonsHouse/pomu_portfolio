import { css, Global } from "@emotion/react";
import { Color, FontFamily } from "../../definitions";

const style = css`
  body {
    margin: 0;
    font-family: ${FontFamily.Default};
    color: ${Color.base};
    font-weight: 400;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={style} />;
};
