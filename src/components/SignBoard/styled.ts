import styled from "@emotion/styled";
import { Color, FontFamily, MaxWidth, Shadow, ZIndex } from "../../definitions";

export const Container = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 24px;
  right: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 16px);
  width: 80px;
  height: 64px;
  z-index: ${ZIndex.Menu};
  font-family: ${FontFamily.Heading};
  font-size: 20px;
  user-select: none;
  cursor: pointer;
  perspective: 500px;
  transform-style: preserve-3d;
`;

export const BoardPin = styled.div`
  z-index: ${ZIndex.Menu};
  position: fixed;
  top: 8px;
  right: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 52px);
  border: 1px solid ${Color.Gray};
  background-color: ${Color.LightGray};
  width: 8px;
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  border-radius: 9999px;
`;

const BaseBoard = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline dotted;
  text-underline-offset: 4px;
  user-select: none;
  transition: transform 0.4s;
  backface-visibility: hidden;
  border-radius: 4px;
  box-shadow: ${Shadow};

  &::before {
    content: "";
    position: absolute;
    top: -13px;
    left: 28px;
    border-top-left-radius: 4px;
    background-color: transparent;
    border: 2px solid ${Color.Gray};
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
    width: 23px;
    aspect-ratio: 1 / 1;
  }
`;

export const CloseBoard = styled(BaseBoard)<{ isMenuOpen: boolean }>`
  background-color: ${Color.Base};
  color: ${Color.White};
  transform: ${(props) => (props.isMenuOpen ? "rotateY(180deg)" : "none")};
`;

export const OpenBoard = styled(BaseBoard)<{ isMenuOpen: boolean }>`
  background-color: ${Color.Background};
  transform: ${(props) =>
    props.isMenuOpen ? "rotateY(360deg)" : "rotateY(180deg)"};
`;
