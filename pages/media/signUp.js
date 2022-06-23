import React from 'react';
import { Stack } from '@mui/material';
import TextField from "../../components/FormElements/TextField";
import LoginLayout from '../../components/Layouts/LoginLayout';
import BtnPrimary from '../../components/Buttons/BtnPrimary';

const SignUp = () => {
  return (
    <LoginLayout>
        <div className=' rounded-xl md:p-[4rem] min-h-[400px] max-w-[600px] md:w-[450px] w-full md:bg-white bg-transparent mt-5 align-middle '>
            <div className="mr-5 mb-10 justify-between">
                <h2 className="display_3_heavy ">Welcome MTV Base</h2>
                <p className="subheader_light mb-[30px] md:mb-0">Setup your account to start using shout</p>
            </div>
            <Stack gap={"24px"}>
                <div className='flex flex-col md:flex-row justify-between'>
                    <TextField label="First name"></TextField>
                    <TextField label="Last name"></TextField>
                </div>
             
                    <TextField label="Role"></TextField>
               
                    <TextField label="Create Username"></TextField>
                
                    <TextField label="Password"></TextField>
                
                    <TextField label="Confirm Password"></TextField>
               
                {/* <p className="text-light-blue my-[20px] md:mb-0">Change Password</p> */}
                <BtnPrimary text='Create' link='/media/login' />
               
            </Stack>
        </div>
    </LoginLayout>
  )
}

export default SignUp;