"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Chart } from "react-google-charts"

interface IHourlyForecast {
    data: {
        forecast: {
            hour: "string",
            degree: number,
        }
    }
}
type ChartDataItem = [string, { v: number | string; f: string }, { type: string, role: string }];

export const options = {
    chartArea: { 'width': '100%', 'height': '80%' },
    curveType: 'function',
    colors: ['#fff'],
    legend: { position: 'none' },
    hAxis: { textPosition: "none", gridlines: { count: 0 } },
    vAxis: { textPosition: "none", gridlines: { count: 0 } },
    baselineColor: "transparent",
    backgroundColor: 'transparent',
    series: {
        0: {
            annotations: {
                stem: {
                    color: 'transparent',
                },
            },
        },
    },
};

export const chartData: ChartDataItem[] = [
    ["Time", { v: "integer", f: "Degree" }, { type: 'string', role: 'annotation' }],
];

const HourlyForecast: React.FC<IHourlyForecast> = ({ data }) => {
    const [chartData, setChartData] = useState<ChartDataItem[]>([
        ['Time', { v: 'integer', f: 'Degree' }, { type: 'string', role: 'annotation' }],
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const newChartData: any[] = [['Time', { v: 'integer', f: 'Degree' }, { type: 'string', role: 'annotation' }]];
            await Object.entries(data.forecast).forEach(([hour, degree]) => {
                const row: any = [hour, { v: parseInt(String(degree)), f: `${degree}°C` }, `${degree}°C`];
                newChartData.push(row);
            });
            console.log('New Chart Data:', newChartData);
            setChartData(newChartData);
        };

        fetchData();
    }, [data.forecast]);

    return (
        <div className='bg-[#C4C3C1] bg-opacity-40 rounded-[25px] h-full p-4'>
            <div className='flex'>
                <Image src="/icons/hour.png" alt='Hour' width={25} height={25} />
                <p className='ml-2'>Hourly Forecast</p>
            </div>
            <div className='relative'>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="100px"
                    className='pb-2'
                    data={chartData}
                    options={options}
                />
                <div className='flex w-full place-content-evenly px-2 md:px-5 gap-3 md:gap-[3.1rem] absolute bottom-0 mt-2'>
                    {chartData.slice(1).map((dataRow, index) => (
                        <div key={index} className='w-fit'>
                            <div className='w-100 flex justify-center'>
                                <Image src="/icons/moon.png" className='block' width={15} height={15} alt='Moon' />
                            </div>
                            <div className='text-center'>
                                <small className='text-[7px] block'>9.3km/h</small>
                                <small className='text-[7px] block'>{index == 0 ? "Now" : dataRow[0]}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast