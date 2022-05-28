import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import data from '../data'
import PlanSelect from './PlanSelect'

const Test = ({isOpen, setIsOpen, isMessageOpen, setIsMessageOpen}) => {

  const [plans, setPlans] = useState(data)

  const plansElm = plans.map(plan => (
    <PlanSelect 
      key={plan.id}
      id={plan.id}
      reward={plan.reward}
      title={plan.title}
      description={plan.description}
      left={plan.left}
      pledge={plan.pledge}
      selected={plan.selected}
      isMessageOpen={isMessageOpen}
      setIsMessageOpen={setIsMessageOpen}
      handleIsOpen={handleCloseBackproject}
      togglePlans={togglePlans}
    />
  ))

  function togglePlans(id) {

    let currentSelected = null
    if(!currentSelected) {
      setPlans(prevPlans => {
        return prevPlans.map(plan => {
          return plan.id === id ? {...plan, selected: !plan.selected} : plan
        })
      })
      currentSelected = id
    } 
    
  }


  function handleCloseBackproject() {
    setIsOpen(prevValue => !prevValue)
  }

  return (
        <div id='backproject__card' className={isOpen ? 'fixed z-10 overflow-y-scroll h-[85vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 md:p-8 w-[85%] max-w-[650px] mx-auto text-left space-y-6 mt-6' : 'hidden'}>
            <div className='space-y-4'>
              <h1 className='text-xl font-bold'>Back this project</h1>
              <p className='text-gray-500 text-md md:text-lg'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            </div>
            <AiOutlineClose 
              className='absolute top-0 right-4 cursor-pointer hover:text-teal-500' 
              size={20} 
              onClick={handleCloseBackproject}
            />  
           {plansElm}
        </div>
  )
}

export default Test