import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className="heading">
        A small selection of
        <span className="text-purple ml-[6px]">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({id, title, des, img, iconLists, link}) => (
            <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-142.5 flex items-center justify-center w-[80vw]' > 
                <PinContainer title={link} href={link}>
                    <div className='relative flex justify-center items-center sm:w-142.5 w-[80vw] overflow-hidden sm:h-[40h] h-[30vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                           <Image src="/bg.png" alt='bg-img' width={360} height={300} />
                        </div>
                        <Image className='z-10 absolute bottom-0' src={img} alt={title} width={320} height={320} />
                    </div>

                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                        {title}
                    </h1>
                    <p className="lg:text-lg  lg:font-normal font-light text-white/[0.7] text-sm line-clamp-2">
                        {des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                            {iconLists.map((icon, index) => (
                                <div key={index} className="border border-white/[0.2] bg-black lg:h-10 lg:w-10 h-8 w-8 rounded-full items-center justify-center flex" style={{
                                    transform: `translateX(-${5 * index * 2}px)`
                                }} >
                                    <Image src={icon} alt="Logo" width={20} height={20} />
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                            <FaLocationArrow className='ms-3' color='#CBACF9' />
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
