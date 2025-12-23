import styled from "@emotion/styled";
import { Color, FontFamily } from "../../../definitions";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h3`
  font-family: ${FontFamily.Heading};
  text-align: center;
  font-size: 24px;
  margin: 0;
  font-weight: unset;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SingleInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 12px;
  &::after {
    margin-left: 4px;
    content: "*";
    color: ${Color.background};
  }
`;

export const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 32px;
  border-radius: 4px;
  border: 1px solid ${Color.base};
  outline: none;
  padding: 8px;
  &:focus {
    outline: 1px solid ${Color.base};
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  height: 200px;
  resize: none;
  border-radius: 4px;
  border: 1px solid ${Color.base};
  outline: none;
  vertical-align: middle;
  padding: 8px;
  &:focus {
    outline: 1px solid ${Color.base};
  }
`;

export const FormSubmitButton = styled.input`
  width: 100%;
  border: none;
  padding: 0;
  height: 32px;
  background-color: ${Color.base};
  border-radius: 4px;
  color: ${Color.white};
  cursor: pointer;
`;
