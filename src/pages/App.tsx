import { useCallback, useState } from "react";
import { PlayArrow } from "@mui/icons-material";
import data from "../data/data.json";
import { FontFamily } from "../definitions";
import { Profile } from "./App.components";
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
  const [isOpen, setIsOpen] = useState(false);
  const menuLabel = isOpen ? "OPEN" : "MENU";
  const onClickSignboard = useCallback(
    () => setIsOpen((prev) => !prev),
    [setIsOpen]
  );

  return (
    <AppContainer>
      <SpContainer>
        <Signboard onClick={onClickSignboard} open={isOpen}>
          {menuLabel}
        </Signboard>
        {isOpen && <Menu>PROFILE</Menu>}
        <TopContainer bgImage={data.topImageUrl}>
          <Title>
            PORTFOLIO
            <br />
            SITE
          </Title>
        </TopContainer>
        <Profile className={ProfileContainerStyle} profile={data.profile} />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: 24,
              padding: "0 16px",
            }}
          >
            <div
              style={{
                backgroundColor: "gray",
                width: 240,
                height: 240,
                flexShrink: 0,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "gray",
                width: 240,
                height: 240,
                flexShrink: 0,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "gray",
                width: 240,
                height: 240,
                flexShrink: 0,
              }}
            ></div>
          </div>
          <div style={{ display: "flex" }}>
            <PlayArrow fontSize="large" />
          </div>
        </div>
      </SpContainer>
    </AppContainer>
  );
};
