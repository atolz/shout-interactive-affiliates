import React from 'react';
import { Stack } from '@mui/material';
import TextField from "../../components/FormElements/TextField";
import LoginLayout from '../../components/Layouts/LoginLayout';
import BtnPrimary from '../../components/Buttons/BtnPrimary';

const SignUp = () => {
  return (
    <LoginLayout>
        <div className=' rounded-xl md:p-[4rem] min-h-[400px] md:max-w-[600px] md:min-w-[400px] w-full md:bg-white bg-transparent mt-5 align-middle '>
            <div className="mr-5 mb-10 justify-between">
                <h2 className="display_3_heavy ">Welcome David Adeleke</h2>
                <p className="subheader_light mb-[30px] md:mb-0">Setup your account to start using shout</p>
            </div>
            <Stack gap={"24px"}>
                <div className='md:flex flex-row hidden justify-between w-full'>
                    <TextField className='!w-[250px]  ' label="First name"></TextField>
                    <TextField className='!w-[250px] !sm:w-full ' label="Last name"></TextField>
                </div>
                <div className='md:hidden flex flex-col md:flex-row justify-between w-full '>
                    <TextField  label="First name"></TextField>
                    <TextField  label="Last name"></TextField>
                </div>
                    <TextField className='!max-w-[500px] !min-w-[180px] 'label="Role"></TextField>
               
                    <TextField className='!max-w-[500px] !min-w-[180px] ' label="Create Username"></TextField>
                
                    <TextField className='!max-w-[500px] !min-w-[180px] ' label="Password"></TextField>
                
                    <TextField className='!max-w-[500px] !min-w-[180px] ' label="Confirm Password"></TextField>
               
                {/* <p className="text-light-blue my-[20px] md:mb-0">Change Password</p> */}
                <BtnPrimary text='Create' link='/celebrity/login' />
               
            </Stack>
        </div>
    </LoginLayout>
  )
}

export default SignUp;