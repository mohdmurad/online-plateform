import React from 'react'

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-4'>
      <div className='grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto' src="images/laptop.jpg" alt="" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='text-xl md:text-5xl font-bold mb-2'>Manage Data Analytics Centrally</h1>
            <p className='text-black font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique iusto sequi vero est cupiditate delectus quis explicabo tenetur et? Natus praesentium numquam dolores rem, consequuntur inventore minus sint repudiandae nemo aut voluptate odit?</p>
            <button className='text-[#00df9a] bg-black mx-auto px-4 py-2 rounded-md mt-3'>get started</button>
          </div>
      </div>
    </div>
  )
}

export default Analytics