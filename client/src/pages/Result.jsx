import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Result = () => {
  const [images , setImage ] = useState(assets.sample_img_1)
  const [isImageLoaded , setIsImageLoaded] = useState(false)
  const [loading , SetLoading] = useState(false)
  const [input  , setInput] = useState('')
  const onSubmitHandler = async (e)=>{
     e.preventDefault(); 
  }
  return (
    <motion.form initial={{opacity:0.2 , y:100}} transition={{duration:1}} whileInView={{opacity:1 , y:0}} viewport={{once:true}} onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center px-4">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={images}
            alt="Generated"
            className="max-w-sm w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]':'w-0'}`} />
        </div>
        <p className={`mt-4 text-gray-600 text-sm tracking-wide animate-pulse ${!loading ? 'hidden ': ''}`}>Generating your image...</p>
      </div>
    {!isImageLoaded &&  <div className="flex w-full max-w-2xl bg-white/80 backdrop-blur-md shadow-md border border-gray-200 text-gray-800 text-sm p-1 mt-7 rounded-full overflow-hidden">
        <input onChange={e => setInput(e.target.value)} value={input}
          type="text"
          placeholder="Describe what you want to generate..."
          className="flex-1 bg-transparent outline-none px-6 py-3 text-gray-700 placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 sm:px-16 py-3 rounded-full font-medium transition-all duration-300"
        >
          Generate
        </button>
      </div> }
      {isImageLoaded && <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-7 rounded-full'>
        <p onClick={()=>{setIsImageLoaded(false)}} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
        <a href={images}  download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer ' >Download</a>
      </div>}
    </motion.form>
  )
}

export default Result
