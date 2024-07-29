import Ethos from "@/components/DomainAreas/Livelihood/Ethos/Ethos"
import OurApproaches from "@/components/DomainAreas/Livelihood/OurApproaches/OurApproaches"
import Overview from "@/components/DomainAreas/Overview/Overview"
import WeWork from "@/components/DomainAreas/Livelihood/WeWork/WeWork"
import Image from "next/image"
import React from "react"
import Tab from "@/components/Tab/Tab"
import Header from "@/components/Header/Header"
import RelatedResources from "@/components/RelatedResources/RelatedResources"
import InvestingForImpact from "@/components/DomainAreas/Livelihood/InvestingForImpact/InvestingForImpact"
import Footer from "@/components/Footer/Footer"

export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "overview",
  },
  {
    id: 2,
    tab: "Our Ethos",
    link: "ourEthos",
  },
  {
    id: 3,
    tab: "Our Approaches",
    link: "ourApproaches",
  },
  {
    id: 4,
    tab: "How We Work",
    link: "howDoWeWork",
  },
  {
    id: 5,
    tab: "Investing for Impact",
    link: "investingForImpact",
  },
  {
    id: 6,
    tab: "Related Resources",
    link: "relatedResources",
  },
]

const page = () => {
  const overviewDesc =
    "We work with vulnerable people who operate as small producers (farms, forests, allied industries, fisheries and MSMEs) to enhance their livelihoods. Our overall objective is to promote wealthy, resilient and responsible small producers at a national scale through inclusive entrepreneurship. Our approach to build wealth for small producers focuses on having effective market engagement and co-creating business solutions that benefit both businesses and small producers."
  return (
    <>
      <div className="bg-[url('/domainAreas/livelihood/banner.png')] h-[420px] md:h-[640px] bg-cover bg-center pt-5 flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="md:ps-24 flex justify-center md:justify-start items-end h-full">
          <div className="flex justify-center items-center h-40 w-44  md:h-44 md:w-64 bg-white">
            <Image
              src="/domainAreas/livelihood/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}
      <Overview desc={overviewDesc} />
      <Ethos />
      <OurApproaches />
      <WeWork />

      <div className="w-full">
        <Image
          src="/domainAreas/livelihood/banner02.png"
          width={1366}
          height={360}
          alt="banner"
          className="w-full"
        />
      </div>

      <InvestingForImpact />

      <div className="max-w-screen-xl mx-auto my-5 md:my-16">
        <div className="flex flex-col gap-6 px-4">
          <p className="text-[#404040] text-lg w-full md:w-10/12">
            We work towards the holistic development of small producers and to
            pave the way to a brighter future. All of our work is geared towards
            achieving the UN SDGs, specifically Goals 1, 2, 5, 10, 11, and 17.
          </p>
          <Image
            src="/domainAreas/livelihood/sdg.png"
            width={720}
            height={122}
            alt=""
          />
          {/* <p className="text-[#404040] text-lg">
            To learn more about the work we do, contact us at:
          </p>
          <button className="bg-cms-primary px-6 py-3 text-white self-start">
            contactus@catalysts.org
          </button> */}
        </div>
      </div>

      <RelatedResources />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
