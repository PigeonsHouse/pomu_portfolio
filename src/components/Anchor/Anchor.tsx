import { useCallback, useEffect, useRef } from "react";

export const AnchorId = {
  Profile: "profile",
  OriginalArt: "original-art",
  FanArt: "fan-art",
  Porcelain: "porcelain",
  Others: "others",
  Contact: "contact",
} as const;
export type AnchorId = (typeof AnchorId)[keyof typeof AnchorId];

export type AnchorProps = {
  id: AnchorId;
  offset?: number;
};

export const Anchor: React.FC<AnchorProps> = ({ id, offset }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleHashChange = useCallback(() => {
    if (window.location.hash.substring(1) !== id || !ref.current) return;
    const top = -window.scrollY + ref.current.offsetTop + (offset ? offset : 0);
    window.scrollBy({ top, behavior: "smooth" });
  }, [id, ref]);

  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange]);

  return <div id={id} ref={ref} />;
};
