import { HeadTitle, SnsLink } from "../components";
import data from "../data/data.json";
import { Form, PickUp, Profile, Works } from "./App.components";
import { usePickUp, useSignboard } from "./App.hooks";
import {
  AppContainer,
  Backdrop,
  ContactContainer,
  Menu,
  ProfileContainerStyle,
  Signboard,
  SnsListContainer,
  SpContainer,
  Title,
  TopContainer,
  WorksContainer,
} from "./App.styled";

export const App = () => {
  const title = "PORTFOLIO\nSITE";

  const { isMenuOpen, menuLabel, onTurnSignboard } = useSignboard();
  const { pickUpItems } = usePickUp(data);

  return (
    <AppContainer isMenuOpen={isMenuOpen}>
      <SpContainer>
        {isMenuOpen && <Backdrop onClick={onTurnSignboard} />}
        <Signboard onClick={onTurnSignboard} isMenuOpen={isMenuOpen}>
          {menuLabel}
        </Signboard>
        {isMenuOpen && <Menu>PROFILE</Menu>}
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
