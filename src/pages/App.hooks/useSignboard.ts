import { useCallback, useState } from "react";

export const useSignboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onTurnSignboard = useCallback(
    () => setIsMenuOpen((prev) => !prev),
    [setIsMenuOpen]
  );

  return {
    isMenuOpen,
    onTurnSignboard,
  };
};
