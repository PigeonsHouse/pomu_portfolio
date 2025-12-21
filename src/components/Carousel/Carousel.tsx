import { useCallback, useMemo, useState } from "react";
import { Circle, PlayArrow } from "@mui/icons-material";
import { Color } from "../../definitions";
import {
  Container,
  Item,
  ItemContainer,
  ItemListContainer,
  Screen,
} from "./styled";

type CarouselItem = {
  imageUrl: string;
  onClick: () => void;
};
type CarouselProps = {
  className?: string;
  carouselItems: CarouselItem[];
};

const COPY_COUNT = 2;

export const Carousel: React.FC<CarouselProps> = ({
  className,
  carouselItems,
}) => {
  const [isTransition, setIsTransition] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // カルーセルの表示用データ
  const itemList = useMemo(() => {
    const items = carouselItems.map((data) => ({ data, isCopy: false }));
    // 後ろ2つ
    const copiedItemsBefore = carouselItems
      .slice(carouselItems.length - COPY_COUNT)
      .map((data) => ({ data, isCopy: true }));
    // 先頭2つ
    const copiedItemsAfter = carouselItems
      .slice(0, COPY_COUNT)
      .map((data) => ({ data, isCopy: true }));
    return [...copiedItemsBefore, ...items, ...copiedItemsAfter];
  }, [carouselItems]);
  // 表示用のインデックス
  const displayIndex = useMemo(() => {
    const itemCount = carouselItems.length;
    return ((currentItemIndex + itemCount) % itemCount) + 1;
  }, [currentItemIndex]);

  const handlePrev = useCallback(() => {
    if (!isTransition) {
      setIsTransition(true);
      setCurrentItemIndex((n) => n - 1);
    }
  }, [isTransition, setIsTransition, setCurrentItemIndex]);
  const handleNext = useCallback(() => {
    if (!isTransition) {
      setIsTransition(true);
      setCurrentItemIndex((n) => n + 1);
    }
  }, [isTransition, setIsTransition, setCurrentItemIndex]);
  const handleTransitionEnd = useCallback(() => {
    const itemCount = carouselItems.length;
    setIsTransition(false);
    setCurrentItemIndex((n) => (itemCount + n) % itemCount);
  }, [carouselItems, isTransition, setIsTransition, setCurrentItemIndex]);

  return (
    <Container className={className}>
      <Screen>
        <ItemListContainer
          currentItemIndex={currentItemIndex}
          isTransition={isTransition}
          copyCount={COPY_COUNT}
          onTransitionEnd={handleTransitionEnd}
        >
          {itemList.map(({ data }, i) => (
            <ItemContainer key={i}>
              <Item
                src={data.imageUrl}
                isCenter={i === currentItemIndex + 2}
                isTransition={isTransition}
                onClick={() => {
                  setIsTransition(true);
                  setCurrentItemIndex(i - 2);
                  data.onClick();
                }}
              />
            </ItemContainer>
          ))}
        </ItemListContainer>
      </Screen>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            border: 0,
            padding: 0,
            background: "none",
            color: Color.base,
            cursor: "pointer",
            verticalAlign: "middle",
          }}
        >
          <PlayArrow
            style={{ transform: "scaleX(-1)", verticalAlign: "middle" }}
            fontSize="large"
          />
        </button>
        {[...Array(carouselItems.length)].map((_, idx) => (
          <Circle
            fontSize="small"
            style={{
              color:
                idx + 1 === displayIndex
                  ? Color.base
                  : `rgb(from ${Color.base} r g b / 0.5)`,
            }}
            onClick={() => {
              setIsTransition(true);
              setCurrentItemIndex(idx);
            }}
          />
        ))}
        <button
          onClick={handleNext}
          style={{
            border: 0,
            padding: 0,
            background: "none",
            color: Color.base,
            cursor: "pointer",
            verticalAlign: "middle",
          }}
        >
          <PlayArrow style={{ verticalAlign: "middle" }} fontSize="large" />
        </button>
      </div>
    </Container>
  );
};
