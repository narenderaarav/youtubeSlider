import React, {Component} from "react";
import './HomeSlider.css';
import Swiper from 'swiper'
class HomeSlider extends Component{
  images = [
    {      
      thumbnail: process.env.PUBLIC_URL + 'chhotaBheem.jpg',
      embedUrl: process.env.PUBLIC_URL + 'chhotaBhim.mp4'
    },
    {     
      thumbnail: process.env.PUBLIC_URL + 'spiderman.jpg',
      embedUrl: process.env.PUBLIC_URL + 'Spiderman.mp4'
    },
    {  
      thumbnail: process.env.PUBLIC_URL + 'supermanandbatman.jpg',
      embedUrl: process.env.PUBLIC_URL + 'thor.mp4'
    },    
    
  ];

  componentDidMount(){
      this.galleryThumbs = new Swiper('.gallery-thumbs', {
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
    this.galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      //  autoplay: {
      //   delay: 6500,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: this.galleryThumbs
      }
    });
  }

  
  
  render(){
    return (
        
  <> 
  <div style={{position:"relative"}}>
      <div className="swiper-container gallery-top">
        <div className="overlay">
          <h2>Heading Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
          <div className="swiper-wrapper">
            {this.images.map(item => (
               <div className="swiper-slide"> 
                   <video controls>
                      <source src={item.embedUrl} type="video/mp4"/>
                    </video>
               </div>
            ))}    	
              {/* <div className="swiper-slide"> 
              <iframe width="100%" 
              src="https://www.youtube.com/embed/0NsBor0jY6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
              </div>
              <div className="swiper-slide"
              style ={ { backgroundImage: "url('assets/banner.png')" } }> </div>
              <div className="swiper-slide" 
              style ={ { backgroundImage: "url('assets/banner.png')" } }></div> */}
          </div>
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
      </div>

        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
          {this.images.map(item => (
               <div className="swiper-slide"
               style ={ { backgroundImage: `url(${item.thumbnail})`} }></div>
            ))}  

          </div>
        </div>  
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
          <div>
      </div>
      </div>
  </>
  
    )
    
  } 
   
}



export default HomeSlider;