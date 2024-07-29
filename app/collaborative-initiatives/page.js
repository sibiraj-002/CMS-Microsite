import CollaborativeInitiatives from "@/components/CollaborativeInitiatives/CollaborativeInitiatives"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Community Action Collab",
    link: "communityActionCollab",
  },
  {
    id: 2,
    tab: "Catalysing Social Impact (CSI)",
    link: "catalysingSocialImpact",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/collaborativeInitiatives/banner.png')] h-[420px] md:h-[480px] bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Collaborative Initiatives
          </h1>
        </div>
      </div>

      <div className="">
        <Tab tabs={tabs} />
      </div>

      <div className="py-10 md:py-16">
        <div className="text-center md:mb-5 px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-cms-primary-black text-base sm:text-lg md:text-xl">
            CMS is committed to aiding vulnerable communities through targeted
            initiatives that enhance access to essential services and{" "}
            <br className="hidden md:block" /> foster sustainable development.
            Their efforts ensure that support reaches those who need it most,
            promoting social equity and inclusion.
          </h2>
        </div>

        <div className="">
          <CollaborativeInitiatives />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
