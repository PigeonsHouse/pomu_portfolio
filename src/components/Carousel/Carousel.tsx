import React, { useCallback, useMemo, useState } from "react";
import Circle from "@mui/icons-material/Circle";
import PlayArrow from "@mui/icons-material/PlayArrow";
import {
  ArrowButton,
  ButtonsContainer,
  Container,
  DotStyle,
  HorizontalFlipStyle,
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
const MINIMUM_DISTANCE = 10;

export const Carousel: React.FC<CarouselProps> = ({
  className,
  carouselItems,
}) => {
  const [isTransition, setIsTransition] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // スワイプ開始時の座標
  const [startX, setStartX] = useState(0);
  // スワイプ終了時の座標
  const [endX, setEndX] = useState(0);

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

  const isCenterIndex = useCallback(
    (i: number) => currentItemIndex === i - 2,
    [currentItemIndex]
  );
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
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      setStartX(e.touches[0].pageX);
      setEndX(e.touches[0].pageX);
    },
    [setStartX, setEndX]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      setEndX(e.changedTouches[0].pageX);
    },
    [setEndX]
  );
  const handleTouchEnd = useCallback(() => {
    const distanceX = endX - startX;
    if (Math.abs(distanceX) > MINIMUM_DISTANCE) {
      if (distanceX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  }, [startX, endX, handlePrev, handleNext]);
  const onDotClick = useCallback(
    (idx: number) => {
      if (currentItemIndex === idx) return;
      setIsTransition(true);
      setCurrentItemIndex(idx);
    },
    [currentItemIndex, setIsTransition, setCurrentItemIndex]
  );

  return (
    <Container className={className}>
      <Screen
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
                isCenter={isCenterIndex(i)}
                isTransition={isTransition}
                onClick={() => {
                  if (!isCenterIndex(i)) {
                    setIsTransition(true);
                    setCurrentItemIndex(i - 2);
                  }
                  data.onClick();
                }}
              />
            </ItemContainer>
          ))}
        </ItemListContainer>
      </Screen>
      <ButtonsContainer>
        <ArrowButton onClick={handlePrev}>
          <PlayArrow className={HorizontalFlipStyle} fontSize="large" />
        </ArrowButton>
        {Array(carouselItems.length)
          .fill(0)
          .map((_, idx) => (
            <Circle
              key={idx}
              className={DotStyle(idx + 1 === displayIndex)}
              onClick={() => onDotClick(idx)}
              fontSize="small"
            />
          ))}
        <ArrowButton onClick={handleNext}>
          <PlayArrow fontSize="large" />
        </ArrowButton>
      </ButtonsContainer>
    </Container>
  );
};
