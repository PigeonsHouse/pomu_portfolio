import { Anchor, AnchorId, HeadTitle, SnsLink } from "../components";
import data from "../data/data.json";
import {
  AnchorWith,
  Form,
  Menu,
  PickUp,
  Profile,
  TopJumper,
  Works,
} from "./App.components";
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
  const anchorOffset = -48;

  const { isMenuOpen, onTurnSignboard } = useSignboard();
  const { pickUpItems } = usePickUp(data);

  return (
    <AppContainer isMenuOpen={isMenuOpen}>
      <SpContainer>
        <Menu isMenuOpen={isMenuOpen} onTurnSignboard={onTurnSignboard} />
        <TopContainer bgImage={data.topImageUrl}>
          <Title>{title}</Title>
        </TopContainer>
        <Anchor id={AnchorId.Profile} offset={anchorOffset} />
        <Profile className={ProfileContainerStyle} profile={data.profile} />
        <WorksContainer>
          <PickUp items={pickUpItems} />
          <AnchorWith id={AnchorId.OriginalArt} offset={anchorOffset}>
            <Works title="ORIGINAL ART" works={data.originalArt} />
          </AnchorWith>
          <AnchorWith id={AnchorId.FanArt} offset={anchorOffset}>
            <Works title="FAN ART" works={data.fanArt} />
          </AnchorWith>
          <AnchorWith id={AnchorId.Porcelain} offset={anchorOffset}>
            <Works title="PORCELAIN" works={data.porcelain} />
          </AnchorWith>
          <AnchorWith id={AnchorId.Others} offset={anchorOffset}>
            <Works title="OTHERS" works={data.others} />
          </AnchorWith>
          <AnchorWith id={AnchorId.Contact} offset={anchorOffset}>
            <ContactContainer>
              <HeadTitle>CONTACT</HeadTitle>
              <SnsListContainer>
                <SnsLink variant="instagram" snsId={data.contact.instagram} />
                <SnsLink variant="x" snsId={data.contact.x} />
              </SnsListContainer>
              <Form />
            </ContactContainer>
          </AnchorWith>
        </WorksContainer>
      </SpContainer>
      <TopJumper />
    </AppContainer>
  );
};
