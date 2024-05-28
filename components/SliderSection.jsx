import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'

const SliderSection = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={9}
      >
        <SwiperSlide>
            <h6>Frame 1000001760</h6>
            <img className='simag' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzjOBzPaDZSCZtdLdiQk7dARshxI3n0_s1wUyfYvX66r23Yiqz" alt="" /> 
            <h3>MANGO</h3>
        </SwiperSlide>
        <SwiperSlide>
            <h6>Frame 1000001761</h6>
            <img  className='simag' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT73W7VN-CiXxx9Q3E5d35JzFzMSMyiUQ57iV9sYwX4HXvz12p" alt="" />
            <h3>COWBOY</h3>
        </SwiperSlide>
        <SwiperSlide>
            <h6>Frame 583</h6>
           <img  className='simag' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStFqF_EdQ7tFyzJMaf4sBVWWrHt4RB1m3U4I8ChSSIR_JifvK6" alt=""/>
            <h3>WEAR WELL</h3>
        </SwiperSlide>
        <SwiperSlide>
            <h6>Frame 582</h6>
            <img  className='simag' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEUgt0_wvM2R4aNvv_UwzWdTTRWsVhOAPK21CkjrdGj0ynVFBE" alt=""/>
            <h3>TRADEJINI</h3>
        </SwiperSlide>
        <SwiperSlide>
            <h6>Frame 1000001762</h6>
            <img  className='simag' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpmA9m4mfBuEGjfWZz2FVt26R0KlltZfk6sC_CMucYufYn5G9F" alt=""  /> 
            <h3>KLUB</h3>
        </SwiperSlide>
        <SwiperSlide>
            <h6>Frame 1000001762</h6>
            <img  className='simag' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSheWipBtC29ZRKceeB4brUeAGEULIRHfRt5aFdG6wvpAoKiLLr" alt=""  />
            <h3>Britannia</h3>
        </SwiperSlide>
        <SwiperSlide>
            <h6>Frame 1000001763</h6>
           <img  className='simag' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo13dRQ3dCVEUacIF6pZW2jc35jfEV8dvRELV_rUpR4_bzWUND" alt=""  />
            <h3>IKEA</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h6>Frame 1000001758</h6>
            <img  className='simag' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1FVjIf2TwWzMixdbPX3E05XCQwA51EQJkBneNbtOD9wOjB9Xc" alt=""  />
            <h3>William Abraham</h3>
        </SwiperSlide>
        <SwiperSlide>
            <h6>Frame 1000001759</h6>
            <img  className='simag' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQB4Y9lAyAkJeEQ8GgjwXBhA55uiTmdEXGnk9mXVOMVaLivWoiG" alt=""  />
            <h3>Vuori</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderSection