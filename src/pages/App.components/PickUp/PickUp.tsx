import { Carousel, HeadTitle, type CarouselProps } from "../../../components";
import { Container } from "./styled";

type PickUpProps = {
  items: CarouselProps["carouselItems"];
};

export const PickUp: React.FC<PickUpProps> = ({ items }) => {
  return (
    <Container>
      <HeadTitle>PICK UP</HeadTitle>
      <Carousel carouselItems={items} />
    </Container>
  );
};
