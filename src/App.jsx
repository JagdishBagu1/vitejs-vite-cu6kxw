import gsap from 'gsap';
import { useEffect } from 'react';
import Confetti from 'react-confetti';

function App() {
  useEffect(() => {
    gsap.to('#box', {
      x: 200,
      y: 100,
      duration: 1,
      rotate: 360,
      delay: 4,
      color: 'red',
    });
    gsap.to('#box1', {
      x: 200,
      y: 100,
      duration: 1,
      rotate: 360,
      delay: 4,
      color: 'red',
    });
    gsap.to('#text', {
      y: 100,
      duration: 1,
      delay: 4,
      color: 'red',
    });
  });
  return (
    <>
      <Confetti />
      <div className="flex flex-row mx-2 my-5 px-36 py-2">
        <div
          id="box"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-36"
        >
          H
        </div>
        <div
          id="box1"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          A
        </div>
        <div
          id="box"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          P
        </div>
        <div
          id="box1"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          P
        </div>
        <div
          id="box1"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          Y
        </div>
      </div>
      <div className="flex flex-row mx-2 my-5 px-2 py-2">
        <div
          id="box"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          B
        </div>
        <div
          id="box"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          I
        </div>
        <div
          id="box1"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          R
        </div>
        <div
          id="box1"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          T
        </div>
        <div
          id="box1"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          H
        </div>
        <div
          id="box1"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          D
        </div>
        <div
          id="box"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          A
        </div>
        <div
          id="box1"
          className="border-2 rounded-lg border-red-500 w-[100px] h-[100px] text-center bg-yellow-500 text-yellow-500   content-center mx-2 font-serif font-8xl"
        >
          Y
        </div>
      </div>
      <div
        id="text"
        className="text-center text-transparent font-8xl text-red-800 overflow-visible my-4 "
      >
        Jagdish
      </div>
    </>
  );
}

export default App;
