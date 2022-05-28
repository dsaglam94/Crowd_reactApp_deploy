import React from 'react'

const Plan = ({item, handleClick}) => {

const isLeft = (val) => {
    return val > 0
  }

  return (
    <div className={isLeft(item.left) ? 'w-full py-8 px-6 border border-gray-300 rounded-md' : 'w-full py-8 px-6 border border-gray-300 rounded-md opacity-50'}>
        <div className='w-full space-y-2 flex flex-col md:flex-row md:justify-between md:space-y-0'>
          <h2 className='text-lg font-bold md:text-xl'>{item.title}</h2>
          <p className='text-teal-500 font-bold'>{`Pledge $${item.pledge} or more`}</p>
        </div>
        <p className='py-6 text-gray-500'>{item.description}</p>
        <div className='flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0'>
          <div className='flex flex-row items-center space-x-1'>
            <span className='font-bold text-4xl'>{item.left}</span>
            <span className='text-gray-500 text-lg'>left</span>
          </div>
          <button onClick={handleClick} className={isLeft(item.left) ? 'bg-teal-500 text-gray-50 px-14 pt-3 pb-4 rounded-full hover:bg-teal-600' : 'bg-gray-500 text-gray-50 px-14 pt-3 pb-4 rounded-full pointer-events-none'}>{isLeft(item.left) ? "Select Reward" : "Out of stock"}</button>
        </div>
      </div>
  )
}

export default Plan