import React from 'react'
import StatTicket from '../ui/StatTicket';

const StatSection = () => {
  return (
    <div className="flex justify-between items-center gap-12 w-[65%]">
      <div className="flex justfiy-between items-center gap-24">
        <StatTicket value={500} label="ANU Courses" />
        <StatTicket value={20} label="Disciplines" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 rounded-lg bg-white border-2 shadow-md py-6 px-12 hover:shadow-xl transition-all duration-300 ease-in-out hover:border-orange-200 hover:-translate-y-1 group" >
        <span className="text-lg font-medium text-slate-500 group-hover:text-slate-700">Join to start reviewing courses</span>
        <button 
          className="rounded-lg text-xs bg-black text-white px-4 py-2 transform hover:scale-105 hover:bg-gray-800 transition-all duration-200 ease-in-out hover:shadow-lg"
          >
          Sign up
        </button>
      </div>
    </div>
  )
}

export default StatSection