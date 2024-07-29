import { domainAreasData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const DomainAreas = () => {
  return (
    <ul className="flex flex-col gap-8 sm:gap-16 my-10 sm:my-14">
      {domainAreasData.map((item) => {
        return (
          <li key={item.id} id={item.link}>
            <div
              className={`flex flex-col sm:flex-row justify-between items-center w-full sm:w-11/12 ${
                item.id % 2 === 0 ? "sm:ms-auto" : ""
              }`}
            >
              <div
                className={`w-full sm:w-auto ${
                  item.id % 2 === 0 ? "sm:order-1" : ""
                }`}
              >
                <div className="relative hidden md:block">
                  <Image src={item.imageUrl} height={400} width={600} alt="" />
                  {/* <div
                    className={`absolute ${
                      item.id % 2 === 0 ? "-left-16" : "-right-16"
                    } top-1/2 bottom-1/2 flex justify-center items-center shadow bg-white`}
                  >
                    <Image src={item.logoUrl} width={125} height={30} alt="" />
                  </div> */}
                </div>
                <div className="block md:hidden">
                  <Image
                    src={item.mobImageUrl}
                    width={600}
                    height={400}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-5 w-full sm:w-[500px] mt-6 sm:mt-0 px-3 md:px-0">
                <h2 className="text-2xl sm:text-3xl text-cms-primary-black font-semibold">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg text-[#646464]">
                  {item.desc}
                </p>
                <Link href={item.path}>
                  <button className="border border-cms-primary bg-cms-primary text-white text-base sm:text-lg rounded px-4 sm:px-6 py-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default DomainAreas
