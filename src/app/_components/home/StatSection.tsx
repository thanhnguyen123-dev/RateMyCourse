import React from 'react'
import StatTicket from '../ui/StatTicket';
import {AnimatedSubscribeButton} from '../ui/SignupButton';

const StatSection = () => {
  return (
    <div className="flex justify-between items-center gap-12 w-[65%]">
      <div className="flex justfiy-between items-center gap-24">
        <StatTicket value={500} label="ANU Courses" />
        <StatTicket value={20} label="Disciplines" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-2xl font-semibold">Join us to start reviewing courses</span>
        <button className="rounded-full bg-orange-400 text-white px-4 py-2">
          Sign up
        </button>
      </div>
    </div>
  )
}

export default StatSection