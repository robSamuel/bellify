import Image from "next/image";
import React from "react";

const ProductService = ({ image = "", alt = "", text = "" }) => {
  return (
    <div className="ProductService">
      <Image
        src={image}
        width="auto"
        height="auto"
        alt={`ProductService-${alt}`}
        className="ProductService-image"
      />
      <span className="ProductService-text">{text}</span>
    </div>
  );
};

export default ProductService;
