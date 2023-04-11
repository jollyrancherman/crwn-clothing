import React from "react";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;

  return (
    <div className=" group m-4">
      <div
        className="h-96 shadow"
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" h-full flex flex-col justify-end p-10 invisible group-hover:visible">
          <Button buttonType="inverted">Add to cart</Button>
        </div>
      </div>
      <div className=" flex justify-between">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
