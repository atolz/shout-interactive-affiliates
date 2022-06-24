import { useRef } from "react";
import Image from 'next/image';

const InputField = ({ placeholder = "placeholder", className, children, label = "", status = "", reference }) => {
  // const defaultInputRef = useRef();
  return (
    <div>
      <label className="caption_heavy text-black-default flex mb-[8px]">{label}</label>
      <div className={`${className} flex flex-row  h-[50px] max-w-[400px] min-w-[180px] border-gray-light border rounded-[16px] justify-between w-full`}>
        <input 
          className={`  w-[80%] mx-2 rounded-[16px] text-black-default body_light focus:border-primary focus:outline-0`}
          // ref={reference ? reference : defaultInputRef}
          // className={`${className} flex h-[48px] mb-[10px] max-w-[375px] min-w-[180px] w-full text-black-default body_light focus:border-primary focus:outline-0 ${
          //   status == "warn" ? `border-warn-default opacity-50` : "border-gray-light"
          // } ${status == "error" ? "border-error-default " : "border-gray-light"} border rounded-[16px] px-[8px] py-[14px]`}
          placeholder={placeholder}
          required
        ></input>
        <div className="m-[auto] cursor-pointer">
          {children}
        </div>
      </div>
    </div>
)}

export default InputField;