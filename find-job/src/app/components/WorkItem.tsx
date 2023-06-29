// 画像とタイトル、説明文で構成されるタイル型のコンポーネント
import React from 'react';
import Image from 'next/image';


// const WorkImage = (title: string, url:string) => {
const WorkImage = ({ title, url }: { title: string, url:string }) => {
  return (
    <Image src={url} width={300} height={200} alt={title}/>
  )
}

const WorkItem = () => {
  return (
    <>
      <div className='flex flex-col'>
        <WorkImage title="aaa" url="/vercel.svg"/>
        <div className='flex flex-col bg-primary'>
          <p className='text-white text-xl text-center'>＜求人＞ホールスタッフ募集中</p>
          <p className='text-white text-sm text-center'>大学生が多く働いています。一緒に楽しく働きませんか？</p>
        </div>
      </div>
    </>
  );
}

export default WorkItem;