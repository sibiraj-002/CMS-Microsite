'use client'

import { globalImpact } from '../../utils/data'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'

// Custom format function for Indian numbering system
const formatIndianNumber = (value) => {
  return value.toLocaleString('en-IN') + '+'
}

const Snapshot = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:mb-16 mb-10">
      <div className="text-center lg:w-[80%] py-4 p-6 pt-8">
        <p className="text-lg font-regular" data-aos="fade-down">
          In a world where the impact of our actions resonate far beyond
          immediate boundaries, the need for comprehensive sustainability
          practices becomes crucial. We understand that it’s no longer
          sufficient for organisations to focus solely on direct controls within
          their operations. True sustainability requires a holistic approach,
          extending responsible business practices throughout the entire value
          chain. This can be achieved by implementing changes in policy and
          practice that focus on people, the planet, and sustainable outcomes.
        </p>
      </div>

      <h2
        className="text-ce-purple lg:text-3xl text-xl pt-6"
        data-aos="fade-up"
      >
        Our Global Impact
      </h2>
      <div className="border-2 border-ce-purple w-20 mb-2" />
      <ul className="grid lg:grid-cols-3 grid-cols-2 justify-center lg:gap-6 gap-2 mt-0 p-4 lg:p-0">
        {globalImpact.map((item) => {
          return (
            <li
              key={item.id}
              className="border-b-8 border-b-ce-purple rounded-lg"
              data-aos="zoom-out-up"
            >
              <div className="flex flex-col items-center lg:gap-2 gap-1 p-5 rounded-lg lg:w-[280px] lg:h-[260px] h-[220px] bg-[#F8F2FC] w-full">
                <div className="flex-grow-0">
                  <Image
                    src={item.icon}
                    width={70}
                    height={70}
                    alt=""
                    className="lg:h-[70px] h-[50px]"
                  />
                </div>
                <div className="border-b border-black border-dashed w-full my-3" />
                <h3 className="text-ce-purple lg:text-5xl font-bold text-3xl">
                  <CountUp
                    end={parseInt(item.count)}
                    duration={2.5}
                    suffix="+"
                    formattingFn={formatIndianNumber}
                  />
                </h3>
                <p className="text-[#5C5C5C] lg:text-xl text-center text-sm">
                  {item.title}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="text-center lg:w-7/12 lg:py-12 p-6 lg:p-0">
        <h2
          className="text-ce-purple lg:text-3xl lg:py-6 py-4 text-xl"
          data-aos="fade-down"
        >
          Building a Sustainable Future
        </h2>
        <p className="text-lg font-regular" data-aos="fade-up">
          We aim to make sustainability integral to business operations,
          fostering environments where transparency, accountability, and ethical
          sourcing lead to equitable growth and resilience in the economy.
        </p>
      </div>
    </div>
  )
}

export default Snapshot
