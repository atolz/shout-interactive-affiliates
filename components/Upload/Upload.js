import React from "react";

const Upload = () => {
  return (
    <>
      <p className="caption_heavy text-black-default mb-3">Upload Files</p>
      <div className="max-w-[350px] min-w-[220px] h-[150px] rounded-[4px] border-black-lighter outline-dashed border-opacity-10 outline-[1px] bg-black-lightest-1 flex flex-col items-center justify-center">
        <span className="icon-Vector text-[32px] mb-5"></span>
        <input id={"file"} className=" invisible" type={"file"}></input>
        <p className=" text-black-default caption_heavy">
          Drag-and-drop file,{" "}
          <label className="caption_heavy text-primary cursor-pointer" htmlFor="file">
            or browse computer
          </label>
        </p>
      </div>
    </>
  );
};

export default Upload;
