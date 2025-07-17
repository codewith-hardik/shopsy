import React from 'react'
import Img1 from "../../assets/women/women.png"
import Img2 from "../../assets/women/women2.jpg"
import Img3 from "../../assets/women/women3.jpg"
import Img4 from "../../assets/women/women4.jpg"
import { FaStar } from 'react-icons/fa'

const Products = () => {
  const ProductData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "White",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.5,
      color: "Brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 5.0,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashin T-Shirt",
      rating: 4.0,
      color: "Pink",
      aosDelay: "800",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashin T-Shirt",
      rating: 4.0,
      color: "Pink",
      aosDelay: "800",
    }
  ]
  return (
    <div className='mt-14 mb-12'>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600] mx-auto ">
          <p data-aos="fade-up" className='textsm text-primary '>
            Top Selling Products for you.
          </p>
          <h1 className='text-3xl font-bold' data-aos="fade-up"> Products</h1>
          <p className='text-sm text-gray-400 ' data-aos='fade-up' > Discover the latest fashion trends and must-have items for women and men.</p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-5">
            {/*  card section */}
            {
              ProductData.map((data) => (
                <div className='space-y-3 ' key={data.id} data-aos='fade-up' data-aos-delay={data.aosDelay}>
                  <img src={data.img} alt="img" className='h-[220px] w-[150px] object-cover rounded-md' />
                  <div>
                    <h3 className='font-semibold' >{data.title}</h3>
                    <p className='text-sm text-gray-600 '>{data.color} </p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400' />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
          {/* view all buttons */}
          <div className="flex justify-center">
            <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'> View All Products</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Products
