import React from "react";
import WorkDetail from "../Workdetail";
import { IoCloseOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';
import { Work } from "../../lib/contents";

// モーダルのパネル部分のコンポーネント
// WorkDetailコンポーネント+右上のバツボタンで構成

type Props = {
  close?: any;
};





const worklist: Work[] = [
  {
    id: 1,
    name: 'hogeラーメン',
    Elements: "ホールスタッフ、調理補助",
    salary: 1000,
    time: "18:00~22:00 週1からOK 勤務日数、曜日相談可",
    people: "2~3",
    place: '佐賀市松原2-2-3',
    require: "明るく元気な人！ベテランから学生までいろんな人が働いています！美味しい賄いつき！"
  },
]

const Panel: React.FC<Props> = props => {
  return (
    <section className=" z-50 relative">
      <div className=" px-11">
        <WorkDetail {...worklist[0]}/>
        <button onClick={props.close} className=" [&>*]:pointer-events-none  z-[51] absolute right-[30px] top-[10px] rounded-[50%] p-2 bg-primary">
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <IoCloseOutline />
          </IconContext.Provider>
        </button>
        
      </div>
    </section>
  );
};

export default Panel;
