// ヘッダーコンポーネントのひな型
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-primary py-[27px] px-12 text-white text-sm">
        <a href='/' className="hover:opacity-60 transition-opacity duration-500 ease-out">バイトの森</a>
        <nav>
          <ul className="flex space-x-4 text-sl">
            <li className=" mr-2">
              <a href="/" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>仕事を探す</a>
            </li>
            <li>
              <a href="/about" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>アンケート</a>
            </li>
            <li>
              <a href="/about" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>このサイトについて</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;