import styled from "@emotion/styled";
import { Color } from "../../../definitions";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ItemImage = styled.img`
  aspect-ratio: 1;
  width: calc((100% - 16px) / 2);
  object-fit: cover;
  cursor: pointer;
  background-color: ${Color.Base};
`;
