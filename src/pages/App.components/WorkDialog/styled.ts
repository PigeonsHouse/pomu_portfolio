import styled from "@emotion/styled";
import {
  Color,
  MaxWidth,
  Shadow,
  withAlpha,
  ZIndex,
} from "../../../definitions";

export const Backdrop = styled.div<{ open?: boolean }>`
  z-index: ${ZIndex.Work};
  position: fixed;
  inset: 0;
  background-color: ${(props) =>
    props.open ? withAlpha(Color.Black, 0.2) : "transparent"};
  pointer-events: ${(props) => (props.open ? "unset" : "none")};
`;

export const WorkCard = styled.div`
  position: absolute;
  inset: 0;
  z-index: ${ZIndex.Work};
  box-sizing: border-box;
  width: calc(100% - 32px);
  max-width: calc(${MaxWidth}px - 32px);
  max-height: fit-content;
  border-radius: 8px;
  margin: auto;
  background-color: ${Color.White};
  display: flex;
  flex-direction: column;
  box-shadow: ${Shadow};
  padding: 32px;
  gap: 16px;
`;

export const WorkImage = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  margin: 0;
  border-bottom: 1px dashed ${Color.Base};
`;

export const Description = styled.p`
  margin: 0;
`;

export const CreateTerm = styled.small``;
