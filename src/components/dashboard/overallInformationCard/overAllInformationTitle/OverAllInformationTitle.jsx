import React from 'react'
import { IoShareSocial } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

function OverAllInformationTitle() {
  return (
    <div className='w-full flex justify-between items-center'>
        <h2 className='font-semibold'>Overall Information</h2>
        <div className='flex items-center justify-end gap-x-4'>
            <IoShareSocial className='duration-200 hover:cursor-pointer hover:duration-200 hover:scale-110'/>
            <BsThreeDotsVertical className='duration-200 hover:cursor-pointer hover:duration-200 hover:scale-110'/>
        </div>
    </div>
  )
}

export default OverAllInformationTitle