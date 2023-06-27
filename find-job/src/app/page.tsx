"use client"
import { useState } from 'react';
import {Work, WorkSelect} from './components/WorkSelect';

const Home: React.FC = () => {
  const [work, setWork] = useState<Work | null>(null);
  return (
    <>
      <div className="flex-col justify-center items-center h-auto px-24">
        <div className="flex flex-col justify-center items-center mt-20 w-full px-14 py-7 rounded-xl text-white bg-primary">
          <h1 className="text-xl text-center">仕事を探す</h1>
          <div className="flex mt-5 mx-auto w-full">
            <div className="text-sm bg-secondary text-primary rounded-l-[4px] px-5 flex items-center justify-center w-36">
              <p>時給</p>
            </div>
            <WorkSelect selected={work} setWork={setWork}/>
          </div>
          <button type="submit" className=' text-sm px-10 py-2 bg-white text-primary rounded-full tracking-wide mt-4'>検索する</button>
        </div>
      </div>
    </>
  );
};

export default Home;
