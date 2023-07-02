import React, { Children } from 'react';

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

const WorkDetail = (props: Work) => {
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
                  {props.Elements}
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
                  {props.salary}
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
                  {props.time}
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
                  {props.people}
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
                  {props.place}
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
                  {props.require}
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}

export default WorkDetail;