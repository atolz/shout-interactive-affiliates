import React, {useState} from 'react';
import Image from 'next/image'
import Calender from '../FormElements/Calender';

const MediaFilter = () => {
  const [first, setFirst] = useState(false);
  return (
    <div className='relative'>
    <div className='flex flex-row  w-[140px] md:w-[200px] h-[48px] border-2 border-gray-light rounded-xl justify-between bg-white px-[20px] py-[10px]'
      onClick={()=>setFirst(!first)}
    >
        <p className='body_light'>Filter</p>
        <Image src='/images/filter.png' alt='' width='20px' height='20px' />
    </div>
    {first && <div className='bg-white rounded-xl md:w-[200px] pb-6 md:h-[auto] z-10  absolute right-0 top-[4.8rem]'>
        <div className='bg-white p-[3rem] rounded-xl'>
            <p className='title_heavy text-black'>Filter</p>
            <hr className='w-[80%] my-5' />
            <p className='body_light text-primary mt-4'>Category</p>
        </div>
        <div className='bg-faint-bg p-[3rem]'>
            <div className='mb-6'>
            <input type='checkbox' value='TV' />
            <label className='caption_light text-primary ml-4'>TV</label>
            </div>
            <div className='mb-6'>
            <input type='checkbox' value='Radio' />
            <label className='caption_light text-primary ml-4'>Radio</label>
            </div>
            <div className='mb-6'>
            <input type='checkbox' value='Billboard' />
            <label className='caption_light text-primary ml-4'>Billboard</label>
            </div>
        </div>
    
        <div className='bg-white p-[1rem]'>
            <p className='body_light text-primary mt-4'>Date</p>
            {/* <hr className='w-[80%] my-5' /> */}
            </div>
            <div className='bg-faint-bg p-[3rem]'>
            <div className='mb-6'>
            <input type='checkbox' value='Ascending' />
            <label className='caption_light text-primary ml-4'>Ascending</label>
            </div>
            <div >
            <input type='checkbox' value='Descending' />
            <label className='caption_light text-primary ml-4'>Descending</label>
            </div> 
        </div> 
        <div className='bg-white p-[1rem] '>
            <p className='body_light text-primary mt-4'>Status</p>
            {/* <hr className='w-[80%] my-5' /> */}
            </div>
            <div className='bg-faint-bg p-[3rem] mb-10'>
            <div className='mb-6'>
            <input type='checkbox' value='Active' />
            <label className='caption_light text-primary ml-4'>Active</label>
            </div>
            <div className='mb-6'>
            <input type='checkbox' value='Pending' />
            <label className='caption_light text-primary ml-4'>Pending</label>
            </div> 
            <div className='mb-6'>
            <input type='checkbox' value='Suspended' />
            <label className='caption_light text-primary ml-4'>Suspended</label>
            </div> 
            <div className='mb-6'>
            <input type='checkbox' value='Pause' />
            <label className='caption_light text-primary ml-4'>Pause</label>
            </div> 
        </div>
        <div className='bg-white p-[3rem] mb-10'></div>
      </div>}
    </div>
  )
}

export default MediaFilter;
