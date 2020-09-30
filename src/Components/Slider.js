import React, { Component } from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "white",
        right: "30px",
        top: "20%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "30px", color: "#fff", zIndex: "1", top: "20%" }}
      onClick={onClick}
    />
  );
}
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="home-slider-img"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmI5MDQwZjEt/ZmI5MDQwZjEt-ZmMxNGZiOTQt-w1500._CB429000162_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home-slider-img"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/HEROES/DESKTOP/AF_M_MOSTLOVEDWATCHES_1x._CB430119862_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home-slider-img"
              src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
