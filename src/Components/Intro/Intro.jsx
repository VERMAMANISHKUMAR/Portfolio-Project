import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

import {motion} from 'framer-motion'


const Intro = () => {
  const transition={duration :2, type:'spring'}
  return (
    <div className='intro'>
    {/* left side section */}
    <div className='i-left'>
    <div className='i-name'>
          <span>Hy! I </span>
          <span>Manish Kumar Verma</span>
          <span>Frontend Developer with high level of experience in web designing and development, <br/>producting the Quality work in <br/>Seeking Full Stack Web Developer Role Proficient in HTML5, CSS, Bootstrap, <br/>JavaScript, React, Node.js, Express, MySQL, WordPress, and PHP.</span>
    </div>
    <button className=' button i-button'>Hire me</button>
    <div className='i-icons'>
    
    <a href="https://github.com/VERMAMANISHKUMAR"><img src="img/github.png" alt="icon is missing"/></a>
    <a href="https://www.linkedin.com/in/manishverma25/"> <img src="img/linkedin.png" alt="icon is missing"/></a>
    <a href="https://www.instagram.com/manish.kumarverma.90663894/"><img src="img/instagram.png" alt="icon is missing"/></a>
    <a href="https://www.naukri.com/mnjuser/profile?id=&altresid"><img src="img/naukri.png" alt="icon is missing" /></a>
    <a href="https://www.naukri.com/mnjuser/profile?id=&altresid"><img src="img/coding logo.jpg" alt="icon is missing" /></a>

    </div>
    </div>
    {/* left side section exit */}

    {/* right side section */}

    <div className='i-right'>
    <img src="image/Vector1.png" alt="icon is missing"/>
    <img src="img/Vector2.png" alt="icon is missing"/>
    <img src="img/boy.png" alt="icon is missing"/>
    <motion.img 
    initial={{left:'-36%'}}
    whileInView={{left:'-24%'}}
    transition={transition}
    
    src="img/glassesimoji.png" alt="icon is missing" className='glassesimoji'/>
         <div>
          <FloatingDiv/>
          </div>
          <motion.div 
         initial={{ left: '20rem', top: '18rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
          className='thumbup'>
       <img src="img/thumbup.png" alt="icon is missing" className='thum'/>
       <span>
          Best Desing <br/>
          Award
      </span>

     </motion.div>
     {/* Blur divs */}
     <div className='blur'style={{background:"rgb(238 210 255)"}}>
     </div>
     <div className='blur'style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
    
    </div>
    {/* right side section exit */}
    </div>
  )
}

export default Intro
