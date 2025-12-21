import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Color } from "../../definitions";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Screen = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ItemListContainer = styled.div<{
  currentItemIndex: number;
  isTransition: boolean;
  copyCount: number;
}>`
  width: 240px;
  height: 240px;
  white-space: nowrap;
  margin: auto;
  transform: translate3d(
    ${(props) => -100 * (props.currentItemIndex + props.copyCount)}%,
    0,
    0
  );
  ${(props) => (props.isTransition ? "transition: transform 0.8s;" : undefined)}
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
`;

export const Item = styled.img<{ isCenter: boolean; isTransition: boolean }>`
  width: ${(props) => (props.isCenter ? "100%" : "70%")};
  height: ${(props) => (props.isCenter ? "100%" : "70%")};
  background-color: ${Color.base};
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) =>
    props.isTransition ? "transition: width 0.8s,height 0.8s;" : undefined}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ArrowButton = styled.button`
  border: 0;
  padding: 0;
  background: none;
  color: ${Color.base};
  cursor: pointer;
  & svg {
    vertical-align: middle;
  }
`;

export const HorizontalFlipStyle = css`
  transform: scaleX(-1);
`;

export const DotStyle = (isSelect: boolean) => css`
  color: ${isSelect ? Color.base : `rgb(from ${Color.base} r g b / 0.5)`};
`;
