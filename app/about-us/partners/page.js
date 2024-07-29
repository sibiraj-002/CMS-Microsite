import Partners from "@/components/AboutUs/Partners/Partners"
import Tab from "@/components/AboutUs/Tab/Tab"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import HomePartners from "@/components/Home/HomePartners/HomePartners"
import Image from "next/image"
import React from "react"

const page = () => {
  const desc =
    "Over the last two decades, we have worked with a range of stakeholders, like CSOs, banks, corporate foundations, academic institutions, funding agencies, community organisations, multilateral and bilateral agencies, networks, governments, and non-profits."
  return (
    <>
      <div className="bg-[url('/banner/banner04.png')] h-[420px] md:h-[480px] w-full bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Partners
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

      <Tab heading="Collaborating for Change" desc={desc} />

      {/* <div className="hidden md:block">
        <Partners />
      </div> */}

      <div>
        <HomePartners />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
