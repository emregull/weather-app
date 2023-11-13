import Image from 'next/image'
import React from 'react'

const Component2 = () => {
  return (
    <div className='bg-[#C4C3C1] bg-opacity-40 rounded-[25px] p-4 h-full'>
      <div className='flex'>
        <Image src="/icons/heart.png" alt='Heart' width={22} height={20} /><p>Activities in your area</p>
      </div>
      <div className='grid grid-cols-4 gap-4 h-full pb-4 pt-2 px-4 min-h-[5rem]'>
        <div className='relative'>
          <Image src="/act-1.png" alt='Activity 1' fill className='contain rounded'  />
        </div>
        <div className='relative'>
          <Image src="/act-2.png" alt='Activity 2'  fill className='contain rounded' />
        </div>
        <div className='relative'>
          <Image src="/act-3.png" alt='Activity 3'  fill className='contain rounded' />
        </div>
        <div className='relative'>
          <Image src="/act-4.png" alt='Activity 4'  fill className='contain rounded' />
        </div>
      </div>
    </div>
  )
}

export default Component2