import { useCallback, useEffect, useState } from "react";
import ArrowBack from "@mui/icons-material/ArrowBackIosNew";
import { hashChange } from "../../../utils";
import { ArrowStyle, Container } from "./styled";

export const TopJumper = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const onClick = useCallback(() => {
    hashChange(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const calcIsScrolling = useCallback(() => {
    setIsScrolling(window.scrollY > 0);
  }, [setIsScrolling]);

  useEffect(() => {
    calcIsScrolling();
    document.addEventListener("scroll", calcIsScrolling);
    return () => document.removeEventListener("scroll", calcIsScrolling);
  }, [calcIsScrolling]);

  return (
    <Container isVisible={isScrolling} onClick={onClick}>
      <ArrowBack className={ArrowStyle} fontSize="large" />
    </Container>
  );
};
