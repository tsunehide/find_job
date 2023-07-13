import React, { Children } from 'react';
import { Work } from '../lib/contents';

// 仕事詳細パネルのコンポーネント
// オブジェクト型のデータをPropsで引数として受け取る。
// TOPページの仕事一覧のモーダル画面と、検索結果画面で使いまわす。

interface contentDetalProps {
  content:Work
}

const WorkDetail = ({content}: contentDetalProps) => {
  return (
    <>
      <div className=' bg-primary py-6 px-3 rounded-lg mt-5'>
        <table className=' bg-white rounded-xl border-none last:[&_tr]:border-none mx-auto'>
            <tbody>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  仕事内容
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.Elements}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  賃金
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.salary}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  時間
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.time}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  採用人数
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.people}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  勤務地
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.place}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  希望条件
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.require}
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}

export default WorkDetail;