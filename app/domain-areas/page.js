import DomainAreas from "@/components/DomainAreas/DomainAreas"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Livelihood",
    link: "livelihood",
  },
  {
    id: 2,
    tab: "Health",
    link: "health",
  },
  {
    id: 3,
    tab: "Climate Change",
    link: "climateChange",
  },
  {
    id: 4,
    tab: "Wellbeing for Workforce",
    link: "workforceWellbeing",
  },
  {
    id: 5,
    tab: "ESG",
    link: "esg",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/domainAreas/banner.png')] h-[420px] md:h-[480px] w-full bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Domain Areas
          </h1>
        </div>
      </div>

      <div className="mb-10">
        <Tab tabs={tabs} />
      </div>

      <div className="text-center mb-5">
        <h2 className="text-cms-primary-black text-lg md:text-2xl">
          We have extensive experience in supporting enterprises, vulnerable
          communities <br className="hidden md:block" /> with healthcare, and
          first-mile workers with their wellbeing.
        </h2>
      </div>

      <div className="">
        <DomainAreas />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
