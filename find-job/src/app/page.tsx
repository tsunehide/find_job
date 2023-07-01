"use client"
import { useState } from 'react';
import {Work, WorkSelect} from './components/WorkSelect';
import WorkItem from './components/WorkItem';

const Home: React.FC = () => {
  const [work, setWork] = useState<Work | null>(null);
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 px-14 max-w-5xl">
        <div className="flex flex-col justify-center items-center mt-20 w-full px-14 py-7 rounded-xl text-white bg-primary">
          <h1 className="text-xl text-center">仕事を探す</h1>
          <div className="flex mt-5 mx-auto w-full">
            <div className="text-sm bg-secondary text-primary rounded-l-[4px] px-5 flex items-center justify-center md:w-36 w-24">
              <p>時給</p>
            </div>
            <WorkSelect selected={work} setWork={setWork}/>
          </div>
          <button type="submit" className=' text-sm px-10 py-2 bg-white text-primary rounded-full tracking-wide mt-7 mb-3 hover:opacity-80 transition-opacity duration-500 ease-out'>
            検索する
          </button>
        </div>
        {/* flexを使ってタイル型に3列でWorkItemコンポーネントを配置 */}
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-6 mt-16">
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/> 
          <WorkItem/>
        </div>
        <div className='flex flex-col  px-16 py-16 bg-primary mt-14 rounded-xl'>
          <p className='text-white md:text-xl text-base text-center mt-2'>
            このサイトについてアンケートのご協力をお願いします！
          </p>
          <button type="submit" className='text-xs px-5 py-2 bg-white text-primary rounded-full tracking-wide mx-auto mt-7 hover:opacity-80 transition-opacity duration-500 ease-out'>
            アンケートに答える
          </button>
        </div>
        <div className=' relative bg-primary clip'>
          <style>
            {`
              .clip {
                clip-path: inset(1px round 12px);
              }
            `}
          </style>
          <div className='flex flex-row justify-between  px-16 py-16  mt-14'>
            <div className='flex flex-col'>
              <p className='text-white text-xl text-left'>
                あなたにピッタリな<br></br>
                学生とマッチング
              </p>
              <p className='text-white text-[10px] lg:text-xs text-left mt-2'>
                サイトに求人情報を掲載しませんか？
              </p>
            </div>
            <div className='flex'>
              <button type="submit" className='text-[10px] px-5 py-2 bg-white text-primary rounded-full tracking-wide mx-auto mt-10 hover:opacity-80 transition-opacity duration-500 ease-out'>
                アンケートに答える
              </button>
            </div>
          </div>
          <div className=' absolute -z-10 md:top-[-80px] top-[-30px] md:right-20 right-10 md:w-[320px] w-[240px] md:h-[320px] h-[240px] bg-white opacity-50 rounded-[50%]'>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
