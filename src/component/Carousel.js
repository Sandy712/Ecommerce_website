import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './images/img1.jpg';
import logo1 from './images/img2.jpg';
import logo2 from './images/img3.jpg';
 

class Carousel extends React.Component {
    render() {
      const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop the carousel
        autoplay: true, // Autoplay the carousel
        speed: 2500, // Delay between slides in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        
        
      };
  
      return (
        <>
        <div className='caro '>
        <Slider {...settings} >
         <div style={{width:200,height:200}}>
          <img  className='uday' src={logo} alt="" />
         </div>
         <div>
          <img  className='uday' src={logo1} alt="" />
         </div>
         <div>
          <img className='uday' src={logo2} alt="" />
         </div>
        </Slider>
        </div>
        </>
           

      );
    }
  }
  
  export default Carousel;
           
           
  