import AdvisorsTeam from "@/components/AboutUs/AdvisorsTeam/AdvisorsTeam"
import Tab from "@/components/AboutUs/Tab/Tab"
import Team from "@/components/AboutUs/Team/Team"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Image from "next/image"
import React from "react"

const page = () => {
  const desc =
    "Our team consists of dedicated mentors, impact specialists, and business experts. Meet the dedicated team at CMS, blending deep industry knowledge with a relentless pursuit of positive social change."
  return (
    <>
      <div className="bg-[url('/banner/banner02.png')] h-[420px] md:h-[480px] w-full bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Our Team
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

      <Tab heading="Change Makers in Action" desc={desc} />

      <div>
        <div className="max-w-screen-xl mx-auto">
          <Team />
        </div>
      </div>

      <div className="mb-10">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between md:my-5 px-5 md:px-0">
          <div className="flex flex-col gap-5 mb-5 lg:mb-0">
            <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl font-semibold">
              Advisors
            </h1>
            <div className="border border-[#707070] w-60" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-24">
        <AdvisorsTeam />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
