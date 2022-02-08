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
    <div className="px-3 pb-32">
      <Heading title="Works" id="area-works" />
      <div className=" max-w-5xl m-auto">
        <div className="flex flex-wrap gap-10 justify-center">
          {content.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onClick={(i: string, id: number) => addedPointContent(i, id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
