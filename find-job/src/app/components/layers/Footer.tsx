import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col bg-primary pt-8 px-8 pb-3 mt-10">
        <div className="flex justify-between">
          <a href='/' className=" text-white hover:opacity-60 transition-opacity duration-500 ease-out">バイトの森</a>
          <div className=' grid grid-cols-2 gap-4'>
            <a href='/' className='text-white text-xs align-middle hover:opacity-60 transition-opacity duration-500 ease-out'>仕事を探す</a>
            <a href='/' className='text-white text-xs align-middle hover:opacity-60 transition-opacity duration-500 ease-out'>このサイトについて</a>
            <a href='/' className='text-white text-xs align-middle hover:opacity-60 transition-opacity duration-500 ease-out'>アンケート</a>
          </div>
        </div>
        <p className=" text-white text-[10px] text-center mt-14">
          © abcdef.All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;