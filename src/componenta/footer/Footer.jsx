import React from 'react'
import Menu from '../Menu/Menu'
import {BsFacebook,BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsGlobe} from 'react-icons/bs'
const Footer = () => {
  const menus =[
    {
      title : "Getir\'i Keşfedin!",
      items:[
        {
          title : "Hakkımızda"
        },
        {
          title : "Kariyer"
        },
        {
          title : "Teknoloji Kariyerleri"
        },
        {
          title : "İletişim"
        },
        {
          title : "Covid-19 Duyuru"
        },
        {
          title : "Sosyal Sorumluluk Projeleri"
        }
      ]

    },
    {
      title : "Yardıma mı ihtiyacınız var?",
      items:[
        {
          title : "Sıkça Sorulan Sorular"
        },
        {
          title : "Kişisel Verilerin Korunması"
        },
        {
          title : "Gizlilik Politikası"
        },
        {
          title : "Kullanım Koşulları"
        },
        {
          title : "Çerez Politikası"
        }
      ]

    },
    {
      title : "İş Ortağımız Olun",
      items:[
        {
          title : "Bayimiz Olun"
        },
        {
          title : "Deponuzu Kiralayın"
        },
        {
          title : "GetirYemek Restoranı Olun"
        },
        {
          title : "GetirÇarşı İşletmesi Olun"
        }
      ]

    },
  ]
  return (
    <div className='bg-white  px-36' >
      <div className='grid grid-cols-4 gap-6 pt-10 border-b-2 pb-5'>
      <section>
        <nav className='grid gap-y-4' >
          <h6 className='text-primary-brand-color text-[18px] ' >Getir'i indirin! </h6>
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
      </section>
      {
        menus.map((menu,index)=>(
          <Menu key={index} {...menu} />
        )

        )
      }
      {/* <div className='w-[104px]' >
        <img src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png" alt="" />
      </div> */}

      </div>
      <div className='flex items-center justify-between py-4' >
       <div className='flex gap-8' >
        <h3 className='text-[13px]'>© 2022 Getir</h3>
        <a href="#" className=' transition-colors text-[13px] flex items-center text-primary-brand-color hover:underline relative before:w-1 before:h-1 before:bg-black before:absolute before:-left-4   before:top-1/2 before:-translate-y-1/2 before:rounded-full' >Bilgi Toplumu Hizmetleri
        </a>
       </div>
       <div className='flex gap-6' >
          <span  className='p-1 hover:bg-purple-200 group rounded-md flex items-center transition-colors'  >
            <a href="#" className='text-gray-500 group-hover:text-primary-brand-color flex items-center' >
              <BsFacebook size={20}/>
            </a>
          </span>
          <span className='p-1 hover:bg-purple-200 group rounded-md flex items-center' >
            <a href="#"  className='text-gray-500 group-hover:text-primary-brand-color flex items-center'>
              <AiOutlineTwitter size={20}/>
            </a>
          </span>
          <span className='p-1 hover:bg-purple-200 group rounded-md flex items-center' >
            <a href="#"  className='text-gray-500 group-hover:text-primary-brand-color flex items-center'>
              <BsInstagram size={20}/>
            </a>
          </span>
          <span className='p-1 border hover:bg-purple-200 group rounded-md ' >
            <a href="#" className='text-gray-500 group-hover:text-primary-brand-color flex items-center gap-2 p-0.5 '>
              <BsGlobe/>
              <span className='text-[13px]'>Türkçe (TR)</span>

            </a>
          </span>
       </div>
      </div>

    </div>
  )
}

export default Footer