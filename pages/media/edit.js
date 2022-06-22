import React from 'react';
import Image from 'next/image';
import Padding from '../../components/Layouts/Padding';
import BaseLayout from "../../components/Layouts/BaseLayout";
import { Stack } from '@mui/material';
import TextField from "../../components/FormElements/TextField";
import MySelect from "../../components/FormElements/Select";
import BtnPrimary from '../../components/Buttons/BtnPrimary';

const EditMedia = () => {
  return (
    <Padding className="bg-gray-lighter !pb-[10rem] !px-[15rem]">
       <header className="flex flex-wrap justify-between mb-[27px] md:mb-[52px]  items-center w-full">
            <div className="mr-5">
                <h2 className="display_3_heavy ">Edit Media</h2>
                <p className="subheader_light mb-[30px] md:mb-0">Add neccessary Information of the celebrity</p>
            </div>
        </header>
        <div className="bg-white p-[5rem] rounded-2xl">
            <div className='mb-[4rem]'>
            <p className="caption_heavy text-black-default flex mb-[8px]">Logo</p>
                <Image src='/images/addImg.png' alt='add' width='150px' height='150px' className='cursor-pointer'/>
            </div>
            <Stack gap={"24px"}>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><TextField label="Media House Name "></TextField></div>
                    <div className='w-full'><MySelect label="Type of Media House"></MySelect></div>                
                </div>
               <div className='w-full'>
               <label className="caption_heavy text-black-default flex mb-[8px]">Description</label>
                <input
                    className='flex h-[48px] mb-[10px]  min-w-[180px] w-[90%] text-black-default body_light focus:border-primary focus:outline-0 border-gray-light border rounded-[16px] px-[8px] py-[14px]'
                   
                ></input>
               </div>
            </Stack>
            <hr className='my-[5rem] w-[90%]' />
            <Stack gap={"24px"}>
                <div className='w-full'>
                    <label className="caption_heavy text-black-default flex mb-[8px]">Address</label>
                    <input
                        className='flex h-[48px] mb-[10px]  min-w-[180px] w-[90%] text-black-default body_light focus:border-primary focus:outline-0 border-gray-light border rounded-[16px] px-[8px] py-[14px]'
                    
                    ></input>
               </div>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><TextField label="City"></TextField></div>
                    <div className='w-full'><MySelect label="State"></MySelect></div>         
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><MySelect label="Country"></MySelect></div>         
                </div>
            </Stack>
            <hr className='my-[5rem] w-[90%]' />
            <Stack gap={"24px"}>
                <p className="caption_heavy text-black-default flex mb-[8px]">Social Media Handles</p>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><TextField label="Twitter"></TextField></div>
                    <div className='w-full'><TextField label="Facebook"></TextField></div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><TextField label="Snapchat"></TextField></div>
                    <div className='w-full'><TextField label="Instagram"></TextField></div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='w-full'><TextField label="YouTube"></TextField></div>
                    <div className='w-full'><TextField label="Website"></TextField></div>
                </div>
                <div className='w-[35%]'>
                    <BtnPrimary text='Update Changes' />
                </div>
            </Stack>
        </div>

    </Padding>
  )
}
EditMedia.Layout = BaseLayout;
export default EditMedia;