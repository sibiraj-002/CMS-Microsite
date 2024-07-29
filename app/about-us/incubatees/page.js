import Incubatees from "@/components/AboutUs/Incubatees/Incubatees"
import Tab from "@/components/AboutUs/Tab/Tab"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Image from "next/image"
import React from "react"

const page = () => {
  const desc =
    "Some of our incubated ideas have become full-fledged organisations, which operate as our sister organisations, but have grown to be significant development players in their own right."
  return (
    <>
      <div className="bg-[url('/banner/banner03.png')] h-[420px] md:h-[480px] w-full bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Incubatees
          </h1>
        </div>
      </div>

      {/* <div className="text-center flex flex-col items-center gap-3 mb-10">
        <p className="text-cms-primary-black text-lg">About CMS</p>
        <h2 className="text-cms-primary-black text-2xl">
          We create an impact that is transformational, <br /> driving
          sustainable and scalable equity.
        </h2>
      </div> */}

      <Tab heading="Incubation to Impact" desc={desc} />

      <div>
        <div className="max-w-screen-xl mx-auto">
          <Incubatees />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
