import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Color, FontFamily, MaxWidth, withAlpha, Shadow } from "../definitions";

export const AppContainer = styled.div<{ isMenuOpen?: boolean }>`
  background-color: ${Color.base};
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

export const Menu = styled.div`
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
  white-space: pre-wrap;
`;

export const ProfileContainerStyle = css`
  margin-bottom: 80px;
`;

export const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const PickupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 20px;
`;

export const HeadTitle = styled.h2`
  margin: 0;
  font-family: ${FontFamily.Heading};
  font-weight: inherit;
  font-size: 32px;
  text-align: center;
`;

export const WorkItemContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const WorkItemImage = styled.img`
  aspect-ratio: 1;
  width: calc((100% - 16px) / 2);
  object-fit: cover;
  cursor: pointer;
  background-color: ${Color.base};
`;

export const FormTitle = styled.h3`
  font-family: ${FontFamily.Heading};
  text-align: center;
  font-size: 24px;
  margin: 0;
  font-weight: unset;
`;
