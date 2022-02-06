import { ProductConfig } from "../../models/Index";
import { DeployDate } from "./Style";
import moment from "moment";

export const ProductCard = ({ item }: ProductConfig) => (
  <div className="w-64">
    <a href={item.url}>
      <img
        src={item.imgSrc}
        className="w-64 h-64 object-contain border hover:opacity-60 duration-100 bg-white"
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
