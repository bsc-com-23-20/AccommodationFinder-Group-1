import "./Home.scss"
import firstpage from "../../images/boy.jpeg"
import BoxInWords from "../../components/boxwords/boxinwords";
import img1 from "../../images/UMODZI.jpeg";
import img2 from "../../images/Chancellor-College.jpeg";
import img3 from "../../images/boy.jpeg";
import React, { useState, useEffect } from 'react';


const Home = () => {

    const images = [img1, img2, img3];
    return (
        <section className="home">
            <div className="overlay">
                <div className="img">
                <ImageSlider images={images} interval={30000} />
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
        </section>
    )
}

const ImageSlider = ({ images, intervalTime = 30000 }) => {
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