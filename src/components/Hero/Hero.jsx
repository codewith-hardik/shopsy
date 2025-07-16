import React from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: "Shop now and get upto 50% off on all men's wear.",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% off on all Women's Wear",
    description: "Shop now and get upto 30% off on all women's wear.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products sale",
    description: "Shop now and get upto 70% off on all products sale.",
    },
]

const Hero = () => {

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
     {/* background section */}
     <div className="bg-primary/40 absolute h-[700px] w-[700px] bg rounded-3xl rotate-45 -z[8] -top-1/2 right-0  "></div>

     {/* hero section */}
     <div className='container pb-8 sm:pb-0 '>
      
     </div>
    </div>
  )
}

export default Hero
