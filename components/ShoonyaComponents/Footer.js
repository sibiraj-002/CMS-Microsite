import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=" flex justify-center bg-[#7F3F97] p-4 lg:p-6 ">
        <div className="lg:w-[1140px] flex lg:flex-row flex-col justify-center lg:items-center lg:gap-4 gap-1 text-white w-full ">
          <p className="text-white">For more details contact:</p>
          <div className="flex items-center gap-3">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/phone.svg"
              className="lg:w-auto w-5"
            />
            <Link
              href="tel:+919590245050"
              target="_blank"
              className="text-white"
            >
              +91 9590 245 050
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/email.svg"
              className="lg:w-auto w-5"
            />
            <Link
              href="mailto:vishrut@catalysts.org"
              target="_blank"
              className="text-white"
            >
              vishrut@catalysts.org
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
