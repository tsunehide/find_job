import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col bg-primary pt-8 px-8 pb-3 mt-10">
        <div className="flex justify-between">
          <h1 className=" text-white ">バイトの森</h1>
          <div className=' grid grid-cols-2 gap-4'>
            <p className='text-white text-xs align-middle'>仕事を探す</p>
            <p className='text-white text-xs align-middle'>このサイトについて</p>
            <p className='text-white text-xs align-middle'>アンケート</p>
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