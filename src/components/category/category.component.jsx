import React from 'react';

const Category = ({ category }) => {
  const { title, imageUrl, gridSize } = category;
  return (
    <div
      className={`category shadow flex justify-center items-center bg-slate-100 h-96 bg-cover bg-center ${gridSize}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className=' h-fit w-fit'></div>
      <div className='text-wrapper bg-slate-50 border border-gray-300 p-10 flex flex-col items-center'>
        <h3 className=' capitalize font-bold text-xl'>{title}</h3>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default Category;
