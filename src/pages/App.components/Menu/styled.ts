import styled from "@emotion/styled";
import {
  Color,
  FontFamily,
  MaxWidth,
  Shadow,
  withAlpha,
} from "../../../definitions";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
`;

export const Signboard = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 24px;
  right: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 16px);
  width: 80px;
  height: 64px;
  background-color: ${(props) =>
    props.isMenuOpen ? Color.background : Color.base};
  z-index: 1;
  border-radius: 4px;
  box-shadow: ${Shadow};
  font-family: ${FontFamily.Heading};
  font-size: 20px;
  color: ${(props) => (props.isMenuOpen ? "inherit" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline dotted;
  text-underline-offset: 4px;
  user-select: none;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  position: fixed;
  font-family: ${FontFamily.Heading};
  font-size: 32px;
  top: 96px;
  left: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 16px);
  right: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 16px);
  background-color: ${withAlpha(Color.background, 0.7)};
  z-index: 1;
  padding: 40px;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  box-shadow: ${Shadow};
`;
