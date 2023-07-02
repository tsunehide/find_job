// ヘッダーコンポーネントのひな型
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-primary py-[27px] px-12 text-white text-sm">
        <Link href='/' className="hover:opacity-60 transition-opacity duration-500 ease-out">バイトの森</Link>
        <nav>
          <ul className="flex space-x-4 text-sl">
            <li className=" mr-2">
              <Link href="/" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>仕事を探す</Link>
            </li>
            <li>
              <Link href="/" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>アンケート</Link>
            </li>
            <li>
              <Link href="/about" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>このサイトについて</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;