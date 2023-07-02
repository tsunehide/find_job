import React from 'react';
import Button from './Button';

// アンケート案内パネルのコンポーネント

const Survey = () => {
  return (
    <div className='flex flex-col  px-16 py-16 bg-primary mt-14 rounded-xl'>
      <p className='text-white md:text-xl text-base text-center mt-2'>
        このサイトについてアンケートのご協力をお願いします！
      </p>
      <Button type="submit" className='text-xs'>
        アンケートに答える
      </Button>
    </div>
  );
}

export default Survey;
