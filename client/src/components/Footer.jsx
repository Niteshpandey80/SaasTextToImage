import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 px-6 mt-20 border-t border-gray-200 ">
      <img src={assets.mylogo} alt="Logo" width={90} className="hover:scale-105 transition-transform duration-300" />
      <p className="text-sm text-gray-500 text-center sm:text-left">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Nitesh Pandey</span> | All Rights Reserved
      </p>
      <div className="flex items-center gap-5">
        <img src={assets.facebook_icon} alt="Facebook" width={30} className="hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" />
        <img src={assets.twitter_icon} alt="Twitter" width={30} className="hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" />
        <img src={assets.instagram_icon} alt="Instagram" width={30} className="hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" />
      </div>
    </footer>
  )
}

export default Footer
