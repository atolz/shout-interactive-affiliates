import React from 'react';
import Image from 'next/image'
import { Stack } from '@mui/material';
import TextField from "../../components/FormElements/TextField";
import LoginLayout from '../../components/Layouts/LoginLayout';
import BtnPrimary from '../../components/Buttons/BtnPrimary';
import InputField from '../../components/FormElements/InputField';

const SignUp = () => {
  return (
    <LoginLayout>
        <div className='bg-white rounded-xl p-[4rem] min-h-[400px] max-w-[500px] m-[auto] align-middle '>
          <div className="mr-5 mb-10 justify-between">
                <h2 className="headline_heavy text-black-default ">Welcome David Adeleke</h2>
                <p className="subheader_light mb-[30px] md:mb-0">Setup your account to start using shout</p>
            </div>
            <Stack gap={"24px"}>
                <div className='flex flex-col md:flex-row justify-between w-full '>
                    <TextField  label="First name" placeholder="First name"></TextField>
                    <span className='px-2'></span>
                    <TextField status='warn' label="Last name" placeholder="last name"></TextField>
                </div>
             
                <TextField status='error' label="Role" placeholder="Enter Role"></TextField>
               
               <TextField  label="Create Username" placeholder="eg. joe_234"></TextField>
               
               <InputField  label="Password" placeholder="**********">
               <Image src='/images/openedeyes.svg'  alt='icon' width='20px' height='20px' />
               </InputField>

              <InputField  label="Confirm Password" placeholder="**********">
               <Image src='/images/openedeyes.svg'  alt='icon' width='20px' height='20px' />
               </InputField>
               <BtnPrimary text='Create' link='/celebrity/login' />
               
            </Stack>
        </div>
    </LoginLayout>
  )
}

export default SignUp;