import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./MainContent.css";

const MainContent = () => {
  const texts = ["client", "customer", "partner", "vender"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const changeTextWithAnimation = (text) => {
      gsap.fromTo(
        "#changingText",
        { opacity: 0, y: -50 },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        }
      );

      document.getElementById("changingText").innerText = text;
    };

    changeTextWithAnimation(texts[currentTextIndex]);

    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
      const newText = texts[currentTextIndex];
      changeTextWithAnimation(newText);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);

  return (
    <>
      <div className="container">
        <h1 className="heading">
          Every{" "}
          <span id="changingText" style={{ display: "inline-block" }}>
            {texts[currentTextIndex]}
          </span>{" "}
          Conversation
        </h1>
        <h1 className="heading-headline">One unified platform</h1>
        <div className="heading-button">
          <button type="button" class="btn btn-primary btn-lg">
            Explore the Platform
          </button>
        </div>
      </div>
    </>
  );
};

export default MainContent;
