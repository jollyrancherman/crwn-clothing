import React from 'react';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <div>
      <h2 className='pl-4'>
        <span className='uppercase text-3xl font-semibold'>{title}</span>
      </h2>
      <div className='preview grid grid-cols-4 p-4 gap-4'>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
