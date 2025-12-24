import { useCallback } from "react";
import type { Work } from "../../../types";
import {
  Backdrop,
  CreateTerm,
  Description,
  Title,
  WorkCard,
  WorkImage,
} from "./styled";

type WorkDialogProps = {
  isSelectWork: boolean;
  targetWork: Work | undefined;
  closeWork: () => void;
};

export const WorkDialog: React.FC<WorkDialogProps> = ({
  isSelectWork,
  targetWork,
  closeWork,
}) => {
  const stopPropagation = useCallback(
    (e: React.MouseEvent) => e.stopPropagation(),
    []
  );

  return (
    <Backdrop open={isSelectWork} onClick={closeWork}>
      {isSelectWork && targetWork && (
        <WorkCard onClick={stopPropagation}>
          <WorkImage src={targetWork.imageUrl} />
          <Title>{targetWork.title}</Title>
          <Description>{targetWork.description}</Description>
          <CreateTerm>制作時期: {targetWork.creationTerm}</CreateTerm>
        </WorkCard>
      )}
    </Backdrop>
  );
};
