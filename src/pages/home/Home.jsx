import "./Home.scss"
import firstpage from "../../images/boy.jpeg"
import BoxInWords from "../../components/boxwords/boxinwords";
import img1 from "../../images/UMODZI.jpeg";
import img2 from "../../images/Chancellor-College.jpeg";
import img3 from "../../images/boy.jpeg";
import React, { useState, useEffect } from 'react';
import Dropdown from "../functions/dropdowngender";
import DropDownLocation from "../functions/dropdownlocation";


const Home = () => {

    const images = [
      // img1, 
      // img2, 
       img3
    ];
    return (
        <section className="home">
        <div className="overlay">
          <div className="img">
            <ImageSlider images={images} interval={3000} />
          </div>

          <div className="homeContent container">
            <div className="textDiv">
              <span className="smallText">
                Find Accomodation
              </span>
              <h1 className="homeTitle">
                search your hostel
              </h1>
            </div>
          </div>
        </div>

        <div className="cardDiv grid">
          <div className="destinationinput">
          <div className="input_flex">
            <label htmlFor="city">
              Type hostel name
            </label>
              <input type="text" placeholder="type your hostel name..." />
            </div>

            <div className="input_flex">
            <label htmlFor="location">
              Select location
            </label>
              <DropDownLocation/>
            </div>
            <div className="input_flex">
            <label htmlFor="gender">
              Select your gender
            </label>
              <Dropdown/>
            </div>
            <div className="filters">
            <label htmlFor="filters">
              More filters
            </label>
            </div>
          </div>
        </div>
      </section>
    )
}

const ImageSlider = ({ images, intervalTime = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [images, intervalTime]);

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};



export default Home