import { useCallback, useMemo, useState } from "react";
import type { Data, Work } from "../../types";

export const useWorks = (data: Data) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetWork, setTargetWork] = useState<Work | undefined>();
  const isSelectWork = useMemo(
    () => isOpen && targetWork !== undefined,
    [isOpen, targetWork]
  );
  const selectWork = useCallback(
    (work: Work) => {
      setTargetWork(work);
      setIsOpen(true);
    },
    [setTargetWork, setIsOpen]
  );
  const closeWork = useCallback(() => setIsOpen(false), [setIsOpen]);

  const originalArt = useMemo(
    () =>
      data.originalArt.map((work) => ({
        ...work,
        onClick: () => selectWork(work),
      })),
    [data, selectWork]
  );
  const fanArt = useMemo(
    () =>
      data.fanArt.map((work) => ({
        ...work,
        onClick: () => selectWork(work),
      })),
    [data, selectWork]
  );
  const porcelain = useMemo(
    () =>
      data.porcelain.map((work) => ({
        ...work,
        onClick: () => selectWork(work),
      })),
    [data, selectWork]
  );
  const others = useMemo(
    () =>
      data.others.map((work) => ({
        ...work,
        onClick: () => selectWork(work),
      })),
    [data, selectWork]
  );

  return {
    targetWork,
    isSelectWork,
    selectWork,
    closeWork,
    originalArt,
    fanArt,
    porcelain,
    others,
  };
};
