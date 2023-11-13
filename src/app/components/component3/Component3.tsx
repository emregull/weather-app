'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import styles from '@/app/components/component3/styles.module.scss';

type WeatherData = {
  type: string;
  degree: string
};

interface WeeklyWeather {
  previous: {
    [day: string]: WeatherData;
  };
  next: {
    [day: string]: WeatherData;
  };
  current: {
    [day: string]: WeatherData;
  };
}

interface IComponent3 {
  data: {
    weeklyWeather: WeeklyWeather;
  };
}

const aWeathers: (keyof WeeklyWeather)[] = ['previous', 'current', 'next'];

const Component3: React.FC<IComponent3> = ({ data }) => {

  const [selectedPriority, setSelectedPriority] = useState<keyof WeeklyWeather>('current');

  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (element.current) {
      element.current.classList.remove(styles[`custom-transition-opacity-${selectedPriority}`]);
      void element.current.offsetWidth; // Trigger reflow
      element.current.classList.add(styles[`custom-transition-opacity-${selectedPriority}`]);
    }
  }, [selectedPriority]);

  const handleArrowClick = (direction: 'previous' | 'next') => {
    const currentIndex = aWeathers.indexOf(selectedPriority);
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= 0 && newIndex < aWeathers.length) {
      setSelectedPriority(aWeathers[newIndex]);
    }
  };
  return (
    <div className='bg-[#C4C3C1] bg-opacity-40 rounded-[25px] p-4 h-full w-full'>
      <div className='flex h-full gap-1 md:gap-4'>
        <div className='flex items-center justify-center'>
          <Image src="/icons/arrow.png" alt='Left arrow' onClick={() => handleArrowClick('previous')} className={`${styles['movement-arrow']} ${selectedPriority === 'previous' ? styles['disabled'] : 'hover:cursor-pointer'}`} width={10} height={10} />
        </div>
        <div ref={element} className={`grid grid-cols-7 gap-2 md:gap-5 w-full ${styles[`custom-transition-opacity-${selectedPriority}`]}`}>
          {Object.entries(data.weeklyWeather[selectedPriority]).map(([day, weatherData], index) => (
            <div key={index} className='grid grid-rows-3 place-items-center'>
              <p className='text-[7px] md:text-xs text-center font-light'>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
              <div className='flex justify-center w-full h-full p-1 md:py-[1rem]'>
                <div className='relative w-full md:w-1/2'>
                  <Image src="/icons/cloudy.png" alt={weatherData.type} fill />
                </div>

              </div>
              <p className='text-[12px] md:text-regular text-center'>{weatherData.degree}°</p>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <Image src="/icons/arrow.png" alt='Left arrow' onClick={() => handleArrowClick('next')} className={`${styles['movement-arrow']} rotate-180 ${selectedPriority === 'next' ? styles['disabled'] : 'hover:cursor-pointer'}`} width={10} height={10} />
        </div>
      </div>
    </div>
  )
}

export default Component3;
