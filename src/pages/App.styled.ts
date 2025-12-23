import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Color, FontFamily, MaxWidth, Shadow } from "../definitions";

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

export const ContactContainer = styled.div`
  margin: 0 16px;
  border-top: solid 1px ${Color.gray};
  padding: 24px 32px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SnsListContainer = styled.div`
  display: flex;
  gap: 64px;
  justify-content: center;
`;
