import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Color, MaxWidth, ZIndex } from "../../../definitions";

export const Container = styled.div<{ isVisible?: boolean }>`
  z-index: ${ZIndex.TopJumper};
  position: fixed;
  box-sizing: border-box;
  width: 72px;
  aspect-ratio: 1 / 1;
  right: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 8px);
  bottom: 8px;
  background-color: ${Color.Base};
  border: 4px solid ${Color.White};
  border-radius: 9999px;
  color: ${Color.White};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s;
  ${(props) =>
    props.isVisible
      ? `
  cursor: pointer;
  opacity: 1;`
      : `
  user-select: none;
  opacity: 0;`}
`;

export const ArrowStyle = css`
  transform: rotate(90deg);
`;
