'use client'
import React, { useRef } from 'react'
import Link from 'next/link'

export default function page({ onClick }) {
  return (
    <div className="bg-cms-primary-green z-50">
      <div className="flex justify-between relative lg:w-10/12 mx-auto">
        <div className="top-0 absolute ">
          <Link href="/business-catalyst">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/logo.png"
              className="w-8/12 lg:w-full"
              data-aos="fade-up"
            />
          </Link>
        </div>
        <div></div>
        <div className="right-0 lg:p-6 flex gap-4 py-4 justify-center items-center">
          <p className="lg:text-xl text-white cursor-pointer" onClick={onClick}>
            Success Stories
          </p>
          <Link
            href="/business-catalyst-contact"
            className="bg-white lg:py-2 lg:px-8 py-2 px-6 lg:rounded-full lg:text-xl rounded-lg"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  )
}
