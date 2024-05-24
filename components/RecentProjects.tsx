import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {
  return (
    <div className='md:pt-20 lg:pt-0' id='projects'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>Recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-60 gap-y-8 mt-10'>
        {projects.map(({id, title, img, iconLists, des, link}) =>(
            <div key={id} className='sm:h-[38rem] lg:min-h-[31.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] lg:w-[30rem] w-[80vw]'>
                <PinContainer title={link} href={link}>
                    <div className='relative flex items-center justify-center sm:w-[28rem] w-[80vw] overflow-hidden sm:h-[35vh] h-[30vh] lg:h-[35vh] lg:w-[32.5rem] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            <img src='/bg.png' alt='bg-img' />
                        </div>
                        <img className='z-10 absolute bottom-10' src={img} alt={title} />
                    </div>
                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                            {iconLists.map((icon,idx)=>(
                                <div className='border border-white/[0.2] rounded-full bg-black lg:h-10 lg:w-10 sm:w-8 sm:h-8 w-8 h-8 flex justify-center items-center'
                                 key={icon} style={{transform: `translateX(-${5*idx}px)`}}>
                                    <img className='p-2' src={icon} alt={icon} />
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center items-center'>
                            <a className='lg:text-base md:text-sm text-sm text-purple' href={link}>Check Live Site</a>
                            <FaLocationArrow className='ms-3' color='#CBACF9'/>
                        </div>
                    </div>
                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
