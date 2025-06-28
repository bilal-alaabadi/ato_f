import React from 'react'
import Banner from './Banner'
// import HeroSection from './HeroSection'
// import DealsSection from './DealsSection'
import Sec from './Sec'
import Ther from './Ther'
import Testimonials from '../shop/TrendingProducts'
// import For from './For'

const Home = () => {
  return (
<>
  <Banner/>
  <Sec className="mt-0" /> {/* إضافة mt-0 للتأكد من عدم وجود هوامش */}
  <Ther />
  <Testimonials />
</>
  )
} 

export default Home