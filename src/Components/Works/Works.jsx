import React from 'react';
import './Works.css';
import { motion } from 'framer-motion';


const Works = () => {
  return (
    <div className='works'>
      <div className='awesome'>
        <span className='mk'>Works for All these</span>
        <span className='mk'>Brand & clients</span>
        <span>
          Lorem ipsum is simply dummy text of printing. Lorem
          <br />
          ipsum is simply dummy text of printing.
          <br />
          ipsum is simply dummy text of printing.
          <br />
          Lorem ipsum is simply dummy text.
        </span>

        <button className='button s-button'>Hire me</button>

        <div className='blur-1 s-blur-3' style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/* right side component */}
      <div className='w-right'>
        <motion.div 
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className='w-mainCircle'
        >
          <div className='w-secCircle'>
          <a href='https://www.upwork.com/freelancers/~01d73089ea34326e86'><img src="img/Upwork.png" alt="Upwork" className='Glasses'/></a>
  
          </div>
          <div className='w-secCircle'>
          <a href='https://www.fiverr.com/'><img src="img/Fiverr.png" alt="Fiverr" className='Glasses'  /></a>
            
          </div>
          <div className='w-secCircle'>
          <a href='https://www.amazon.com/?ref_=nav_custrec_signin' ><img src="img/Amazon.png" alt="Amazon" className='Glasses'/></a>
        
          </div>
          <div className='w-secCircle'>
          <a href='https://admin.shopify.com/store/7ef97a-a1'><img src="img/Shopify.png" alt="Shopify" className='Glasses'/></a>
            
          </div>
          <div className='w-secCircle'>
          <a href='https://www.facebook.com/profile.php?id=100085522317268'> <img src="img/Facebook.png" alt="Facebook" className='Glasses'/></a>
           
          </div>
        </motion.div>
        {/* background Circles */}
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  );
};

export default Works;
