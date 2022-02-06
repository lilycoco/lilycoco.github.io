import * as React from "react";
import { useState } from "react";
import { reversedProductList, addPoint } from "../../lib/index";
import { Heading } from "./Heading";
import { ProductCard } from "./ProductCard";

export const Works = () => {
  const [content, setContent] = useState(reversedProductList);
  const addedPointContent = (icon: string, id: number) =>
    setContent(addPoint(content, icon, id));
  return (
    <div className="">
      <Heading title="Works" id="area-works" />
      <div className="flex flex-wrap px-40">
        {content.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onClick={(i: string, id: number) => addedPointContent(i, id)}
          />
        ))}
      </div>
    </div>
  );
};
