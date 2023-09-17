import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setGridInvisible } from "../redux/features/navbar/navbarSlice";
import { mobileSlides, tabletSlides, webSlides } from "../assets/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dispatch = useDispatch();
  const changeGridInvisible = () => {
    dispatch(setGridInvisible());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{ display: { xs: "none", md: "block" } }}
        onClick={changeGridInvisible}
      >
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          onChange={(slideIndex) => setCurrentSlide(slideIndex)}
        >
          {webSlides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.caption} />
            </div>
          ))}
        </Carousel>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          onChange={(slideIndex) => setCurrentSlide(slideIndex)}
        >
          {tabletSlides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.caption} />
            </div>
          ))}
        </Carousel>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          onChange={(slideIndex) => setCurrentSlide(slideIndex)}
        >
          {mobileSlides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.caption} />
            </div>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Slideshow;
