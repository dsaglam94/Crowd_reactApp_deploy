import React, {useState} from 'react'
import {TiTick} from 'react-icons/ti'

const Message = ({ isMessageOpen, setIsMessageOpen, isOpen, setIsOpen }) => {


function handleMessage() {
  setIsMessageOpen(prevValue => !prevValue)

}

  if(isMessageOpen) {
    document.querySelector('body').style.overflowY = 'hidden'
  } else {
    document.querySelector('body').style.overflowY = 'scroll'
  }

  return (
    <div className={isMessageOpen ? 'fixed bg-black/60 w-full min-h-screen top-0 left-0 z-[1000] flex items-center justify-center text-center' : 'hidden'}>
      <div className='w-[85%] max-w-[550px] bg-white p-10 flex flex-col items-center space-y-6 rounded-md'>
          <div className='w-[80px] h-[80px] bg-teal-500 rounded-full flex items-center justify-center'>
            <TiTick className='text-gray-50' size={40} />
          </div>
          <h2 className='font-bold text-xl text-black'>Thanks for your support!</h2>
          <p className='text-md text-gray-500'>
            Your pledge brings us one step closer to
            sharing Mastercraft Bamboo Monitor Riser
            worldwide. You will get an email once our
            campaign is completed.
          </p>
          <button onClick={handleMessage} className='bg-teal-500 px-10 pt-4 pb-5 rounded-full text-gray-50 hover:bg-teal-600'>Got it!</button>
      </div>
    </div>
  )
}

export default Message