import React, {useState} from 'react'
import Plan from './Plan'
import data from '../data'

const About = ({setIsOpen}) => {

  // const [plans, setPlans] = useState(data.slice(1))
  const plans = data.slice(1)

  function handleCloseBackproject() {
    setIsOpen(prevValue => !prevValue)
  }

  return (
    <div className='bg-white rounded-lg p-6 md:p-8 w-full max-w-[650px] mx-auto text-left space-y-6'>
        <div className='space-y-6'>
            <h2 className='text-xl font-bold'>About this project</h2>
            <p className='text-lg text-gray-500 leading-7'>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                vour screen to a more comfortable viewing height. Placing vour monitor at eve level has
                the potential to improve your posture and make you more comfortable while at work
                helping vou stav focused on the task at hand.
            </p>
            <p className='text-lg text-gray-500 leading-7'>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space belon
                your computer to allow notepads, dens, and USB sticks to be stored under the stand
            </p>
        </div>
      {plans.map(item => (
        <Plan key={item.id} item={item} handleClick={handleCloseBackproject} />
      ))}
    </div>
  )
}

export default About