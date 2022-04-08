import React from 'react'

const MobileApp = () => {
  return (
    <div className='relative  bg-mobile-app my-4 rounded-lg text-white bg-primary-brand-color  flex items-center justify-between' >
      <div className='flex flex-col gap-4 p-10' >
        <h1 className='text-[26px] font-bold tracking-tight ' >Getir'i indirin!</h1>
        <span className='font-semibold text-[16px]'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</span>
      <nav className='mt-14 flex gap-2' >
        <a href="#">
          <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
        </a>
        <a href="#">
          <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
        </a>
        <a href="#">
          <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
        </a>
      </nav>
      </div>
      <picture className='pt-6'>
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
      </picture>
    </div>
  )
}

export default MobileApp