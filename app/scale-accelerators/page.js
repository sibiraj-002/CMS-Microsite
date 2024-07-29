import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import ScaleAccelerators from "@/components/ScaleAccelerators/ScaleAccelerators"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Design for Success",
    link: "designForSuccess",
  },
  {
    id: 2,
    tab: "Evidence for Change",
    link: "evidenceForChange",
  },
  {
    id: 3,
    tab: "Implement for Scale",
    link: "implementForScale",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/scaleAccelerators/banner.png')] h-[420px] md:h-[480px] bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Scale Accelerators
          </h1>
        </div>
      </div>

      <div className="mb-10 md:mb-16">
        <Tab tabs={tabs} />
      </div>

      <div className="">
        <div className="text-center mb-5 px-4 sm:px-6 lg:px-8">
          <h2 className="text-cms-primary-black text-lg sm:text-xl md:text-2xl">
            Collaborate with change agents to drive impactful, scalable, and{" "}
            <br className="hidden md:block" />
            sustainable development. We address complex issues with integrated
            solutions, <br className="hidden md:block" /> fostering partnerships
            that enhance social equity and growth.
          </h2>
        </div>

        <div className="">
          <ScaleAccelerators />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
