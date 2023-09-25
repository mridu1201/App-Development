import React, { Fragment } from 'react'
import Navbar from '../../assets/components/NavBar'
import '../../assets/css/home-style.css';
import HomeElement from '../../assets/components/home/HomeElement';
import Admission from '../../assets/components/home/Admission';
import Testimonial from '../../assets/components/home/Testimonial';
import Faq from '../../assets/components/home/Faq';
import About from '../../assets/components/home/About';
import ContactUs from '../../assets/components/home/ContactUs';
import Footer from '../../assets/components/home/Footer';
import { ScrollContainer } from 'react-scroll-motion';

function Home() {
  return (
    <div className='back-color'>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"/>
<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar />
      <HomeElement/>
      <Admission/> 
      <Testimonial/>
      <Faq/>
      <About/>
      <ContactUs/>
      <Footer/> 
    </div>
  )
};

export default Home


