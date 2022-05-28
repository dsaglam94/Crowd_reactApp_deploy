import React from 'react'

const BackerSum = () => {
  return (
    <div className='bg-white my-6 rounded-lg p-6 md:p-8 w-full max-w-[650px] mx-auto text-center md:text-left space-y-6'>
        <div className='flex items-center  justify-start flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10'>
            <div className='flex flex-col items-center md:flex-row place md:space-x-10'>
                <div className='pb-6 md:pb-0'>
                    <h2 className='text-5xl md:text-4xl font-bold text-black pb-2'>$89,914</h2>
                    <span className='text-gray-400 text-md'>of $100,000 backed</span>
                </div>
                <div className='bg-gray-300 w-[30%] h-[2px] md:w-[3px] md:h-[70px]'></div>
            </div>
            <div className='flex flex-col items-center md:flex-row md:space-x-10'>
                <div className='pb-6 md:pb-0'>
                    <h2 className='text-5xl md:text-4xl font-bold text-black pb-2'>5,007</h2>
                    <span className='text-gray-400 text-md'>total backers</span>
                </div>
                <div className='bg-gray-300 w-[30%] h-[2px] md:w-[3px] md:h-[70px]'></div>
            </div>
            <div>
                <h2 className='text-5xl md:text-4xl font-bold text-black pb-2'>56</h2>
                <span className='text-gray-400 text-md'>days left</span>
            </div>
        </div>
        <div className='relative w-full rounded-xl overflow-hidden'>
            <div className='w-full h-[15px] bg-gray-300'></div>
            <div className='absolute top-0 left-0 w-[80%] bg-teal-500 h-full rounded-r-xl'></div>
        </div>
    </div>
  )
}

export default BackerSum