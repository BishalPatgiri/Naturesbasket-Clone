import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import getSliderData from "./Api/api";
import { useEffect } from 'react';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

export const Slider2 = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        getSliderData()
          .then((res) => res.json())
          .then((res) => setArray(res));
      }, []);
    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2800,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <Box mt="10px" mb={"5px"} >
        <Slider {...settings}>
         {
            array.map((slide, index) => {
                return (
                      <Box key={index}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src={slide.image}
                          alt="slide"
                        />
                      </Box>
                );
              })
         }
        </Slider>
    </Box>
  )
}
