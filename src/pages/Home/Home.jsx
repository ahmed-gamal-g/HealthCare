import React from "react";
import HeaderImg from "../../assets/images/doc7change.png";
import "./Home.css";
import img1 from "../../assets/images/Smooth1.png";
import img2 from "../../assets/images/Smooth2.png";
import img3 from "../../assets/images/Smooth3.png";
import ServiceSection from "./ServiceSection";
import Footer from "../../components/Footer/Footer";

// import Slider from "react-slick";

const Home = () => {
  return (
    <>
      <div className="Home-All">
        <header className="container">
          <div className="Home">
            <div className="text-header">
              <h5>We Provide All Health Care Solution</h5>
              <h2>Protect Your Health And Take Care To Of Your Health</h2>
              <button>Read More</button>
            </div>
            <div className="img-header">
              <img src={HeaderImg} alt="" />
            </div>
            <img className="Smooth-1" src={img1} alt="" />
            <img className="Smooth-2" src={img2} alt="" />
            <img className="Smooth-3" src={img3} alt="" />
          </div>
        </header>
      </div>
      <div className="container servies-slider">
        <ServiceSection />
          </div>
          <footer>
              <Footer />
          </footer>
    </>
  );
};

export default Home;
