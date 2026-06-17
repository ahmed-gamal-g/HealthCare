import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import DataSlider1 from "./DataSlider1";

let NextArrow = (props) => {
  let { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

let PrevArrow = (props) => {
  let { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
};

const ServiceSection = () => {
  const settings = {
    dots: true,
    Nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Service-Slider">
      <div className="text-slider-1">
        <h5>Services</h5>
        <h2>We Cover A Big Variety Of Medical Services</h2>
        <button>All Services</button>
      </div>
      <div className="Slider-1">
        <h2> Single Item</h2>
        <Slider {...settings}>
          {DataSlider1.length
            ? DataSlider1.map((slide) => {
                return (
                  <div className="card" key={slide.id}>
                    <div className="card-icon">{slide.icon}</div>
                    <div className="card-body">
                      <h3 className="card-title"> {slide.title} </h3>
                      <p className="card-text">{slide.description}</p>
                      <a href="/#" className="btn btn-primary">
                        {slide.btnSlider}
                      </a>
                    </div>
                  </div>
                );
              })
            : null}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSection;
