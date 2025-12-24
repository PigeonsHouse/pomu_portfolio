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

export const Signboard = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 24px;
  right: calc(max(calc(100% - ${MaxWidth}px), 0px) / 2 + 16px);
  width: 80px;
  height: 64px;
  background-color: ${(props) =>
    props.isMenuOpen ? Color.Background : Color.Base};
  z-index: ${ZIndex.Menu};
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
