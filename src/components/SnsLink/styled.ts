import styled from "@emotion/styled";
import { Color, FontFamily } from "../../definitions";

export const LinkContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: unset;
  text-decoration: none;
`;

export const IconContainer = styled.div`
  background-color: ${Color.Base};
  aspect-ratio: 1 / 1;
  width: 100px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconImage = styled.img`
  width: 60%;
`;

export const Label = styled.span`
  font-family: ${FontFamily.Heading};
  font-size: 20px;
`;
