import Image from 'next/image'
import React from 'react'
import HourlyForecast from '@/app/components/component5/HourlyForecast'

interface IComponent5{
    data: any
}

const Component5: React.FC <IComponent5> = ({data}) => {
    return (
        <>
            <div className=" md:grid grid-rows-2 md:grid-rows-3 max-h-full grid-flow-row md:grid-flow-col gap-4">
                <div className='items-center relative md:p-0 p-4 h-[5rem]'>
                    <Image src="/icons/header-logo-long.png" alt="Logo" fill className="md:object-none object-scale-down" />
                </div>
                <div className='row-span-2'>
                    <HourlyForecast data={data} />
                </div>
            </div>

        </>

    )
}

export default Component5