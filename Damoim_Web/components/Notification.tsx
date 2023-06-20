import React from 'react';

function Notification() {
  return (
    <div className="flex items-center w-full h-[100px] p-2 ">
      <div className="flex justify-center items-start pt-3 w-[100px] h-full">
        <div className="w-[50px] h-[50px] bg-slate-500 rounded-full"></div>
      </div>

      <div className="flex flex-col justify-around w-full h-full">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, illo amet
        <br />
        <span className="text-xs text-gray-500">35분 전</span>
      </div>
    </div>
  );
}

export default Notification;
