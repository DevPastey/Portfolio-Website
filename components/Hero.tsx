import React from 'react'
import { Spotlight } from './ui/Spotlight'
import clsx from 'clsx'
import { TextGenerateEffect } from './ui/Text-generate-effect';

// Alias 'clsx' as 'cn' for className utility
const cn = (...args: Parameters<typeof clsx>) => clsx(...args);

const Hero = () => {
  return (
    <div className='pb-20 pt-36 mr-0 relative '>
      <div className='w-screen overflow-x-hidden'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white'/>
        <Spotlight className='top-10 left-0 h-[80vh] w-[50vw] transform scale-x-[-1]' fill='purple'/>
        <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='blue'/>

      </div>

      <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>

        <div className="flex items-center justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect 
            words='Transforming Concepts into Seamless Experience'
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            filter
            duration={1.5}
            />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&#39;m Emmanuel, a Fullstack Developer</p>


          </div>
        </div>

      </div>

     

    </div>
  )
}

export default Hero