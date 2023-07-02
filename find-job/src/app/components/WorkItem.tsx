"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './modal/Modal';
import Panel from './modal/Panel';
import { useBodyFixed } from '../hooks/useBodyFixed';

// Topページのタイル型の仕事一覧のコンポーネント


const WorkImage = ({ title, url }: { title: string, url:string }) => {
  return (
    <Image src={url} width={385} height={245} alt={title} className='group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 ease-out'/>
  )
}

const WorkItem = () => {
  // bodyの固定を管理するstate、Trueの時は固定
  const { bodyFixed, setBodyFixed } = useBodyFixed();

  // モーダルの開閉状態を管理するstate
  const [isOpenModal, setIsOpenModal] = useState(false);

  // モーダルを開閉する関数
  const toggleModal = (e: any) => {
    console.log(e.target);
    if (e.target === e.currentTarget) {
      setIsOpenModal(!isOpenModal);
      setBodyFixed(!bodyFixed);
    }
  };

  return (
    <>
      <div className='flex flex-col group' 
           onClick={toggleModal}>
        <div className=" -z-10">
          <div className='flex justify-center rounded-t-md overflow-hidden'>
            <WorkImage title="aaa" url="https://picsum.photos/385/245"/>
          </div>
          <div className='flex flex-col bg-primary rounded-b-md px-7 py-6'>
            <p className='text-white md:text-[9px] lg:text-xs text-center font-bold'>＜求人＞ホールスタッフ募集中</p>
            <p className='text-white text-[5px] text-center mt-2 tracking-widest'>大学生が多く働いています。一緒に楽しく働きませんか？</p>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal close={toggleModal} >
          <Panel />
        </Modal>
      )}
    </>
  );
}

export default WorkItem;