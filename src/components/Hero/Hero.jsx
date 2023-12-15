import React, { useEffect } from "react";
import "./Hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImg from "../../assets/img9.jpg";
import myImg1 from "../../assets/img7.jpg";
import myImg2 from "../../assets/img15.png";

gsap.registerPlugin(ScrollTrigger);

const marqueeAnimation = () => {
  const sections = document.querySelectorAll('.marquee');
  sections.forEach((section) => {
    const marqueeText = section.querySelector('.marquee-text');
    const w = marqueeText;

    const [x, xEnd] = ['0%', (w.scrollWidth - section.offsetWidth) * -0.5];

    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
        },
      }
    );
  });
};

const Hero = () => {
  useEffect(() => {
    marqueeAnimation();
  }, []);

  return (
    <>
      <div className="main-hero">
        <div className="murquree">
          <div className="overFlow">
            <div className="spacer"></div>
            <div className="marquee">
              <div className="marquee-text">
                Live chat • Live chat • Base Base • Base Base • Live chat • Live
                chat • Base Base • Base Base
              </div>
            </div>
            <div className="marquee">
              <div className="marquee-text">
                Reporting • Reporting • Reporting • Clint • Chat • Customer •
                Report • Every
              </div>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-img">
            <img src={myImg} alt="my" className="img-hero" />
          </div>
          <div className="hero-img-two">
            <img src={myImg1} alt="" className="img-hero-two" />
          </div>
          <div className="hero-img-three">
            <img src={myImg2} alt="" className="img-hero-three" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
