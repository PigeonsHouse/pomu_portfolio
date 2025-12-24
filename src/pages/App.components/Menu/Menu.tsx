import { useMemo } from "react";
import { AnchorId, SignBoard } from "../../../components";
import { hashChange } from "../../../utils";
import { Backdrop, MenuContainer, MenuLabel } from "./styled";

const labelData = [
  { label: "PROFILE", anchorId: AnchorId.Profile },
  { label: "ORIGINAL ART", anchorId: AnchorId.OriginalArt },
  { label: "FAN ART", anchorId: AnchorId.FanArt },
  { label: "PORCELAIN", anchorId: AnchorId.Porcelain },
  { label: "OTHERS", anchorId: AnchorId.Others },
  { label: "CONTACT", anchorId: AnchorId.Contact },
];

type MenuProps = {
  isMenuOpen: boolean;
  onTurnSignboard: () => void;
};

export const Menu: React.FC<MenuProps> = ({ isMenuOpen, onTurnSignboard }) => {
  const labelItems = useMemo(
    () =>
      labelData.map((data) => ({
        label: data.label,
        onClick: () => {
          hashChange(data.anchorId);
          onTurnSignboard();
        },
      })),
    [onTurnSignboard]
  );

  return (
    <>
      {isMenuOpen && <Backdrop onClick={onTurnSignboard} />}
      <SignBoard isOpen={isMenuOpen} onClick={onTurnSignboard} />
      <MenuContainer isOpen={isMenuOpen}>
        {labelItems.map((item, i) => (
          <MenuLabel key={i} onClick={item.onClick}>
            {item.label}
          </MenuLabel>
        ))}
      </MenuContainer>
    </>
  );
};
