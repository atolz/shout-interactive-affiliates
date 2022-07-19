import React, {useState} from 'react';
import Image from 'next/image'
import Calender from './FormElements/Calender';

const Filter = ({className}) => {
  const [first, setFirst] = useState(false);
  return (
    <div className='relative'>
    <div className='flex flex-row w-[200px]  border-2 border-gray-light rounded-xl justify-between bg-white px-[20px] py-[10px]'
      onClick={()=>setFirst(!first)}
    >
        <p className='body_light'>Filter</p>
        <Image src='/images/filter.png' alt='' width='20px' height='20px' />
    </div>
    {first && <div className='bg-white rounded-xl md:w-[200px] pb-6 md:h-[auto] z-10  absolute right-0 top-[4.8rem]'>
      <div className='bg-white p-[3rem] rounded-xl'>
        <p className='title_heavy text-black'>Filter</p>
        <p className='body_light text-primary mt-4'>Period</p>
      </div>
      <div className='bg-faint-bg p-[3rem]'>
        <div className='mb-6'>
          <input type='checkbox' value='All' />
          <label className='caption_light text-primary ml-4'>All</label>
        </div>
        <div className='mb-6'>
          <input type='checkbox' value='Daily' />
          <label className='caption_light text-primary ml-4'>Daily</label>
        </div>
        <div className='mb-6'>
          <input type='checkbox' value='Weekly' />
          <label className='caption_light text-primary ml-4'>Weekly</label>
        </div>
        <div className='mb-6'>
          <input type='checkbox' value='Monthly' />
          <label className='caption_light text-primary ml-4'>Monthly</label>
        </div>
        <div >
          <input type='checkbox' value='Choose Date' />
          <label className='caption_light text-primary ml-4'>Choose Date</label>
        </div>
      </div>
      <div className='p-[3rem]'>
        <Calender label="Date"></Calender>
      </div>
      </div>}
    </ div>
  )
}

export default Filter;
