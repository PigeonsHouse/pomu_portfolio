import styled from "@emotion/styled";
import { Color, FontFamily, Shadow } from "../../../definitions";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: ${FontFamily.Heading};
  margin: 0 auto;
  font-weight: inherit;
  text-align: center;
`;

export const Card = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding: 32px 24px;
  background-color: ${Color.Background};
  border-radius: 8px;
  box-shadow: ${Shadow};
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 12px;
`;

export const MainContents = styled.div`
  display: flex;
  gap: 24px;
`;

export const Icon = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 9999px;
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-size: 32px;
  margin: 0;
`;

export const Properties = styled.span`
  display: flex;
  gap: 8px;
`;

export const Description = styled.p`
  margin: 0;
  white-space: pre-wrap;
`;
