import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-10 pb-10' id='contact'>
      
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>Ready to take your <span className='text-purple'>Digital presence</span> to next level?</h1>
        <p className='text-white-200 md:mt-8 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you to achieve your goals.</p>
        <a href="https://linkedin.com/in/edigavamshi">
          <MagicButton title='Let&apos;s get in touch' icon={<FaLocationArrow/>} position='right'/>
        </a>
      </div>
      <div className='flex mt-16 lg:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright &#169; {new Date().getFullYear()} Vamshi</p>
        <div className='flex justify-center items-center md:gap-3 gap-6 my-3'>
          {socialMedia.map(({id, img, link})=>(
            <div key={id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              <a href={link}>
                <img src={img} alt={img} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
