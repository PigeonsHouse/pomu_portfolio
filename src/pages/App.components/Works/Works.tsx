import { HeadTitle } from "../../../components";
import type { Work as DataWork } from "../../../types";
import { Container, ItemContainer, ItemImage } from "./styled";

type Work = DataWork & {
  onClick?: () => void;
};

type WorksProps = {
  className?: string;
  title: string;
  works: Work[];
};

export const Works: React.FC<WorksProps> = ({ className, title, works }) => {
  return (
    <Container className={className}>
      <HeadTitle>{title}</HeadTitle>
      <ItemContainer>
        {works.map((work, idx) => (
          <ItemImage key={idx} src={work.imageUrl} onClick={work.onClick} />
        ))}
      </ItemContainer>
    </Container>
  );
};
