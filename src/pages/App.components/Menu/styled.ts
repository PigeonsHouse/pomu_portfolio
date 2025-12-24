import styled from "@emotion/styled";
import {
  Color,
  FontFamily,
  MaxWidth,
  Shadow,
  withAlpha,
  ZIndex,
} from "../../../definitions";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${ZIndex.Menu};
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 96px;
  left: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 16px);
  right: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 16px);
  background-color: ${withAlpha(Color.Background, 0.7)};
  z-index: ${ZIndex.Menu};
  padding: 40px;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  box-shadow: ${Shadow};
  display: flex;
  flex-direction: column;
  gap: 40px;
  transition: opacity 0.4s;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "unset" : "none")};
`;

export const MenuLabel = styled.button`
  font-family: ${FontFamily.Heading};
  font-size: 32px;
  width: 100%;
  background: none;
  padding: 0;
  border: none;
  text-align: left;
  border-bottom: 1px dashed ${Color.Base};
  color: inherit;
  cursor: pointer;
`;
