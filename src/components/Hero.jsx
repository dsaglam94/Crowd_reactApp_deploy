import React from 'react'
import bgHeroDesktop from '../images/image-hero-desktop.jpg'

const Hero = () => {
  return (
    <div className='relative w-full h-[300px]'>
        <img className='w-full h-full object-cover' src={bgHeroDesktop} alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black'></div>
    </div>
  )
}

export default Hero