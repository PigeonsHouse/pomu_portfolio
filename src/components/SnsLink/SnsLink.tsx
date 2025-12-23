import type { Sns } from "../../types";
import { LinkContainer, IconContainer, IconImage, Label } from "./styled";

type SnsLinkProps = {
  variant: Sns;
  snsId: string;
};

const snsMap = {
  x: {
    url: (id: string) => `https://x.com/${id}`,
    label: "X",
    iconUrl: "/logo/x.svg",
  },
  instagram: {
    url: (id: string) => `https://instagram.com/${id}`,
    label: "Instagram",
    iconUrl: "/logo/instagram.svg",
  },
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
