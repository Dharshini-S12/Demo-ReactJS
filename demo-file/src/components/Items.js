import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Items() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };  
  return (
    <div className="a">
      <div className="b">
      <Slider {...settings}>
        {data1.map((d1) => (
          <div className="">
            <div className="items">
              <img src={d1.img} alt='' className="pic"/>
            </div>
            
          </div>
        ))}
        </Slider>
      </div> 
        
    </div>
  )
}
const data1 = [
    {
      img: '/images/1.jpg',
    },
    {
      img: '/images/1.jpg',
    },
    {
      img: '/images/1.jpg',
    },
    {
      img: '/images/1.jpg',
    },
    {
      img: '/images/1.jpg',
    },
    {
      img: '/images/1.jpg',
    },
    {
      img: '/images/1.jpg',
    },
    ]
export default Items