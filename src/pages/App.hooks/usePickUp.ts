import { useMemo } from "react";
import { ArtType, type Data, type Work } from "../../types";

export const usePickUp = (data: Data, selectWork: (work: Work) => void) => {
  const pickUpItems = useMemo(() => {
    return data.pickup
      .map((title) => {
        const foundOriginalArt = data.originalArt.find(
          (art) => art.title === title
        );
        const foundFanArt = data.fanArt.find((art) => art.title === title);
        const foundPorcelain = data.porcelain.find(
          (art) => art.title === title
        );
        const foundOther = data.others.find((art) => art.title === title);
        const item =
          foundOriginalArt ?? foundFanArt ?? foundPorcelain ?? foundOther;
        if (!item) return undefined;

        const type: ArtType = (() => {
          if (foundOriginalArt) {
            return ArtType.OriginalArt;
          }
          if (foundFanArt) {
            return ArtType.OriginalArt;
          }
          if (foundPorcelain) {
            return ArtType.OriginalArt;
          }
          return ArtType.Others;
        })();

        const onClick = () => selectWork(item);
        return {
          ...item,
          type,
          onClick,
        };
      })
      .filter((item) => item !== undefined);
  }, [data]);

  return { pickUpItems };
};
