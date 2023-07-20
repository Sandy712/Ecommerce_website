import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./images/img1.jpg";
import logo1 from "./images/img2.jpg";
import logo2 from "./images/img3.jpg";

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true, // Show navigation dots
      infinite: true, // Loop the carousel
      autoplay: true, // Autoplay the carousel
      speed: 500, // Delay between slides in milliseconds
      slidesToShow: 1, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at once
      interval: "0",
    };

    return (
      <>
        <div className="caro ">
          <Slider {...settings}>
            <div className="mx-4" style={{ width: 200, height: 200 }}>
              <div className="mx-2">
                <div>
                  <h1>pahad</h1>
                </div>
                <div>
              <img className="uday" src={logo} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quisquam architecto itaque <br /> vero beatae
                    voluptate hic enim reprehenderit nihil. Rem necessitatibus
                    reiciendis quo, at,<br /> non maxime vero eveniet voluptas ipsum
                    nihil unde. Fugit, placeat voluptas?
                  </p>
                </div>
                <button>click me</button>
              </div>

            </div>

            <div className="mx-4" style={{ width: 200, height: 200 }}>
              <div className="mx-2">
                <div>
                  <h1>pahad</h1>
                </div>
                <div>
              <img className="uday" src={logo1} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quisquam architecto itaque <br /> vero beatae
                    voluptate hic enim reprehenderit nihil. Rem necessitatibus
                    reiciendis quo, at,<br /> non maxime vero eveniet voluptas ipsum
                    nihil unde. Fugit, placeat voluptas?
                  </p>
                </div>
                <button>click me</button>
              </div>

            </div>
            <div className="mx-4" style={{ width: 200, height: 200 }}>
              <div className="mx-2">
                <div className="caro-title">
                  <h1 className="caro-desc">pahad</h1>
                </div>
                <div>
              <img className="uday" src={logo2} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quisquam architecto itaque <br /> vero beatae
                    voluptate hic enim reprehenderit nihil. Rem necessitatibus
                    reiciendis quo, at,<br /> non maxime vero eveniet voluptas ipsum
                    nihil unde. Fugit, placeat voluptas?
                  </p>
                </div>

                <button>click me</button>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

export default Carousel;
