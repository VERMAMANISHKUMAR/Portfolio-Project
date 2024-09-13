import React from 'react'
import './Testimonial.css';
import profilePic1 from '../../images/img/profile1.jpg';
import profilePic2 from '../../images/img/profile2.jpg';
import profilePic3 from '../../images/img/profile3.jpg';
import profilePic4 from '../../images/img/profile4.jpg';
import profilePic5 from '../../images/img/profile5.jpg';
import profilePic6 from '../../images/img/profile6.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  const clients=[
    
      {
        img: profilePic1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
      },
      {
        img: profilePic2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
        },
        {
          img: profilePic3,
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
        },
        {
          img: profilePic4,
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
        },
        {
          img: profilePic5,
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
        },
        {
          img: profilePic6,
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
        },
  ]
    
     
  return (
    <div className='t-wrapper' id="Testimonials">
     <div className='t-heading'>
     <span>Clients always get </span>
     <span>Exceptinal Work </span>
     <span>from me...</span>
    
     </div>
     {/* sliders */}
     <Swiper
   
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
     
     >
          {clients.map((client, index)=>{
            return(
              <SwiperSlide key={index}>
                   <div className='testimonial'>
                    <img src={client.img} alt='profile' />
                    <span>{client.review}</span>
                    </div>
              
              </SwiperSlide>
            )
          })}
     </Swiper>
     
      
    </div>
  )
}

export default Testimonial
