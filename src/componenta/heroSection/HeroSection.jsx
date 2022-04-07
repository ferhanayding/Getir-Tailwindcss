import React from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';
import  { useState } from 'react';

const HeroSection = () => {
  const [selected, setSelected] = useState('AZ');
  const phones ={
    US : "+1",
    AZ : "+994",
    TR : "+90",
    DE : "+23"
  }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows:false,
        slidesToScroll: 1,
        autoplay : 500,
        autoplaySpeed : 2000,
        cssEase: "linear"
      };
  return (
    // <div className=' relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full z-10  ' >
    <div className=' relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:z-10  ' >
    
    <Slider {...settings}>
      <div>
      <img className="w-full h-[500px] object-cover " src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
      </div>
      <div>
      <img className="w-full h-[500px] object-cover " src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
      </div>
     
    </Slider>
    <div className='container px-36  absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 flex justify-between items-center ' >
      <div >
        <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
        <h3 className='font-semibold text-white mt-8 text-4xl'>Dakikalar İçinde <br /> Kapınızda</h3>
      </div>
      <div className=' w-[400px] rounded-lg bg-gray-50 p-6' >
        <h4 className='text-primary-brand-color font-semibold text-center mb-3 '>Giriş Yap veya Kayıt Ol</h4>
        <div className='flex'>
        <ReactFlagsSelect
    countries={Object.keys(phones)}
    customLabels={phones}
    onSelect={code => setSelected(code)}
    selected={selected}
    className="flagSelect" />
    <label className='flex-1 relative group ' >

    <input required type="text" className='h-14 text-sm pt-4 w-full px-4 bg-white rounded ml-2 border-gray-200 border-2 transition-colors outline-none peer focus:border-primary-brand-color group-hover:border-primary-brand-color ' />
      <span className='absolute text-gray-400 text-sm top-0 left-0 h-full cursor-text px-6 flex items-center peer-focus:h-7 peer-valid:text-[12px] peer-valid:h-7 peer-focus:text-[12px] transition-all peer-focus:text-primary-brand-color peer-valid:text-primary-brand-color ' >Telefon Numarası</span>
    </label>
        </div>
    <div className='w-[360px]   mt-4 '> <button className=' bg-sari-color rounded-lg w-full h-[48px] text-sm text-primary-brand-color font-semibold hover:text-sari-color hover:bg-secondary-brand-color transiton-colors'>Telefon numarası ile devam et</button> </div>
      </div>
    </div>
  </div>  )
}

export default HeroSection