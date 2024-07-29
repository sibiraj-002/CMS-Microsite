import Mission from "@/components/AboutUs/Mission/Mission"
import Tab from "@/components/AboutUs/Tab/Tab"
import Investment from "@/components/AboutUs/Vision/Investment/Investment"
import Values from "@/components/AboutUs/Vision/Values/Values"
import Vision from "@/components/AboutUs/Vision/Vision"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Image from "next/image"
import React from "react"

const page = () => {
  const desc =
    "A future where holistic and well-orchestrated partnerships and investments create an impact that is transformational, driving sustainable and scalable equity."
  return (
    <>
      <div className="bg-[url('/banner/banner01.png')] h-[420px] md:[720px] w-full bg-cover bg-center py-2 md:py-5 sm:h-[500px] md:h-[600px] lg:h-[720px]">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            We create an impact <br /> that is transformational, driving <br />{" "}
            sustainable and scalable equity
          </h1>
        </div>
      </div>

      {/* <div className="text-center flex flex-col items-center gap-3 mb-10">
        <h3 className="text-cms-primary-black text-lg">About CMS</h3>
        <h2 className="text-cms-primary-black text-3xl">
          We create an impact that is transformational, <br /> driving
          sustainable and scalable equity.
        </h2>
      </div> */}

      <Tab heading="Vision" desc={desc} />

      <div className="my-10 md:my-16">
        {/* <div className="max-w-screen-xl mx-auto">
          <Vision />
        </div> */}
        <Mission />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <Investment />
      </div>

      <div>
        <Values />
      </div>

      <div className="mb-16 px-5">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between my-5 gap-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#171717] text-2xl lg:text-3xl">
              Working with CMS
            </h1>
            <div className="border border-cms-secondary-green w-48 lg:w-80" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-[#4E4E4E] text-lg lg:text-2xl">
              Our on-ground experience and understanding help us partner with
              multi-disciplinary teams to tackle complex challenges and maximise
              social returns.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-5 mt-10">
          <div className="flex flex-col gap-10 py-12 w-full border border-cms-primary">
            <h2 className="text-cms-primary text-2xl lg:text-3xl text-center">
              We are committed to forging transformative partnerships{" "}
              <br className="hidden md:block" /> to invest in equity
            </h2>
            <p className="text-base lg:text-lg text-[#4E4E4E] text-center">
              Established in 1994, CMS, based in India, works in 25 other
              countries, exporting India’s social development{" "}
              <br className="hidden md:block" /> capacities and bringing back
              learning and goodwill. We are part of the Catalyst Group.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
