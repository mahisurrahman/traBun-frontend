import React from 'react'
import { TbTargetArrow } from "react-icons/tb";
import MonthlyGoalsCounter from './monthlyGoalsCounter/MonthlyGoalsCounter';

function MonthlyGoalsTitle() {
    let progress = 20;
    let total = 400;
  return (
    <div className='w-full flex items-center justify-between'>
        <h1 className='font-extrabold text-primary text-sm'>Monthly Goals </h1>
        <MonthlyGoalsCounter progress={progress} total={total}/>
    </div>
  )
}

export default MonthlyGoalsTitle