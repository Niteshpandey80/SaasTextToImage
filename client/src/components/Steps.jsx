import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <section className="py-20 text-center -mt-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-2">
        How It Works
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Transform words into stunning AI-generated images
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 ">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-10"
          >
            <div className="absolute -top-8 flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white shadow-lg">
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 object-contain"
              />
            </div> 
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Steps
