import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import animOne from "../assets/Anim.json";
import animTwo from "../assets/Anim1.json";
import animThree from "../assets/Anim2.json";
import { useInView } from 'react-intersection-observer';
import AnimButton from './AnimButton';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [ref1, inView1] = useInView({
    threshold: 0.55,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.55,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.55,
  });

  useEffect(() => {
    setIsVisible(inView1 || inView2 || inView3);
  }, [inView1, inView2, inView3]);

  return (
    <div>
      <h2 className='text-4xl	font-means-web max-w-xl	mx-auto my-[80px] text-center font-semibold'>Generate up to 4x more orders* with Customer Journey Builder automations</h2>
      <div className='flex'>
        {
          isVisible && (
            <div className='bg-[#efeeea] w-1/2 h-[calc(100vh-80px)] flex justify-center items-center fixed bottom-0 m-md:hidden'>
              {inView1 && <Lottie className='max-w-[400px]' animationData={animOne}/>}
              {inView2 && <Lottie className='max-w-[400px]' animationData={animThree}/>}
              {inView3 && <Lottie className='max-w-[400px]' animationData={animTwo}/>}
            </div>
          )
        }
        <div className='bg-[#efeeea] w-1/2 h-[calc(100vh-80px)] flex justify-center items-center m-md:hidden'></div>
        <div className='w-1/2 m-md:w-full'>
          <div ref={ref1} className='h-[calc(100vh-80px)] flex flex-col justify-center px-[80px]'>
            <Lottie className='max-w-[400px] md:hidden mt-12' animationData={animOne}/>
            <h2 className='text-[32px] max-w-[420px] leading-10 mb-5'>"Discover Your Perfect Stay</h2>
            <p className='text-xl	max-w-[420px] text-gray-600 mb-5'>Find the ideal accommodation for your next adventure with our extensive selection of hotels worldwide. From cozy retreats to luxurious resorts, we've got you covered.</p>
            <AnimButton className="ml-[-8px] w-fit">Learn more</AnimButton>
          </div>
          <div ref={ref2} className='h-[calc(100vh-80px)] flex flex-col justify-center px-[80px]'>
            <Lottie className='max-w-[400px] md:hidden mt-[500px]' animationData={animThree}/> 
            <h2 className='text-[32px] max-w-[420px] leading-10 mb-5'>Fly to Your Dream Destination</h2>
            <p className='text-xl	max-w-[420px] text-gray-600 mb-5'>Plan your next journey with ease and convenience. Explore our wide range of flight options, competitive prices, and flexible booking policies to make your travel experience seamless.</p>
            <AnimButton className="ml-[-8px] w-fit">Learn more</AnimButton>
          </div>
          <div ref={ref3} className='h-[calc(100vh-80px)] flex flex-col justify-center px-[80px]'>
            <Lottie className='max-w-[400px] md:hidden mt-[1000px]' animationData={animTwo}/> 
            <h2 className='text-[32px] max-w-[420px] leading-10 mb-5'>Embark on an Epic Adventure"</h2>
            <p className='text-xl	max-w-[420px] text-gray-600 mb-5'>Experience the thrill of trekking through breathtaking mountain landscapes. Whether you're a seasoned mountaineer or a novice explorer, our guided treks offer unforgettable experiences.</p>
            <AnimButton className="ml-[-8px] w-fit">Learn more</AnimButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery