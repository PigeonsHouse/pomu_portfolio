import { useCallback } from "react";
import { Url } from "../../../definitions";
import {
  Container,
  FormInput,
  SingleInputContainer,
  InputsContainer,
  Label,
  FormSubmitButton,
  FormTextarea,
  Title,
} from "./styled";

const deployId =
  "AKfycby2zmUeN-B4ArUHJGGPHRWz6sfBO08hRpKJMRJf1yw8DWItZV2GEK3lGt3N-X62-f7O" as const;

export const Form = () => {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = new FormData(e.target as HTMLFormElement);
    const { name, email, content } = Object.fromEntries(body);

    const isConfirm = confirm(
      `以下の内容で送信してもよろしいですか？\n${name}さん (${email})\n${content}`
    );
    if (!isConfirm) return;

    fetch(Url.GasServer(deployId), { method: "POST", body }).catch(() =>
      alert("エラーが発生しました")
    );
  }, []);

  return (
    <Container onSubmit={onSubmit}>
      <Title>FORM</Title>
      <InputsContainer>
        <SingleInputContainer>
          <Label htmlFor="name">お名前</Label>
          <FormInput
            id="name"
            name="name"
            autoComplete="name webauthn"
            required
          />
        </SingleInputContainer>
        <SingleInputContainer>
          <Label htmlFor="email">メールアドレス</Label>
          <FormInput
            type="email"
            id="email"
            name="email"
            autoComplete="email webauthn"
            required
          />
        </SingleInputContainer>
        <SingleInputContainer>
          <Label htmlFor="content">内容</Label>
          <FormTextarea id="content" name="content" required />
        </SingleInputContainer>
        <FormSubmitButton type="submit" value="送信" />
      </InputsContainer>
    </Container>
  );
};
