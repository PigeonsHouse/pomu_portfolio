import { HeadTitle, SnsLink } from "../components";
import data from "../data/data.json";
import { Form, Menu, PickUp, Profile, Works } from "./App.components";
import { usePickUp, useSignboard } from "./App.hooks";
import {
  AppContainer,
  ContactContainer,
  ProfileContainerStyle,
  SnsListContainer,
  SpContainer,
  Title,
  TopContainer,
  WorksContainer,
} from "./App.styled";

export const App = () => {
  const title = "PORTFOLIO\nSITE";

  const { isMenuOpen, onTurnSignboard } = useSignboard();
  const { pickUpItems } = usePickUp(data);

  return (
    <AppContainer isMenuOpen={isMenuOpen}>
      <SpContainer>
        <Menu isMenuOpen={isMenuOpen} onTurnSignboard={onTurnSignboard} />
        <TopContainer bgImage={data.topImageUrl}>
          <Title>{title}</Title>
        </TopContainer>
        <Profile className={ProfileContainerStyle} profile={data.profile} />
        <WorksContainer>
          <PickUp items={pickUpItems} />
          <Works title="ORIGINAL ART" works={data.originalArt} />
          <Works title="FAN ART" works={data.fanArt} />
          <Works title="PORCELAIN" works={data.porcelain} />
          <Works title="OTHERS" works={data.others} />
          <ContactContainer>
            <HeadTitle>CONTACT</HeadTitle>
            <SnsListContainer>
              <SnsLink variant="instagram" snsId={data.contact.instagram} />
              <SnsLink variant="x" snsId={data.contact.x} />
            </SnsListContainer>
            <Form />
          </ContactContainer>
        </WorksContainer>
      </SpContainer>
    </AppContainer>
  );
};
