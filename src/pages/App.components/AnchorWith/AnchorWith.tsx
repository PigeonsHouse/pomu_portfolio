import { Anchor, type AnchorProps } from "../../../components";

type AnchorWithProps = AnchorProps & {
  children: React.ReactNode;
};

export const AnchorWith: React.FC<AnchorWithProps> = ({
  children,
  ...anchorProps
}) => {
  return (
    <div>
      <Anchor {...anchorProps} />
      {children}
    </div>
  );
};
