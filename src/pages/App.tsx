import { Carousel } from "../components";
import data from "../data/data.json";
import { Color } from "../definitions";
import { Profile } from "./App.components";
import { usePickUp, useSignboard } from "./App.hooks";
import {
  AppContainer,
  Backdrop,
  HeadTitle,
  Menu,
  PickupContainer,
  ProfileContainerStyle,
  Signboard,
  SpContainer,
  Title,
  TopContainer,
  WorkContainer,
  WorkItemContainer,
  WorkItemImage,
  WorksContainer,
} from "./App.styled";

export const App = () => {
  const { isMenuOpen, menuLabel, onTurnSignboard } = useSignboard();

  const { pickupItems } = usePickUp(data);

  return (
    <AppContainer isMenuOpen={isMenuOpen}>
      <SpContainer>
        {isMenuOpen && <Backdrop />}
        <Signboard onClick={onTurnSignboard} isMenuOpen={isMenuOpen}>
          {menuLabel}
        </Signboard>
        {isMenuOpen && <Menu>PROFILE</Menu>}
        <TopContainer bgImage={data.topImageUrl}>
          <Title>{`PORTFOLIO\nSITE`}</Title>
        </TopContainer>
        <Profile className={ProfileContainerStyle} profile={data.profile} />
        <WorksContainer>
          <PickupContainer>
            <HeadTitle>PICK UP</HeadTitle>
            <Carousel carouselItems={pickupItems} />
          </PickupContainer>
          <WorkContainer>
            <HeadTitle>ORIGINAL ART</HeadTitle>
            <WorkItemContainer>
              {data.originalArt.map((work) => (
                <WorkItemImage src={work.imageUrl} />
              ))}
            </WorkItemContainer>
          </WorkContainer>
          <WorkContainer>
            <HeadTitle>FAN ART</HeadTitle>
            <WorkItemContainer>
              {data.fanArt.map((work) => (
                <WorkItemImage src={work.imageUrl} />
              ))}
            </WorkItemContainer>
          </WorkContainer>
          <WorkContainer>
            <HeadTitle>PORCELAIN</HeadTitle>
            <WorkItemContainer>
              {data.porcelain.map((work) => (
                <WorkItemImage src={work.imageUrl} />
              ))}
            </WorkItemContainer>
          </WorkContainer>
          <WorkContainer>
            <HeadTitle>OTHERS</HeadTitle>
            <WorkItemContainer>
              {data.others.map((work) => (
                <WorkItemImage src={work.imageUrl} />
              ))}
            </WorkItemContainer>
          </WorkContainer>
          <div
            style={{
              margin: "0 16px",
              borderTop: `solid 1px ${Color.gray}`,
              padding: 24,
              paddingBottom: 0,
            }}
          >
            <HeadTitle>CONTACT</HeadTitle>
          </div>
        </WorksContainer>
      </SpContainer>
    </AppContainer>
  );
};
