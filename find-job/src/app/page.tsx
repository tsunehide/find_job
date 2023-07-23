import React from 'react';
import SearchBox from './components/Serch/SearchBox';
import Button from './components/Button';
import Survey from './components/Survey';
import { getContents } from './lib/spreadsheet';
import WorkList from './components/WorkList';

async function getContent() {
  const contents = await getContents();
  return {
    contents
  };
}
const Home: React.FC = async () => {
  const content = await getContent();
  console.log(content);
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 md:px-14 px-8 max-w-5xl">
        {/* 検索ボックス */}
        <SearchBox/>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-6 mt-16 items-stretch">
          {/* 仕事一覧 */}
          <WorkList contentlist={content.contents}/>
        </div>
        {/* アンケートパネル */}
        <Survey/>
        <div className=' relative bg-primary clip'>
          {/* 求人掲載パネル 、多分使われない*/}
          <style>{`.clip {clip-path: inset(1px round 12px);}`}</style>
          <div className='flex flex-row justify-between  px-16 py-16  mt-14'>
            <div className='flex flex-col'>
              <p className='text-white text-xl text-left'>
                あなたにピッタリな<br/>
                学生とマッチング
              </p>
              <p className='text-white text-[10px] lg:text-xs text-left mt-2'>
                サイトに求人情報を掲載しませんか？
              </p>
            </div>
            {/* 外部フォームに遷移 */}
            <div className='flex'>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVk0oUKfcUwaAilIpjue98KHPhu3KXFKF3W4EgcjcO8GVrdA/viewform?embedded=true" target="_blank">
                <Button type="submit" className='text-xs'>
                  投稿依頼をする
                </Button>
              </a>
            </div>
          </div>
          <div className=' absolute -z-10 md:top-[-80px] top-[-40px] md:right-20 right-10 md:w-[320px] w-[260px] md:h-[320px] h-[260px] bg-white opacity-50 rounded-[50%]'>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
