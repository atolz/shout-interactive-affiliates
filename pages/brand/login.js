import React,{useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Stack } from '@mui/material';
import TextField from "../../components/FormElements/TextField";
import LoginLayout from '../../components/Layouts/LoginLayout';
import BtnPrimary from '../../components/Buttons/BtnPrimary';
import InputField from '../../components/FormElements/InputField';



const Login = () => {
    const [loading, setLoading]=useState();
    const router = useRouter();
    function handleSubmit(){
        setLoading(true);
        setTimeout(() => {
          router.push('/brand/dashboard')
        }, 1500);
    }
  return (
    <LoginLayout>
        <div className='bg-white rounded-xl p-[4rem] min-h-[400px] max-w-[500px] m-[auto] align-middle '>
            <div className="mr-5 mb-5">
                <h2 className="display_3_heavy ">Log In to Shout Portal</h2>
                <p className="subheader_light mb-[30px] md:mb-0">Welcome back. Log in to your account</p>
            </div>
            <Stack gap={"24px"}>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><TextField label="Username" placeholder='@joe_234'></TextField></div>
                </div>
                {/* <InputField  label="Create Username" placeholder="eg. joe_234">
               <Image src='/images/times-circle.svg'  alt='icon' width='20px' height='20px' />
               </InputField> */}
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><InputField label="Password" placeholder='******************'>
                    <Image src='/images/openedeyes.svg'  alt='icon' width='20px' height='20px' />
                        </InputField></div>
                </div>
                <p className="text-light-blue my-[20px] md:mb-0">Change Password</p>
                <BtnPrimary loading={loading} text='Log In' handleClick={handleSubmit} />
               
            </Stack>
        </div>
    </LoginLayout>
  )
}

export default Login;