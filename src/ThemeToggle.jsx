import React from 'react'
import { useGlobalContext } from './context';
import{BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'

const Themetoggle = () => {
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext()
  return <section className='toggle-container' onClick={toggleDarkTheme}>
    <button className='dark-toggle'>
        { isDarkTheme?   ( <BsFillMoonFill className='toggle-icon'>   </BsFillMoonFill> ): (
        <BsFillSunFill className='toggle-icon'></BsFillSunFill>) }
    
      

    </button>

  </section>
}

export default Themetoggle;