import React from 'react'
import { motion } from 'framer-motion'// this import file is use for the motion

import './FloatingDiv.css'

const FloatingDiv = () => {
  const transition={duration :2, type:'spring'}// this transition is used
  return (
    <motion.div 
     initial={{ top: '5rem' }}
      whileInView={{ right: '-15px' }}
      transition={transition} // this transition is used
     
    className='floatingdiv'>
     <img src="img/crown.png" alt="icon is missing" className='corwn'/>
     <span>Web
     <br/>
     Developer
     </span>
    </motion.div>
    
  )
}

export default FloatingDiv
