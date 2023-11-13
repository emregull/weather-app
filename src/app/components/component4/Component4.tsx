import Image from 'next/image'
import React from 'react'

interface IComponent4 {
  data: {
    airConditions: string,
    date: string,
  }
}

const Component4: React.FC<IComponent4> = ({ data }) => {
  const gmtTimeString = new Date(data.date).toLocaleTimeString('en-US', {
    timeZone: 'GMT',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const airConditionsParts = data.airConditions.split("::");
  return (
    <div className='bg-[#C4C3C1] bg-opacity-40 rounded-[25px] p-4 w-100'>
      <div className='flex gap-11'>
        <Image src="/icons/hour-2.png" alt='Hour' width={40} height={50} />
        <p className='text-2xl'>{gmtTimeString} GMT</p>
      </div>
      <p className='text-2xl font-extrabold mt-5 mb-5 md:mb-10'>AIR CONDITIONS</p>
      <div className='grid md:grid-rows-2 md:grid-cols-2 p-6 gap-5 md:gap-[5rem]'>
        <div className='flex gap-3'>
          <div className='relative w-[12%] md:w-1/5'>
            <Image src="/icons/tempature.png" fill alt='Tempature' />
          </div>

          <div>
            <p>Real Feel</p>
            <p>{airConditionsParts[0]}°</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='relative w-[12%] md:w-[30%]'>
            <Image src="/icons/wind.png" fill alt='Wind' />
          </div>
          <div>
            <p>Wind</p>
            <p>{airConditionsParts[1]} km/hr</p>
          </div>
        </div>
        <div className='flex gap-3 '>
          <div className='relative items-center w-[12%] md:w-1/5 md:h-[80%]'>
            <Image src="/icons/drop.png" fill alt='Rain' />
          </div>
          <div>
            <p>Change of Rain</p>
            <p>{airConditionsParts[2]}%</p>
          </div>
        </div>
        <div className='flex gap-3 relative'>
          <div className='relative w-[12%] md:w-[30%]'>
            <Image src="/icons/sun.png" fill alt='UV Index' />
          </div>
          <div>
            <p>UV Index</p>
            <p>{airConditionsParts[3]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component4