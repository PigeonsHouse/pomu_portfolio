import { Carousel } from "../components";
import data from "../data/data.json";
import { FontFamily } from "../definitions";
import { Profile } from "./App.components";
import { useSignboard } from "./App.hooks";
import { usePickUp } from "./App.hooks/usePickUp";
import {
  AppContainer,
  Menu,
  ProfileContainerStyle,
  Signboard,
  SpContainer,
  Title,
  TopContainer,
} from "./App.styled";

export const App = () => {
  const { isMenuOpen, menuLabel, onTurnSignboard } = useSignboard();

  const { pickupItems } = usePickUp(data);

  return (
    <AppContainer isMenuOpen={isMenuOpen}>
      <SpContainer>
        {isMenuOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1,
            }}
          />
        )}
        <Signboard onClick={onTurnSignboard} isMenuOpen={isMenuOpen}>
          {menuLabel}
        </Signboard>
        {isMenuOpen && <Menu>PROFILE</Menu>}
        <TopContainer bgImage={data.topImageUrl}>
          <Title>
            PORTFOLIO
            <br />
            SITE
          </Title>
        </TopContainer>
        <Profile className={ProfileContainerStyle} profile={data.profile} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginBottom: 64,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: FontFamily.Heading,
              fontWeight: "inherit",
              fontSize: 32,
              textAlign: "center",
            }}
          >
            PICK UP
          </h2>
          <Carousel carouselItems={pickupItems} />
        </div>
      </SpContainer>
    </AppContainer>
  );
};
