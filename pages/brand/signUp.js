import React, {useState} from 'react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import TextField from "../../components/FormElements/TextField";
import LoginLayout from '../../components/Layouts/LoginLayout';
import BtnPrimary from '../../components/Buttons/BtnPrimary';
import InputField from '../../components/FormElements/InputField';

const SignUp = () => {
  const [showCheck, setShowCheck] =useState(false)
  return (
    <LoginLayout>
         <div className='bg-white rounded-xl p-[4rem] min-h-[400px] max-w-[500px] m-[auto] align-middle '>
          
        {/* <div className=' rounded-xl md:p-[4rem] min-h-[400px] md:max-w-[600px] md:min-w-[400px] w-full md:bg-white bg-transparent mt-5 align-middle '> */}
            <div className="mr-5 mb-10 justify-between">
                <h2 className="headline_heavy text-black-default ">Welcome Pizza Jungle</h2>
                {/* <h2 className="display_3_heavy ">Welcome Pizza Jungle</h2> */}
                <p className="subheader_light mb-[30px] md:mb-0">Setup your account to start using shout</p>
            </div>
            <Stack gap={"24px"}>
                <div className='flex flex-col md:flex-row justify-between w-full '>
                    <TextField  label="First name" placeholder="First name"></TextField>
                    <span className='px-2'></span>
                    <TextField status='warn' label="Last name" placeholder="last name"></TextField>
                </div>
             
                <TextField status='error' label="Role" placeholder="Enter Role"></TextField>
               
               {/* <TextField  label="Create Username" placeholder="eg. joe_234"></TextField> */}
               
               <InputField  label="Create Username" placeholder="eg. joe_234">
               <img src='/images/check-circle.svg'  alt='icon' width='20px' height='20px' hidden={showCheck} onClick={()=>setShowCheck(!showCheck)} />
               <img src='/images/times-circle.svg'  alt='icon' width='20px' height='20px' hidden={!showCheck} onClick={()=>setShowCheck(!showCheck)} />
               </InputField>

               <InputField  label="Password" placeholder="**********">
               <Image src='/images/openedeyes.svg'  alt='icon' width='20px' height='20px' />
               </InputField>

              <InputField  label="Confirm Password" placeholder="**********">
               <Image src='/images/openedeyes.svg'  alt='icon' width='20px' height='20px' />
               </InputField>
               <BtnPrimary text='Create' link='/brand/login' />
               
            </Stack>
        </div>
    </LoginLayout>
  )
}

export default SignUp;