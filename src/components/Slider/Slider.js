import { useState, useEffect } from "react";
import getSliderData from "../Api/api";
import "./Slider.scss";

const Slider = () => {
  const [array, setArray] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    getSliderData()
      .then((res) => res.json())
      .then((res) => setArray(res));
  }, []);

  const slideLength = array.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="slider" style={{ margin: "15px 0px" }}>
      {array.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
            style={{ borderRadius: "10px" }}
          >
            {index === currentSlide && (
              <div>
                <img
                  style={{ borderRadius: "10px" }}
                  src={slide.image}
                  alt="slide"
                  className="image"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
