import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/HeaderCom'
import PromoSection from './Components/PromoSectionCom'
import QuoteSlider from './Components/QuoteSliderCom'
import PromoGrid from './Components/PromoGridCom'
import GlutenFreeFeature from './Components/GlutenFreeFeatureCom'
import PopularCoffeeGrid from './Components/PopularCoffeeGridCom'
import FoodiesGrid from './Components/FoodsGridComp'
import NewsletterSignup from './Components/NewsletterSignupComp'
import Footer from './Components/FooterCom'
// import SocialStrip from './Components/SocialPreviewCom'
import CategoryComp from './Components/CategoryComp'
import TestimonialSection from './Components/TestimonialCom'
import QuoteSliderComNew from './Components/QuoteSliderComNew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <PromoSection/>
      {/* <QuoteSlider/> */}
      <QuoteSliderComNew/>
      <PromoGrid/>
      <GlutenFreeFeature/>
      <PopularCoffeeGrid/>
      <FoodiesGrid/>
      {/* <SocialStrip/> */}
      <CategoryComp/>
      <TestimonialSection/>
      <NewsletterSignup/>
      <Footer/>
    </>
  )
}

export default App
