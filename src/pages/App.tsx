import { Carousel } from "../components";
import data from "../data/data.json";
import { Color, FontFamily } from "../definitions";
import { Profile } from "./App.components";
import { usePickUp, useSignboard } from "./App.hooks";
import {
  AppContainer,
  Backdrop,
  FormTitle,
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
        {isMenuOpen && (
          <Backdrop onClick={onTurnSignboard} onTouchEnd={onTurnSignboard} />
        )}
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
              padding: "24px 32px",
              paddingBottom: 40,
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            <HeadTitle>CONTACT</HeadTitle>
            <div style={{ display: "flex", gap: 64, justifyContent: "center" }}>
              <a
                href={`https://instagram.com/${data.contact.instagram}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  color: "unset",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    backgroundColor: Color.gray,
                    aspectRatio: 1,
                    width: 100,
                    borderRadius: 9999,
                  }}
                />
                <span style={{ fontFamily: FontFamily.Heading, fontSize: 20 }}>
                  Instagram
                </span>
              </a>
              <a
                href={`https://x.com/${data.contact.x}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  color: "unset",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    backgroundColor: Color.gray,
                    aspectRatio: 1,
                    width: 100,
                    borderRadius: 9999,
                  }}
                />
                <span style={{ fontFamily: FontFamily.Heading, fontSize: 20 }}>
                  X
                </span>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <FormTitle>FORM</FormTitle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div>
                  <p style={{ margin: 0, fontSize: 12 }}>お名前</p>
                  <input
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: 24,
                      borderRadius: 4,
                      border: `1px solid ${Color.base}`,
                      outline: "none",
                    }}
                    name="name"
                    autoComplete="name webauthn"
                  />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 12 }}>メールアドレス</p>
                  <input
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: 24,
                      borderRadius: 4,
                      border: `1px solid ${Color.base}`,
                      outline: "none",
                    }}
                    name="email"
                    autoComplete="email webauthn"
                  />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 12 }}>内容</p>
                  <textarea
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: 200,
                      resize: "none",
                      borderRadius: 4,
                      border: `1px solid ${Color.base}`,
                      outline: "none",
                      verticalAlign: "middle",
                    }}
                    name="content"
                  ></textarea>
                </div>
                <button
                  style={{
                    width: "100%",
                    border: "none",
                    padding: 0,
                    height: 32,
                    backgroundColor: Color.base,
                    borderRadius: 4,
                    color: Color.white,
                  }}
                >
                  送信
                </button>
              </div>
            </div>
          </div>
        </WorksContainer>
      </SpContainer>
    </AppContainer>
  );
};
