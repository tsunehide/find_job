// ヘッダーコンポーネントのひな型
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-primary py-[27px] px-12 text-white text-sm">
        <h1 className="">バイトの森</h1>
        <nav>
          <ul className="flex space-x-4 text-sl">
            <li className=" mr-2">
              <a href="/">仕事を探す</a>
            </li>
            <li>
              <a href="/about">アンケート</a>
            </li>
            <li>
              <a href="/about">このサイトについて</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;