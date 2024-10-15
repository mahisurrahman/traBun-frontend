import React from 'react'
import MonthlyGoalsTitle from './monthlyGoalsTitle/MonthlyGoalsTitle'
import MonthlyGoalsTasks from './monthlyGoalsTasks/MonthlyGoalsTasks'

function MonthlyGoals() {
  return (
    <div className='w-full h-[41vh] bg-white rounded-3xl px-[2vw] py-[3vh] shadow-lg'>
        <MonthlyGoalsTitle/>
        <MonthlyGoalsTasks/>
    </div>
  )
}

export default MonthlyGoals