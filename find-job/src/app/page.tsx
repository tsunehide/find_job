"use client"
import { useState } from 'react';
import {Work, WorkSelect} from './components/WorkSelect';
import WorkItem from './components/WorkItem';

const Home: React.FC = () => {
  const [work, setWork] = useState<Work | null>(null);
  return (
    <>
      <div className="flex-col justify-center h-auto md:px-24 px-14">
        <div className="flex flex-col justify-center items-center mt-14 w-full px-14 py-7 rounded-xl text-white bg-primary">
          <h1 className="text-xl text-center">仕事を探す</h1>
          <div className="flex mt-5 mx-auto w-full">
            <div className="text-sm bg-secondary text-primary rounded-l-[4px] px-5 flex items-center justify-center md:w-36 w-24">
              <p>時給</p>
            </div>
            <WorkSelect selected={work} setWork={setWork}/>
          </div>
          <button type="submit" className=' text-sm px-10 py-2 bg-white text-primary rounded-full tracking-wide mt-7 mb-3'>検索する</button>
        </div>
        {/* flexを使ってタイル型に3列でWorkItemコンポーネントを配置 */}
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-6 mt-10">
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/> 
          <WorkItem/>
        </div>
        <div className='flex flex-col  px-16 pt-20 pb-10 bg-primary mt-14 rounded-xl'>
          <p className='text-white text-xl lg:text-xs text-center mt-2'>このサイトについてアンケートのご協力をお願いします！</p>
          <button type="submit" className='text-xs px-5 py-2 bg-white text-primary rounded-full tracking-wide mx-auto mt-7'>アンケートに答える</button>
        </div>
        <div className='flex flex-col  px-16 pt-20 pb-8 bg-primary mt-14 rounded-xl'>
          <p className='text-white text-xl lg:text-xs text-center mt-2'>このサイトについてアンケートのご協力をお願いします！</p>
          <button type="submit" className='text-xs px-5 py-2 bg-white text-primary rounded-full tracking-wide mx-auto mt-7'>アンケートに答える</button>
        </div>
      </div>
    </>
  );
};

export default Home;
