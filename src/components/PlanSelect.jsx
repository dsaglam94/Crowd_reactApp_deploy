import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'

const PlanSelect = ({id, reward, title, pledge, description, togglePlans, selected, left, isMessageOpen, setIsMessageOpen, handleIsOpen}) => {


    function planStyle() {
        if(left <= 0) {
            return "w-full py-8 px-6 border-4 border-gray-300 rounded-md cursor-pointer opacity-50 pointer-events-none"
        } else if(selected) {
            return "w-full py-8 px-6 border-4 border-teal-500 rounded-md cursor-pointer"
        } else {
            return "w-full py-8 px-6 border-4 border-gray-300 rounded-md cursor-pointer"
        }
    }

    function handleSubmit() {
        setIsMessageOpen(prevValue => !prevValue)
        handleIsOpen()
    }

  return (
    <div 
        className={planStyle()}
    >
        <div onClick={() => togglePlans(id)} className="w-full h-full">
            <div className='w-full flex items-center'>
                    <div className='flex items-center'>
                        <div className='w-[25px] h-[25px] mr-6 border-2 border-gray-300 rounded-full relative flex items-center justify-center'>
                            <div className={selected ? "absolute bg-teal-500 w-[55%] h-[55%] rounded-full" : 'hidden'}></div>
                        </div>

                        <div className='flex flex-col md:flex-row'>
                            <h2 className='font-bold text-md'>{title}</h2>
                            <p className='text-teal-500 text-md md:ml-4'>{`${pledge ? "Pledge $" + pledge + " or more" : ""}`}</p>
                        </div>
                    </div>
            
                    <div className='hidden md:flex md:items-center md:ml-auto'>
                        <span className='font-bold text-lg mr-2'>{reward ? left : ''}</span>
                        <span className='text-md text-gray-500'>{reward ? "left" : ''}</span>
                    </div>
             </div>
                <div className='my-6'>
                    <p className='text-gray-500'>{description}</p>
                </div>
        </div>
                <div className="block md:hidden">
                    <span className='font-bold text-lg'>{reward ? left : ''}</span>{' '}
                    <span className='text-md text-gray-500'>{reward ? "left" : ''}</span>
                </div>

                <div className={selected ? 'w-full flex flex-col md:flex-row md:justify-between md:items-center border-t-2 pt-6 mt-6' : 'hidden'}>
                    <p className={selected && reward ? 'w-full text-md text-gray-500  text-center pb-6 md:pb-0' : 'hidden'}>Enter your pledge</p>
                    <div className='w-full flex items-center justify-around md:justify-end md:space-x-6'>
                        <div className='relative'>
                            <input type="text" className={selected && reward ? 'font-bold border-2 border-teal-500 w-[120px] pt-3 pb-4 rounded-full indent-9' : 'hidden'} />
                            <BsCurrencyDollar className={selected && reward ? 'text-gray-500 absolute top-[1.1rem] left-4' : 'hidden'} size={20}/>
                        </div>
                        <button onClick={handleSubmit} className='text-white bg-teal-500 px-6 pt-3 pb-4 rounded-full hover:bg-teal-600'>Continue</button>
                    </div>
                </div>

         </div>
  )
}

export default PlanSelect