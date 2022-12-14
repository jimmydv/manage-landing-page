import React from "react";
import Slider from "react-slick";

// import review avatarts

//import CSS
import "./Slider.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...sliderSettings}>
        <div className="card">
          <div className="card-outer-container">
            <img
              src="https://i.postimg.cc/pV5k1BT1/avatar-anisha.png"
              alt="client reviews avatar"
            />
            <h3>Anisha Li</h3>
            <p className="text-main">
              <q>
                Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.
              </q>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-outer-container">
            <img
              src="https://i.postimg.cc/9MKbQDxp/avatar-ali.png"
              alt="client reviews avatar"
            />
            <h3>ALi Bravo</h3>
            <p className="text-main">
              <q>
                We have been able to cancel so many otehr subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.
              </q>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-outer-container">
            <img
              src="https://i.postimg.cc/MHBDMzN8/avatar-richard.png"
              alt="client reviews avatar"
            />
            <h3>Rirachard Watts</h3>
            <p className="text-main">
              <q>
                "Manage allows us to provide structure and process. It keeps us
                organized and focused. I an't stop commending them eveyone I
                talk to!
              </q>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-outer-container">
            <img
              src="https://i.postimg.cc/k4BwCQyG/avatar-shanai.png"
              alt="client reviews avatar"
            />
            <h3>Shanai Gough</h3>
            <p className="text-main">
              <q>
                Their Software allows us to track, manage and collaborae on our
                projects from anywhere. It keeps the whole team in-sync without
                being intrusive.
              </q>
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default SliderComponent;
