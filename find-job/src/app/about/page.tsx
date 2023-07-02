import React from 'react';
import Survey from '../components/Survey';

const About = () => {
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 px-14 max-w-5xl min-h-screen">
        <h1 className=" text-primary text-2xl text-center font-bold mt-20">このサイトについて</h1>
        <div className="flex flex-col mt-10 px-10">
          <p className=" text-primary text-left">
            ●当サイトの運営者について
          </p>
          <p className=" text-black text-left mt-6">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p className=" text-primary text-left mt-10">
            ●注意事項
          </p>
          <p className=" text-black text-left mt-6">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <Survey />
      </div>
    </>
  );
}

export default About;