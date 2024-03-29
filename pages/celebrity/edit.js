import React,{useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Padding from '../../components/Layouts/Padding';
import BaseLayout from "../../components/Layouts/BaseLayout";
import DisplayHeader from '../../components/Layouts/DisplayHeader'
import { Stack } from '@mui/material';
import TextField from "../../components/FormElements/TextField";
import Calender from "../../components/FormElements/Calender";
import MySelect from "../../components/FormElements/Select";
import BtnPrimary from '../../components/Buttons/BtnPrimary';

const EditCelebrity = () => {
    const [loading, setLoading]=useState();
    const router = useRouter();
    function handleSubmit(){
        setLoading(true);
        setTimeout(() => {
            router.push('/celebrity/dashboard')
        }, 1500);
    }
  return (
    <Padding className="bg-gray-lighter !pb-[10rem] !px-[15rem] ">
    {/* <Padding className="bg-gray-lighter !pb-[10rem] !md:px-[15rem]"> */}
       <header className="flex flex-wrap justify-between mb-[27px] md:mb-[52px]  items-center w-full">
            <div className="mr-5">
                <div className='flex flex-row' >
               <Link passHref href='/celebrity/dashboard'>
               <Image src='/images/arrow-circle-left.png' alt='add' width='50px' height='50px' className='cursor-pointer'/>
               </Link>
               <h2 className="display_3_heavy ml-5">Edit Celebrity</h2>
               </div>
                <p className="subheader_light mb-[30px] md:mb-0">Add neccessary Information of the celebrity</p>
            </div>
        </header>
        <div className="bg-white p-[5rem] rounded-2xl">
            <div className='mb-[4rem]'>
            <p className="caption_heavy text-black-default flex mb-[8px]">Image</p>
                <Image src='/images/addImg.png' alt='add' width='150px' height='150px' className='cursor-pointer' />
            </div>
            <Stack gap={"24px"}>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px] ' label="Name of Celebrity"  placeholder=''></TextField></div>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px] ' label="Industry" placeholder=''></TextField></div>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px] ' label="Stage Name" placeholder=''></TextField></div>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px] ' label="Level of Celebrity" placeholder=''></TextField></div>
                </div>
               <div className='w-full'>
               <label className="caption_heavy text-black-default flex mb-[8px]">Description</label>
                <input
                    className='flex h-[48px] mb-[10px]  min-w-[180px] w-[92%] text-black-default body_light focus:border-primary focus:outline-0 border-gray-light border rounded-[16px] px-[8px] py-[14px]'
                ></input>
               </div>
            </Stack>
            <hr className='my-[5rem] w-[90%]' />
            <Stack gap={"24px"}>
                <p className="caption_heavy text-black-default flex mb-[8px]">Social Media Handles</p>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px]' label="Twitter" placeholder=''></TextField></div>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px]' label="Facebook" placeholder=''></TextField></div>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px]' label="Snapchat" placeholder=''></TextField></div>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px]' label="Instagram" placeholder=''></TextField></div>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px]' label="YouTube" placeholder=''></TextField></div>
                    <div className='w-full'><TextField className='!max-w-[400px] !min-w-[180px]' label="Website" placeholder=''></TextField></div>
                </div>
                <div className='md:w-[42%]'>
                    <BtnPrimary loading={loading} text='Update Changes' handleClick={handleSubmit} />
                </div>
            </Stack>
        </div>

    </Padding>
  )
}
EditCelebrity.Layout = BaseLayout;
export default EditCelebrity;