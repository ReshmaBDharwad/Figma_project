import React from 'react'
import SwiperSection from './components/SwiperSection'
import SliderSection from './components/SliderSection'
const Nav = () => {
  return (
  <div className='frame'>
    
    <div className="frame1">
    <nav>
        <div>
          <h6>codelinear</h6>
        </div>
        <div>
          <h1>=</h1>
        </div>
    </nav>
    <br />
    <div className="contents">
      <div className='leftContent'>
        <h3>PROPELLING THE WORLD, BY DESIGN.</h3>
      </div>
      <div className='rightContent'>
      <ol>
        <li><h4>introduction</h4></li>
        <li><a href="about" className='abt'>------about us</a></li>
        <li><a href="services"className='ser'>------services</a></li>
        <li><a href="works" className='wrks'>--------works</a></li>
        <li><a href="industries" className='inds'>----industries</a></li>
      </ol>
      </div>
    </div>
    <div className="empty">
    </div>
    </div>
    <br />

    {/* ------------------------------------------------------------------ */}


    <div className="frame2">
      
      <div className='subFrame'>
        <br /><br />
      <div className='div1'>
        <h1>AMET MAGNIS DIAM VARIUS VIVERRA AT</h1>
      </div>
      <br />
      <div className='div2'>
        <p>Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.</p>
      </div>
      <div className='div3'>
        <div className="subDiv1">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEYXXdF6r_4g-auL6VhSTC6YIuXW9faC8pSMieKPes8dZZkga-" alt="" />
        </div>
        <div className="subDiv2">
          <h3>About Us </h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAh1OJV-2hlTE_uCmCyfioF4U6ODnI51pzmApw7OwA8wwhWJ8ON4OgAnBEGf5WOoN-pfE&usqp=CAU" alt="" />
        </div>
      </div>
    </div>
      
{/* ------------------------------------------------------------------ */}

      <div>
      <div className="serviceSection">
        <div className="sec">
          <div className="secdiv1">SERVICES</div>
          <div className="secdiv3">
            <p>Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.</p>
          </div>
        </div>
      </div>
      <div className="belowService">
        {/* <div className="swipe1">
          <h1>CONSULTING AND STRATEGY</h1>
        </div>
        <div className="swipe2">
          <h1>USER EXPERIENCE</h1>
        </div>
        <div className="swipe3">
          <h1>PRODUCT DEVELOPMENT</h1>
        </div>
        <div className="swipe4">
          <h1>DIGITAL MARKETING</h1>
        </div> */}
        <SwiperSection/>

      </div>
      </div>

 {/* ------------------------------------------------------------------ */}

        <div>
        <div className="portSection">
          <div className="secP">
            <div className="secPdiv1">PORTFOLIO</div>
            <div className="secPdiv3">
              <br />
              <p>Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.</p>
            </div>
          </div>
        </div>

        <div className="belowPort">
          <SliderSection/>
        </div>
        </div>
 {/* ------------------------------------------------------------------ */}

        {/* <div className="afterPort">
          <div className="apimg1">
            <img src="data:image/png;base64,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" alt="" />
          </div>
          <div className="apimg1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BjCeatvZ6mCYKA6W0OfNvP_0wA-LWl_EmOqj6ZI5MZDQQQfCOUG3b36BZ33LzfxOLog&usqp=CAU" alt="" />
          </div>
          <div className="apimg1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuHw6172w57hASU3rjOutUH1KgONvs1_UoC5FfQsunBYFwU8wSJXN7Do_kZrOt3LtxlM&usqp=CAU" alt="" />
          </div>
          <div className="apimg1">
            <img src="" alt="" />
          </div>
          <div className="apimg1"></div>
          <div className="apimg1"></div>
          <div className="apimg1"></div>
          <div className="apimg1"></div>
          <div className="apimg1"></div>
          <div className="apimg1"></div>
          <div className="apimg1"></div>
          <div className="apimg1"></div>
        </div> */}
    </div>
  </div>
  )
}

export default Nav