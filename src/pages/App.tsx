import { Anchor, AnchorId, HeadTitle, SnsLink } from "../components";
import data from "../data/data.json";
import {
  Form,
  Menu,
  PickUp,
  Profile,
  TopJumper,
  Works,
} from "./App.components";
import { usePickUp, useSignboard } from "./App.hooks";
import {
  AnchorWrapper,
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
          <AnchorWrapper>
            <Anchor id={AnchorId.OriginalArt} offset={anchorOffset} />
            <Works title="ORIGINAL ART" works={data.originalArt} />
          </AnchorWrapper>
          <AnchorWrapper>
            <Anchor id={AnchorId.FanArt} offset={anchorOffset} />
            <Works title="FAN ART" works={data.fanArt} />
          </AnchorWrapper>
          <AnchorWrapper>
            <Anchor id={AnchorId.Porcelain} offset={anchorOffset} />
            <Works title="PORCELAIN" works={data.porcelain} />
          </AnchorWrapper>
          <AnchorWrapper>
            <Anchor id={AnchorId.Others} offset={anchorOffset} />
            <Works title="OTHERS" works={data.others} />
          </AnchorWrapper>
          <AnchorWrapper>
            <Anchor id={AnchorId.Contact} offset={anchorOffset} />
            <ContactContainer>
              <HeadTitle>CONTACT</HeadTitle>
              <SnsListContainer>
                <SnsLink variant="instagram" snsId={data.contact.instagram} />
                <SnsLink variant="x" snsId={data.contact.x} />
              </SnsListContainer>
              <Form />
            </ContactContainer>
          </AnchorWrapper>
        </WorksContainer>
      </SpContainer>
      <TopJumper />
    </AppContainer>
  );
};
