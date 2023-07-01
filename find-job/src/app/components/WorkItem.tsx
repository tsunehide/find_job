import React from 'react';
import Image from 'next/image';


// const WorkImage = (title: string, url:string) => {
const WorkImage = ({ title, url }: { title: string, url:string }) => {
  return (
    <Image src={url} width={385} height={245} alt={title} className='group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 ease-out'/>
  )
}

const WorkItem = () => {
  return (
    <>
      <div className='flex flex-col group'>
        <div className='flex justify-center rounded-t-md overflow-hidden'>
          <WorkImage title="aaa" url="https://picsum.photos/385/245"/>
        </div>
        <div className='flex flex-col bg-primary rounded-b-md px-7 py-6'>
          <p className='text-white md:text-[9px] lg:text-xs text-center font-bold'>＜求人＞ホールスタッフ募集中</p>
          <p className='text-white text-[5px] text-center mt-2 tracking-widest'>大学生が多く働いています。一緒に楽しく働きませんか？</p>
        </div>
      </div>
    </>
  );
}

export default WorkItem;