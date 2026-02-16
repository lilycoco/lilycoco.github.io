import { ProductConfig } from "../../models/Index";
import { DeployDate } from "./Style";
import moment from "moment";
import Image from "next/image";

export const ProductCard = ({ item }: ProductConfig) => (
  <div className="w-64">
    <a href={item.url}>
      <Image
        src={item.imgSrc}
        alt={item.name}
        width={256}
        height={256}
        className="object-contain border hover:opacity-60 duration-100 bg-white"
      />
    </a>
    <div className="px-3 mt-3 bg-white">
      <p>{item.name}</p>
      <p>{item.text}</p>
      <DeployDate className="text-muted">
        {moment(item.date).format("MMM, Y")}
      </DeployDate>
    </div>
  </div>
);
