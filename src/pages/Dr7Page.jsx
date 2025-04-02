import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection3dr7 from '../Components/dr7/HeroSection3dr7'
import Autocaroseldr7 from '../Components/dr7/Autocaroseldr7';
import MidSectiondr7 from '../Components/dr7/MidSectiondr7';
import { FaWhatsapp as WhatsappIcon, FaStar as Star, FaBox as Package2 } from "react-icons/fa"; 
import dr7 from "../assets/dr7.png"; 
function Dr7Page() {
  return (
    <div>
        {/* navbar  */}
        <Navbar/>
       {/* main dr7 section */}
       <HeroSection3dr7/>
       <Autocaroseldr7/>
       <MidSectiondr7/>
       {/* buy section */}

        <div className="min-h-screen bg-gradient-to-b from-[#005486] to-blue-800">
             <main className="pt-20 px-6 md:px-12">
               <div className="max-w-7xl mx-auto">
       
                 <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 font-baloo">
                   <div className="flex-1 text-center md:text-left">
                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                       BUY THIS PRODUCT THROUGH WHATSAPP
                     </h1>
                     <p className="text-blue-100 text-lg mb-8">
                       Experience the convenience of ordering directly through WhatsApp. Quick, easy, and secure!
                     </p>
                   </div>
                   <div className="flex-1 flex justify-center">
                     <img
                       src={dr7}
                       alt="G-Wash Liquid Product"
                       className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
                     />
                   </div>
                 </section>
       
                 {/* Product Details */}
                 <section className="bg-white/10 backdrop-blur-md rounded-2xl p-8 ">
                   <div className="flex flex-col md:flex-row gap-8">
                     <div className="flex-1">
                       <h2 className="text-3xl font-bold text-white mb-4">G-Wash Liquid</h2>
                       <div className="flex items-center gap-2 mb-4">
                         <Star className="w-5 h-5 text-yellow-400 fill-current" />
                         <Star className="w-5 h-5 text-yellow-400 fill-current" />
                         <Star className="w-5 h-5 text-yellow-400 fill-current" />
                         <Star className="w-5 h-5 text-yellow-400 fill-current" />
                         <Star className="w-5 h-5 text-yellow-400 fill-current" />
                         <span className="text-blue-100 ml-2">(4.9/5)</span>
                       </div>
                       <div className="text-2xl font-bold text-white mb-4">
                         ₹10.00 <span className="text-blue-200 text-lg">/ Per Bar</span>
                       </div>
                       <ul className="text-blue-100 space-y-2 mb-6">
                         <li className="flex items-center gap-2">
                           <Package2 className="w-5 h-5" />
                           <span>Premium quality dishwash Bar</span>
                         </li>
                         <li className="flex items-center gap-2">
                           <Package2 className="w-5 h-5" />
                           <span>Removes tough grease and stains</span>
                         </li>
                         <li className="flex items-center gap-2">
                           <Package2 className="w-5 h-5" />
                           <span>Fresh lemon fragrance</span>
                         </li>
                         <li className="flex items-center gap-2">
                         <a
                       href="https://api.whatsapp.com/send/?phone=7773003300&text&type=phone_number&app_absent=0"
                       className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
                     >
                       <div className="flex items-center justify-center gap-2">
                         ORDER NOW
                       </div>
                     </a>
                         </li>
                         
                       </ul>
                     </div>
                   </div>
                 </section>
               </div>
             </main>
           </div>
       {/* footer */}
       <Footer/>
    </div>
  )
}

export default Dr7Page
