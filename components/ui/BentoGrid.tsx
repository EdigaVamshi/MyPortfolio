'use client'
import { cn } from "@/utils/cn";
import {GlobeDemo} from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-1 grid-cols-1 lg:grid-cols-5 md:grid-rows-7 gap-8 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {

  const [copied, setCopied]=useState(false);
  const handleCopy = ()=>{
    navigator.clipboard.writeText('vamshiediga2003@gmail.com')

    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col rounded-2xl",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 5 && 'flex justify-start h-full'}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img src={img} alt={img} className={cn(imgClassName, 'object-cover object-center')} />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img src={spareImg} alt={spareImg} className='object-cover object-center w-full h-full' />
          )}
        </div>
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
        {id === 2 && 
            <GlobeDemo />
        }
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 md:gap-4 w-fit absolute -top-6 -right-3 lg:right-2 md:right-4 md:top-3">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['React.js','Next.js','TypeScript'].map((item)=>(
                <div key={id} className="relative inline-flex w-24 h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-[6.15rem] lg:w-[6.25rem]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex w-24 h-10  cursor-pointer items-center justify-center rounded-lg bg-[#10132E] px-3 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 lg:py-4 lg:px-3 lg:text-base">{item}</span>
              </div>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              {['Express.js','AWS','MongoDB'].map((item)=>(
                <div key={id} className="relative inline-flex w-24 h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-24 lg:w-[6.25rem]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex w-24 h-10  cursor-pointer items-center justify-center rounded-lg bg-[#10132E] px-3 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 lg:py-4 lg:px-3 lg:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {id === 4 && (
          <div className="relative">
            <div className={`absolute -bottom-5 right-0 w-30`}>
              <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYmid slice',
                }
              }} />
            </div>
            <MagicButton title={copied ? 'Email copied' : 'Copy my email'} icon={<IoCopyOutline/>} position="left" otherClasses="!bg-[#161a31]" handleClick={handleCopy} />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
