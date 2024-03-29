import { useRef } from "react";

const Text = ({ placeholder = "placeholder", className, label = "", status = "", message = "", reference }) => {
  const defaultInputRef = useRef();
  return (
    <div>
      <label className="caption_heavy text-black-default flex mb-[8px]">{label}</label>
      <input
        ref={reference ? reference : defaultInputRef}
        className={`${className} flex h-[48px] mb-[10px] max-w-[375px] min-w-[180px] w-full text-black-default body_light focus:border-primary focus:outline-0 ${
          status == "warn" ? `border-warn-default opacity-50` : "border-gray-light"
        } ${status == "error" ? "border-error-default " : "border-gray-light"} border rounded-[16px] px-[8px] py-[14px]`}
        placeholder={placeholder}
        required
      ></input>
      {status == "warn" && (
        <div className="flex items-center">
          <span className="icon-exclamation-triangle text-[14px] text-warn-default "></span> <span className="caption_light text-black-light ml-[8px]">{message}</span>
        </div>
      )}
      {status == "error" && (
        <div className="flex items-center text-error-default">
          <span className="icon-exclamation-triangle text-[14px]"></span> <span className="caption_light text-black-light ml-[8px]">{message}</span>
        </div>
      )}
      {status == "success" && (
        <div className="flex items-center text-success-default">
          <span className="icon-check-circle text-[14px]"></span> <span className="caption_light text-black-light ml-[8px]">{message}</span>
        </div>
      )}
    </div>
  );
};

export default Text;
