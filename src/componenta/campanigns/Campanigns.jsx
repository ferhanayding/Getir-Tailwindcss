import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import bannerData from "../../api/banner.json"
import SectionTitle from '../SectionTitle';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function NextBtn(props) {
  const { className, style, onClick } = props;
  return (
    <button className={" text-primary-brand-color absolute top-1/2 -right-6 -translate-y-1/2  "}
      
      
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={" text-primary-brand-color absolute top-1/2 -left-6 -translate-y-1/2  "}
      
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

const Campanigns = () => {
  const [banner, setBanner] = useState([])
  useEffect(() => {
    setBanner(bannerData)
  
   
  }, [])
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows:true,
    slidesToScroll: 1,
    autoplay : 500,
    autoplaySpeed : 2000,
    cssEase: "linear",
    nextArrow: <NextBtn />,
      prevArrow: <PrevBtn />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            arrows:false
            
            
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            arrows:false
            
            
          }
        }
    ]
  };
  return (
    <div className='container mx-auto w-full  my-0 lg:my-8' >
      <div className='lg:block hidden'>
      <SectionTitle title={"Kampanyalar"} />
      </div>
       <Slider className='-mx-2' {...settings} >
     {
       banner && banner.map(item =>(
         <div key={item.id} className="" >
           <picture className='block lg:px-2 ' >
         <img src={item.image} className="lg:rounded-xl "  alt="" />
           </picture>
      </div>
         ))
      }
      
     
    </Slider>
    </div>
  )
}

export default Campanigns