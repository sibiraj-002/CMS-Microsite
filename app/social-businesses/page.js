import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import SocialBusinesses from "@/components/SocialBusinesses/SocialBusinesses"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Catalyst Livelihood Ventures",
    link: "catalystLivelihoodVentures",
  },
  // {
  //   id: 2,
  //   tab: "G1",
  //   link: "g1",
  // },
  {
    id: 3,
    tab: "Business Catalyst",
    link: "businessCatalyst",
  },
  {
    id: 4,
    tab: "Shoonya",
    link: "shoonya",
  },
  {
    id: 5,
    tab: "SHIP",
    link: "ship",
  },
]

const page = () => {
  return (
    <>
      {/* <div className="">
        <Image
          src="/socialBusinesses/banner.png"
          width={1366}
          height={340}
          className="w-full"
        />
      </div> */}

      <div className="bg-[url('/socialBusinesses/banner.png')] h-[420px] md:h-[480px] bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Social Businesses
          </h1>
        </div>
      </div>

      <div className="">
        <Tab tabs={tabs} />
      </div>

      <div className="py-10 md:py-16">
        <div className="text-center md:mb-5 px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-cms-primary-black text-base sm:text-lg md:text-xl">
            Many ideas incubated by our team have evolved into full-fledged
            organisations, <br className="hidden sm:block" /> each becoming a
            significant player in the development sector.
          </h2>
        </div>

        <div className="">
          <SocialBusinesses />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
