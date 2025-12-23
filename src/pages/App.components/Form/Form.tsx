import { useCallback } from "react";
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

export const Form = () => {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { name, email, content } = Object.fromEntries(formData);

    const isConfirm = confirm(
      `以下の内容で送信してもよろしいですか？\n${name}さん (${email})\n${content}`
    );
    if (!isConfirm) return;

    fetch(
      "https://script.google.com/macros/s/AKfycbzURS-PrfZDxU00QXBBaPkycJIxt3PGmMH72rDdShh2ovlvsrNE0FWOosGmBYMFPOB9/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((result) => {
        if (result.status >= 400) {
          alert("エラーが発生しました");
        }
      })
      .catch(() => {
        alert("エラーが発生しました");
      });
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
