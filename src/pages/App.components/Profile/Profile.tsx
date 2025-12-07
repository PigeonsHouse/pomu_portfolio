import {
  Name,
  Card,
  Container,
  Description,
  Icon,
  TopInfo,
  MainContents,
  Title,
  Properties,
} from "./styled";

type ProfileData = {
  name: string;
  icon: string;
  description: string;
  properties: {
    [key: string]: string;
  };
};

type ProfileProps = {
  className?: string;
  profile: ProfileData;
};

export const Profile: React.FC<ProfileProps> = ({ className, profile }) => {
  return (
    <Container className={className}>
      <Title>PROFILE</Title>
      <Card>
        <MainContents>
          <Icon src={profile.icon} />
          <TopInfo>
            <Name>{profile.name}</Name>
            {Object.entries(profile.properties).map(([key, value], index) => (
              <Properties key={index}>
                <span>{key}</span>
                <span>{value}</span>
              </Properties>
            ))}
          </TopInfo>
        </MainContents>
        <Description>{profile.description}</Description>
      </Card>
    </Container>
  );
};
