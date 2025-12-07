import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Color, FontFamily, MaxWidth, withAlpha, Shadow } from "../definitions";

export const AppContainer = styled.div`
  background-color: ${Color.base};
  overflow-y: auto;
`;

export const SpContainer = styled.div`
  position: relative;
  background-color: ${Color.white};
  max-width: ${MaxWidth}px;
  margin: 0 auto;
  box-shadow: ${Shadow};
  display: flex;
  flex-direction: column;
`;

export const Signboard = styled.div<{ open: boolean }>`
  position: absolute;
  top: 24px;
  right: 16px;
  width: 80px;
  height: 64px;
  background-color: ${(props) => (props.open ? Color.background : Color.base)};
  z-index: 1;
  border-radius: 4px;
  box-shadow: ${Shadow};
  font-family: ${FontFamily.Heading};
  font-size: 20px;
  color: ${(props) => (props.open ? "inherit" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline dotted;
  text-underline-offset: 4px;
  user-select: none;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  font-family: ${FontFamily.Heading};
  font-size: 32px;
  top: 96px;
  left: 24px;
  right: 24px;
  background-color: ${withAlpha(Color.background, 0.7)};
  z-index: 1;
  padding: 40px;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  box-shadow: ${Shadow};
`;

export const TopContainer = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 100dvh;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 120px;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(0, white, transparent);
  }
`;

export const Title = styled.span`
  font-family: ${FontFamily.Heading};
  font-size: 40px;
  text-shadow: ${Shadow};
  margin-left: 8px;
  user-select: none;
`;

export const ProfileContainerStyle = css`
  margin-bottom: 80px;
`;
