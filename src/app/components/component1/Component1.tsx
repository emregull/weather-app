import Image from 'next/image'
import React from 'react'

const Component1 = () => {
    return (
        <div className='relative w-full'>
            <div className='grid grid-flow-col md:grid-flow-row gap-5'>
                <div className='flex items-center justify-center'>
                    <Image src="/icons/logo.png" width={100} height={100} alt='Cloud Rain' />
                </div>
                <div className='w-full text-center grid items-center'>
                    <div className='flex justify-center items-center'>
                        <Image src="/icons/cloud-rain.png" width={80} height={80} alt='Cloud Rain' />
                    </div>
                    <p className='text-[12px]'>weather</p>
                </div>
                <div className='w-full text-center grid items-center'>
                    <div className='flex justify-center items-center'>
                        <Image src="/icons/explore.png" width={20} height={20} alt='Cloud Rain' />
                    </div>
                    <p className='text-[12px] text-[#C4C3C1]'>explore</p>
                </div>
                <div className='w-full text-center grid items-center'>
                    <div className='flex justify-center items-center'>
                        <Image src="/icons/map-dot-dark.png" width={20} height={20} alt='Cloud Rain' />
                    </div>
                    <p className='text-[12px] text-[#C4C3C1]'>cities</p>
                </div>
                <div className='w-full text-center grid items-center'>
                    <div className='flex justify-center items-center'>
                        <Image src="/icons/settings.png" width={20} height={20} alt='Cloud Rain' />
                    </div>
                    <p className='text-[12px] text-[#C4C3C1]'>settings</p>
                </div>
            </div>
        </div>
    )
}

export default Component1