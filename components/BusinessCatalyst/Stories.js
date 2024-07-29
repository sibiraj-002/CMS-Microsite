'use client'
import React, { useRef } from 'react'
import { stories } from '../../utils/data'

const BusinessAchieve = React.forwardRef((props, ref) => {
  return (
    <div className="p-6 bg-[#E0FAF5]" ref={ref}>
      <div className="flex flex-col items-center mb-20 mt-10 text-center">
        <h2 className="text-2xl md:text-3xl">Success Stories</h2>
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/arrow.png"
          className="mt-4"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center">
        {stories.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg w-full md:w-5/12 lg:w-3/12 flex flex-col justify-center items-start relative"
            data-aos="fade-up"
          >
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/quotes.png"
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            />
            <p className="text-lg md:text-xl mt-4 h-[26rem] overflow-auto">
              {item.story}
            </p>
            <img src={item.image} className="py-4" />
            <p className="text-[#7F3F97] font-semibold">{item.name}</p>
            <p>{item.designation}</p>
          </div>
        ))}
      </div>
    </div>
  )
})

export default BusinessAchieve
