import React from 'react';

const LoginLayout = ({children}) => {
  return (
    <>
      <div className='bg-black h-[100vh] p-[10rem]'>
        {children}
      </div>
      <div className='bg-white h-[10vh]'>footerr</div>
      
    </>
  )
}

export default LoginLayout;