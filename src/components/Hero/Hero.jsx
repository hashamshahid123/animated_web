import React, { useEffect } from 'react'
import './Hero.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import myImg from '../../assets/img9.jpg'
import myImg1 from '../../assets/img7.jpg'
import myImg2 from '../../assets/img15.png'

const Hero = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const marqueeAnimation = () => {
      const sections = document.querySelectorAll('.marquee');
      sections.forEach((section) => {
        const marqueeText = section.querySelector('.marquee-text');
        const w = marqueeText;

        const [x, xEnd] = ['0%', (w.scrollWidth - section.offsetWidth) * -0.5];

        gsap.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        });
      });
    };

    marqueeAnimation();
  }, []);

  return (
    <>
    <div className='main_hero'>
      <div className='murquree'>
      <div className='overFlow'>
            <div className="spacer"></div>
      <div className="marquee">
        <div className="marquee-text">
          Live chat • Live chat • Base Base • Base Base • Live chat • Live chat • Base Base • Base Base
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-text">
          Reporting • Reporting • Reporting • Clint • Chat • Customer • Report • Every
        </div>
      </div>
      <div className="spacer"></div>
      </div>
      </div>
        <div className='container'>
        <div className='hero_img'>
            <img src={myImg} alt="my" className='img_hero'/>
        </div>
        <div className='hero_img-two'>
              <img src={myImg1} alt="" className='img_hero-two'/>
            </div>
        <div className='hero_img-three'>
              <img src={myImg2} alt="" className='img_hero-three'/>
            </div>
    </div>
    </div>
    </>
  )
}

export default Hero