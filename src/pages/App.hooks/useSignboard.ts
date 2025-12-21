import { useCallback, useState } from "react";

export const useSignboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuLabel = isMenuOpen ? "OPEN" : "MENU";
  const onTurnSignboard = useCallback(
    () => setIsMenuOpen((prev) => !prev),
    [setIsMenuOpen]
  );

  return {
    isMenuOpen,
    menuLabel,
    onTurnSignboard,
  };
};
