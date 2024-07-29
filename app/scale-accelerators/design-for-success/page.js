import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import RelatedResources from "@/components/RelatedResources/RelatedResources"
import ScaleAccelerators from "@/components/ScaleAccelerators/ScaleAccelerators"
import Tab from "@/components/Tab/Tab"
import { notableProjectsData } from "@/utils/data"
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
    tab: "Design Initiatives",
    link: "designInitiatives",
  },

  {
    id: 3,
    tab: "Related Resources",
    link: "relatedResources",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/scaleAccelerators/designForSuccess/banner.png')] h-[420px] md:h-[640px] bg-center bg-cover pt-5 flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="md:ps-24 flex justify-center md:justify-start mt-14 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Design for Success
          </h1>
        </div>
        <div className="md:ps-24 flex justify-center md:justify-start items-end h-full">
          <div className="flex justify-center items-center">
            <Image
              src="/scaleAccelerators/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}

      <div className="max-w-screen-xl mx-auto my-5 md:my-16 px-5">
        <div className="mb-5">
          <h2 className="text-cms-primary-black text-lg md:text-xl w-full md:w-4/5">
            The Design for Success team at Catalyst Management Services
            specialises in human-centric design, seamlessly blending agile
            methods with strategic planning to create impactful solutions for
            societal issues. They specialise in designing programs, networks,
            and theories of change to address complex challenges.
          </h2>
        </div>
      </div>

      <div className="bg-cms-primary">
        <div className="max-w-screen-xl mx-auto px-5 md:px-20 flex flex-col gap-5 items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white text-2xl md:text-3xl font-semibold text-center">
              Design for Success Objectives
            </h3>
            <div className="border-b border-cms-primary-green w-16 md:w-20" />
          </div>
          <ul className="flex flex-col gap-5 text-white w-full md:w-10/12">
            {notableProjectsData.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`${
                    notableProjectsData.length !== index + 1
                      ? "border-b border-dashed"
                      : ""
                  } pb-4`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <Image src={item.iconUrl} width={168} height={74} alt="" />
                    <p className="text-base md:text-lg text-center md:text-left">
                      {item.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-5 md:my-16 px-5">
        <div className="mb-5 space-y-5">
          <p className="text-cms-primary-black text-base md:text-lg">
            Driven by our commitment to innovation, every initiative undergoes
            continuous learning and refinement. We collaborate closely with
            partners and communities, co-creating purpose-driven solutions that
            empower and transform. We aim to shape a future where innovation
            catalyzes enduring impact, ensuring each project contributes
            meaningfully to positive change.
          </p>

          <p className="text-cms-primary-black text-base md:text-lg">
            Connect with us to transform your ideas into a tailored roadmap for
            impactful change, develop prototypes for real-world testing, or
            design strategic shifts to enhance the impact of your programs. Your
            vision is our priority!
          </p>
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
