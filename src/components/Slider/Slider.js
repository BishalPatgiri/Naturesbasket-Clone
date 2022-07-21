import { useState, useEffect } from "react";
import "./Slider.scss";

const array = [
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/0ccd5368-14a4-411d-bb6c-84d981238b15_1320x376.jpg"
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg"
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/3b8d8078-b906-4340-8ac2-d56085bf9a02_1320x376.jpg"
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/9bd5bd18-3f11-4062-afe6-380ff6a35dfc_1320x376.jpg"
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/28b8913f-ae0e-4afe-ac72-bae62be8ffb2_1320x376.png"
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg"
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/69fbb757-9d70-45c0-9875-14c8b4f18804_1320x376.jpg"
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = array.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

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
