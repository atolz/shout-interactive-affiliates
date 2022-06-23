import Image from 'next/image';
import React from 'react';

const LoginLayout = ({children}) => {
  return (
    <div className='h-[auto]'>
      <div className=' p-[10rem] bg-primary min-h-[120vh] items-center flex flex-col'>
      <Image src='/images/shoutlogo.png' alt='playstore' width='150px' height='100px' />
        {children}
      </div>
      <div className='bg-black h-[15vh]'>
        <div className='flex flex-row justify-between w-[50%] align-middle text-center m-[auto] py-[2rem]'>
          <div className='flex flex-row  text-center align-middle'>
            <p className='mr-10 text-white title_heavy'>Need Support?</p>
            <div className='flex flex-col text-white caption_light'>
              <p>help@shouts.com</p>
              <p>+234 823 8172 949</p>
            </div>
          </div>
          {/* <div className='flex flex-row text-white caption_light justify-center content-center items-center text-center align-middle'> */}
          <div className='flex flex-row text-white caption_light  items-center'>
            <p className='text-center mr-6'>Download Shout</p>
            <Image src='/images/playstore.png' alt='playstore' width='150px' height='50px' />
          </div>
        </div>
      </div>
      
    </ div>
  )
}

export default LoginLayout;