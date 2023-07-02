"use client"
import { useState } from 'react';
import WorkDetail from '../components/Workdetail';

// 検索結果画面

const Result: React.FC = async () => {
  type Work = {
    id: number;
    name: string;
    Elements: string;
    salary: number;
    time: string;
    people: string;
    place: string;
    require: string;
  }

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
    {
      id: 2,
      name: 'hogaキッチン',
      Elements: "ホールスタッフ、調理補助",
      salary: 1000,
      time: "18:00~22:00 週1からOK 勤務日数、曜日相談可",
      people: "2~3",
      place: '佐賀市松原2-2-3',
      require: "明るく元気な人！ベテランから学生までいろんな人が働いています！美味しい賄いつき！"
    },
    {
      id: 3,
      name: 'piyoハンバーガー',
      Elements: "ホールスタッフ、調理補助",
      salary: 1000,
      time: "18:00~22:00 週1からOK 勤務日数、曜日相談可",
      people: "2~3",
      place: '佐賀市松原2-2-3',
      require: "明るく元気な人！ベテランから学生までいろんな人が働いています！美味しい賄いつき！"
    },
    {
      id: 4,
      name: 'hogeピザ',
      Elements: "ホールスタッフ、調理補助",
      salary: 1000,
      time: "18:00~22:00 週1からOK 勤務日数、曜日相談可",
      people: "2~3",
      place: '佐賀市松原2-2-3',
      require: "明るく元気な人！ベテランから学生までいろんな人が働いています！美味しい賄いつき！"
    },
    {
      id: 5,
      name: 'hogaカフェ',
      Elements: "ホールスタッフ、調理補助",
      salary: 1000,
      time: "18:00~22:00 週1からOK 勤務日数、曜日相談可",
      people: "2~3",
      place: '佐賀市松原2-2-3',
      require: "明るく元気な人！ベテランから学生までいろんな人が働いています！美味しい賄いつき！"
    }
  ]
  

  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 px-14 max-w-5xl">
        <h1 className="text-xl text-primary font-bold text-center mt-20">検索結果</h1>
        {worklist.map((work) => (
          <WorkDetail {...work} key={work.id} />
        ))}
      </div>
    </>
  );
};

export default Result;
