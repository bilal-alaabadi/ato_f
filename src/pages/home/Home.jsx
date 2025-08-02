import React from 'react'
import Banner from './Banner'
// import HeroSection from './HeroSection'
// import DealsSection from './DealsSection'
import { FaWhatsapp } from 'react-icons/fa'; // استيراد أيقونة الواتساب

import Sec from './Sec'
import Ther from './Ther'
import Testimonials from '../shop/TrendingProducts'
// import For from './For'

const Home = () => {
    const whatsappNumber = "96879009942"; // استبدل بالرقم الفعلي
const whatsappMessage = "Hello, I would like to inquire about your service.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
<>
  <Banner/>
  <Sec className="mt-0" /> {/* إضافة mt-0 للتأكد من عدم وجود هوامش */}
  <Ther />
  <Testimonials />
   <div className="fixed bottom-6 right-6 z-50">  {/* تغيير من left-6 إلى right-6 */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          style={{ width: '60px', height: '60px' }}
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
</>
  )
} 

export default Home
