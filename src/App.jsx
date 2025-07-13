import React from 'react'
import AOS from "aos";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import Aos from 'aos';

const App = () => {

  // AOS Animation Initialization
  React.useEffect(()=> {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 500,
    })
    AOS.refresh();
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Footer />
      <Popup />
     
    </div>
  )
}

export default App
