export const ArtType = {
  OriginalArt: "originalArt",
  FanArt: "fanArt",
  Porcelain: "porcelain",
  Others: "others",
} as const;
export type ArtType = (typeof ArtType)[keyof typeof ArtType];

export type Profile = {
  name: string;
  icon: string;
  description: string;
  properties: {
    birthday: string;
    hobby: string;
    favorite: string;
  };
};

export type Work = {
  imageUrl: string;
  title: string;
  description: string;
  creationTerm: string;
};

export type Contact = {
  [sns: string]: string;
};

export type Works = {
  [artType in ArtType]: Work[];
};

export type Data = {
  topImageUrl: string;
  profile: Profile;
  pickup: string[];
  contact: Contact;
} & Works;
