import React, {useState} from 'react'
import {BsFillBookmarkFill} from 'react-icons/bs'
import logoBanner from '../images/logo-mastercraft.svg'

const Banner = ({handleClick}) => {

    const [isBookmarked, setIsBookmarked] = useState(false)

    function bookmark() {
        setIsBookmarked(!isBookmarked)
    }

  return (
    <div className='bg-white rounded-lg w-full max-w-[650px] flex flex-col items-center text-center mx-auto -mt-36 space-y-6 px-6 pb-10 relative z-9'>
        <div className='w-[75px] -mt-10 z-10'>
            <img className='w-full' src={logoBanner} alt="logo" />
        </div>
        <h1 className='text-2xl font-bold w-3/4 md:w-full md:text-3xl'>Mastercraft Bamboo Monitor Riser</h1>
        <p className='text-md text-gray-400 md:pb-6'>A beautifully handcrafted monitor stand to reduce neck pain and eye strain.</p>
        <div className='flex items-center justify-between w-full'>
            <button onClick={handleClick} className='text-xl bg-teal-500 text-gray-50 px-14 pt-3 pb-4 rounded-full hover:bg-teal-600'>Back this project</button>
            <div className='flex items-center group cursor-pointer' onClick={bookmark}>
                <div
                    className={isBookmarked ? 'bg-teal-500 h-14 w-14 rounded-full flex items-center justify-center group-hover:bg-teal-600 z-10' : 'bg-gray-800 h-14 w-14 rounded-full flex items-center justify-center group-hover:opacity-80 z-10'}
                >
                    <BsFillBookmarkFill
                        size={20}
                        className='text-gray-100'
                    />
                </div>
                <p className={isBookmarked ? 'text-teal-500 bg-gray-200 pt-3 pb-4 pl-10 pr-6 rounded-full -ml-8 hidden md:block' : 'text-gray-600 bg-gray-200 pt-3 pb-4 pl-10 pr-6 rounded-full -ml-8 hidden md:block group-hover:bg-opacity-80'}>Bookmark</p>
            </div>
        </div>
    </div>
  )
}

export default Banner