import Link from 'next/link';
import React from 'react';

const PRODUCT_ID = '1'

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <Link href={`/products/${PRODUCT_ID}`}>
        Product 1
      </Link>
    </div>
  );
};

export default Products;