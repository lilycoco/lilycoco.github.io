import { SquareButton } from "./Style";

export const Square = ({
  className,
  onClick,
  value,
}: {
  className: string | null;
  onClick: React.MouseEventHandler;
  value: string;
}) => (
  <SquareButton highlight={className} onClick={onClick}>
    {value}
  </SquareButton>
);
