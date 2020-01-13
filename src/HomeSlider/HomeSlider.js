import React, {Component} from "react";
import './HomeSlider.css';
class HomeSlider extends Component{
  render(){
    return (

        // Script
        let galleryThumbs = new Swiper('.gallery-thumbs', {
          spaceBetween: 10,
          slidesPerView: 3,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
           navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        let galleryTop = new Swiper('.gallery-top', {
          spaceBetween: 10,
           autoplay: {
            delay: 6500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          thumbs: {
            swiper: galleryThumbs
          }
        });


  <div> 
      <div className="swiper-container gallery-top">
        <div className="overlay">
          <h2>Heading Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
          <div className="swiper-wrapper">    	
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
          </div>
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
      </div>

        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
            <div className="swiper-slide"></div>
            <div className="swiper-slide"></div>
            <div className="swiper-slide"></div>
            <div className="swiper-slide"></div>   
          </div>
        </div>  
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
          <div>
      </div>
  </div>
    )
  }  
}

export default HomeSlider;