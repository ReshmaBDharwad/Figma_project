import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import React from 'react'

const SwiperSection = () => {
  return (
    <div className='swiperCls'>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
      >
        <SwiperSlide>
            <h1 className='sh1'>CONSULTING AND STRATEGY</h1> 
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat earum cum asperiores vitae ipsum nisi odit, officiis porro natus necessitatibus labore, explicabo quasi facere deserunt at tenetur non reiciendis dolor!</p> */}
        </SwiperSlide>
        <SwiperSlide>
            <h1 className='sh1'>USER EXPERIENCE</h1>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat earum cum asperiores vitae ipsum nisi odit, officiis porro natus necessitatibus labore, explicabo quasi facere deserunt at tenetur non reiciendis dolor!</p> */}
        </SwiperSlide>
        <SwiperSlide>
            <h1 className='sh1'>PRODUCT DEVELOPMENT</h1>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat earum cum asperiores vitae ipsum nisi odit, officiis porro natus necessitatibus labore, explicabo quasi facere deserunt at tenetur non reiciendis dolor!</p> */}

        </SwiperSlide>
        <SwiperSlide>
            <h1 className='sh1'>DIGITAL MARKETING</h1>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat earum cum asperiores vitae ipsum nisi odit, officiis porro natus necessitatibus labore, explicabo quasi facere deserunt at tenetur non reiciendis dolor!</p> */}

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSection