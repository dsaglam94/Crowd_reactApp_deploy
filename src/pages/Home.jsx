import React, {useState} from 'react'
import About from '../components/About'
import BackerSum from '../components/BackerSum'
import Banner from '../components/Banner'
import Rewards from '../components/Rewards'
import Message from '../components/Message'

const Home = () => {

  const [isBackprojectOpen, setIsBackprojectOpen] = useState(false)
  const [isMessageOpen, setIsMessageOpen] = useState(false)

  function handleBackprojectOpen() {
    setIsBackprojectOpen(prevValue => !prevValue)
  }

  if(isBackprojectOpen) {
    document.querySelector('body').style.overflowY = 'hidden'
  } else {
    document.querySelector('body').style.overflowY = 'scroll'
  }

  return (
    <div className='bg-gray-200 w-full min-h-screen px-8 py-14 md:px-0'>
      <Banner handleClick={handleBackprojectOpen} />
      <BackerSum />
      <About 
        isOpen={isBackprojectOpen} 
        setIsOpen={setIsBackprojectOpen}  
      />
      <Rewards 
          isOpen={isBackprojectOpen} 
          setIsOpen={setIsBackprojectOpen} 
          isMessageOpen={isMessageOpen} 
          setIsMessageOpen={setIsMessageOpen}
        />
      <Message 
        isMessageOpen={isMessageOpen} 
        setIsMessageOpen={setIsMessageOpen}
        isOpen={isBackprojectOpen} 
        setIsOpen={setIsBackprojectOpen}   
      />
    </div>
  )
}

export default Home