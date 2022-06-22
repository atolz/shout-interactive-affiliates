import React from 'react';
import Image from 'next/image'

const Filter = () => {
  return (
    <div className='flex flex-row w-[200px] border-2 border-gray-light rounded-xl justify-between bg-white px-[20px] py-[10px]'>
        <p className='body_light'>Filter</p>
        <Image src='/images/filter.png' alt='' width='20px' height='20px' />
    </div>
  )
}

export default Filter