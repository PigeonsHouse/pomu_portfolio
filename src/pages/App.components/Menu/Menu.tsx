import { Backdrop, MenuContainer, Signboard } from "./styled";

type MenuProps = {
  isMenuOpen: boolean;
  onTurnSignboard: () => void;
};

export const Menu: React.FC<MenuProps> = ({ isMenuOpen, onTurnSignboard }) => {
  const menuLabel = isMenuOpen ? "OPEN" : "MENU";

  return (
    <>
      {isMenuOpen && <Backdrop onClick={onTurnSignboard} />}
      <Signboard onClick={onTurnSignboard} isMenuOpen={isMenuOpen}>
        {menuLabel}
      </Signboard>
      {isMenuOpen && <MenuContainer>PROFILE</MenuContainer>}
    </>
  );
};
