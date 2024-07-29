import { incubateesData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Incubatees = () => {
  return (
    <>
      {/* <div className="flex flex-col gap-4 mb-5">
        <h1 className="text-[#171717] text-4xl">Incubatees</h1>
        <p className="text-[#4E4E4E] text-lg">
          Some of our incubated ideas have become full-fledged organisations,
          which operate as our sister <br /> organisations, but have grown to be
          significant development players in their own right.
        </p>
      </div> */}
      <ul className="flex flex-col gap-10 my-14">
        {incubateesData.map((item) => {
          return (
            <li key={item.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className={`${item.id % 2 === 0 ? "md:order-1" : ""}`}>
                  <div className="relative">
                    <Image
                      src={item.imageUrl}
                      height={340}
                      width={460}
                      alt=""
                      className="w-full md:w-auto hidden md:block"
                    />
                    <Image
                      src={item.mobImageUrl}
                      height={328}
                      width={279}
                      alt=""
                      className="w-full md:w-auto block md:hidden"
                    />
                    {/* <div
                      className={`absolute ${
                        item.id % 2 === 0 ? "md:-left-20" : "md:-right-20"
                      } top-1/4 h-40 w-40 flex justify-center items-center shadow bg-white`}
                    >
                      <Image
                        src={item.logoUrl}
                        width={125}
                        height={30}
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
                <div className="flex flex-col items-start gap-5 w-full md:w-[400px] mt-5 md:mt-0 px-3">
                  <p className="text-lg text-[#646464]">
                    <span
                      className="font-semibold"
                      style={{ color: item.titleColor }}
                    >
                      {item.title}
                    </span>{" "}
                    {item.desc}
                  </p>
                  <Link href={item.websiteUrl} target="_blank">
                    <button className="border border-cms-primary text-cms-primary text-lg px-6 py-2">
                      Visit website
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Incubatees
