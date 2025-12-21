import { useMemo } from "react";
import { Carousel } from "../components";
import data from "../data/data.json";
import { FontFamily } from "../definitions";
import { Profile } from "./App.components";
import { useSignboard } from "./App.hooks";
import {
  AppContainer,
  Menu,
  ProfileContainerStyle,
  Signboard,
  SpContainer,
  Title,
  TopContainer,
} from "./App.styled";

const ArtType = {
  OriginalArt: "OriginalArt",
  FanArt: "FanArt",
  Porcelain: "Porcelain",
  Other: "Other",
} as const;
type ArtType = (typeof ArtType)[keyof typeof ArtType];

export const App = () => {
  const { isMenuOpen, menuLabel, onTurnSignboard } = useSignboard();

  const pickupItems = useMemo(() => {
    return data.pickup
      .map((title) => {
        const foundOriginalArt = data.originalArt.find(
          (art) => art.title === title
        );
        const foundFanArt = data.fanArt.find((art) => art.title === title);
        const foundPorcelain = data.porcelain.find(
          (art) => art.title === title
        );
        const foundOther = data.others.find((art) => art.title === title);
        const item =
          foundOriginalArt ?? foundFanArt ?? foundPorcelain ?? foundOther;
        if (item === undefined) return undefined;
        const type: ArtType = foundOriginalArt
          ? ArtType.OriginalArt
          : foundFanArt
            ? ArtType.FanArt
            : foundPorcelain
              ? ArtType.Porcelain
              : ArtType.Other;
        return {
          ...item,
          type,
          onClick: () => {},
        };
      })
      .filter((item) => item !== undefined);
  }, [data]);

  return (
    <AppContainer>
      <SpContainer>
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
