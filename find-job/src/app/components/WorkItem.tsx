// 画像とタイトル、説明文で構成されるタイル型のコンポーネント
import React from 'react';
import Image from 'next/image';


// const WorkImage = (title: string, url:string) => {
const WorkImage = ({ title, url }: { title: string, url:string }) => {
  return (
    <Image src={url} width={385} height={245} alt={title} className=' rounded-t-md'/>
  )
}

const WorkItem = () => {
  return (
    <>
      <div className='flex flex-col'>
        <WorkImage title="aaa" url="https://picsum.photos/385/245"/>
        <div className='flex flex-col bg-primary rounded-b-md px-7 py-6'>
          <p className='text-white md:text-[9px] lg:text-xs text-center font-bold'>＜求人＞ホールスタッフ募集中</p>
          <p className='text-white text-[5px] text-center mt-2 tracking-widest'>大学生が多く働いています。一緒に楽しく働きませんか？</p>
        </div>
      </div>
    </>
  );
}

export default WorkItem;