import Image from 'next/image'
import React from 'react'

interface IComponent0 {
    data: {
      type: string;
      date: string;
      day: string;
      fullDay: string;
      city: string;
      degree: number;
    };
  }

const Component0: React.FC<IComponent0> = ({ data }) => {
    const currentDate = new Date(data.date);
    const day = currentDate.toLocaleDateString('en-EN', { weekday: 'long' });
    const fullDay = currentDate.toLocaleDateString('en-EN', { month: 'short', day: 'numeric', year: 'numeric' }).replace(/,/g, '');
    
    return (
        <div className="grid grid-cols-2 h-full items-center md:grid-cols-4 gap-4">
            <div className='text-center'>
                <div className="flex items-center justify-center">
                    <Image src="/icons/map-dot.png" width={25} height={30} alt='Location' />
                    <p className='px-4'>{data.city}</p>
                </div>
                <p className="text-3xl mt-2">{data.type}</p>
                <p className='text-[64px] mt-10'>{data.degree}°C</p>
            </div>
            <div className="relative h-full w-full flex items-center"><Image src="/icons/cloud-lightning.png" width={200} height={200} className="contain" alt='Location' /></div>
            <div className="col-span-2 flex items-center justify-end">
                <h1 className='text-4xl'>{ day } | { fullDay }</h1>
            </div>
        </div>
    )
}

export default Component0