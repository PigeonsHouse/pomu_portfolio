import { Url } from "../../definitions";
import type { Sns } from "../../types";
import { LinkContainer, IconContainer, IconImage, Label } from "./styled";

type SnsInfo = {
  url: (snsId: string) => string;
  iconUrl: string;
  label: string;
};

const snsMap: { [sns in Sns]: SnsInfo } = {
  x: {
    url: Url.X,
    label: "X",
    iconUrl: "/logo/x.svg",
  },
  instagram: {
    url: Url.Instagram,
    label: "Instagram",
    iconUrl: "/logo/instagram.svg",
  },
};

type SnsLinkProps = {
  variant: Sns;
  snsId: string;
};

export const SnsLink: React.FC<SnsLinkProps> = ({ variant, snsId }) => {
  const snsInfo = snsMap[variant];

  return (
    <LinkContainer href={snsInfo.url(snsId)} target="_blank">
      <IconContainer>
        <IconImage src={snsInfo.iconUrl} />
      </IconContainer>
      <Label>{snsInfo.label}</Label>
    </LinkContainer>
  );
};
