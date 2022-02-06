import Link from "next/link";
import { btnStyle } from "../../style/Index";
import { BtnWrapper } from "./Style";
import { ProductConfig } from "../../models/Index";

export const Buttons = ({ item }: ProductConfig) => {
  return (
    <BtnWrapper>
      <Link href={item.url}>
        <a className="btn btn-primary" style={btnStyle}>
          Play
        </a>
      </Link>
    </BtnWrapper>
  );
};
