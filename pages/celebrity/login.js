import React from 'react';
import { Stack } from '@mui/material';
import TextField from "../../components/FormElements/TextField";
import LoginLayout from '../../components/Layouts/LoginLayout';
import BtnPrimary from '../../components/Buttons/BtnPrimary';

const Login = () => {
  return (
    <LoginLayout>
        <div className='bg-white rounded-xl p-[4rem] min-h-[400px] max-w-[500px] m-[auto] align-middle '>
            <div className="mr-5 mb-5">
                <h2 className="display_3_heavy ">Log In to Shout Portal</h2>
                <p className="subheader_light mb-[30px] md:mb-0">Welcome back. Log in to your account</p>
            </div>
            <Stack gap={"24px"}>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><TextField label="Username"></TextField></div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><TextField label="Password"></TextField></div>
                </div>
                <p className="text-light-blue my-[20px] md:mb-0">Change Password</p>
                <div className='w-[90%]'>
                    <BtnPrimary text='Log In' link='/celebrity/dashboard' />
                </div>
            </Stack>
        </div>
    </LoginLayout>
  )
}

export default Login;