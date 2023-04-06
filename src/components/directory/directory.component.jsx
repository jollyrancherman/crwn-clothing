import React from 'react';
import Category from '../category/category.component';

import categories from './../../categories.json';

const Directory = () => {
  return (
    <div className='directory grid grid-cols-6 gap-4 p-4'>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
