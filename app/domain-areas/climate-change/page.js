import CatalystGroup from "@/components/DomainAreas/ClimateChange/CatalystGroup/CatalystGroup"
import HowDoWeWork from "@/components/DomainAreas/ClimateChange/HowDoWeWork/HowDoWeWork"
import OurApproach from "@/components/DomainAreas/ClimateChange/OurApproach/OurApproach"
import ThreeSectors01 from "@/components/DomainAreas/ClimateChange/ThreeSectors01/ThreeSectors01"
import ThreeSectors02 from "@/components/DomainAreas/ClimateChange/ThreeSectors02/ThreeSectors02"
import ThreeSectors03 from "@/components/DomainAreas/ClimateChange/ThreeSectors03/ThreeSectors03"

import Overview from "@/components/DomainAreas/Overview/Overview"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import RelatedResources from "@/components/RelatedResources/RelatedResources"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "overview",
  },
  {
    id: 2,
    tab: "Our Expertise",
    link: "ourExpertise",
  },
  {
    id: 3,
    tab: "Our Approach",
    link: "ourApproach",
  },
  {
    id: 4,
    tab: "How We Work",
    link: "howDoWeWork",
  },
  {
    id: 5,
    tab: "Sectors",
    link: "sectors",
  },
  {
    id: 6,
    tab: "Related Resources",
    link: "relatedResources",
  },
]

const page = () => {
  const overviewDesc =
    "At the Catalyst Group, our Climate Practice integrates closely with our Health and Livelihood practice areas to further our vision of creating “a thriving world powered by resilient communities and carbon-neutral systems.” We believe that we need to bridge systemic gaps in climate ecosystems and promote people-centric models at scale. We are committed to leveraging our three decades of experience, expertise, and relationships working for and with vulnerable communities like small and marginal farmers, sex workers, street vendors, etc."
  return (
    <>
      {/* <div className="bg-[url('/domainAreas/climate/banner.png')] bg-cover h-[600px]">
        <div className="max-w-screen-xl mx-auto flex items-end h-full">
          <div className="flex justify-center items-center h-44 w-64 bg-white">
            <Image
              src="/domainAreas/climate/logo.png"
              height={256}
              width={170}
              alt="logo"
              className="w-full"
            />
          </div>
        </div>
      </div> */}

      <div className="bg-[url('/domainAreas/climate/banner.png')] h-[420px] md:h-[640px] bg-center bg-cover pt-5 flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="md:ps-24 flex justify-center md:justify-start items-end h-full">
          <div className="flex justify-center items-center h-40 w-44  md:h-44 md:w-64 bg-white">
            <Image
              src="/domainAreas/climate/logo.png"
              height={256}
              width={170}
              alt="logo"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}
      <Overview desc={overviewDesc} />
      <CatalystGroup />
      <OurApproach />
      <div>
        <Image
          src="/domainAreas/climate/banner01.png"
          width={1366}
          height={420}
          alt=""
          className="w-full"
        />
      </div>
      <HowDoWeWork />

      <ThreeSectors01 />

      <div className="bg-cms-secondary-green">
        <ThreeSectors02 />
        <ThreeSectors03 />
      </div>
      <RelatedResources />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
