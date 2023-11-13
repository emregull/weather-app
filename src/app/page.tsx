import Component0 from "@/app/components/component0/Component0";
import Component1 from "@/app/components/component1/Component1";
import Component2 from "@/app/components/component2/Component2";
import Component3 from "@/app/components/component3/Component3";
import Component4 from "@/app/components/component4/Component4";
import Component5 from "@/app/components/component5/Component5";
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/api/ReactProjectData.json', 'utf8');
  const data = JSON.parse(file);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4">
        <div className="col-span-2"><Component0 data={data} /></div>
        <Component5 data={data} />
      </div>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4">
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 h-full md:gap-4 md:mb-0">
            <div className='bg-[#C4C3C1] bg-opacity-40 rounded-[25px] p-4'>
              <Component1 />
            </div>
            <div className="col-span-3">
              <div className="grid grid-rows-2 grid-flow-col gap-4 h-full">
                <div><Component2 /></div>
                <div><Component3 data={data} /></div>
              </div>
            </div>
          </div>
        </div>
        <Component4 data={data} />
      </div >
    </>

  )
}
