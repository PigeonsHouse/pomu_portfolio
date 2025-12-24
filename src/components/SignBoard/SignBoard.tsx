import { BoardPin, CloseBoard, Container, OpenBoard } from "./styled";

type SignBoardProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const SignBoard: React.FC<SignBoardProps> = ({ isOpen, onClick }) => {
  return (
    <>
      <Container onClick={onClick} isMenuOpen={isOpen}>
        <CloseBoard isMenuOpen={isOpen}>MENU</CloseBoard>
        <OpenBoard isMenuOpen={isOpen}>OPEN</OpenBoard>
      </Container>
      <BoardPin />
    </>
  );
};
