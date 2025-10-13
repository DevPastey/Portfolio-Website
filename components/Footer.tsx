import Image from 'next/image'
import React from 'react'
import { BackgroundRippleEffect } from './ui/background-ripple-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const year = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className='w-full' id='contact'>
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <Image width={60} height={60} src="/footer-grid.svg" alt='grid' className='w-full h-full' /> 
        </div> */}
        <div className="relative flex min-h-96 -top-40 w-full flex-col items-start justify-start overflow-hidden">
            <BackgroundRippleEffect />
            <div className="mt-60 w-full flex flex-col justify-center items-center">
                <h2 className="relative z-10 mx-auto max-w-xl text-center text-2xl font-bold text-neutral-800 md:text-3xl lg:text-4xl dark:text-neutral-100">
                Ready to take <span className="text-purple ml-[6px]">your</span> digital presence to the next level?
                </h2>
                <p className="relative z-10 text-sm mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
                Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>

                <a className='cursor-pointer'>
                    <MagicButton
                        title="Contact Me Now"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>

                <div className="flex w-full justify-between items-center mt-20">
                    <div className='text-xs text-neutral-100'>
                       &copy; {year} DevPastey
                    </div>

                    <div className='flex gap-4'>
                        {socialMedia.map(({img, id}) => (
                            <div key={id} className='border-neutral-800 z-30 rounded border px-2 py-2 flex items-center justify-center cursor-pointer' >
                                <Image src={img} alt='socials' height={20} width={20} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

