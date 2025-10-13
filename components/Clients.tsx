import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'
import Image from 'next/image'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className="heading">
        Kind words from
        <span className="text-purple ml-[8px]">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10"> 
        <InfiniteMovingCards 
            items={testimonials}
            direction='right'
            speed='slow'
            pauseOnHover={true}
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map(({id, img, name, nameImg}) => (
                <div key={id} className='flex md:max-w-60 max-x-32 gap-2'>
                    <Image width={0} height={0} src={img} alt={name} className="w-5 md:w-10"/>
                    <Image width={0} height={0} src={nameImg} alt={name} className="w-20 md:w-24"/>

                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
