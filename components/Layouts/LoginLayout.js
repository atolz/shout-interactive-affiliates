import Image from 'next/image';
import React from 'react';

const LoginLayout = ({children}) => {
  return (
    <>
      <div className=' p-[10rem] bg-primary h-[80vh]'>
        {children}
      </div>
      <div className='bg-white h-[10vh]'>
        {/* <div className='flex flex-row justify-center px-[10rem] m-[auto]'>
          <div className='flex flex-row  text-center align-middle'>
            <p className='mr-10'>Need Support?</p>
            <div className='flex flex-col'>
              <p>help@shouts.com</p>
              <p>+234 823 8172 949</p>
            </div>
          </div>
          <div className='flex flex-row'>
            <p>Download Shout</p>
            <Image src='/images/playstore.png' alt='playstore' width='120px' height='50px' />
          </div>
        </div> */}
      </div>
      
    </>
  )
}

export default LoginLayout;